import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Почна обязательна!'),
    password: yup.string().min(6, 'Пароль должен быть минимум 6 символов').required('Пароль обязателен!'),
})