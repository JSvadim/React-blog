// hooks
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

// third-party
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import classNames from "classnames";

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
import { BasicInput } from "../../Inputs/BasicInput";
import { inputsVocabulary } from "../../../vocabulary/inputs";
import { signInFormVocabulary } from "../../../vocabulary/forms/SignInForm";


const SignInForm: React.FC = () => {

    const { language } = useTypedSelector(state => state.language);
    const [ isActivationCodeSent, setIsActivationCodeSent ] = useState(false);
    const [ formError, setFormError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const { register, watch, formState: {errors}, handleSubmit } = useForm<SignInFormDataI>({
        mode: "onBlur"
    });

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
                    <InputTitle title={inputsVocabulary.nickname.label[language]}/>
                    <BasicInput
                        theme="black"
                        className={style.input}
                        type="text" 
                        placeholder={inputsVocabulary.nickname.placeholder[language]}
                        register={register}
                        registerName="nickname"
                        validation={userNicknameValidation[language]}
                    />
            </InputWrapper>
            
            <InputWrapper
                sizesClass={style["input-wrapper"]}
                registerName="email"
                errors={errors}
                labelType="simple">
                    <InputTitle title={inputsVocabulary.email.label[language]}/>
                    <BasicInput
                        theme="black"
                        className={style.input}
                        type="email" 
                        placeholder={inputsVocabulary.email.placeholder[language]}
                        register={register}
                        registerName="email"
                        validation={userEmailValidation[language]}
                    />
            </InputWrapper>

            <InputWrapper
                sizesClass={style["input-wrapper"]}
                registerName="password"
                errors={errors}
                labelType="simple">
                    <InputTitle title={inputsVocabulary.password.label[language]}/>
                    <BasicInput
                        theme="black"
                        className={style.input}
                        type="password" 
                        placeholder={inputsVocabulary.password.placeholder[language]}
                        register={register}
                        registerName="password"
                        validation={userPasswordValidation[language]}
                    />
            </InputWrapper>

            <InputWrapper
                sizesClass={style["input-wrapper"]}
                registerName="gender"
                errors={errors}
                labelType="simple">
                    <InputTitle title={inputsVocabulary.selectGender.label[language]}/>
                    <Select
                        options={inputsVocabulary.selectGender.options[language]}
                        theme="black"
                        register={register}
                        registerName="gender"
                        validation={requiredFieldValidation[language]}
                    />
            </InputWrapper>

            {(watch("gender") === "other") && 
                <InputWrapper
                    sizesClass={style["input-wrapper"]}
                    registerName="otherGender"
                    errors={errors}
                    labelType="simple">
                        <InputTitle title={inputsVocabulary.otherGender.label[language]}/>
                        <BasicInput
                            theme="black"
                            className={style.input}
                            type="text" 
                            placeholder={inputsVocabulary.otherGender.placeholder[language]}
                            register={register}
                            registerName="otherGender"
                            validation={userOtherGenderValidation[language]}
                        />
                </InputWrapper>
            }
            
            { isActivationCodeSent && 
                <InputWrapper
                    sizesClass={style["input-wrapper"]}
                    registerName="activationCode"
                    errors={errors}
                    labelType="simple">
                        <InputTitle title={inputsVocabulary.activationCode.label[language]}/>
                        <BasicInput
                            theme="black"
                            className={style.input}
                            type="text" 
                            placeholder={inputsVocabulary.activationCode.placeholder[language]}
                            register={register}
                            registerName="activationCode"
                            validation={requiredFieldValidation[language]}
                        />
                </InputWrapper>
            }

            <ButtonBasic
                theme="black"
                positioning={style.btn}
                type="submit"
                text={isActivationCodeSent ? 
                    signInFormVocabulary.submitBtn.confirmCode[language] 
                    : 
                    signInFormVocabulary.submitBtn.signIn[language]}
                onClick={() => {}}
            />
            <div className={style["gray-link-wrapper"]}>
                <Link 
                    className={classNames(["gray-link", "unselectable", style["gray-link"]])}
                    to="/log-in"> {signInFormVocabulary.linkToLogIn[language]}
                </Link>
            </div> 
        </form>
    )
}


export default SignInForm