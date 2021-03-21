import { useField } from "formik";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={props.labelstyle} htmlFor={props.id || props.name}>
        {label}
      </label>
      <br />

      <input
        className={props.inputstyle}
        {...field}
        {...props}
        onClick={props.onClick}
        onKeyUp={props.onKeyUp}
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export const TextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={props.labelstyle} htmlFor={props.id || props.name}>
        {label}
      </label>
      <br />

      <textarea
        className={props.inputstyle}
        {...field}
        {...props}
        onClick={props.onClick}
        onKeyUp={props.onKeyUp}
        cols="10"
        rows="10"
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};
