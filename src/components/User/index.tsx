// hooks
import classNames from "classnames";
import { useState } from "react";

// third party
import { Link } from "react-router-dom";

// local imports
import defaultUserPic from "../../assets/images/user-default-pic.jpg";
import { useGetUser } from "../../hooks/useGetUser";
import { UserResponseI } from "../../types/server-responses/user";
import Loading from "../Loading";
import { getFakeUserName } from "./helpers";
import style from "./style.module.scss";
import { userProps } from "./type";

    // this component should get max-width in styles passed as props.className
    // or overflowing text will not be pretty hidden with ellipsis


export const User: React.FC<userProps> = ({userProp, theme, className, isFake, databaseSelector, dbSelectorValue}) => {

    const userClassName = classNames([style.user, style[`user--theme-${theme}`], className]);
    const linkClassName = classNames([style.nickname, "unselectable"]);
    const [ user, setUser ] = useState<null | UserResponseI>(null);
    useGetUser({initialValue: userProp, setUser, databaseSelector, dbSelectorValue});


    if(isFake) {
        return (
            <div className={userClassName}>
                <div className={style["pic-container"]}>
                    <img 
                        className="liquid-pic"
                        src={defaultUserPic}
                        alt={`Profile picture`}/>
                </div>
                <div className={style["nickname-container"]}>
                    <span className={linkClassName}>
                        {getFakeUserName()}
                    </span>
                </div>
            </div>
        )
    }


    return (
        <div className={userClassName}>
            <div className={style["pic-container"]}>
                { user && <img 
                    className="liquid-pic"
                    src={defaultUserPic}
                    alt={`${user.nickname}`}/>}
            </div>
            <div className={style["nickname-container"]}>
                {!user && <Loading/>}
                {user && 
                    <Link className={linkClassName} to="/profile" state={{ user }}>
                        {user.nickname}
                    </Link>}
            </div>
        </div>
    )
}