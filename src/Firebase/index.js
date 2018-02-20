import firebase from 'firebase';
import Configuration from './../Configuration';


let config = {
    apiKey: Configuration.FireBaseConfiguration.apiKey,
    authDomain: Configuration.FireBaseConfiguration.authDomain,
    databaseURL: Configuration.FireBaseConfiguration.databaseURL,
    projectId: Configuration.FireBaseConfiguration.projectId,
    storageBucket: Configuration.FireBaseConfiguration.storageBucket,
    messagingSenderId: Configuration.FireBaseConfiguration.messagingSenderId
};

let FirebaseReact = firebase.initializeApp(config);

let ReadFromFirebase = (dbRef) => {
    return FirebaseReact.database().ref(dbRef).once('value')
}

let UpdateInFirebase = (dbRef, key, obj) => {
    return FirebaseReact.database().ref(`${dbRef}/${key}`).update(obj);
    // return FirebaseReact.database().ref(dbRef).once('value')
}

let WriteInFirebase = (data, dbRef) => {
    console.log(data)
    return FirebaseReact.database().ref(dbRef).push(data);
}

export { ReadFromFirebase, UpdateInFirebase, WriteInFirebase };