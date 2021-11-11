import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setCurrentUser(user);
        console.log(uid);
      } else {
        setCurrentUser("");
      }
    });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
