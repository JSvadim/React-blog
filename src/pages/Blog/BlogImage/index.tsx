// local imports
import style from "./style.module.scss";
import { BlogImagePropsI } from "./type";
import loadingGif from "../../../assets/images/loading.gif"
import { useEffect } from "react";
import { FileService } from "../../../services/file-service";

const BlogImage: React.FC<BlogImagePropsI> = (props) => {
    let image = loadingGif
    useEffect(() => {
        const getImage = async () => {
            image = await (await FileService.getStaticFile('images', props.pictureName)).data;
        }
        getImage();
    }, [])
    return (
        <div className={style.wrapper}>
            <img src={image}>
            </img>
        </div>
    )
}

export default BlogImage