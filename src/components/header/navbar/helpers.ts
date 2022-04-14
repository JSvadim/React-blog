export const setActiveLink = (params: {isActive: boolean}): object => {

    const isTablet = window.innerWidth >= 768;
    const color = !isTablet ?
        'var(--light-violet-col)' :
        'var(--light-green-col)'

    return {
        color: params.isActive ? color : ''
    }
}