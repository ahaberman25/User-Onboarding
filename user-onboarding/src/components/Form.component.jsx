import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const UserForm = props => {
    console.log('form', props)

    const Title = styled.h1`
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        color: #4d4d4d;
        font-size: 2.2em;
    `;

    return (
        <div>
            <Title>Create User</Title>
            <Form className='form'>
                <Field className='field' name='name' placeholder='Your Name' />
                {props.touched.name && props.errors.name ? (<span className="error">{props.errors.name}</span>) : null}
                <Field className='field' name='email' placeholder='Your Email' />
                {props.touched.email && props.errors.email ? (<span className="error">{props.errors.email}</span>) : null}
                <Field className='field' name='password' type='password' placeholder='Create Password' />
                {props.touched.password && props.errors.password ? (<span className="error">{props.errors.password}</span>) : null}
                <Field className='field' as='select' name='role'>
                    <option value='Developer'>Developer</option>
                    <option value='Coder'>Coder</option>
                    <option value='Manager'>Manager</option>
                </Field>
                {props.touched.role && props.errors.role ? (<span className="error">{props.errors.role}</span>) : null}
                <label htmlFor='tos'>Do you accept our Terms of Service</label>
                <Field className='field' name='tos' type='checkbox' />
                {props.touched.tos && props.errors.tos ? (<span className="error">{props.errors.tos}</span>) : null}
                <button className='button' type='submit'>Submit</button>
            </Form>
        </div>
    )
}

export default withFormik({
    mapPropsToValues: props => {
        return {
            name: props.name || '',
            email: props.email || '',
            role: props.role || '',
            password: props.password || '',
            tos: props.name || false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required to submit this form'),
        email: Yup.string().required('Email is required to submit this form').email('Please use a valid email address'),
        role: Yup.string().required('A Role is required to submit this form'),
        password: Yup.string().required('A Password is required to submit this form'),
        tos: Yup.boolean().oneOf([true], 'Please agree to the Terms of Service')
    }),
    handleSubmit: (values, formikBag) => {
        formikBag.props.sendUser({
            ...values
        })
        formikBag.setStatus('form submitting');
        formikBag.resetForm();
    }
})(UserForm) // end export and send Form