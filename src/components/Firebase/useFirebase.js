import app from "./firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
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

export { logout, googleSignIn };
