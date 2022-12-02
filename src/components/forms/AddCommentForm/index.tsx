// hooks
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

// local imports
import style from "./style.module.scss";
import { CommentFormPropsI } from "./type";
import ButtonBasic from "../../Buttons/ButtonBasic";
import Loading from "../../Loading";
import InputError from "../../Inputs/InputError";
import InputWrapper from "../../Inputs/InputWrapper";
import { requiredFieldValidation } from "../../../constants/input-validation";


export const AddCommentForm: React.FC<CommentFormPropsI> = (props) => {

    const [ formError, setFormError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const { register, control, formState: {errors}, handleSubmit } = useForm<{comment: string}>({
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<{comment: string}> = async (data): Promise<void> => {
        console.log(data);
    }


    return (
        <form className={props.className}
        onSubmit={handleSubmit(onSubmit)}>

            {loading && <Loading/>}
            {formError && <InputError message={formError} errorType="form"/>}
            
            <InputWrapper
                    sizesClass={style["textarea-wrapper"]}
                    registerName="comment"
                    labelType="no-label"
                    errorType="form"
                    errors={errors}>
                        <textarea
                            className={style["textarea"]}
                            placeholder="your comment..."
                            {...register("comment", requiredFieldValidation)}
                        />
            </InputWrapper>
            <ButtonBasic
                type="submit"
                theme="white"
                text="add comment"
                onClick={() => {}}
            />
        </form>
    )
}
