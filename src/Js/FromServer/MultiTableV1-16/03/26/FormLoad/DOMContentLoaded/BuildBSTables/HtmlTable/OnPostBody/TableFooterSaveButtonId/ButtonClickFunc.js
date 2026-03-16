import { StartFunc as FetchAsPost } from "./FetchAsPost/entryFile.js";

const StartFunc = (event) => {
    FetchAsPost(event);
};

export { StartFunc };