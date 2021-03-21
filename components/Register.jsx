import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TextInput } from "../hooks/useForm";
import { userLogin, userRegister } from "../services/api";

export default function RegisterComponent() {
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const submitHandler = async (props) => {
    const { email, password } = props;
    try {
      await userRegister(email, password).then(() => {
        router.push("/login");
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="md:max-w-screen-md lg:max-w-screen-md mx-auto">
      <div className="border-2 p-4 border-b-2 flex flex-col">
        <h1 className="text-center text-xl font-serif">Register</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            const res = await submitHandler(values);
            if (res) {
              resetForm(initialValues);
            }
          }}
        >
          <Form>
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="email"
              inputstyle={"w-full p-4 rounded-md h-10 mt-4 mb-4"}
              required
            />

            <TextInput
              label="Password"
              name="password"
              type="password"
              placeholder="password"
              inputstyle={"w-full p-4 rounded-md h-10 mt-4"}
              required
            />

            <button
              type="submit"
              className="bg-blue-500 flex mx-auto px-4 py-2 mt-4 rounded-md"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
