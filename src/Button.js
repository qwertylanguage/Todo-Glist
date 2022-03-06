export const Button = (props) => {
  return (
    <button disabled={props.isDisabled} onClick={props.onClick} style={props.style}>
      {props.text}
    </button>
  )
}
