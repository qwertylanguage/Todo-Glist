import {Task} from './Task'
import {useEffect, useState} from 'react'
import {Input} from './Input'
import {Button} from './Button'

const App = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState()

  useEffect(() => {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify([]))
    }

    setList(() => JSON.parse(localStorage.getItem('data')))
  }, [])

  const inputOnChange = (e) => {
    setInput(e.target.value)
  }

  const addItem = () => {
    setList((prev) => {
      const data = [...prev, {text: input, isReady: false}]

      localStorage.setItem('data', JSON.stringify(data))
      return data
    })
  }

  const deleteItem = (index) => {
    setList((prev) => {
      const data = [...prev.filter((_, i) => i !== index)]

      localStorage.setItem('data', JSON.stringify(data))
      return data
    })
  }

  const onChange = (index) => {
    setList((prev) => {
      const data = prev.map((item, i) => {
        if (index === i) {
          return {text: item.text, isReady: !item.isReady}
        } else {
          return item
        }
      })

      localStorage.setItem('data', JSON.stringify(data))
      return data
    })
  }

  return <div style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  }}>
    <div style={{
      width: '600px',
      paddingTop: '15px',
    }}>

      <div style={{
        display: 'flex',

      }}>
      <Input
        style={{
        }}
        value={input}
        onChange={inputOnChange}
      />
      <Button text={'Dobavit'} onClick={addItem}/>
      {list.length === 0 && <p>List is empty!</p>}

      </div>

      {list.length > 0 && list.map((item, index) => {
        return <Task text={item.text} delete={deleteItem} index={index} isReady={item.isReady} onChange={onChange}/>
      })}
    </div>
  </div>
}

export default App
