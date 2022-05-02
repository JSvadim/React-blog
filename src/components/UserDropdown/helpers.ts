
export const getColors = (color: string) => {
    const firstColor =  color;
    const secondColor = color === "white" ? 
    "black" : "white";
    return { firstColor, secondColor }
}