import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TextInput } from "../hooks/useForm";
import { getAllUser, userLogin } from "../services/api";
import Link from "next/link";

export default function LoginComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    async function getUsers() {
      const a = await getAllUser();
      setData(a);
    }

    getUsers();
  }, []);

  const submitHandler = async (props) => {
    const { email, password } = props;
    try {
      const result = data.findIndex(
        (item) => item.email === email && item.password === password
      );
      if (result !== -1) {
        Cookies.set("token", email);
        router.push("/");
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="md:max-w-screen-md lg:max-w-screen-md mx-auto">
      <div className="border-2 p-4 border-b-2 flex flex-col">
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
              Login
            </button>

            {error && <p>Wrong email or Password!</p>}

            <Link href="/register" passHref>
              <a className="underline cursor-pointer" href="/register">
                Don't have an account? Register Here
              </a>
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
