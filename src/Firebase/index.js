import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDSCvkaJk7Lqq0ZiBkVpniJOz3yGgblrdk",
    authDomain: "butiltwithreact.firebaseapp.com",
    databaseURL: "https://butiltwithreact.firebaseio.com",
    projectId: "butiltwithreact",
    storageBucket: "butiltwithreact.appspot.com",
    messagingSenderId: "614492701919"
};

let FirebaseReact = firebase.initializeApp(config);

let ReadFromFirebase = (dbRef) => {
    return FirebaseReact.database().ref(dbRef).once('value')
}

let UpdateInFirebase = (dbRef, key, obj) => {
    return FirebaseReact.database().ref(`${dbRef}/${key}`).update(obj);
    // return FirebaseReact.database().ref(dbRef).once('value')
}

let WriteInFirebase = (dbRef) => {
    let data =    {
        "githubId": "galeel",
        "githuburl": "https://pankajladhar.github.io/react-logo-generator",
        "name": "React Logo Generator",
        "thumb": "/projects/my-app/thumb",
        "desc": "This is Play Area to Change to generate React Logo with different colors",
        "twitterId": "pankajladhar",
        "submissionDate": "2017 Sept 15",
        "exp": "pankaj"
    }
    FirebaseReact.database().ref(dbRef).push(data);
}
// WriteInFirebase('reactweb');

export { ReadFromFirebase, UpdateInFirebase };