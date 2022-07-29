// hooks
import { useState } from "react";

// local imports
import style from "./style.module.scss";

interface PreviewPictureI {
    propStyle: any,
    path: string,
    removeMe: () => void,
    removingClass: string
}

export const PreviewPicture: React.FC<PreviewPictureI> = (props) => {
    const { propStyle, path, removeMe, removingClass } = props;
    const [ isRemoving, setIsRemoving ] = useState<boolean>(false);
    const selfDestruction = () => {
        setIsRemoving(true);
        removeMe()
    }
    return (
        <div className={`
            ${style.wrapper}
            ${propStyle.wrapper}
            ${isRemoving ? removingClass : ""}
        `}>
            <img
                className={style.picture}
                src={path}
            />
            <button 
                type="button" 
                className={style["remove-btn"]}
                onClick={selfDestruction}
            >x</button>
        </div>
    )
}