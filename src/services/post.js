
import API_URL from './db';

const get_posts = async () => {
  
  try {
    let data = []
    await fetch(`${ API_URL }/api/posts`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
        response.json()
        data = response._bodyInit
    });

    if (!data) throw 'login failed';

    return JSON.parse(data).result;

  } catch(e) {

    throw e;

  }

}

const create_post = async (post) => {

  try {
    let data = {};
    await fetch(`${ API_URL }/api/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    }).then(response => {
        response.json()
        data = response._bodyInit
    }).catch((err) => {
      console.log(JSON.stringify(err))
    });

    if (!data) throw 'Error failed';

    return JSON.parse(data);

  } catch(e) {
    throw e;

  }

}

const put_like = async (post) => {
  
  try {
    let data = {};
    await fetch(`${ API_URL }/api/posts/${ post._id }`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    }).then(response => {
        response.json()
 
        data = response._bodyInit
    }).catch((err) => {
      console.log(JSON.stringify(err))
    });

    if (!data) throw 'Error failed';

    return JSON.parse(data);

  } catch(e) {
    throw e;

  }

}

const fetch_comments = async (post) => {
  
  try {
    let data = {};
    await fetch(`${ API_URL }/api/comments/${ post._id }`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }      
    }).then(response => {
        response.json()
        console.log(response)
        data = response._bodyInit
    }).catch((err) => {
      console.log(JSON.stringify(err))
    });

    if (!data) throw 'Error failed';

    return JSON.parse(data);

  } catch(e) {
    throw e;

  }

}



export { create_post, get_posts, put_like, fetch_comments }