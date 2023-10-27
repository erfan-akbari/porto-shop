import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';


function Login() {

  // alert
  const MySwal = withReactContent(Swal)

  // hook useFormik
  const form = useFormik({
    /// initialValues
    initialValues: {
      email: "",
      password: "",
      check: false
    },
    /// Submitting
    onSubmit: (values, { setSubmitting }) => {
      axios.get(`http://localhost:3000/users?email=${values.email}&password=${values.password}`)
        .then(({ data }) => {
          setTimeout(() => {

            if (data.length) {
              MySwal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login was successful',
                showConfirmButton: false,
                timer: 1500
              })
            } else {
              MySwal.fire({
                position: 'center',
                icon: 'error',
                title: 'No one was found.',
                showConfirmButton: false,
                timer: 1500
              })
            }
            localStorage.setItem("userID", data[0].id)
            setSubmitting(false)

          }, 3000);
        })
    },
    /// Validation
    validate: (values) => {
      const errors = {}

      if (values.email === '') {
        errors.email = "This field is mandatory"
      } else if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(values.email)) {
        errors.email = "Incorrect email"
      }

      if (values.password === '') {
        errors.password = "This field is mandatory"
      } else if (values.password.length < 6) {
        errors.password = "Minimum 6 characters"
      } else if (values.password.length > 14) {
        errors.password = "maximum 12 characters"
      }

      return errors
    }
  })
  /// JSX 
  return (
    <section className="dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center mx-auto my-10 lg:py-0">
        <div className="w-full bg-gray-50 rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link to={'/'} className="flex items-center justify-end text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-14 mr-2" src="/Logos/logo_ecomblack_lg.png" alt="logo" />
            </Link>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={form.handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" value={form.values.email} onBlur={form.handleBlur} onChange={form.handleChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                {
                  form.errors.email && form.touched.email &&
                  <span className='text-red-600 block pt-2 font-semibold'>{form.errors.email}</span>
                }
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" value={form.values.password} onBlur={form.handleBlur} onChange={form.handleChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                {
                  form.errors.password && form.touched.password &&
                  <span className='text-red-600 block pt-2 font-semibold'>{form.errors.password}</span>
                }
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" name='check' checked={form.values.check} onChange={form.handleChange} aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button type="submit" disabled={form.isSubmitting} className={`${form.isSubmitting ? 'bg-gray-200' : 'bg-lime-600 hover:bg-lime-700'} text-white w-full  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}>
                {form.isSubmitting ? 'Loading ...' : 'Sign in'}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link to={'/register'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login