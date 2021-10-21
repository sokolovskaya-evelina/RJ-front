import React from 'react';
import {Button} from "@material-ui/core";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginFormSchema} from "../../../utils/schemas/loginValidation";
import FormField from "../../FormField";

interface ILoginFormProps {
    onOpenRegister: () => void
}

const LoginForm: React.FC<ILoginFormProps> = ({onOpenRegister}) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginFormSchema)
    })

    const onSubmit = data => console.log(data)

    return (
        <div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name='email' label='Почта'/>
                    <FormField name='password' label='Пароль'/>
                    <div className="d-flex align-center justify-between">
                        <Button onClick={onOpenRegister} color="primary" variant="contained">
                            Зарегистрироваться
                        </Button>
                        <Button disabled={!form.formState.isValid} type='submit' color="primary" variant="text">
                            Войти
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default LoginForm;