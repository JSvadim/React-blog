// hooks
import { useForm } from "react-hook-form";
import { useState } from "react";

// third-party
import React, { SyntheticEvent } from "react";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import classNames from "classnames";

// local imports
import style from "./style.module.scss";
import { LogInDataI } from "../../../types/auth/log-in-data";
import { AuthController } from "../../../controllers/auth-controller";
import Loading from "../../Loading";
import ButtonBasic from "../../Buttons/ButtonBasic";
import InputError from "../../Inputs/InputError";
import { userEmailValidation, userPasswordValidation } from "../../../constants/input-validation";
import InputWrapper from "../../Inputs/InputWrapper";
import InputTitle from "../../Inputs/InputTitle";

const LogInForm: React.FC = () => {

    const [ formError, setFormError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const { register, formState: {errors}, handleSubmit } = useForm<LogInDataI>({
        mode: "onBlur"
    });


    const onSubmit: SubmitHandler<LogInDataI> = async (data): Promise<void> => {
        const params = {
            data, 
            setFormError, 
            setLoading
        };
        await AuthController.login(params);
    };

    return (
        <form 
            className={style.form} 
            onSubmit={handleSubmit(onSubmit)}>
            {loading && <Loading/>}
            {formError && <InputError message={formError} errorType="form"/>}

            <InputWrapper
                sizesClass={style["input-wrapper"]}
                registerName="email"
                errors={errors}
                labelType="simple">
                    <InputTitle title="Email:"/>
                    <input 
                        className={classNames(["labeled-input__input", style.input])}
                        type="email" 
                        placeholder="your email"
                        {...register("email", userEmailValidation)}>
                    </input>
            </InputWrapper>

            <InputWrapper
                sizesClass={style["input-wrapper"]}
                registerName="password"
                errors={errors}
                labelType="simple">
                    <InputTitle title="Password:"/>
                    <input 
                        className={classNames(["labeled-input__input", style.input])}
                        type="password" 
                        placeholder="your password"
                        {...register("password", userPasswordValidation)}>
                    </input>
            </InputWrapper>
            
            <div>
                <a className={classNames(["blue-link", style["blue-link"]])} 
                    href="/"> Forgot password?
                </a>
            </div>

            <ButtonBasic
                theme="black"
                positioning={style.btn}
                type="submit"
                text="Log in"
                onClick={() => {}}
            />
            
            <div className={style["gray-link-wrapper"]}>
                <Link 
                    className={classNames(["gray-link", style["gray-link"]])}
                    to="/sign-in"> Sign in if you don't have an account
                </Link>
            </div> 
        </form>
    )
}


export default LogInForm