// hooks
import { useState } from "react"

// third party 
import classNames from "classnames";

// local imports
import { ServerImageI } from "./type"
import { serverURL } from "../../constants/server-url";
import Loading from "../Loading";
import style from "./style.module.scss";


const ServerImage: React.FC<ServerImageI> = (props) => {
    
    // to see loading gif, div that contains ServerImage should have min-width or width specified
    const [ loading, setLoading ] = useState(true);
    const imageExtension = props.imageName.split('.')[1];
    const isImageGif = imageExtension === "gif" ? true : false;
    const imageFolder = isImageGif || !props.compressed ?
        "images" : 
        "images-compressed";

    return (
        <>
            {loading && <Loading/>}
            <img 
                className={classNames([
                    loading ? style.loading : '',
                    props.className
                ])} 
                onLoad={() => {
                    setLoading(false);
                }}
                src={`${serverURL}/${imageFolder}/${props.imageName}`}>
            </img>
        </>
    )
}

export default ServerImage