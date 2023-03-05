import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui-components/Button";
import { Container } from "../../components/ui-components/container";
import { Field } from "../../components/ui-components/Field";
import { Form } from "../../components/ui-components/Form";
import { Input } from "../../components/ui-components/Input";
import { Typo } from "../../components/ui-components/Typo";
import { login } from "../../redux/slices/authSlice";

export const AuthPage = () => {

    const [formValues, setFormValues] = useState({ email: "", password: "" })

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const onChange = (name, value,) => {
        setFormValues({ ...formValues, [name]: value })
    }

    const onSubmit = (e) => {

        e.preventDefault()

        try {

            const users = JSON.parse(localStorage.getItem('users'))

            if (!users) {
                alert('Данный пользователь не найден в системе')
                return
            }

            const currentUser = users.find((user) => user.email === formValues.email && user.password === formValues.password)

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
                    autoComplete='off'
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                />
            </Field>
            <Field>
                <Input
                    type="text"
                    name="password"
                    value={formValues.password}
                    placeholder="Пароль"
                    autoComplete='off'
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                />
            </Field>
            <Button primary type="submit" disabled={disabled}>Авторизация</Button>
        </Form>
    </Container>
}