// third party
import { UseFormRegister } from "react-hook-form";

// local imports
import { ValidationsType } from "../../../constants/input-validation";


export interface OptionI {
    value: string;
    text: string;
}

export interface SelectComponentI {
    className?: string;
    theme: "white" | "black";
    options: Array<OptionI>;
    register: UseFormRegister<any>;
    registerName: string;
    validation: ValidationsType;
} 