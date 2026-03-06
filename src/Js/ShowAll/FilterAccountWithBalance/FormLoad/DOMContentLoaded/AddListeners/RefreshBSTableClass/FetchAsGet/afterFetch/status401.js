import ConfigJson from "../../../../../../../../Config.json" with {type: 'json'};
import OptionsJson from "../../../../../../options.json" with {type: 'json'};

let StartFunc = ({ inResponse }) => {
    const jVarLocalPresentHtml = OptionsJson.PresentHtml;

    jFLocalAddUrlParams({ inSuccessUrl: jVarLocalPresentHtml });
};

const jFLocalAddUrlParams = ({ inSuccessUrl }) => {
    const jVarLocalRedirectUrl = ConfigJson.Protected.RedirectUrl;

    const url = new URL(window.location.href);

    let NewURl = new URL(jVarLocalRedirectUrl, url);

    NewURl.searchParams.append('SuccessUrl', inSuccessUrl);
    window.location.href = NewURl.href;
};


export { StartFunc };