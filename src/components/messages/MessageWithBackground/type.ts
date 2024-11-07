export interface MessageWithBackgroundComponentI {
    text: string;
    theme: "white" | "black";
    position: "default-pos" | "custom";
    textClassName?: string;
    backgroundClassName?: string;
}