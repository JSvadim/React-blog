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
import InputError from "../../InputError";
import { showInputError } from "../helpers";

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

    return (
        <form 
            className={style.form} 
            onSubmit={handleSubmit(onSubmit)}>
            {loading && <Loading/>}
            {formError && <InputError message={formError} positioning={style["form-error"]}/>}

            <div className={style["input-wrapper"]}>
                <label className={classNames(["labeled-input", style.label])}>
                    <span className="labeled-input__title">Mail:</span>
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
                    render={data => showInputError(data.message, style["input-error"])}
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
                            required: "This field is required.",
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
                    render={data => showInputError(data.message, style["input-error"])}
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