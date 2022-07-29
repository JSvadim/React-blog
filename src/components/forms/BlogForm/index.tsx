// hooks
import { useForm } from "react-hook-form";
import { useState } from "react";

// third-party 
import React, { SyntheticEvent } from "react";
import { SubmitHandler, Controller } from "react-hook-form";
import classNames from "classnames";
import { ErrorMessage } from "@hookform/error-message";

// local imports 
import { BlogFormI } from "./type";
import style from "./style.module.scss";
import Loading from "../../Loading";
import { PreviewPicture } from "./PreviewPicture";
import addImagesDecor from "../../../assets/images/decor-things/add-images-decor.svg";
import { BlogI } from "../../../types/blog/blog";
import BlogController from "../../../controllers/blog-controller";
import FilesManager from "./FilesManager";


export const BlogForm: React.FC<BlogFormI> = (props) => {
    
    const [ formError, setFormError ] = useState("");
    const [ files, setFiles ] = useState<File[] | null>(null);
    const [ loading, setLoading ] = useState(false);
    const { register, control, formState: {errors}, handleSubmit } = useForm<BlogI>({
        mode: "onBlur"
    });
    
    const onSubmit: SubmitHandler<BlogI> = async (data): Promise<void> => {
        data.pictures = files;
        const params = {
            data,
            setFormError, 
            setLoading,
            files
        };
        await BlogController.addBlog(params);
    };

    const showInputError = (data: { message: string }) => {
        return (
            <div className={classNames("input-error", style["input-error"])}>
                {data.message} 
            </div>)
    }

    const removeFileFromInput = (fileName: string) => {
        FilesManager.removeAttachedFile({
            fileName,
            inputValue: files,
            setFiles
        })
    }

    return (
        <form
            className={`
                ${style.form} 
                ${props.className}
            `}
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSubmit)}>
            {loading && <Loading/>}
            {formError && 
            <div className={classNames("input-error", style["form-error"])}>
                {formError} 
            </div>}

            <div className={classNames([style.row, style["row--left"]])}>
                <div className={classNames(style["input-wrapper"], style["input-wrapper__title"])}>
                <label className={classNames(["labeled-input", style.label])}>
                    <span className="labeled-input__title">Blog title:</span>
                    <input 
                        className={classNames(["labeled-input__input", style.input])}
                        type="text" 
                        placeholder="title"
                        {...register("title", {
                            required: "This field is required. ",
                            maxLength: {
                                value: 199,
                                message: "Title can't be longer than 200 symbols"
                            }
                        })}>
                    </input>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="title"
                    render={showInputError}
                />
                </div>
                <div className={style["input-wrapper"]}>
                <label className={classNames(["labeled-input", style.label])}>
                    <span className="labeled-input__title">Blog text:</span>
                    <textarea 
                        className={classNames(["labeled-input__input", "labeled-input__textarea", style.input])}
                        placeholder="Blog text"
                        maxLength={1999}
                        {...register("text", {
                            required: "This field is required. ",
                            maxLength: {
                                value: 1999,
                                message: "Text can't be longer than 2000 symbols"
                            }
                        })}>
                    </textarea>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="text"
                    render={showInputError}
                />
                </div>
            </div>
            <div className={style.row}>
                <div className={style["input-wrapper"]}>
                <label className={classNames(["labeled-input", style.label])}>
                    <span className="labeled-input__title labeled-input__title--mobile">
                        Add images:<br /> 
                        {"("}No more than five{")."}<br />
                        Each picture less than 2mb.
                    </span>
                    <span className="labeled-input__title labeled-input__title--desktop">
                        Add images:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {"("}No more than five{")."}<br />
                        Each picture less than 2mb.
                    </span>
                    <img className={style["add-images-decor"]} src={addImagesDecor} alt="add images decoration" />
                    <Controller
                        control={control}
                        name="pictures"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <input 
                                className="labeled-input__file-input"
                                multiple
                                onChange={e => FilesManager.inputChanged({
                                    inputValue: e.target.files,
                                    setFiles
                                })}
                                type="file" accept="image/*"> 
                            </input>
                        )}
                    />
                </label>
                <div className={`
                            labeled-input__input 
                            labeled-input__pics-preview
                        `}>
                        {files === null && <span className="labeled-input__pics-placeholder">No images</span>}
                        {files !== null && (<div className="labeled-input__pics-preview-outer">
                            <div className="labeled-input__pics-preview-row">
                                {Array.from(files).map(file => {
                                    const src = URL.createObjectURL(file);
                                    return (<PreviewPicture
                                        propStyle={({wrapper: style["preview-image"]})}
                                        path={src}
                                        removeMe = {() => {removeFileFromInput(file.name)}}
                                        removingClass = {style.removing}
                                        key={src}
                                    />)
                                })}
                            </div>
                        </div>)}
                </div>
                <ErrorMessage
                    errors={errors}
                    name="pictures"
                    render={showInputError}
                />
                </div>
                <div className={style.buttons}>
                    <button
                        className={classNames(["btn btn--black", style.button])}>
                        watch preview
                    </button>
                    <button
                        className={classNames(["btn btn--white", style.button])}>
                        add blog
                    </button>
                </div>
            </div>

        </form>
    )
}
