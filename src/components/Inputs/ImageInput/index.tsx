// hooks
import { useState, useEffect } from "react"

// third-party 
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import ButtonClose from "../../Buttons/ButtonClose";
import { ImageInputI } from "./type";


const ImageInput: React.FC<ImageInputI> = (props) => {
    const [ isImageRemoving, setIsImageRemoving ] = useState<boolean>(false);
    const [ image, setImage ] = useState<File | null>(null);

    const addImage = (newImage: null | FileList) => {
        if(newImage) {
            setImage(newImage[0]);
            props.onChange(props.registerName, newImage[0]);
        }
    };
    const removeImage = () => {
        setIsImageRemoving(true);
        setTimeout(() => {
            // timer is to give a time for "removing" animation
            setIsImageRemoving(false);
            setImage(null);
        }, 1000);
        props.onChange(props.registerName, null);
    };

    return (
        <div className={classNames([
            style["wrapper"],
            style[`wrapper-${props.theme}`],
            props.containerSizes ? props.containerSizes : style["wrapper-default"]
        ])}>
            
            <input
                className={classNames([
                    style["file-input"],
                    image ? style["file-input-disabled"] : "",
                    "unselectable"
                ])}
                type="file" 
                accept=".png, .jpg, .jpeg, .gif"
                onChange={e => addImage(e.target.files)}
            />

            {!image && (
                <div className={classNames([
                    style["decor-svg"],
                    style[`decor-svg-${props.theme}`]
                ])}>
                    <svg width="91" height="91" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="35.5" width="90" height="20" rx="10"/>
                    <rect x="35.5" y="0.5" width="20" height="90" rx="10"/>
                    </svg>
                </div>
            )}

            {image && (
                <>
                    <img
                        className={classNames([
                            style["image-preview"],
                            isImageRemoving ? style["removing"] : ''
                        ])}
                        src={URL.createObjectURL(image)}
                    />
                    <ButtonClose
                        sizesClass={classNames([
                            style["remove-pic-btn"],
                            isImageRemoving ? style["removing"] : ''
                        ])}
                        theme="light"
                        type="circle"
                        onClick={removeImage}
                    />
                </>
            )}
        </div>
    )
}

export default ImageInput