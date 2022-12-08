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
import { AuthController } from "../../../controllers/auth-controller";
import Loading from "../../Loading";
import ButtonBasic from "../../Buttons/ButtonBasic";
import InputError from "../../Inputs/InputError";
import { requiredFieldValidation, userEmailValidation, userNicknameValidation, userOtherGenderValidation, userPasswordValidation } from "../../../constants/input-validation";
import InputWrapper from "../../Inputs/InputWrapper";
import InputTitle from "../../Inputs/InputTitle";
import { SignInFormDataI } from "./type";
import { Select } from "../../Inputs/Select";


const SignInForm: React.FC = () => {

    const [ isActivationCodeSent, setIsActivationCodeSent ] = useState(false);
    const [ formError, setFormError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const { register, watch, formState: {errors}, handleSubmit } = useForm<SignInFormDataI>({
        mode: "onBlur"
    });
    const genderSelectOptions = [
        {value:"", text: "Choose gender"},
        {value:"male", text: "male"},
        {value:"female", text: "female"},
        {value:"other", text: "Type other gender"}
    ];

    const onSubmit: SubmitHandler<SignInFormDataI> = (data): void => {
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
                errors={errors}
                labelType="simple">
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

            <InputWrapper
                sizesClass={style["input-wrapper"]}
                registerName="gender"
                errors={errors}
                labelType="simple">
                    <InputTitle title="Gender:"/>
                    <Select
                        options={genderSelectOptions}
                        theme="black"
                        register={register}
                        registerName="gender"
                        validation={requiredFieldValidation}
                    />
            </InputWrapper>

            {(watch("gender") === "other") && 
                <InputWrapper
                    sizesClass={style["input-wrapper"]}
                    registerName="otherGender"
                    errors={errors}
                    labelType="simple">
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
                    errors={errors}
                    labelType="simple">
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