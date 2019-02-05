import { FETCH_USERS, NEW_USER, DELETE_USER, LOGIN_USER, UPDATE_PASSWORD, UPDATE_ACCOUNT, PIC_UPDATE, LOGOUT } from './types';
import { Platform } from 'react-native';
import { AsyncStorage } from 'react-native';

const serverIp = Platform.select({
    ios: 'http://localhost:5000',
    android: 'http://10.0.3.2:5000'
})

export const fetchUsers = () => dispatch => {
        AsyncStorage.getItem('email')
        .then(result => dispatch({
            type: FETCH_USERS,
            payload: result
        }),
            (error) => {
                console.log(error.toString())
            }
        )

}

export const logout = () => dispatch => {
    AsyncStorage.removeItem('email')
    AsyncStorage.removeItem('password')
    dispatch({
        type: LOGOUT,
        payload: "success"
    })
}


export const createUser = postData => dispatch => {
    AsyncStorage.setItem('email', this.state.email);
    AsyncStorage.setItem('password', this.state.password);

}

export const deleteUser = email => dispatch => {
    fetch(serverIp+"/api/users/delete?email=" + email,
        {
            method: "GET",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then((result) => dispatch({
            type: DELETE_USER,
            payload: result
        }),
            (error) => dispatch({
                type: DELETE_USER,
                payload: error
            })
        )
}

export const loginUser = postData => dispatch => {

    fetch(serverIp+"/api/login",
        {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(
            (result) => dispatch({
                type: LOGIN_USER,
                payload: result
            }),
            (error) => dispatch({
                type: LOGIN_USER,
                payload: error
            })
        )
}

export const updatePassword = postData => dispatch => {
    fetch(serverIp+"/api/update",
        {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(
            (result) => dispatch({
                type: UPDATE_PASSWORD,
                payload: result
            }),
            (error) => dispatch({
                type: UPDATE_PASSWORD,
                payload: error
            })
        )
}

export const updateAccount = (postData) => dispatch => {
    fetch(serverIp+"/api/users/acupdate",
        {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(
            (result) => dispatch({
                type: UPDATE_ACCOUNT,
                payload: result
            }),
            (error) => dispatch({
                type: UPDATE_ACCOUNT,
                payload: error
            })
        )
}

export const updatePic = (formData) => dispatch => {
    fetch(serverIp+'/api/upload/pic', {
        method: 'POST',
        body: formData,
    })
        .then(res => res.json())
        .then((response) => dispatch({
            type: PIC_UPDATE,
            payload: response
        }));
}