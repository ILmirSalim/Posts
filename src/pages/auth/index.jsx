import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonBlack } from "../../components/UI components/ButtonBlack/styles";
import { Container } from "../../components/UI components/container";
import { Field } from "../../components/UI components/Field";
import { Form } from "../../components/UI components/Form";
import { Input } from "../../components/UI components/Input";
import { Typo } from "../../components/UI components/Typo";
import { login } from "../../redux/slices/authSlice";

export const AuthPage = () => {
    const [formValues, setFormValues] = useState({ email: "", password: ""})
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = () => {
        try {

            const users = JSON.parse(localStorage.getItem('users'))

            if (!users) {
                alert('Данный пользователь не найден в системе')
                return
            }

            const currentUser = users.find((user)=> user.email === formValues.email && user.password === formValues.password)
            
            if (!currentUser) {
                alert('Данный пользователь не найден в системе')
                return
            }

            dispatch(login(currentUser))

            navigate('/posts')
            
        } catch (error) {
            console.log(error)
        }
    }
    const disabled = !formValues.email || !formValues.password

    return <Container>
        <Typo>Страница авторизации</Typo>
        <Form onSubmit={onSubmit}>
            <Field>
                <Input
                    type="text" 
                    name="email"
                    value={formValues.email} 
                    placeholder="email" 
                    onChange={(e)=> onChange(e.target.name, e.target.value)}
                />
            </Field>
            <Field>
                <Input
                    type="text" 
                    name="password"
                    value={formValues.password} 
                    placeholder="Пароль" 
                    onChange={(e)=> onChange(e.target.name, e.target.value)}
                />
            </Field>
            <ButtonBlack type="submit" disabled={disabled}>Авторизация</ButtonBlack>
            </Form>
    </Container>
}