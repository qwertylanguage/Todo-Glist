import {Task} from './Task'
import {useEffect, useState} from 'react'
import {Input} from './Input'
import {Button} from './Button'
import {Modal} from "./Modal";

const App = () => {
    const [list, setList] = useState([])
    const [input, setInput] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [backgroundUrl, setBackgroundUrl] = useState('')
    const [background, setBackground] = useState('')

    useEffect(() => {
        if (!localStorage.getItem('data')) {
            localStorage.setItem('data', JSON.stringify([]))
        }

        if (localStorage.getItem('bg')) {
            setBackground(localStorage.getItem('bg'))
        }

        setList(() => JSON.parse(localStorage.getItem('data')))
    }, [])

    const inputOnChange = (e) => {
        setInput(e.target.value)
    }

    const backgroundUrlOnChange = (e) => {
        setBackgroundUrl(e.target.value)
    }

    const openModal = () => {
        setShowModal(() => true)
    }

    const closeModal = () => {
        setShowModal(() => false)
    }

    const addItem = () => {
        setList((prev) => {
            const data = [...prev, {text: input, isReady: false, createdAt: String(new Date().toUTCString())}]

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
                    return {...item, isReady: !item.isReady}
                } else {
                    return item
                }
            })

            localStorage.setItem('data', JSON.stringify(data))
            return data
        })
    }

    const submitUrl = () => {
        localStorage.setItem('bg', backgroundUrl)
        setBackground(backgroundUrl)
        closeModal()
    }

    return <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        background: `url("${background}") no-repeat center center fixed`,
        backgroundSize: 'cover'
    }}>
        <Button
            onClick={openModal}
            style={{
                position:'absolute',
                top:'32px',
                left:'20px',
                background: '#4193a9',
                padding: '4px',
                color: 'white',
                borderRadius:'3px',
                border: 'none'
            }}
            text={'Сменить фон'}
        />

        {showModal && <Modal onClose={closeModal}>
            <div style={{
                border: '2px solid grey',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                padding: '25px',
                zIndex: 999,
            }}>
                <input
                    value={backgroundUrl}
                    type={'text'}
                    onChange={backgroundUrlOnChange}
                    style={{
                        width: '400px',
                    }}
                />
                <Button
                    onClick={submitUrl}
                    style={{
                        background: '#4193a9',
                        padding: '4px',
                        color: 'white',
                        borderRadius:'3px',
                        border: 'none',
                        marginLeft: '8px'
                    }}
                    text={'Подтвердить'}/>
            </div>
        </Modal>}

        <div style={{
            width: '600px',
            paddingTop: '15px',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Input
                    style={{
                        width: '100%',
                        margin: '8px',
                        padding: '8px'
                    }}
                    value={input}
                    onChange={inputOnChange}
                />
                <Button
                    style={{
                        background: '#4193a9',
                        padding: '4px',
                        color: 'white',
                        borderRadius:'3px',
                        border: 'none'
                    }}
                    isDisabled={input.length === 0}
                    text={'Добавить'}
                    onClick={addItem}
                />
            </div>

            {list.length === 0 && <p>List is empty!</p>}

            {list.length > 0 && list.map((item, index) => {
                return <Task createdAt={item.createdAt} text={item.text} delete={deleteItem} index={index} isReady={item.isReady} onChange={onChange}/>
            })}
        </div>
    </div>
}

export default App
