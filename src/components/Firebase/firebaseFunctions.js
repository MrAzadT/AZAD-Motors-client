import app from "./firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const googleSignIn = ({ setCurrentUser, history, from }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      setCurrentUser(user);
      history.replace(from);
    })
    .catch((error) => {
      console.log(error);
    });
};

const logout = (history, from) => {
  const auth = getAuth(app);
  signOut(auth)
    .then(() => {
      console.log("logged out");
      history.replace(from);
    })
    .catch((error) => {
      console.log("error");
    });
};

const signUpWithEmailPassword = (
  email,
  password,
  name,
  setCurrentUser,
  history
) => {
  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          setCurrentUser(user);
          console.log(user);
          history.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const loginWithEmailPassword = (email, password, setCurrentUser) => {
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setCurrentUser(user);
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export {
  logout,
  googleSignIn,
  signUpWithEmailPassword,
  loginWithEmailPassword,
};
