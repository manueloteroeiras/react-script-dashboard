import axios from 'axios';

import API_URL from './db';

const login = async (username, password) => {

  try {
    let data = {};
    await axios(`${ API_URL }/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { email : username, password : password }
    }).then(response => {
        data = response.data
        console.log({ data: data, alert:"ALERTTT" })
    }).catch((err) => {
      console.log(err)
    });

    if (!data) throw 'login failed';

    return data;

  } catch(e) {
    throw e;

  }

}

const getUsers = async () => {

  try {
    let data = {};
    await axios(`${ API_URL }/api/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
        data = response.data
    }).catch((err) => {
      console.log(JSON.stringify(err))
    });

    if (!data) throw 'login failed';

    return data;

  } catch(e) {
    throw e;

  }

}

const addUser = async (user) => {
  try {
    let data = {};
    await axios(`${ API_URL }/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: user
    }).then(response => {
      console.log(response)
        data = response.data
    }).catch((err) => {
      console.log(JSON.stringify(err))
    });

    if (!data) throw 'login failed';

    return data;

  } catch(e) {
    throw e;

  }

}
const updateUser = async (user) => {

  try {
    let data = {};
    await axios(`${ API_URL }/api/users/${ user._id }`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data: user
    }).then(response => {
      console.log(response)
        data = response.data
    }).catch((err) => {
      console.log(JSON.stringify(err))
    });

    if (!data) throw 'login failed';

    return data;

  } catch(e) {
    throw e;

  }

}
const deleteUser = async (user) => {

  try {
    let data = {};
    await axios(`${ API_URL }/api/users/delete/${ user._id }`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      console.log(response)
        data = response.data
    }).catch((err) => {
      console.log(JSON.stringify(err))
    });

    if (!data) throw 'login failed';

    return data;

  } catch(e) {
    throw e;

  }

}

  
export {
  login,
  getUsers,
  addUser,
  deleteUser,
  updateUser
}