import React, { useContext } from "react";
import { firebase } from "./useFirebase";
console.log("firebase", firebase);

const firebaseContext = React.createContext(firebase);

const withFirebase = WrappedComponent => {
  const ComponentWithFirebaseCtx = props => {
    const firebase = useContext(firebaseContext);
    const currentUser = firebase.auth().currentUser;
    return (
      <WrappedComponent
        {...props}
        firebase={firebase}
        currentUser={currentUser}
      />
    );
  };
  return ComponentWithFirebaseCtx;
};

export { firebase };
export default withFirebase;
