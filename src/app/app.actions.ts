import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable({
    providedIn: 'root'
  })
export class ManagementApplicationActions {
  static MANAGE = 'MANAGE';
  static DONE = 'DONE';
  static SUBMIT = 'SUBMIT';

  manage(job: {_id: string, title: string }): ApplicationAction {
    return { type: ManagementApplicationActions.MANAGE, job: job };
  }

  done(): ApplicationAction {
    return { type: ManagementApplicationActions.DONE, job: null }
  }
  
  submit(): ApplicationAction {
    return { type: ManagementApplicationActions.SUBMIT, job: null }
  }
}

export interface ApplicationAction extends Action { 
    [job: string]: any
}
