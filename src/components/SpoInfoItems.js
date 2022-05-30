const SpoInfoItems = (props) => {
  return (
    <div className="text-sm sm:text-base">
      <h1 className="text-primary font-medium md:text-lg lg:text-xl xl:text-2xl">
        {props.text}
      </h1>
      <p className="">
        <span className="text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">
          {props.desc}
        </span>
        {props.span}
      </p>
    </div>
  )
}

export default SpoInfoItems
