import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full bg-black text-white p-4 mt-8 flex justify-between">
      <div>Developed by {user.email} with 💖</div>
      <div className="flex gap-3">
        <p>Linkedin</p>
        <p>X</p>
        <p>GitHub</p>
      </div>
    </div>
  );
};

export default Footer;
