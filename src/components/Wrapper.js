const Wrapper = (props) => {
  return (
    <div className="container mx-auto w-full px-4 md:px-0 ">
      {props.children}
    </div>
  )
}

export default Wrapper
