// hooks
import { useForm } from "react-hook-form";

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

    const { register, watch, formState: {errors}, handleSubmit } = useForm<SignInDataI>({
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<SignInDataI> = (data):void => {
        axios.post(`${serverURL}/user/`, data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <form 
            className={style.form} 
            onSubmit={handleSubmit(onSubmit)}>

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
                                value: /^[a-zA-Zа-яА-Я\d\-_]+$/g,
                                message: `Nickname can contain only Numbers,
                                     Russian and English letters and - _ signs`
                            }
                        })}>
                    </input>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="nickname"
                    render={({ message }) => {
                        return <div className={style["input-error"]}> {message} </div>
                    }}
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
                            }
                        })}>
                    </input>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="mail"
                    render={({ message }) => {
                        return <div className={style["input-error"]}> {message} </div>
                    }}
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
                    render={({ message }) => {
                        return <div className={style["input-error"]}> {message} </div>
                    }}
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
                    render={({ message }) => {
                        return <div className={style["input-error"]}> {message} </div>
                    }}
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
                                    value: /^[a-zA-Zа-яА-Я]+$/g,
                                    message: `Gender can contain only 
                                        Russian and English letters.`
                                }
                            })}>
                        </input>
                    </label>
                    {<ErrorMessage
                        errors={errors}
                        name="otherGender"
                        render={({ message }) => {
                            return <div className={style["input-error"]}> {message} </div>
                        }}
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