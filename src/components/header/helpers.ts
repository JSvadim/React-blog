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