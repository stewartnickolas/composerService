const dataLayer = require("./dataLayer")

/* *******************************************************************************
    * Null Row Patching
    */

/**
 * Identifies null rows among all sections and filters them out.
 * NOTE: THIS DOES NOT PERSIST THE PATCH TO THE DB, CALLERS
 *       ARE EXPECTED TO PERSIST TO THE DB IF SO DESIRED
 *
 * [Background]
 *
 * As of 2021-May-21 there have been two incidents where
 * null rows have been introduced. There has been no successful
 * reproduction of the introduction of these null rows. We
 * elect to patch the corrupted data as an intermediate measure.
 *
 * [Performance]
 *
 * The traversal through the data to identify
 * corrupted sections took <1ms in development testing, which is
 * additionally amortized by the traversals done by Jackson and
 * other processes in Composer that already traverse the full data
 * structure.
 *
 * The performance of actually correcting the corrupted sections
 * is not a concern, as it's only expended in the rare scenario
 * a null row is introduced, but was <2ms. Further, for any given
 * null row, the patch should only be necessary once.
 */
function patchNullRows(form) {
    const corruptedSections = [];
    (form.sections || []).forEach(section => {
        const rows = section.rows || [];
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (row === null) {
                corruptedSections.push(row);
                break;
            }
        }
    });
    if (corruptedSections.length > 0) {
        log.error(`Have corrupted sections in form: ${form.formLabel + " [" + form._id + "]"}`);
        corruptedSections.forEach(corruptedSection => {
            log.info("Filtering out null rows in section: " + corruptedSection.sectionLabel + " [" + corruptedSection.getId() + "]");
            const filteredRows = [];
            const nullIndices = [];
            const rows = corruptedSection.rows || [];
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                if (row == null) {
                    nullIndices.add(i);
                } else {
                    filteredRows.add(row);
                }
            }
            corruptedSection.rows = filteredRows;
            log.info("Null rows at indices: " + nullIndices);

        })
    }

    return corruptedSections.length > 0;
}


async function loadFormId(formId, formName) {
    const FormModel = await dataLayer.getModel("vision",dataLayer.model.ComposerForm);
    if (FormModel) {
        const form = await FormModel.findById(dataLayer.makeId(formId));
        if (form) {
            patchNullRows(form);
            return form;
        }
    }
    throw new Error(`${dataLayer.model.ComposerFor} not found`);
}
async function loadSnapshot(snapshotId) {
    const ComposerSnapshotModel = await dataLayer.getModel("vision",dataLayer.model.ComposerSnapshot);
    if (ComposerSnapshotModel) {
        const segments = snapshotId.split('_');
        if (segments.length === 2) {
            return ComposerSnapshotModel.findOne({
                parentId:segments[0],
                number:Number(segments[1])
            });
        }
    }
    throw new Error(`${dataLayer.model.ComposerSnapshot} not found`);
}

module.exports = {
    loadFormId,
    loadSnapshot
}