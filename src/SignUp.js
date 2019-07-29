import React from 'react'
import { Formik } from 'formik'
import { Form, FormField, TextInput } from 'grommet'

export default function SignUp() {
  return (
    <>
      <h1>Sign Up</h1>
      <Formik>
        {props => (
          <Form>
            <FormField label='Username'>
              <TextInput />
            </FormField>
          </Form>
        )}
      </Formik>
    </>
  )
}
