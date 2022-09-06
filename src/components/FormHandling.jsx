import { Field, Form, Formik } from 'formik'
import React from 'react'

export const FormHandling = () => {
    return (
        <div>
            <h1>Signup Page</h1>
            <Formik initialValues =
                 {{
                    firstName:"",
                    lastName:"",
                    email:"",
                }}
                
                onSubmit={async(values)=>{
                   await new Promise((r) => {
                        setTimeout(r,500)
                    })
                        alert must be written in separate line
                    alert(JSON.stringify(values));

                }}
                >

                    {/* form componenet from fomk */}
                    <Form>
                        {/* no need to write validation here */}
                        <label>First Name:</label>
                        <Field name = "firstName"/>

                        <label>Last Name:</label>
                        <Field name = "lastName"/>

                        <label>Email Address:</label>
                        <Field name = "email"/>

                        <button type = "submit">Submit</button>
                    </Form>                
            </Formik>
        </div>
    )
}


// import { Field, Form, Formik } from 'formik'
// import React from 'react'

// const FormHandling = () => {
//     return (
//         <div>
//             <Formik initialValues = {{fName :"", lName : "", Email : "",}}

//                 onSubmit = {async(values)=>{await new Promise ((r)=>{setTimeout(r,500)})
//                 alert(JSON.stringify(values))}}
//             >
//                 {/* form componenet from formik */}
//                 <Form>
//                     <label>First name:</label>
//                     <Field name="fName"/>

//                     <label>Last Name</label>
//                     <Field name ="lName"/>

//                     <label>Email</label>
//                     <Field name = "email"/>
//                 </Form>

//             </Formik>
//         </div>
//     )
// }

// export default FormHandling

