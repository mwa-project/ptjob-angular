import { Action } from "redux";
import { ManagementApplicationActions, ApplicationAction } from "./app.actions";

export interface IAppState {
    processingJob: { _id: string, title: string };
}

export const INITIAL_STATE: IAppState = {
    processingJob: null,
};

export function rootReducer(lastState: IAppState, action: ApplicationAction): IAppState {
    switch (action.type) {
        case ManagementApplicationActions.MANAGE:
            return { processingJob: action.job };
        case ManagementApplicationActions.DONE:
            return { processingJob: null }
    }
    return lastState;
}