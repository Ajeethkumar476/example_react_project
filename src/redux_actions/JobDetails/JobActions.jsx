export const CHANGE_JOB_NAME = 'CHANGE_JOB_NAME';
export const CHANGE_JOB_TYPE = 'CHANGE_JOB_TYPE';


export const changeJobName = (name) => {
  return {
    type: CHANGE_JOB_NAME,
    name: name
  }
}