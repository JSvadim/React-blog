// hooks
import { useState } from "react";

// third party
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { ButtonLikeComponentI } from "./type";
import Loading from "../../Loading";


const ButtonLike: React.FC<ButtonLikeComponentI> = (props) => {

    const [ loading, setLoading ] = useState(false);
    const buttonClass = classNames([
        style.button, 
        style[`button--theme-${props.theme}`], 
        loading ? style["button--loading"] : ""]);

    const innerContent = props.isLiked ? 
    (<p className={style["remove-like"]}>UNLIKE! :(</p>) :
    (<div className={style["add-like"]}>
        <svg 
        className={style["add-like__heart"]}
        width="25" 
        height="25" 
        viewBox="0 0 25 25" 
        xmlns="http://www.w3.org/2000/svg">
            <g id="heart 1">
            <g id="redheart">
            <g id="use10">
            <path id="use3" d="M12.5 6.25C12.5 4.5924 11.8415 3.00269 10.6694 1.83058C9.49731 0.65848 7.9076 0 6.25 0C4.5924 0 3.00268 0.65848 1.83058 1.83058C0.658481 3.00269 0 4.5924 0 6.25C0 12.5 11.25 16.25 12.5 23.75"/>
            <path id="use5" d="M12.5 6.25C12.5 4.5924 13.1585 3.00269 14.3306 1.83058C15.5027 0.65848 17.0924 0 18.75 0C20.4076 0 21.9973 0.65848 23.1694 1.83058C24.3415 3.00269 25 4.5924 25 6.25C25 12.5 13.75 16.25 12.5 23.75"/>
            </g>
            </g>
            </g>
        </svg>
        <p className={style["add-like__text"]}>LIKE!</p>
    </div>);

    const handleClick = () => {
        if(loading) return
        setLoading(true);
    }


    return (
        <div className={props.className}>
            <button 
            className={buttonClass} 
            onClick={handleClick}
            tabIndex={loading ? -1 : 0}
            type="button">
                {loading && <Loading/>}
                {innerContent}
            </button>
        </div>
    )
}

export default ButtonLike