import "./CookieConsent.scss";
import {useEffect} from "react";
import setCookies from "../helpers/SetCookies";

export default function CookieConsent(){
    useEffect(function(){
        document.body.className = "modal--open";
    }, []);

    function allowAll(){
        var now = Date.now();
        var expires = new Date(now + 60 * 1000).toUTCString;
        var payload = {
            acceptnecessary:true,
            acceptanalytics:true
        };

        setCookies(payload);
        document.cookie = `landingpagedemo=${JSON.stringify(payload)}; expires=${expires}; path=/`;
        document.body.className = "";
        
        document.querySelector(".overlay").style.display = "none";
    };

    return(
      <div className="overlay">
            <section className="cookieConsentModal">
                <header className="cookieConsentModal__header">
                    <h1>Hvad bruger vi cookies til?</h1>
                </header>

                <article className="cookieConsentModal__content">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" id="cookie__necessary" disabled checked />
                                    <label htmlFor="cookie__necessary" className="consentToggle"></label>
                                </td>
                                <td>
                                    <p className="content__text">Tillad alle nødvendige cookies. Dette bla bla bla bla bla bla bla bla bla lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id="cookie__analytics" />
                                    <label className="consentToggle" htmlFor="cookie__analytics"></label>
                                </td>
                                <td>
                                    <p className="content__text">Tillad analytics. Dette bla bla bla bla bla bla bla bla bla tredjepartcookies bla bla bla bla google bla bla bla bla watching you bla bla bla bla you're never safe.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="content__buttons">
                        <button className="buttons__button">Tillad valgte</button>
                        <button className="buttons__button buttons__button--highlight" onClick={() => allowAll()}>Tillad alle</button>
                    </div>
                </article>
            </section>
      </div>  
    );
};