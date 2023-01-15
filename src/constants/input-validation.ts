// local imports
import { AppLanguageType } from "../types/app-language"


export const requiredFieldValidation = {
    ru: {
        required: "Это поле нужно заполнить."
    },
    eng: {
        required: "This field is required."
    }
}

export const blogTitleValidation = {
    ru: {
        required: "Это поле обязательно. ",
        maxLength: {
            value: 199,
            message: "Заголовок не может быть больше,чем 200 символов."
        }
    },
    eng: {
        required: "This field is required. ",
        maxLength: {
            value: 199,
            message: "Title can't be longer than 200 symbols"
        }
    }
}

export const blogTextValidation = {
    ru: {
        required: "Это поле обязательно. ",
        maxLength: {
            value: 1999,
            message: "Текст не может быть больше,чем 2000 символов."
        }
    },
    eng: {
        required: "This field is required. ",
        maxLength: {
            value: 1999,
            message: "Text can't be longer than 2000 symbols"
        }
    }
}

export const userEmailValidation = {
    ru: {
        required: "Это поле обязательно. ",
        pattern: {
            value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/g,
            message: "Неправильный email (Возможно вы забыли поставить @ или точку) "
        },
        maxLength: {
            value: 320,
            message: "Email не может быть больше,чем 320 символов."
        }
    },
    eng: {
        required: "This field is required. ",
        pattern: {
            value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/g,
            message: "Invalid email (haven't you forgotten @ or . symbols?) "
        },
        maxLength: {
            value: 320,
            message: "Email can't be longer than 320 symbols"
        }
    }
}

export const userPasswordValidation = {
    ru: {
        required: "Это поле обязательно. ",
        minLength: {
            value: 6,
            message: "Пароль должен иметь длину хотя-бы 6 символов. "
        },
        maxLength: {
            value: 20,
            message: "Пароль не может быть больше, чем 20 символов. "
        },
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]/g,
            message: `Пароль должен содержать хотя-бы одну большую букву и одну
            маленькую букву и хотя-бы одну цифру.`
        }
    },
    eng: {
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
}

export const userNicknameValidation = {
    ru: {
        required: "Это поле обязательно. ",
        pattern: {
            value: /^[a-zA-Zа-яА-Я\d\-_ ]+$/g,
            message: `Имя пользователя может содержать только числа,
            русские и английские буквы, пробелы, дефисы и нижние подчёркивания.`
        },
        maxLength: {
            value: 25,
            message: "Имя пользователя не может быть длинее 25 символов."
        }
    },
    eng: {
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
}

export const userOtherGenderValidation = {
    ru: {
        required: "Это поле обязательно. ",
        pattern: {
            value: /^[a-zA-Zа-яА-Я\d\-_ ]+$/g,
            message: `Это поле может содержать только числа,
            русские и английские буквы, пробелы, дефисы и нижние подчёркивания.`
        },
        maxLength: {
            value: 25,
            message: "Это поле не может содержать больше 25 символов."
        }
    },
    eng: {
        required: "This field is required. ",
        pattern: {
            value: /^[a-zA-Zа-яА-Я\d\-_ ]+$/g,
            message: `Gender can contain only Russian and English letters, spaces and - _ signs`
        },
        maxLength: {
            value: 25,
            message: "Gender can't be longer than 25 symbols"
        }
    }
}

export type ValidationsType = 
    typeof requiredFieldValidation[AppLanguageType] | 
    typeof blogTitleValidation[AppLanguageType] |
    typeof blogTextValidation[AppLanguageType] |
    typeof userEmailValidation[AppLanguageType] |
    typeof userPasswordValidation[AppLanguageType] | 
    typeof userNicknameValidation[AppLanguageType] |
    typeof userOtherGenderValidation[AppLanguageType] |
    {};
