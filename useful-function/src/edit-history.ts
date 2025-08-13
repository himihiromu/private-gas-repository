import { unwrap } from '~/shared/src/shared'

export const writeEditHistory = (e: GoogleAppsScript.Events.SheetsOnEdit) => {
  const spreadSheet = SpreadsheetApp.openById("1oIECW0-QPSjCxqibf_h1S6wW4xDUpcS2w7dPW_L6WZ8");
  const sheet = unwrap(spreadSheet.getSheetByName("変更履歴"));
  sheet.insertRowBefore(2);
  sheet.getRange(2, 1, 1, 5).setValues(
    [
      [e.source.getSheetName(), new Date(), e.range.getA1Notation(), e.oldValue, e.value]
    ]
  )
}