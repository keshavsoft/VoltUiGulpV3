let StartFunc = ({ inResponseAsJson, inTableName }) => {
    localStorage.setItem(inTableName, JSON.stringify(inResponseAsJson));
};

export { StartFunc };