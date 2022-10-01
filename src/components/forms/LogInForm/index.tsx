// hooks
import { useForm } from "react-hook-form";
import { useState } from "react";

// third-party
import React, { SyntheticEvent } from "react";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { ErrorMessage } from "@hookform/error-message";

// local imports
import style from "./style.module.scss";
import { LogInDataI } from "../../../types/auth/log-in-data";
import { AuthController } from "../../../controllers/auth-controller";
import Loading from "../../Loading";
import ButtonBasic from "../../ButtonBasic";

const LogInForm: React.FC = () => {

    const [ formError, setFormError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const { register, formState: {errors}, handleSubmit } = useForm<LogInDataI>({
        mode: "onBlur"
    });


    const onSubmit: SubmitHandler<LogInDataI> = async (data): Promise<void> => {
        const params = {
            data, 
            setFormError, 
            setLoading
        };
        await AuthController.login(params);
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
            {loading && <Loading/>}
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