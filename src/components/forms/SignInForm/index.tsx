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
import axios from 'axios';

// local imports
import style from "./style.module.scss";
import { SignInDataI } from "./type";
import { serverURL } from "../../../constants/server-url";


const SignInForm: React.FC = () => {

    const [ formError, setFormError ] = useState("");
    const { register, watch, formState: {errors}, handleSubmit } = useForm<SignInDataI>({
        mode: "onBlur"
    });
    const onSubmit: SubmitHandler<SignInDataI> = (data):void => {
        setFormError('');
        axios.post(`${serverURL}/auth/signin`, data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            if (error.response) {
                console.log(error.response);
                setFormError(error.response.data.message);
            }else if (error.request) {
                console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
        })
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
                            }
                        })}>
                    </input>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="mail"
                    render={showInputError}
                />
            </div>

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
            <button 
                className={classNames(["btn", "btn--black", style.btn])} 
                type="submit"> Sign in
            </button>
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