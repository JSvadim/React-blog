export const getFakeUserName = (): string => {
    const randomNumber = Math.random();
    if(randomNumber >= 0.9) {
        return "Nikolas"
    }
    else if(randomNumber >= 0.8 && randomNumber < 0.9) {
        return "Angela"
    }
    else if(randomNumber >= 0.7 && randomNumber < 0.8) {
        return "Mike"
    }
    else if(randomNumber >= 0.6 && randomNumber < 0.7) {
        return "Oksana"
    }
    else if(randomNumber >= 0.5 && randomNumber < 0.6) {
        return "Vadim"
    }
    else if(randomNumber >= 0.4 && randomNumber < 0.5) {
        return "Violeta"
    }
    else if(randomNumber >= 0.3 && randomNumber < 0.4) {
        return "Nikolai"
    }
    else if(randomNumber >= 0.2 && randomNumber < 0.3) {
        return "Megan"
    }
    else if(randomNumber >= 0.1 && randomNumber < 0.2) {
        return "Jason"
    }
    return "Nastya"
}