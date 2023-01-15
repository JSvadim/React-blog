// hooks
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

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
import { logInFormVocabulary } from "../../../vocabulary/forms/LogInForm";
import { inputsVocabulary } from "../../../vocabulary/inputs";


const LogInForm: React.FC = () => {

    const { language } = useTypedSelector(state => state.language);
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
            
            <div>
                <Link 
                    className={classNames(["blue-link", "unselectable", style["blue-link"]])}
                    to="/log-in"> {logInFormVocabulary.forgotPassword[language]}
                </Link>
            </div>

            <ButtonBasic
                theme="black"
                positioning={style.btn}
                type="submit"
                text={logInFormVocabulary.submitBtn[language]}
                onClick={() => {}}
            />
            
            <div className={style["gray-link-wrapper"]}>
                <Link 
                    className={classNames(["gray-link", "unselectable", style["gray-link"]])}
                    to="/sign-in"> {logInFormVocabulary.linkToSignIn[language]}
                </Link>
            </div> 
        </form>
    )
}


export default LogInForm