import styles from './Componentes/Menu.module.css'
import { useState, useRef, useEffect } from 'react'
import { Card } from './Componentes/Card'

const App = () => {
  const [item, setItem] = useState('')  
  const [name, setName] = useState('')
  const [error, setError] = useState(null)
  const inputRef = useRef(true)
  const inputRefName = useRef(true)

const handleSubmit = (event) => {
    event.preventDefault();
}

  const handleChange = (event) => {
    const newItem = event.target.value 
    setItem(newItem.toUpperCase().trim())
  }
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current = item === ''
      return
    }
    if (item.slice(0, 1) !== '#') {
      setError('Debe comenzar con formato HEX')
      return
    }
    if (item.length > 7){
      setError('El formato HEX debe ser menor de 8 caracteres')
      return
    } setError(null)
  }, [item])
  
  const handleChangeName = (event) => {
    const newName = event.target.value
    setName(newName.trim())
  }
  useEffect(() => {
    if (inputRefName.current) {
      inputRefName.current = name === ''
      return
    }
    if (name.length < 4){
      setError('Escribe mas de 3 caracteres')
      return
    } setError(null)
  }, [name])

  return (
    <>
      <section className={styles.menu}>
        <h3>Elige un color</h3>
        <form className='flex' onSubmit={handleSubmit}>
          <input 
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}}
            ref={inputRefName}
            name='name'
            value={name}
            onChange={handleChangeName}
            placeholder='Ingresa tu nombe'/>
          <br />
          <input 
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}}
            ref={inputRef}
            name='query'
            onChange={handleChange}
            value={item}
            placeholder='Ingresa tu color favorito (formato HEX)'/>
          <br />
          <button type='submit'>Enviar</button>
        </form>
        {error && <p style={{ color: 'red'}}>{error}</p>}
      </section>
      
      {(name.length > 3 && item.length > 6) 
          ? (<Card 
              name={name}
              item={item}
            />) 
          : null}
    </>
  )
}


export default App
