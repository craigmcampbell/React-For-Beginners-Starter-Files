import Rebase from 're-base';
import firebase from 'firebase';
import configData from "./config.json";

const firebaseApp = firebase.initializeApp({
    apiKey: configData.apiKey,
    authDomain: configData.authDomain,
    databaseURL: configData.databaseURL
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }; // A named export, versus default

export default base;
