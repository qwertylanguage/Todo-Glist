export const Button = (props) => {
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.text}
    </button>
  )
}
