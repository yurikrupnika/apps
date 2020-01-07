import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import a from 'firebase/storage';

// import firebase, {collection} from 'firebase/firestore';
import auth from 'firebase/auth';
import { Formik, Field, Form } from 'formik';
import request from 'axios';
import { Input } from '@material-ui/core';

const firebaseConfig = {
    apiKey: 'AIzaSyDaUJ7GyEIr35qfLSuu6RAKL7YvD5zZevQ',
    authDomain: 'music-pzl.firebaseapp.com',
    databaseURL: 'https://music-pzl.firebaseio.com',
    projectId: 'music-pzl',
    storageBucket: 'music-pzl.appspot.com',
    messagingSenderId: '738703580147',
    appId: '1:738703580147:web:b3024fb238b12042a3d086',
    measurementId: 'G-9QSRBDFET2'
};

firebase.initializeApp(firebaseConfig);
// console.log('firebase', firebase.auth().onAuthStateChanged);
// console.log('auth', auth);
// auth()
firebase.auth()
    .onAuthStateChanged((user) => {
        if (user) {
            console.log('has user');
        } else {
            console.log('has not user');
        }
    });

const db = firebase.firestore();
const storage = firebase.storage();


// const provider = new firebase.auth.GithubAuthProvider();

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

// const Provider = (props) => {
//     const login = React.useCallback((cb) => {
//         return Promise.resolve().then(cb);
//     }, []);
//     const logout = React.useCallback((cb, c) => {
//         return Promise.resolve().then(cb).catch(c);
//     }, []);
//     return (
//         <Context.Provider
//             value={{
//                 login
//             }}
//         >
//             {props.children}
//         </Context.Provider>
//     );
// }
const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('user:email');
const loginUser = (email, password) => {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('result', result);
            console.log('user', user, token);
        //     return result.user.getIdToken().then(idToken => {
        //         // Session login endpoint is queried and the session cookie is set.
        //         // CSRF protection should be taken into account.
        //         // ...
        //         console.log('idToken', idToken);
        //         // const csrfToken = getCookie('csrfToken');
        //         // return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
        // });
            // retrn firebase.auth().signInWithCustomToken(token).catch(function(error) {
            //     console.log(error);
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // });
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log('error', error);
            // ...
        });
    // return firebase.auth().signInWithEmailAndPassword(email, password);
};

function signOut() {
    firebase.auth()
        .signOut()
        .then(function (r) {
            // Sign-out successful.
            console.log(r);
        })
        .catch(function (error) {
            console.log('error', error);
            // An error happened.
        });
}

function getProjects(e) {
    db.collection('users')
        .get()
        .then((res) => {
            // console.log('docks response', res);
            const data = res.docs.map((v) => {
                console.log(v);
                return v.data();
            });
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error.message);
            console.log(error.stack);
        });
}

function uploadFileToBucket(e) {
    console.log(e.target.files);
    const files = Array.from(e.target.files);
    const formData = new FormData();

    // console.log('formData', formData);
    // console.log('files', files);
    // files.forEach((file, i) => {
    //     formData.append(i, file)
    // });
    const ref = storage.ref(`files/${files[0].name}`);
    const tast = ref.put(files[0]);
    tast.on('state_changed', (snapshot) => {
        const precentage = snapshot.bytesTransferred / snapshot.totalBytes;
        console.log('precentage', precentage);
    }, (error) => {
        console.log(error);
    }, () => {
        console.log('completed uploading');
    });
}
function getA() {
    return request.get('/api/a', {
        headers: {
            Authorization: 'Bearer eeaed4a8e43f3476951564cecb0288404de70173'
        }
    })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
}

const Login = () => {
    // const authContext = React.useContext(Context);
    return (
        <div>
            <Input type="file" onChange={uploadFileToBucket} />
            <Button onClick={getA}>
                get a
            </Button>
            <Button onClick={getProjects}>
                get Projects
            </Button>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => {
                    // authContext.login(() => {});
                    // console.log('app', app);
                    // console.log('firebase', firebase);
                    // console.log('auth', auth);
                    // firebase.auth().signInWithRedirect(provider)
                    // request.post('/api/login', {
                    return loginUser(values.email, values.password);
                    // request.post('/api/login', {
                    //     email: 'krupnik.yuri@gmmail.com',
                    //     password: 'ludmila900',
                    //     // headers: {
                    //     //     'Authorization': 'Bearer 12345'
                    //     // }
                    // })
                    // // request.get('/api/login')
                    //     .then((res) => {
                    //         console.log(res);
                    //     })
                    //     .catch((rerror) => {
                    //         console.log(rerror);
                    //     });
                }}
            >
                {(formProps) => {
                    // console.log('formProps', formProps); // eslint-disable-line
                    const { values } = formProps;
                    const {
                        handleSubmit, handleChange, touched, handleBlur, isSubmitting, errors
                    } = formProps;
                    return (
                        <div>
                            <div>Register</div>
                            <Button onClick={signOut}>
                                signout
                            </Button>
                            <Form onSubmit={handleSubmit}>
                                <Field
                                    component={RenderInput}
                                    name="email"
                                    type="email"
                                    fullWidth
                                />
                                <Field
                                    component={RenderInput}
                                    name="password"
                                    type="password"
                                    fullWidth
                                />
                                {errors.email && touched.email && errors.email}
                                {errors.password && touched.password && errors.password}
                                <Button type="submit" disabled={isSubmitting}>
                                    login
                                </Button>
                            </Form>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
};


export default Login;
