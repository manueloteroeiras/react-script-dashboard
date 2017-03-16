import * as firebase from 'firebase';

const config = {
    apiKey: process.env.APIKEY || "AIzaSyD30wbd5RnU7D7kmMZ1cCmL8RRryyccERQ",
    authDomain: process.env.AUTHDOMAIN || "uai-registro.firebaseapp.com",
    databaseURL: process.env.DATABASEURL || "https://uai-registro.firebaseio.com",
    storageBucket: process.env.STORAGEBUCKET || "uai-registro.appspot.com",
    messagingSenderId: process.env.MESSAGINGSENDERID || "151225139509"
}



firebase.initializeApp(config);

export default firebase;