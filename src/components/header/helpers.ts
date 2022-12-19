export const setActiveLinkStyle = (params: {isActive: boolean}): object => {
    const isTablet = window.innerWidth >= 768;
    const color = !isTablet ?
        'var(--col-text-violet-light)' :
        'var(--col-text-green)'

    return {
        color: params.isActive ? color : '',
        pointerEvents: params.isActive ? 'none' : "initial"
    }
}


export const handleNavToggling = (
    isOpened: boolean,
    changeState: React.Dispatch<React.SetStateAction<boolean>>,
    toClose?: boolean
):void => {
    if(!isOpened && !toClose) {
        document.body.classList.add("burger-lock");
        return changeState(true);
    }
    document.body.classList.remove("burger-lock");
    changeState(false);
}