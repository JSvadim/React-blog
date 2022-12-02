// hooks
import classNames from "classnames";
import { useState } from "react";

// third party
import { Link } from "react-router-dom";

// local imports
import defaultUserPic from "../../assets/images/user-default-pic.jpg";
import style from "./style.module.scss";
import { userProps } from "./type";

export const User: React.FC<userProps> = ({userNickname, theme, sizingClass}) => {
    const userClassName = classNames([style.user, style[`user--theme-${theme}`], sizingClass]);
    return (
        <div className={userClassName}>
            <div className={style["pic-container"]}>
                <img 
                    className="liquid-pic"
                    src={defaultUserPic}
                    alt={`${userNickname}`}/>
            </div>
            {/* ADD DYNAMIC ID DOWN THERE */}
            <div className={style["nickname-container"]}>
                <Link className={style.nickname} to="/profile" state={{ userId: 34 }}>
                    {userNickname}
                </Link>
            </div>
        </div>
    )
}