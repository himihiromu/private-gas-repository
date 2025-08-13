import { writeEditHistory } from "./edit-history";
import { getRollupBundleYoSheetOnChangeEventObject } from "~/shared/src/shared"

const temp: unknown = Boolean(0);

if (temp) {
  writeEditHistory(getRollupBundleYoSheetOnChangeEventObject());
}
