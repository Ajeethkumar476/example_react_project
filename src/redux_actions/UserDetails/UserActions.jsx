export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_AGE = "CHANGE_AGE";
export const CHANGE_COUNTRY = "CHANGE_COUNTRY";


export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name: name
  }
}