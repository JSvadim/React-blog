export interface ButtonBasicComponentI {
    theme: "black" |
           "white",
    positioning?: string,
    text: string,
    type: "button" | 
          "submit" | 
          "reset",
    onClick: any

}