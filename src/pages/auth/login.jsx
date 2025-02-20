import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, selectToken } from "../../features/auth/authSlice";
import { useNavigate } from "react-router";

export default function Login() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(10, "Password must be at least 10 characters")
      .required("Password is required")
  });
  return (
    <div className="flex justify-center">
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const result = await dispatch(fetchLogin(values));

            if (result?.payload?.accessToken) {
              toast.success("Login success");
              navigate("/");
            } else {
              toast.error("Invalid credentials");
            }
          } catch (error) {
            toast.error("An error occurred during login.");
          } finally {
            resetForm(); // Only reset after the request is done
          }
        }}
      >
        {/* Form */}
        {({ isSubmitting }) => (
          <Form className=" w-1/3 bg-white p-10 rounded-md">
            {/* username */}
            <h1 className="text-3xl text-center text-blue-800 font-bold">
              Login Form
            </h1>
            <div className="mb-5 ">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Username
              </label>
              <Field
                type="text"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your username"
              />
              <ErrorMessage
                className="text-red-500"
                name="username"
                component="div"
              />
            </div>
            {/* password */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Password
              </label>
              <Field
                type="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your username"
              />
              <ErrorMessage
                className="text-red-500"
                name="password"
                component="div"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 px-10 py-2.5 rounded-md text-white"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
}
