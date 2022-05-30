export const PrimaryButton = (props) => {
  return (
    <div
      className={`px-4 py-2 mr-6 bg-primary rounded-md cursor-pointer text-sm sm:text-base`}
    >
      {props && props.text}
    </div>
  )
}

export const SecondaryButton = (props) => {
  return (
    <div
      className={`px-4 py-2 bg-transparent rounded-md cursor-pointer text-sm sm:text-base`}
    >
      {props && props.text}
    </div>
  )
}
