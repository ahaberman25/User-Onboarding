import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserForm = props => {
    console.log('form', props)

    return (
        // - [ ] Name
        // - [ ] Email
        // - [ ] Password
        // - [ ] Terms of Service (checkbox)
        // - [ ] A Submit button to send our form data to the server.
        <Form>
            <Field name='name' placeholder='Your Name' />
            {props.touched.name && props.errors.name ? (<span className="error">{props.errors.name}</span>) : null}
            <Field name='email' placeholder='Your Email' />
            {props.touched.email && props.errors.email ? (<span className="error">{props.errors.email}</span>) : null}
            <Field name='password' type='password' placeholder='Create Password' />
            {props.touched.password && props.errors.password ? (<span className="error">{props.errors.password}</span>) : null}
            <Field name='tos' type='checkbox' />
            {props.touched.tos && props.errors.tos ? (<span className="error">{props.errors.tos}</span>) : null}
            <button type='submit'>Submit</button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: props => {
        return {
            name: props.name || '',
            email: props.email || '',
            password: props.password || '',
            tos: props.name || false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required to submit this form'),
        email: Yup.string().required('Email is required to submit this form').email('Please use a valid email address'),
        password: Yup.string().required('A Password is required to submit this form'),
        tos: Yup.boolean().oneOf([true], 'Please agree to the Terms of Service')
    }),
    handleSubmit: (values, formikBag) => {

    }
})(UserForm) // end export and send Form