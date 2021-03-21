import { Formik, Form } from "formik";
import { TextAreaInput, TextInput } from "../hooks/useForm";
import { createNews } from "../services/api";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function NewNews() {
  const router = useRouter();
  const initialValues = {
    title: "",
    imageLink: "",
    paragraph: "",
  };

  const submitHandler = async (props) => {
    const { title, imageLink, paragraph } = props;
    try {
      await createNews(title, imageLink, paragraph).then(() => {
        router.push("/");
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col">
      {!Cookies.get("token") ? (
        <div>
          <p className="font-bold font-serif text-center text-xl">
            You have to login to create news
          </p>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            const res = await submitHandler(values);
            if (res) {
              console.log("succes");
              resetForm(initialValues);
            }
          }}
        >
          <Form>
            <TextInput
              label="Title"
              name="title"
              type="text"
              placeholder="Title"
              inputstyle={"w-full rounded-md h-10 mt-3 p-4 mb-6"}
            />

            <TextInput
              label="Image Link"
              name="imageLink"
              type="text"
              placeholder="Put your thumbnail image link"
              inputstyle={"w-full rounded-md h-10 mt-3 p-4 mb-6"}
            />

            <TextAreaInput
              label="News"
              name="paragraph"
              inputstyle={"w-full p-4 rounded-md mt-3"}
              placeholder="Write your news!"
            />

            <button
              type="submit"
              className="bg-peach font-bold p-4 rounded-md flex mx-auto mt-5"
            >
              Submit News
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
}
