const Container = ({ children, classes }) => (
  <div
    className={`container mx-auto max-w-6xl px-6 2xl:px-0 ${
      classes ? classes : ""
    }`}
  >
    {children}
  </div>
)

export default Container
