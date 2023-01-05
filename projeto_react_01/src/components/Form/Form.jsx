import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Form.css'

function Form () {
  const [pendente, setPendente] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const history = useHistory()
  const handleSubmit = (e)=>{
    e.preventDefault()
    const postBody = {title, text}
    setPendente(true)

    fetch('http://localhost:3002/criar',
  {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(postBody)
  }
    ).then(()=>{console.log('anotado')
    setPendente(false)})
    history.push('/')
  }
    return (
        <>
        <div id="personalizarFormContainer">
        <h2>Anotação</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Titulo</label>
            <input type="text" placeholder='Insira o titulo' onChange={(e)=>{setTitle(e.target.value)}} />
            <label htmlFor='text'>texto</label>
            <input type="text" placeholder='Insira o Texto!' onChange={(e)=>{setText(e.target.value)}} />


            {!pendente &&<button type='submit'>Anotar</button>}
            {pendente &&<button  disabled type='submit'>Anotando...</button>}
          </form>
          </div>
        </> 
    );
}
 
export default Form