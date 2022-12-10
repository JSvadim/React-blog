// third-party
import { UseFormRegister } from "react-hook-form";

// local imports
import { ValidationsType } from "../../../constants/input-validation";


export interface BasicInputComponentI {
    theme: "white" | "black";
    placeholder?: string;
    className?: string;
    type: string;
    register: UseFormRegister<any>;
    registerName: string;
    validation: ValidationsType;
}