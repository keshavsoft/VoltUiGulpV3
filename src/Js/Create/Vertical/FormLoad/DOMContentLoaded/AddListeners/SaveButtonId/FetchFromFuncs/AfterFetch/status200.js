import UrlJson from './url.json' with { type: 'json' };

const StartFunc = ({ inRowPk }) => {
    window.location.href = `${UrlJson.RedirectToUrl}?inRowPk=${inRowPk}`;
};

export { StartFunc };
