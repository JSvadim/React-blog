// hooks
import { useForm } from "react-hook-form";
import { useState } from "react";

// third-party
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { ErrorMessage } from '@hookform/error-message';
import 'regenerator-runtime/runtime';

// local imports
import style from "./style.module.scss";
import { SignInDataI } from "../../../types/auth/sign-in-data";
import { AuthController } from "../../../controllers/auth-controller";
import Loading from "../../Loading";
import ButtonBasic from "../../ButtonBasic";


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
    const showInputError = (data: { message: string }) => {
        return (
            <div className={classNames("input-error", style["input-error"])}>
                {data.message} 
            </div>)
    }


    return (
        <form 
            className={style.form} 
            onSubmit={handleSubmit(onSubmit)}>
            {loading && <Loading/>}
            {formError && 
                <div className={classNames("input-error", style["form-error"])}>
                    {formError} 
                </div>
            }
            <div className={style["input-wrapper"]}>
                <label className={classNames(["labeled-input", style.label])}>
                    <span className="labeled-input__title">Nickname:</span>
                    <input 
                        className={classNames(["labeled-input__input", style.input])}
                        type="text" 
                        placeholder="your nick"
                        {...register("nickname", {
                            required: "This field is required. ",
                            pattern: {
                                value: /^[a-zA-Zа-яА-Я\d\-_ ]+$/g,
                                message: `Nickname can contain only Numbers,
                                     Russian and English letters, spaces and - _ signs`
                            },
                            maxLength: {
                                value: 25,
                                message: "Nickname can't be longer than 25 symbols"
                            }
                        })}>
                    </input>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="nickname"
                    render={showInputError}
                />
            </div>

            <div className={style["input-wrapper"]}>
                <label className={classNames(["labeled-input", style.label])}>
                    <span className="labeled-input__title">Email:</span>
                    <input 
                        className={classNames(["labeled-input__input", style.input])}
                        type="email" 
                        placeholder="your email"
                        {...register("email", {
                            required: "This field is required. ",
                            pattern: {
                                value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/g,
                                message: "Invalid email (haven't you forgotten @ or . symbols? "
                            },
                            maxLength: {
                                value: 320,
                                message: "Email can't be longer than 320 symbols"
                            },
                        })}>
                    </input>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={showInputError}
                />
            </div>

            {
                isActivationCodeSent && 
                <div className={style["input-wrapper"]}>
                        <label className={classNames(["labeled-input", style.label])}>
                            <span className="labeled-input__title">Type code, that has been sent to your email:</span>
                            <input 
                                className={classNames(["labeled-input__input", style.input])}
                                type="text" 
                                placeholder="Sent code..."
                                {...register("activationCode", {
                                    required: "This field is required. "
                                })}>
                            </input>
                        </label>
                    {<ErrorMessage
                        errors={errors}
                        name="activationCode"
                        render={showInputError}
                    />}
                </div>
            }

            <div className={style["input-wrapper"]}>
                <label className={classNames(["labeled-input", style.label])}>
                    <span className="labeled-input__title">Password:</span>
                    <input 
                        className={classNames(["labeled-input__input", style.input])}
                        type="password"
                        placeholder="your password"
                        {...register("password", {
                            required: "this field is required",
                            minLength: {
                                value: 6,
                                message: "password should be at least 6 symbols"
                            },
                            maxLength: {
                                value: 20,
                                message: "Password can't be longer than 20 symbols"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]/g,
                                message: `password should contain at least one uppercase
                                    and one lowercase letter and at least one digit.`
                            },
                        })}>
                    </input>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="password"
                    render={showInputError}
                />
            </div>

            <div className={style["input-wrapper"]}>
                <label className={classNames(["labeled-input", style.label])}>
                    <span className="labeled-input__title">Gender:</span>
                    <div className="labeled-input__select-wrapper">
                        <select 
                            {...register("gender", {
                                required: "this field is required",
                            }
                            )}
                            className={classNames(["labeled-input__input labeled-input__select", style.input])}>
                            <option value="">Choose gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">Type other gender</option>
                        </select>
                    </div>
                </label>
                {<ErrorMessage
                    errors={errors}
                    name="gender"
                    render={showInputError}
                />}
            </div>

            {(watch("gender") === "other") && 
                <div className={style["input-wrapper"]}>
                    <label className={classNames(["labeled-input", style.label])}>
                        <span className="labeled-input__title">Type your gender:</span>
                        <input 
                            className={classNames(["labeled-input__input", style.input])}
                            type="text" 
                            placeholder="gender..."
                            {...register("otherGender", {
                                required: "This field is required. ",
                                pattern: {
                                    value: /^[a-zA-Zа-яА-Я ]+$/g,
                                    message: `Gender can contain only 
                                        Russian, English letters and spaces.`
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Maximal length is 30 symbols"
                                }
                            })}>
                        </input>
                    </label>
                    {<ErrorMessage
                        errors={errors}
                        name="otherGender"
                        render={showInputError}
                    />}
                </div>
            }
            <ButtonBasic
                theme="black"
                positioning={style.btn}
                type="submit"
                text="Sign in"
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