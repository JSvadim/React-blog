// local imports
import loadingGif from "../../assets/images/loading.gif";
import style from "./style.module.scss";



const Loading: React.FC = () => {
  return (
    <div
      className={style.loading}>
      <img 
        className={style.gif}
        src={loadingGif}/>
    </div>
  );

}

export default Loading;
