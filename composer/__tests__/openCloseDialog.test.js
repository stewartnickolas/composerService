import React from 'react'
import FormStore from '../data/formStore.js'
import Actions from '../data/actions.js'


describe("Open a Dialog", () => {
  document.body.innerHTML = '<span id="composerErrors"></span>';
  const formStore = new FormStore();
  Actions.formStore = formStore;
  it('Controls opening and closing of dialogs', () => {
    Actions.openDialog("dialogType", "dialogContents");
    expect(formStore.showDialog).toBe(true);
    Actions.closeDialog();
    expect(formStore.showDialog).toBe(false);
    expect(formStore.dialogType).toBe("dialogType");
  })
});