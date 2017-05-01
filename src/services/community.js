import axios from 'axios';

import API_URL from './db';


const getCommunities = async (username, password) => {

  try {
    let data = {};
    await axios(`${ API_URL }/api/community`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
        data = response.data.result
        console.log({ data: data, alert:"ALERTTT" })
    }).catch((err) => {
      console.log(JSON.stringify(err))
    });

    if (!data) throw 'login failed';

    return data;

  } catch(e) {
    throw e;

  }

}
const addCommunities = async (community) => {

  try {
    let data = {};

    await axios(`${ API_URL }/api/community`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data : community
    }).then(response => {
        data = response.data
        console.log({ data: data, alert:"ALERTTT" })
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
  getCommunities,
  addCommunities
}