// third-party
import { UseFormRegister } from "react-hook-form";

// local imports
import { ValidationsType } from "../../../constants/input-validation";


export interface TextAreaComponentI {
    theme: "white" | "black";
    placeholder?: string;
    className?: string;
    register: UseFormRegister<any>;
    registerName: string;
    validation: ValidationsType;
}