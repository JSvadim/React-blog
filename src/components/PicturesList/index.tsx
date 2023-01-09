// local imports
import ServerImage from "../ServerImage";
import { PicturesListI } from "./type";


const PicturesList: React.FC<PicturesListI> = (props) => {
    
    const imagesNames = props.pictures.split(" ");
    return (
        <ul className={props.listClassName}>
            {imagesNames.map((image) => {
                return (
                    <li className={props.itemClassName} key={image}>
                        {!props.isFake && 
                            <ServerImage 
                                className={props.pictureClassName}
                                imageName={image}/>
                        }
                        {props.isFake && 
                            <img 
                                className={props.pictureClassName} 
                                src={image}/>
                        }
                    </li>
                )
            })}
        </ul>
    )
}


export default PicturesList