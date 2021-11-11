import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase.config";

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

export { googleSignIn };
