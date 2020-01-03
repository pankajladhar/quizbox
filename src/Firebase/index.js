import { firebase as FirebaseReact } from "./../hooks/useFirebase";

let ReadFromFirebase = dbRef => {
  return FirebaseReact.database()
    .ref(dbRef)
    .once("value");
};

let UpdateInFirebase = (dbRef, key, obj) => {
  return FirebaseReact.database()
    .ref(`${dbRef}/${key}`)
    .update(obj);
  // return FirebaseReact.database().ref(dbRef).once('value')
};

let WriteInFirebase = (data, dbRef) => {
  return FirebaseReact.database()
    .ref(dbRef)
    .push(data);
};

export { ReadFromFirebase, UpdateInFirebase, WriteInFirebase };
