import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const login = () => {
    setCurrentUser({ id: 1, name: "John", profilePic: "" });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add PropTypes validation for `children`
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
