// hooks
import { useState } from "react"

// third party 
import classNames from "classnames";

// local imports
import { ServerImageI } from "./type"
import { imageKitUrl } from "../../constants/imagekit";
import Loading from "../Loading";
import style from "./style.module.scss";


const ServerImage: React.FC<ServerImageI> = (props) => {
    
    // to see loading gif, div that contains ServerImage should have min-width or width specified
    const [ loading, setLoading ] = useState(true);
    const imageURL = `${imageKitUrl}/blog-images/${props.imageName}`;
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
                src={imageURL}>
            </img>
        </>
    )
}

export default ServerImage