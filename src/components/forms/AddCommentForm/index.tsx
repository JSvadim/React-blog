// hooks
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

// local imports
import style from "./style.module.scss";
import { AddCommentFormComponentI } from "./type";
import ButtonBasic from "../../Buttons/ButtonBasic";
import Loading from "../../Loading";
import InputError from "../../Inputs/InputError";
import InputWrapper from "../../Inputs/InputWrapper";
import { requiredFieldValidation } from "../../../constants/input-validation";
import { TextArea } from "../../Inputs/TextArea";
import { addCommentFormVocabulary } from "../../../vocabulary/forms/AddCommentForm";
import { inputsVocabulary } from "../../../vocabulary/inputs";


export const AddCommentForm: React.FC<AddCommentFormComponentI> = (props) => {

    const { language } = useTypedSelector(state => state.language);
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
                        <TextArea
                            theme={props.theme}
                            className={props.textAreaClassName}
                            placeholder={inputsVocabulary.comment.placeholder[language]}
                            register={register}
                            registerName="comment"
                            validation={requiredFieldValidation[language]}
                        />
            </InputWrapper>
            <ButtonBasic
                type="submit"
                theme={props.theme}
                text={addCommentFormVocabulary.submitBtn[language]}
                onClick={() => {}}
            />
        </form>
    )
}
