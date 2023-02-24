import React, { useState } from "react";
import {Container} from '../../../../components/UI components/container/index'
import { Field } from "../../../../components/UI components/Field/index";
import { Form } from "../../../../components/UI components/Form";
import {Typo} from '../../../../components/UI components/Typo/index'
import * as SC from './styles'
import { Input } from "../../../../components/UI components/Input";


const DEFAULT_VALUES = {title: '', body: ''}

export const PostForm = ({title, onSubmitForm, defaultValues}) => {

 


    const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUES)

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (e) => {

        e.preventDefault()

        onSubmitForm(formValues)

       !defaultValues && setFormValues(DEFAULT_VALUES)
    }

    const disabled = !formValues.title || !formValues.body

    return (
        <Container>
            <Typo>{title}</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                    type="text" 
                    name="title"
                    value={formValues.title} 
                    placeholder="Заголовок поста" 
                    onChange={(e)=> onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <Field>
                    <SC.Textarea 
                    placeholder="Текст" 
                    name="body" 
                    value={formValues.body} 
                    rows={10} 
                    cols={30}
                    onChange={(e)=> onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <SC.Button type="submit" disabled={disabled}>Сохранить</SC.Button>
            </Form>
        </Container>
        
    )
}