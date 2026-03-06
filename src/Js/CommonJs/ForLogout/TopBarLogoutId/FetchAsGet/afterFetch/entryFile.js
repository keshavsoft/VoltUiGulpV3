let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = await inResponse;
    if(inResponse.status === 200){
        // console.log("hi");
        window.location.reload();
    }
};

export { StartFunc };