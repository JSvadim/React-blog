// hooks
import { useForm } from "react-hook-form";
import { useState } from "react";

// third-party
import React, { SyntheticEvent } from "react";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";

// local imports
import style from "./style.module.scss";
import { LogInFormI } from "./type";
import { serverURL } from "../../../constants/server-url";


const LogInForm: React.FC = () => {

    const [ formError, setFormError ] = useState("");
    const { register, formState: {errors}, handleSubmit } = useForm<LogInFormI>({
        mode: "onBlur"
    });
    const onSubmit: SubmitHandler<LogInFormI> = (data):void => {
        axios.post(`${serverURL}/auth/login`, data)
        .then(function (response) {
            setFormError('');
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
    };
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
            </div>}

            <div className={style["input-wrapper"]}>
                <label className={classNames(["labeled-input", style.label])}>
                    <span className="labeled-input__title">Mail:</span>
                    <input 
                        className={classNames(["labeled-input__input", style.input])}
                        type="email" 
                        placeholder="your email"
                        {...register("email", {
                            required: "This field is required. "
                        })}>
                    </input>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="email"
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
                            required: "This field is required. "
                        })}>
                    </input>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="password"
                    render={showInputError}
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
                <Link 
                    className={classNames(["gray-link", style["gray-link"]])}
                    to="/sign-in"> Sign in if you don't have an account
                </Link>
            </div> 
        </form>
    )
}


export default LogInForm