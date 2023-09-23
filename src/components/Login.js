import { ErrorMessage, Field, Formik } from "formik";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

const Login = () => {
  const { user, setUser, setIsLoggedIn } = useContext(UserContext);
  const { email, password } = user;
  const navigate = useNavigate();
  return (
    <div className="m-auto max-w-screen-lg h-3/4">
      <h1 className="font-bold">Login</h1>
      <Formik
        initialValues={{ email, password }}
        validationSchema={object({
          email: string()
            .email("Invalid email address")
            .required("Email is required"),
          password: string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters long")
            .matches(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            ),
        })}
        onSubmit={(values, { resetForm }) => {
          setUser(values);
          setIsLoggedIn(true);
          navigate("/about");
          resetForm();
        }}
      >
        {(formik) => (
          <div className="max-w-sm mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="font-semibold">
                  Email address
                </label>
                <Field name="email" type="email" className="p-2 bg-gray-50" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="p-2 bg-gray-50"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-green-200 font-semibold mt-4 w-full"
              >
                Login
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
