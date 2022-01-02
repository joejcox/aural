import { Link } from "react-router-dom"

const MobileMenuLink = ({ children, path, onClick }) => {
  return (
    <div onClick={onClick}>
      <Link
        to={path}
        className="px-6 py-3 w-full text-center lg:w-auto text-gray-50 hover:text-white text-lg inline-block uppercase font-extrabold font-primary"
      >
        {children}
      </Link>
    </div>
  )
}

export default MobileMenuLink
