import { useEffect, useState } from "react";
import { PROFILE } from "../utils/constants";

const Profile = () => {
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    const response = await fetch(`${PROFILE}`);
    const data = await response.json();
    setProfile(data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const { avatar_url, name, location, bio } = profile;

  return (
    <div className="my-4 w-48">
      <img src={avatar_url} alt={name} className="w-full rounded-lg" />
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{bio}</p>
    </div>
  );
};

export default Profile;
