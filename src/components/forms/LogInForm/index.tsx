// hooks
import { useForm } from "react-hook-form";
import { useState } from "react";

// third-party
import React, { SyntheticEvent } from "react";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import classNames from "classnames";

// local imports
import InputWrapper from "../../Inputs/InputWrapper";
import ButtonBasic from "../../Buttons/ButtonBasic";
import InputTitle from "../../Inputs/InputTitle";
import InputError from "../../Inputs/InputError";
import Loading from "../../Loading";
import { userEmailValidation, userPasswordValidation } from "../../../constants/input-validation";
import { AuthController } from "../../../controllers/auth-controller";
import { LogInFormDataI } from "./type";
import style from "./style.module.scss";
import { BasicInput } from "../../Inputs/BasicInput";

const LogInForm: React.FC = () => {

    const [ formError, setFormError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const { register, formState: {errors}, handleSubmit } = useForm<LogInFormDataI>({
        mode: "onBlur"
    });


    const onSubmit: SubmitHandler<LogInFormDataI> = async (data): Promise<void> => {
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
                    <BasicInput
                        theme="black"
                        className={style.input}
                        type="email" 
                        placeholder="your email"
                        register={register}
                        registerName="email"
                        validation={userEmailValidation}
                    />
            </InputWrapper>

            <InputWrapper
                sizesClass={style["input-wrapper"]}
                registerName="password"
                errors={errors}
                labelType="simple">
                    <InputTitle title="Password:"/>
                    <BasicInput
                        theme="black"
                        className={style.input}
                        type="password" 
                        placeholder="your password"
                        register={register}
                        registerName="password"
                        validation={userPasswordValidation}
                    />
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