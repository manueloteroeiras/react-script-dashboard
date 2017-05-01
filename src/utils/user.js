
// import API_URL from './db';

import axios from 'axios';

const API_URL = "http://localhost:8080"

export default async (username, password) => {
  try {
    let data = {};
    await axios(`${ API_URL }/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { email : username, password : password }
    }).then(response => {
        response.json()
        data = response.
        console.log(data)
    }).catch((err) => {
      console.log(JSON.stringify(err))
    });

    if (!data) throw 'login failed';

    return data;

  } catch(e) {
    throw e;

  }

}


