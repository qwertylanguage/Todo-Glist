import {Button} from './Button'

export const Task = (props) => {
  return (
    <div style={{
      marginTop: '2px',
      padding: '2px 8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '2px solid grey',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <input
          type={'checkbox'}
          checked={props.isReady}
          onChange={() => props.onChange(props.index)}
        />

        <p
          style={{
            paddingRight: '20px',
            paddingLeft: '10px',
            textDecoration: props.isReady ? 'line-through' : 'none'
          }}
        >
          {props.text}
        </p>

          <div style={{
              opacity: '50%',
              fontSize: '14px',
          }}>
              {props.createdAt}
          </div>

      </div>

      <Button
        style={{
          background: props.isReady ? '#ec644b' : '#4193a9',
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
