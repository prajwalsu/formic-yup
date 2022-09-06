import { useFormik } from "formik";
import React from "react";
import { signUpSchema } from "../schema/Schema";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Registration = () => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            typ="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name ? <p style={{ color: "red" }}>{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
          />
          {errors.email ? <p style={{ color: "red" }}>{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            name="password"
            type="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor=""> Confirm Password</label>
          <input
            type="password"
            value={values.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
          {errors.confirmPassword ? (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          ) : (
            ""
          )}
        </div>
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};

export default Registration;