import React from 'react';
import PropTypes from 'prop-types';

// import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { Formik, Form, Field } from 'formik';
import { FormHelperText } from '@material-ui/core';


function RenderInput(props) {
    const {
        field, form, fullWidth, label, multiline, rows
    } = props;

    const { errors } = form;
    const {
        name, value, onChange, onBlur
    } = field;
    return (
        <FormControl fullWidth={fullWidth} component="div">
            <TextField
                multiline={multiline}
                rows={rows}
                label={label}
                value={value}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors[name]}
            />
            {errors && <FormHelperText>{errors[name]}</FormHelperText>}
        </FormControl>
    );
}

RenderInput.defaultProps = {
    fullWidth: false,
    multiline: false,
    label: '',
    rows: 0,
};

RenderInput.propTypes = {
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }).isRequired,
    form: PropTypes.shape({
        errors: PropTypes.shape({})
    }).isRequired,
    fullWidth: PropTypes.bool,
    multiline: PropTypes.bool,
    label: PropTypes.string,
    rows: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

const Basic = (props) => {
    const { yes } = props;
    return (
        <div>
            <h1>
                Any place in your app!
                {!!yes}
            </h1>
            <Formik
                initialValues={{
                    name: 'practice area name',
                    description: 'my description'
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, formStuff) => {
                    // console.log('formStuff', formStuff);
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
                    formStuff.resetForm({
                        name: '',
                        description: ''
                    });
                }}
                render={(formProps) => {
                    // console.log('errors', formProps.errors);
                    // console.log('formProps', formProps);

                    const { status } = formProps;
                    return (
                        <Form>
                            <div>
                                <Field
                                    type="text"
                                    name="name"
                                    component={RenderInput}
                                    label="Name"
                                    fullWidth
                                />
                            </div>
                            <div>
                                <Field
                                    type="text"
                                    name="description"
                                    component={RenderInput}
                                    rows={3}
                                    multiline
                                    fullWidth
                                />
                            </div>
                            <button type="submit" disabled={false}>
                                Submit
                            </button>
                            <div>{status}</div>
                        </Form>
                    );
                }}
            />
        </div>
    );
};

Basic.defaultProps = {
    yes: true
};

Basic.propTypes = {
    yes: PropTypes.bool
};

export default Basic;
