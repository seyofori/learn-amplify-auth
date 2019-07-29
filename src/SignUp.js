import React from 'react'
import { Formik } from 'formik'
import { Form, FormField, TextInput } from 'grommet'

export default function SignUp() {
  return (
    <>
      <h1>Sign Up</h1>
      <Formik>
        {({ handleSubmit, values, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <TextInput
              values={values.username}
              name='username'
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </form>
        )}
      </Formik>
    </>
  )
}
