import {Button} from './Button'

export const Task = (props) => {
  return (
    <div style={{
      marginTop: '8px',
      paddingLeft: '20px',
      borderBottom: props.isReady ? '1px solid red' : '1px solid black',
      padding: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>

      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <input
          style={{

          }}
          type={'checkbox'}
          checked={props.isReady}
          onChange={() => props.onChange
          (props.index)}
        />

        <p style={{
          paddingRight: '20px',
          paddingLeft: '10px',
          textDecoration: props.isReady ? 'line-through' : 'none'}}>
          {props.text}
        </p>

        {props.isReady && <p>govno!</p>}

      </div>
      <Button
        style={{
          background: 'blue',
          padding: '4px',
          color: 'white',
          borderRadius:'3px',
          border: 'none'
        }}
        text={'Удалить'}
        onClick={() => props.delete(props.index)}
      />
    </div>
  )
}
