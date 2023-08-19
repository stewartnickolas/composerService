import {observable} from 'mobx'

/**
 * A mobx store that is used to implement copy/paste to clipboard 
 * of composer forms, sections, tables, and fields.
 * See <CopyableFieldWrapper> and <PasteableFieldWrapper> for an example
 * of its use
 */
export default class ClipboardStore {
    /**
     * A FormRef, SectionData, TableData, or FieldData object (see studyStore.js 
     * and formStore.js for details)
     */
    @observable content;
    /**
     * The id of the form that the copied element belongs to.
     * Used to determine if paste operation is occuring on same
     * form.
     */
    @observable parentFormId;

    constructor() {
        this.content = null;
        this.parentFormId = null;
    }

    /**
     * Copies content to clipboard
     * @param {FormRef, SectionData, TableData, FieldData, ConstraintData, or CalculationData object} content 
     */
    setContent(content) {
        this.content = content;
    }

    /**
     * Copies parentFormId to clipboard
     * @param {string} parentFormId the FormDataDoc.id of the parent form for
     * content
     */
    setParentFormId(parentFormId) {
        this.parentFormId = parentFormId;
    }
}