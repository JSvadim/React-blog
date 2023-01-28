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
            value: 60,
            message: "Заголовок не может быть больше,чем 60 символов."
        },
        pattern: {
            value: /^(?!\s*$)(?!^\s)(?=.*[a-zA-Zа-яА-Я]).*$/g,
            message: `Заголовок должен содержать латинские или русские буквы,
                и не должен начинаться с пробела.`
        },
    },
    eng: {
        required: "This field is required. ",
        maxLength: {
            value: 60,
            message: "Title can't be longer than 60 symbols"
        },
        pattern: {
            value: /^(?!\s*$)(?!^\s)(?=.*[a-zA-Zа-яА-Я]).*$/g,
            message: `Should contain some russian or english letters,
                first symbol shouldn't be "space".`
        },
    }
}

export const blogTextValidation = {
    ru: {
        required: "Это поле обязательно. ",
        maxLength: {
            value: 1999,
            message: "Текст не может быть больше,чем 2000 символов."
        },
        pattern: {
            value: /^(?!\s*$)(?!^\s)(?=.*[a-zA-Zа-яА-Я]).*$/g,
            message: `Заголовок должен содержать латинские или русские буквы,
                и не должен начинаться с пробела.`
        },
    },
    eng: {
        required: "This field is required. ",
        maxLength: {
            value: 1999,
            message: "Text can't be longer than 2000 symbols"
        },
        pattern: {
            value: /^(?!\s*$)(?!^\s)(?=.*[a-zA-Zа-яА-Я]).*$/g,
            message: `Should contain some russian or english letters,
                first symbol shouldn't be "space".`
        },
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
            message: `Хотя-бы одна большая и одна
            маленькая английские буквы и хотя-бы одна цифра.`
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
            message: `At least one uppercase
                and one lowercase english letters and at least one digit.`
        }
    }
}

export const userNicknameValidation = {
    ru: {
        required: "Это поле обязательно. ",
        pattern: {
            value: /^(?!\s*$)(?!^\s)[a-zA-Zа-яА-Я\d\-_ ]+$/g,
            message: `Только числа, русские и английские буквы, 
            пробелы, дефисы и нижние подчёркивания. 
            Первый символ не должен быть пробелом.`
        },
        maxLength: {
            value: 25,
            message: "Имя пользователя не может быть длинее 25 символов."
        }
    },
    eng: {
        required: "This field is required. ",
        pattern: {
            value: /^(?!\s*$)(?!^\s)[a-zA-Zа-яА-Я\d\-_ ]+$/g,
            message: `Only Numbers, Russian and English letters, 
            spaces and - _ signs.
            First symbol shouldn't be a space.`
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
            value: /^(?!\s*$)(?!^\s)[a-zA-Zа-яА-Я ]+$/g,
            message: `Только русские и английские буквы и пробелы, 
            Первый символ в строке должен быть буквой.`
        },
        maxLength: {
            value: 25,
            message: "Это поле не может содержать больше 25 символов."
        }
    },
    eng: {
        required: "This field is required. ",
        pattern: {
            value: /^(?!\s*$)(?!^\s)[a-zA-Zа-яА-Я ]+$/g,
            message: `Only Russian and English letters, 
            and spaces. First symbol have to be a letter.`
        },
        maxLength: {
            value: 25,
            message: "Gender can't be longer than 25 symbols"
        }
    }
}

export const commentValidation = {
    ru: {
        required: "Это поле обязательно. ",
        maxLength: {
            value: 150,
            message: "Комментарий не может быть больше,чем 150 символов."
        },
        pattern: {
            value: /^(?!\s*$)(?!^\s)(?=.*[a-zA-Zа-яА-Я]).*$/g,
            message: `Комментарий должен содержать латинские или русские буквы
                и не должен начинаться с пробела.`
        },
    },
    eng: {
        required: "This field is required. ",
        maxLength: {
            value: 150,
            message: "Comment can't be longer than 150 symbols"
        },
        pattern: {
            value: /^(?!\s*$)(?!^\s)(?=.*[a-zA-Zа-яА-Я]).*$/g,
            message: `Should contain some russian or english letters,
                first symbol shouldn't be "space".`
        },
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
    typeof commentValidation[AppLanguageType] |
    {};
