import SignUpForm from "components/Form/SignUpForm"
import { Navigate, Link } from "react-router-dom"
import useAuth from "hooks/useAuth"
import { Helmet } from "react-helmet-async"

const SignUp = () => {
  const { user } = useAuth()

  return user ? (
    <Navigate to="/" />
  ) : (
    <SignUpForm>
      <Helmet>
        <title>Create Account | Aural Records</title>
      </Helmet>
      <h1 className="text-3xl font-secondary">Create Account</h1>
      <p className="mb-6 text-gray-600">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-main-400">
          Sign In
        </Link>
      </p>
    </SignUpForm>
  )
}

export default SignUp
