import { Nullable } from "./types";

export const unwrap = <T>(value: Nullable<T>): NonNullable<T> => {
  if(value === null || value === undefined){
    throw Error();
  }
  return value
}

export const getRollupBundleYoSheetOnChangeEventObject = (): GoogleAppsScript.Events.SheetsOnEdit => {
  return {
    oldValue: "",
    range: null,
    source: null,
    value: ""
  }
}