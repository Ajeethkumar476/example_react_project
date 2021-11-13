import { CHANGE_JOB_NAME, CHANGE_JOB_TYPE } from "./JobActions"

const INITIAL_STATE = {
  job_name: 'Developer',
  job_type: "Day Shift",
}

function reducers(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CHANGE_JOB_NAME:
      return {
        ...state,
        job_name: action.name
      }
    case CHANGE_JOB_TYPE:
      return {
        ...state,
        job_type: action.job_type
      }
    default:
      return {...state}
  }
}

export default reducers;