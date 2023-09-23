import { Outlet, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-xl font-bold my-4">About us</h1>
      <p className="mb-2">
        I am currently working as a Frontend Developer at Sutradhar, where I
        hold a leadership role within a two-member Body of Knowledge (BoK) team.
        I am responsible for leading the UI project named "BOK." This project
        serves as a platform designed for small businesses and service providers
        to establish their online presence and reach a wider customer base by
        creating their stores on our platform.
      </p>
      <p className="my-2">
        The BOK project has been developed utilizing a technology stack that
        includes React, React Router, Sutra library, i18n for
        internationalization, Formik for form management, and the Chakra
        component library for UI components.
      </p>
      <button
        className="bg-green-200 px-2 rounded-md font-semibold"
        onClick={() => navigate("profile")}
      >
        See More
      </button>
      <Outlet />
    </div>
  );
};

export default About;
