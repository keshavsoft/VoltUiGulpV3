import { StartFunc as StartFuncForLogout } from "./ForLogout/entryFile.js";
import { StartFunc as StartFuncForUserShow } from "./ForUserShow/entryFie.js";
import { StartFunc as StartFuncForUserImage } from "./ForUserImage/entryFie.js";

const StartFunc = () => {
    StartFuncForLogout();
    StartFuncForUserShow();
    StartFuncForUserImage();
};

StartFunc();
