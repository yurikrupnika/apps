import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {
    Formik, Form, Field, FieldArray
} from 'formik';


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


const Context = React.createContext();

const Provider = (props) => {
    const login = React.useCallback((cb) => {
        return Promise.resolve().then(cb);
    }, []);
    const logout = React.useCallback((cb, c) => {
        return Promise.resolve().then(cb).catch(c);
    }, []);
    return (
        <Context.Provider
            value={{
                login
            }}
        >
            {props.children}
        </Context.Provider>
    );
}

const Login = (props) => {
    const authContext  =React.useContext(Context);
    const [form, setForm] = React.useState([
        {
            type: 'email',
            name: 'email',
            label: 'User',
        },
        {
            type: 'password',
            name: 'password',
            label: 'Email'
        }
    ]);
    return (
        <div>
            <Formik
                // initialValues={{ areas: [{ name: 'shit', description: '23123' }, { name: 'shita', description: 'lol' }] }}
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, formStuff) => {
                    console.log('values', values);  // eslint-disable-line
                    // props.history.push('/projects')
                    authContext.login(() => {
                        props.history.push('/projects')
                    });
                    // console.log('formStuff', formStuff); // eslint-disable-line
                }}
                render={(formProps) => {
                    console.log('formProps', formProps); // eslint-disable-line
                    const {values} = formProps;
                    const { handleSubmit, handleChange, touched, handleBlur, isSubmitting, errors } = formProps;
                    return (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <button type="submit" disabled={isSubmitting}>
                                admin
                            </button>
                        </form>
                    );
                }}
            />
        </div>
    );
}


export default Login;
