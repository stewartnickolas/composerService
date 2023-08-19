import React from 'react'
import FormStore from '../data/formStore.js'
import StudyStore from '../data/studyStore.js'
import Actions from '../data/actions.js'
import API from '../data/api.js'
import InitialState from '../__mocks__/initialState.js'
//import {JSDOM} from 'jsdom'

describe('Adding and Removing', () => {

    document.body.innerHTML = '<span id="composerErrors"></span>';

    let studyStore = new StudyStore();
    let formStore = new FormStore();

    global._lastFetchTime = 0;
    global._viewOnlyMode = false;

    beforeEach(() => {
      document.body.innerHTML = '<span id="composerErrors"></span>';
      fetch.resetMocks();
    })

    it('should load studies from JSON data', () => {

        fetch.mockResponses(
            [JSON.stringify(InitialState.studyData), {status: 200}],
            [JSON.stringify(InitialState.patientFormData), {status: 200}]
        );
        
        const loadStudy = new Promise(resolve => API.loadStudy(studyStore, formStore, 'Composer_Animal', false, resolve));
        return loadStudy.then(() => {
            expect(studyStore.studyData.name).toBe(InitialState.studyData.name);
            expect(studyStore.studyData.id).toBe(InitialState.studyData.id);
            expect(studyStore.studyData.views.length).toBe(2);
            expect(studyStore.currentView.id).toBe('patient');
        });
        
    })

    it('Should allow for the creation of new form groups', () => {
        fetch.mockResponses(
            [JSON.stringify(InitialState.newGroup), {status: 200}]
        );
        expect(studyStore.currentView.groups.length).toBe(1);
        const addGroup = new Promise(resolve =>Actions.addGroup(InitialState.newGroup, resolve));
        return addGroup.then(() => {
            expect(studyStore.currentView.groups.length).toBe(2);
            expect(studyStore.currentGroup.id).toBe('group_01');
        });
    })
})

