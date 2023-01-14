// hooks
import { useIsClicked } from "../../../hooks/useIsClicked";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

// third party
import classNames from "classnames";

// local imports
import { LanguageSwitchComponentI } from "./type";
import style from "./style.module.scss";
import { store } from "../../../redux/store";
import { changeLanguageCreator } from "../../../redux/action-creators/language";


export const LanguageSwitch: React.FC<LanguageSwitchComponentI> = (props) => {
    
    const { language } = useTypedSelector(state => state.language);
    const [ isClicked, setIsClicked ] = useIsClicked(500);

    const { className } = props;
    const wrapperClass = classNames([style.wrapper], "unselectable", className);
    const buttonClass = classNames([style.button, isClicked ? style["button--clicked"] : ""]);
    const russianFlagClass = classNames([style.flag, style["flag__russian"], language === "ru" ? style["flag--active"] : ""]);
    const usaFlagClass = classNames([style.flag, style["flag__usa"], language === "eng" ? style["flag--active"] : ""]);
    const arrowsClass = classNames([style.arrows, isClicked ? style["arrows--animated"] : ""]);
    const handleClick = () => {
        store.dispatch(changeLanguageCreator({
            language: language === "ru" ? "eng" : "ru"
        }))
        setIsClicked(true);
    }


    return (
        <div className={wrapperClass}>
            <svg className={arrowsClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.775 5.67515C18.2917 3.87515 16.425 2.72515 14.175 2.22515C13.8583 2.14182 13.5833 2.20849 13.35 2.42515C13.1167 2.64182 13 2.91682 13 3.25015C13 3.48349 13.075 3.69182 13.225 3.87515C13.375 4.05849 13.5667 4.17515 13.8 4.22515C15.5833 4.64182 17.0627 5.56249 18.238 6.98715C19.4127 8.41249 20 10.0835 20 12.0002C20 13.2668 19.7293 14.4335 19.188 15.5002C18.646 16.5668 17.9167 17.4752 17 18.2252V16.5002C17 16.2168 16.904 15.9792 16.712 15.7872C16.5207 15.5958 16.2833 15.5002 16 15.5002C15.7167 15.5002 15.4793 15.5958 15.288 15.7872C15.096 15.9792 15 16.2168 15 16.5002V20.5002C15 20.7835 15.096 21.0208 15.288 21.2122C15.4793 21.4042 15.7167 21.5002 16 21.5002H20C20.2833 21.5002 20.5207 21.4042 20.712 21.2122C20.904 21.0208 21 20.7835 21 20.5002C21 20.2168 20.904 19.9795 20.712 19.7882C20.5207 19.5962 20.2833 19.5002 20 19.5002H18.6C19.65 18.5835 20.479 17.4835 21.087 16.2002C21.6957 14.9168 22 13.5168 22 12.0002C22 9.58348 21.2583 7.47515 19.775 5.67515ZM4.225 18.3252C5.70833 20.1252 7.575 21.2752 9.825 21.7752C10.1417 21.8585 10.4167 21.7918 10.65 21.5752C10.8833 21.3585 11 21.0835 11 20.7502C11 20.5168 10.925 20.3085 10.775 20.1252C10.625 19.9418 10.4333 19.8252 10.2 19.7752C8.41667 19.3585 6.93767 18.4375 5.763 17.0122C4.58767 15.5875 4 13.9168 4 12.0002C4 10.7335 4.27067 9.56282 4.812 8.48815C5.354 7.41282 6.08333 6.50849 7 5.77515V7.50015C7 7.78349 7.09567 8.02115 7.287 8.21315C7.479 8.40449 7.71667 8.50015 8 8.50015C8.28333 8.50015 8.521 8.40449 8.713 8.21315C8.90433 8.02115 9 7.78349 9 7.50015V3.50015C9 3.21682 8.90433 2.97915 8.713 2.78715C8.521 2.59582 8.28333 2.50015 8 2.50015H4C3.71667 2.50015 3.47933 2.59582 3.288 2.78715C3.096 2.97915 3 3.21682 3 3.50015C3 3.78349 3.096 4.02082 3.288 4.21215C3.47933 4.40415 3.71667 4.50015 4 4.50015H5.4C4.35 5.41682 3.521 6.51682 2.913 7.80015C2.30433 9.08349 2 10.4835 2 12.0002C2 14.4168 2.74167 16.5252 4.225 18.3252Z"/>
            </svg>
            <button onClick={handleClick} className={buttonClass}>
                {language === "ru" ? 
                    "Switch language to english." :
                    "Сменить язык на русский."
                }
                </button>
            <div className={russianFlagClass}/>
            <div className={usaFlagClass}/>
        </div>
    )
}