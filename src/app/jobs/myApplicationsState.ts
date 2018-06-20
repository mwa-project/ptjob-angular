
import { createStore, combineReducers } from 'redux';
import { rootReducer } from '../app.store';


export interface JobApplication {
    _id : String;
    job_id: string;
    job_name: String;
    posted_date: Date;
    applied_date: Date;
    status: String;
    start_date: Date;
    end_date: Date;
}


export interface ApplicationActionState {
    data : JobApplication[];
}

export const ADD_APPLICATION = 'ADD_APPLICATION';

export function AddApplicationAction( applicationData : JobApplication){
    return {
        type : ADD_APPLICATION,
        data : applicationData
    }
}

export const SET_APPLICATIONS = 'SET_APPLICATIONS';

export function SetApplicationActions( applicationData : JobApplication){
    return {
        type : SET_APPLICATIONS,
        data : applicationData
    }
}

const initialState : ApplicationActionState = {
    
    data  : []
}

function addApplication(state, action): ApplicationActionState {

    return Object.assign({}, state, { data :[...state.data, action.data] } );

}


function setApplications(state, action): ApplicationActionState {

    return Object.assign({}, state, { data :[...state.data, ...action.data] } );

}


export function reducer( state: ApplicationActionState = initialState, action){
    
    switch(action.type){
        case  ADD_APPLICATION :
        return addApplication(state,action);
        case  SET_APPLICATIONS :
        return setApplications(state,action);
        default :return state
    }
}

export const store = createStore(combineReducers( { applicationReducer: reducer, manageReducer: rootReducer} ));

