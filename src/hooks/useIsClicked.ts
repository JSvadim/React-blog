// hooks
import { useState, useEffect } from "react";


export function useIsClicked( expirationTime: number) {
    // When isClicked is true after expirationTime timer executes and 
    // makes it false.
    // This can be used to perform animations when something is clicked.
    const [ isClicked, setIsClicked ] = useState<boolean>(false);
    useEffect(() => {

        if(!isClicked) return

        const clickedTimer = setTimeout(() => {
            setIsClicked(false);
        }, expirationTime);

        return () => {clearTimeout(clickedTimer)}

    });
    return [ isClicked, setIsClicked ] as const;
}