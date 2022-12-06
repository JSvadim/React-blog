export const requiredFieldValidation = {
    required: "This field is required. "
}

export const blogTitleValidation = {
    required: "This field is required. ",
    maxLength: {
        value: 199,
        message: "Title can't be longer than 200 symbols"
    }
}

export const blogTextValidation = {
    required: "This field is required. ",
    maxLength: {
        value: 1999,
        message: "Text can't be longer than 2000 symbols"
    }
}

export const userEmailValidation = {
    required: "This field is required. ",
    pattern: {
        value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/g,
        message: "Invalid email (haven't you forgotten @ or . symbols? "
    },
    maxLength: {
        value: 320,
        message: "Email can't be longer than 320 symbols"
    }
}

export const userPasswordValidation = {
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
    }
}

export const userNicknameValidation = {
    required: "This field is required. ",
    pattern: {
        value: /^[a-zA-Zа-яА-Я\d\-_ ]+$/g,
        message: `Nickname can contain only Numbers,
             Russian and English letters, spaces and - _ signs`
    },
    maxLength: {
        value: 25,
        message: "Nickname can't be longer than 25 symbols"
    }
}

export const userOtherGenderValidation = {
    required: "This field is required. ",
    pattern: {
        value: /^[a-zA-Zа-яА-Я\d\-_ ]+$/g,
        message: `Nickname can contain only Numbers,
             Russian and English letters, spaces and - _ signs`
    },
    maxLength: {
        value: 25,
        message: "Nickname can't be longer than 25 symbols"
    }
}

export type ValidationsType = 
    typeof requiredFieldValidation | 
    typeof blogTitleValidation |
    typeof blogTextValidation |
    typeof userEmailValidation |
    typeof userPasswordValidation | 
    typeof userNicknameValidation |
    typeof userOtherGenderValidation |
    {};
