import React from 'react';
import {Button} from "@material-ui/core";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm, FormProvider} from "react-hook-form";
import {registerFormSchema} from "../../../utils/schemas/registerValidation";
import FormField from "../../FormField";

interface IRegisterFormProps {
    onOpenRegister: () => void,
    onOpenLogin: () => void
}

const RegisterForm: React.FC<IRegisterFormProps> = ({onOpenRegister, onOpenLogin}) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(registerFormSchema)
    })

    const onSubmit = data => console.log(data)

    return (
        <div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name='fullName' label='Имя и Фамилия'/>
                    <FormField name='email' label='Почта'/>
                    <FormField name='password' label='Пароль'/>
                    <div className="d-flex align-center justify-between">
                        <Button disabled={!form.formState.isValid} type='submit' onClick={onOpenRegister} color="primary" variant="contained">
                            Зарегистрироваться
                        </Button>
                        <Button onClick={onOpenLogin} color="primary" variant="text">
                            Войти
                        </Button>
                    </div>
                </form>
            </FormProvider>

        </div>
    );
};

export default RegisterForm;