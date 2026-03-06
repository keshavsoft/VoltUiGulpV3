import UrlJson from './url.json' with { type: 'json' };

const StartFunc = ({ inRowPk }) => {
    window.location.href = `${UrlJson.RedirectToUrl}?inRowPk=${inRowPk}`;
};

const LocalFuncForSingleTable = ({ inRowPk }) => {
    if (window.location.pathname.endsWith(`/${UrlJson.PresentUrl}`)) {
        window.location.href = `${UrlJson.RedirectToUrl}?inRowPk=${inRowPk}`;
        return true;
    }
    return false;
};

const LocalFuncForAllTables = ({ inRowPk }) => {
    window.location.href = `${UrlJson.RedirectToUrl}?inRowPk=${inRowPk}`;
};

export { StartFunc };
