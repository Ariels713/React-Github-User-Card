import React from "react";
import { Button, Container } from "semantic-ui-react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";

const userValidation = Yup.object().shape({
  city: Yup.string().required("Please Enter User Name")
});

function UserName({handleSubmit}) {
  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={userValidation}
      onSubmit={(values, tools) => {
        tools.resetForm();
        handleSubmit(values.name)
      }}
    >
      {({ errors, touched }) => {
        return (
          <Container>
            <Form>
              {touched.city && errors.city && <p>{errors.city}</p>}
              <Field
                name="city"
                label="User Name"
                placeholder="Enter User Name"
                style={{ padding: "7px", width: "50%", marginRight: "1%" }}
              />

              <Button
                type="Submit"
                color="blue"
                content="Get User!"
                style={{ marginBottom: "5%", marginTop:'5%' }}
                // disabled={isSubmitting}
              />
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
}

export default UserName;
