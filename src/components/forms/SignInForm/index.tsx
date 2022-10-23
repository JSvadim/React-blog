// hooks
import { useForm } from "react-hook-form";
import { useState } from "react";

// third-party
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import classNames from "classnames";
import 'regenerator-runtime/runtime';

// local imports
import style from "./style.module.scss";
import { SignInDataI } from "../../../types/auth/sign-in-data";
import { AuthController } from "../../../controllers/auth-controller";
import Loading from "../../Loading";
import ButtonBasic from "../../Buttons/ButtonBasic";
import InputError from "../../Inputs/InputError";
import { requiredFieldValidation, userEmailValidation, userNicknameValidation, userOtherGenderValidation, userPasswordValidation } from "../../../constants/input-validation";
import InputWrapper from "../../Inputs/InputWrapper";
import InputTitle from "../../Inputs/InputTitle";


const SignInForm: React.FC = () => {

    const [ isActivationCodeSent, setIsActivationCodeSent ] = useState(false);
    const [ formError, setFormError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const { register, watch, formState: {errors}, handleSubmit } = useForm<SignInDataI>({
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<SignInDataI> = (data): void => {
        const params = {
            data,
            setIsActivationCodeSent,
            setFormError,
            setLoading
        }
        AuthController.signin(params);
    }

    return (
        <form 
            className={style.form} 
            onSubmit={handleSubmit(onSubmit)}>
            {loading && <Loading/>}
            {formError && <InputError message={formError} errorType="form"/>}
            
            <InputWrapper
                sizesClass={style["input-wrapper"]}
                registerName="nickname" 
                errors={errors}>
                    <InputTitle title="Nickname:"/>
                    <input 
                        className={classNames(["labeled-input__input", style.input])}
                        type="text" 
                        placeholder="your nick"
                        {...register("nickname", userNicknameValidation)}>
                    </input>
            </InputWrapper>
            
            <InputWrapper
                sizesClass={style["input-wrapper"]}
                registerName="email"
                errors={errors}>
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
                errors={errors}>
                    <InputTitle title="Password:"/>
                    <input 
                        className={classNames(["labeled-input__input", style.input])}
                        type="password" 
                        placeholder="your password"
                        {...register("password", userPasswordValidation)}>
                    </input>
            </InputWrapper>

            <InputWrapper
                sizesClass={style["input-wrapper"]}
                registerName="gender"
                errors={errors}>
                    <InputTitle title="Gender:"/>
                    <div className="labeled-input__select-wrapper">
                        <select 
                            {...register("gender", requiredFieldValidation)}
                            className={classNames(["labeled-input__input labeled-input__select", style.input])}>
                            <option value="">Choose gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">Type other gender</option>
                        </select>
                    </div>
            </InputWrapper>

            {(watch("gender") === "other") && 
                <InputWrapper
                    sizesClass={style["input-wrapper"]}
                    registerName="otherGender"
                    errors={errors}>
                        <InputTitle title="Type your gender:"/>
                        <input 
                            className={classNames(["labeled-input__input", style.input])}
                            type="text" 
                            placeholder="gender..."
                            {...register("otherGender", userOtherGenderValidation)}>
                        </input>
                </InputWrapper>
            }
            
            { isActivationCodeSent && 
                <InputWrapper
                    sizesClass={style["input-wrapper"]}
                    registerName="activationCode"
                    errors={errors}>
                        <InputTitle title="Type code, that has been sent to your email:"/>
                        <input 
                            className={classNames(["labeled-input__input", style.input])}
                            type="text" 
                            placeholder="Sent code to your email..."
                            {...register("activationCode", requiredFieldValidation)}>
                        </input>
                </InputWrapper>
            }

            <ButtonBasic
                theme="black"
                positioning={style.btn}
                type="submit"
                text={isActivationCodeSent ? "confirm code" : "Sign in"}
                onClick={() => {}}
            />
            <div className={style["gray-link-wrapper"]}>
                <Link 
                    className={classNames(["gray-link", style["gray-link"]])}
                    to="/log-in"> Log in if you already have an account
                </Link>
            </div> 
        </form>
    )
}


export default SignInForm