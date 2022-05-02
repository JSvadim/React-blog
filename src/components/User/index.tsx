// hooks
import { useState } from "react";

// local imports
import defaultUserPic from "../../assets/images/decor-things/user-default-pic.png";
import { userProps } from "./type";

export const User: React.FC<userProps> = ({user, theme, inDropdown}) => {

    return (
        <div className={`
            user user--theme-${theme} 
            ${inDropdown && "user--in-dropdown"}
        `}>
            <div className="user__pic">
                <img 
                    className="liquid-pic"
                    src={defaultUserPic}
                    alt={`${user.nickname}`}/>
            </div>
            <div className="user__nickname">
                {user.nickname}
            </div>
        </div>
    )
}