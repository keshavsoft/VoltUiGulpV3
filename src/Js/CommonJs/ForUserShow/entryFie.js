const StartFunc = () => {
    const userName = localStorage.getItem("UserName");
    if (!userName) return;

    const userNameElement = document.getElementById("TopBarUserId");
    if (!userNameElement) return;

    userNameElement.textContent = userName;
};

export { StartFunc };
