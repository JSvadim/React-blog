// hooks
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

// third-party 
import React from "react";
import { SubmitHandler, Controller } from "react-hook-form";
import classNames from "classnames";

// local imports 
import { BlogFormI, FormPicturesI, PicNames } from "./type";
import style from "./style.module.scss";
import Loading from "../../Loading";

import addImagesDecor from "../../../assets/images/decor-things/add-images-decor.svg";
import { BlogFormDataI, BlogI } from "../../../types/blog/blog";
import BlogController from "../../../controllers/blog-controller";
import { store } from "../../../redux/store";
import { addBlogCreator } from "../../../redux/action-creators/blog";
import ButtonBasic from "../../Buttons/ButtonBasic";
import InputError from "../../Inputs/InputError";
import { blogTitleValidation, blogTextValidation } from "../../../constants/input-validation";
import InputWrapper from "../../Inputs/InputWrapper";
import InputTitle from "../../Inputs/InputTitle";
import ImageInput from "../../Inputs/ImageInput";

export const BlogForm: React.FC<BlogFormI> = (props) => {
    
    const [ formError, setFormError ] = useState("");
    const [ pictures, setPictures ] = useState<FormPicturesI>({
        "first-pic": null,
        "second-pic": null,
        "third-pic": null,
        "fourth-pic": null,
        "fifth-pic": null,
    })
    const [ loading, setLoading ] = useState(false);
    const { register, control, formState: {errors}, handleSubmit } = useForm<BlogFormDataI>({
        mode: "onBlur"
    });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<BlogFormDataI> = async (data): Promise<void> => {
        data["first-pic"] = pictures["first-pic"] ? pictures["first-pic"] : null;
        data["second-pic"] = pictures["second-pic"] ? pictures["second-pic"] : null;
        data["third-pic"] = pictures["third-pic"] ? pictures["third-pic"] : null;
        data["fourth-pic"] = pictures["fourth-pic"] ? pictures["fourth-pic"] : null;
        data["fifth-pic"] = pictures["fifth-pic"] ? pictures["fifth-pic"] : null;
        const params = {
            data,
            setFormError, 
            setLoading,
        };
        const addedBlog = await BlogController.addBlog(params);
        if(addedBlog) {
            store.dispatch(addBlogCreator(addedBlog));
            navigate("/blog");
        }
    };
 
    const changePicturesState = (inputName: PicNames, value: null | File):void => {
        setPictures({
            ...pictures,
            [inputName]: value,
        });
    }



    return (
        <form
            className={`${style.form} ${props.className}`}
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSubmit)}>
            {loading && <Loading/>}
            {formError && <InputError message={formError} errorType="form"/>}

            <div className={classNames([style.row, style["row--left"]])}>
                <InputWrapper
                    sizesClass={style["input-wrapper"]}
                    registerName="title"
                    errors={errors}
                    labelType="simple">
                        <InputTitle title="Blog title:"/>
                        <input 
                            className={classNames(["labeled-input__input", style.input])}
                            type="text" 
                            placeholder="title"
                            {...register("title", blogTitleValidation)}>
                        </input>
                </InputWrapper>

                <InputWrapper
                    sizesClass={style["input-wrapper"]}
                    registerName="text"
                    errors={errors}
                    errorType="textarea"
                    labelType="simple">
                        <InputTitle title="Blog text:"/>
                        <textarea 
                            className={classNames(["labeled-input__input", "labeled-input__textarea", style.input])}
                            placeholder="Blog text"
                            {...register("text", blogTextValidation)}>
                        </textarea>
                </InputWrapper>
            </div>
            <div className={classNames([style.row, style["row--right"]])}>
                <div className={style["image-inputs-wrapper"]}>
                    <InputTitle title={`Add images,`}/>
                    <InputTitle title={`Each picture less than 5mb.`}/>
                    <img className={style["add-images-decor"]} 
                         src={addImagesDecor} 
                         alt="add images decoration" />
                    <div className={style["image-inputs-carousel"]}>
                        <Controller
                            control={control}
                            name="first-pic"
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <ImageInput
                                    onChange={changePicturesState}
                                    theme="dark"
                                    containerSizes={style["image-input"]}
                                    registerName="first-pic"
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="second-pic"
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <ImageInput
                                    onChange={changePicturesState}
                                    theme="dark"
                                    containerSizes={style["image-input"]}
                                    registerName="second-pic"
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="third-pic"
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <ImageInput
                                    onChange={changePicturesState}
                                    theme="dark"
                                    containerSizes={style["image-input"]}
                                    registerName="third-pic"
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="fourth-pic"
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <ImageInput
                                    onChange={changePicturesState}
                                    theme="dark"
                                    containerSizes={style["image-input"]}
                                    registerName="fourth-pic"
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="fifth-pic"
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <ImageInput
                                    onChange={changePicturesState}
                                    theme="dark"
                                    containerSizes={style["image-input"]}
                                    registerName="fifth-pic"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className={style.buttons}>
                    <ButtonBasic
                        theme="black"
                        type="button"
                        text="watch preview"
                        onClick={() => {}}
                    />
                    <ButtonBasic
                        theme="white"
                        type="submit"
                        text="add blog"
                        onClick={() => {}}
                    />
                </div>
            </div>

        </form>
    )
}
