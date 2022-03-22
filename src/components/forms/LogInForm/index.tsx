import React, { SyntheticEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import classNames from "classnames";
import { ErrorMessage } from '@hookform/error-message';

import style from "./style.module.scss";
import { LogInFormI } from "./type";


const LogInForm: React.FC = () => {

    const { register, formState: {errors}, handleSubmit } = useForm<LogInFormI>({
        mode: "onBlur"
    });
    const onSubmit: SubmitHandler<LogInFormI> = (data):void => console.log(data);

    return (
        <form 
            className={style.form} 
            onSubmit={handleSubmit(onSubmit)}>

            <div className={style["input-wrapper"]}>
                <label className={classNames(["labeled-input", style.label])}>
                    <span className="labeled-input__title">Mail:</span>
                    <input 
                        className={classNames(["labeled-input__input", style.input])}
                        type="email" 
                        placeholder="your email"
                        {...register("mail", {
                            required: "This field is required. ",
                            pattern: {
                                value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g,
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

            <div>
                <a className={classNames(["blue-link", style["blue-link"]])} 
                    href="/"> Forgot password?
                </a>
            </div>
            <button 
                className={classNames(["btn", "btn--black", style.btn])} 
                type="submit"> Log in
            </button>
            <div className={style["gray-link-wrapper"]}>
                <a 
                    className={classNames(["gray-link", style["gray-link"]])}
                    href="/"> Sign in if you don't have an account
                </a>
            </div> 
        </form>
    )
}


export default LogInForm