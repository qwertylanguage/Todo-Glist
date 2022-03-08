export const Button = (props) => {
  return (
      <button
          disabled={props.isDisabled}
          onClick={props.onClick}
          style={{
              background: '#4193a9',
              padding: '4px',
              color: 'white',
              borderRadius:'3px',
              border: 'none',
              ...props.style,
          }}>
        {props.text}
      </button>
  )
}
