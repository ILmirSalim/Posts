import React, { useState} from "react";
import {Typo} from '../../components/UI components/Typo/index'
import {Container} from '../../components/UI components/container/index'
import { Form } from "../../components/UI components/Form";
import { Field } from "../../components/UI components/Field/index";
import { Input } from "../../components/UI components/Input";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {

    const [formValues, setFormValues] = useState({name: '', surname: '', email: '', password: ''}

    )
    const userId = Date.now()
    const newUser = {id:userId, ...formValues}
    const navigate = useNavigate()
    
    const onSubmit = (e) => {

        e.preventDefault()

        try {

            const users = JSON.parse(localStorage.getItem('users'))
            
            if (!users) {
                localStorage.setItem('users', JSON.stringify([newUser]))
                alert('Вы успешно зарегистрировались!')
                navigate('/auth')
                return
            }

            if (users.find((user) => user.email === formValues.email)) {
                alert('Пользователь с таким именем уже существует!')
                return
            }

            users.push(newUser)

            localStorage.setItem('users', JSON.stringify(users))

            alert('Вы успешно зарегистрировались!')
            
            navigate('/auth')

        } catch (error) {
            console.log(error)
        }

    }

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const disabled = !formValues.email || !formValues.password
    return (
    <Container>
        <Typo>Страница регистрации</Typo>
        <Form onSubmit={onSubmit}>
            <Field>
                <Input
                    type="text" 
                    name="name"
                    value={formValues.name} 
                    placeholder="Имя" 
                    onChange={(e)=> onChange(e.target.name, e.target.value)}
                />
            </Field>
            <Field>
                <Input
                    type="text" 
                    name="surname"
                    value={formValues.surname} 
                    placeholder="Фамилия" 
                    onChange={(e)=> onChange(e.target.name, e.target.value)}
                />
            </Field>
            <Field>
                <Input
                    type="email" 
                    name="email"
                    value={formValues.email} 
                    placeholder="Email" 
                    onChange={(e)=> onChange(e.target.name, e.target.value)}
                />
            </Field>
            <Field>
                <Input
                    type="password" 
                    name="password"
                    value={formValues.password} 
                    placeholder="Пароль" 
                    onChange={(e)=> onChange(e.target.name, e.target.value)}
                />
            </Field>
            <button type="submit" disabled={disabled}>Регистрация</button>
        </Form>
    </Container>
)}    