// hooks
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

// third-party 
import React from "react";
import { SubmitHandler, Controller } from "react-hook-form";
import classNames from "classnames";

// local imports 
import { AddBlogFormComponentI, AddBlogFormDataI, AddBlogFormPicturesI, PicNames } from "./type";
import style from "./style.module.scss";
import Loading from "../../Loading";

import addImagesDecor from "../../../assets/images/decor-things/add-images-decor.svg";
import BlogController from "../../../controllers/blog-controller";
import ButtonBasic from "../../Buttons/ButtonBasic";
import InputError from "../../Inputs/InputError";
import { blogTitleValidation, blogTextValidation } from "../../../constants/input-validation";
import InputWrapper from "../../Inputs/InputWrapper";
import InputTitle from "../../Inputs/InputTitle";
import ImageInput from "../../Inputs/ImageInput";
import { TextArea } from "../../Inputs/TextArea";
import { BasicInput } from "../../Inputs/BasicInput";
import { inputsVocabulary } from "../../../vocabulary/inputs";
import { addBlogPageVocabulary } from "../../../vocabulary/pages/AddBlog";


export const AddBlogForm: React.FC<AddBlogFormComponentI> = (props) => {
    
    const { language } = useTypedSelector( state => state.language);
    const [ formError, setFormError ] = useState("");
    const [ pictures, setPictures ] = useState<AddBlogFormPicturesI>({
        "first-pic": null,
        "second-pic": null,
        "third-pic": null,
        "fourth-pic": null,
        "fifth-pic": null,
    })
    const [ loading, setLoading ] = useState(false);
    const { register, control, formState: {errors}, handleSubmit } = useForm<AddBlogFormDataI>({
        mode: "onBlur"
    });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<AddBlogFormDataI> = async (data): Promise<void> => {
        data["first-pic"] = pictures["first-pic"]; 
        data["second-pic"] = pictures["second-pic"];
        data["third-pic"] = pictures["third-pic"];
        data["fourth-pic"] = pictures["fourth-pic"]; 
        data["fifth-pic"] = pictures["fifth-pic"];
        const params = {
            data,
            setFormError, 
            setLoading,
        };
        const addedBlog = await BlogController.addBlog(params);
        if(addedBlog) {
            navigate("/blog", {
                state: {
                    blog: addedBlog
                }
            });
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
                        <InputTitle title={inputsVocabulary.blogTitle.label[language]}/>
                        <BasicInput
                            theme="black"
                            className={style.input}
                            type="text" 
                            placeholder={inputsVocabulary.blogTitle.placeholder[language]}
                            register={register}
                            registerName="title"
                            validation={blogTitleValidation[language]}
                        />
                </InputWrapper>

                <InputWrapper
                    sizesClass={style["input-wrapper"]}
                    registerName="text"
                    errors={errors}
                    errorType="textarea"
                    labelType="simple">
                        <InputTitle title={inputsVocabulary.blogText.label[language]}/>
                        <TextArea
                            className={classNames([style.input, style["blog-text-input"]])}
                            theme="black"
                            register={register}
                            registerName="text"
                            placeholder={inputsVocabulary.blogText.placeholder[language]}
                            validation={blogTextValidation[language]}
                        />
                </InputWrapper>
            </div>
            <div className={classNames([style.row, style["row--right"]])}>
                <div className={style["image-inputs-wrapper"]}>
                    <InputTitle title={addBlogPageVocabulary.imagesTitle1[language]}/>
                    <InputTitle title={addBlogPageVocabulary.imagesTitle2[language]}/>
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
                        text={addBlogPageVocabulary.previewBtn[language]}
                        onClick={() => {}}
                    />
                    <ButtonBasic
                        theme="white"
                        type="submit"
                        text={addBlogPageVocabulary.submitBtn[language]}
                        onClick={() => {}}
                    />
                </div>
            </div>

        </form>
    )
}
