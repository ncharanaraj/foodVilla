import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Charan",
    email: "cn@gmail",
    password: "admin",
  },
});

export default UserContext;
