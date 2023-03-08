import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState("")
  const [team, setTeam] = useState("")
  const [respuesta, setRespuesta]= useState(false)

const onChangeName = (e)=>{
  setName(e.target.value)
}

const onChangeTeam = (e) =>{
  setTeam(e.target.value)
}

console.log(name)
console.log(team)


const onSubmitForm =  (e) => {
  e.preventDefault();

  const inputValidoName = name.trim();
  const inputValidoTeam = team;

  if (inputValidoName.length > 3 && inputValidoTeam.length > 6 ) {
    setRespuesta(true)
  }

  else{
    setRespuesta(false)
    alert("Por favor verifica que : Nombre tenga minimo 3 caracteres y que Team tenga minimo 6 caracteres para continuar No tenga un espacio en blanco como primer caracter")
  }

}

  return (
    <div className="App">

     
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder='Ingrese su nombre' onChange={onChangeName} value={name}/> 
        <br />
        <input type="text" placeholder='Ingrese su equipo favorito' onChange={onChangeTeam} value={team}/>
        <br />
      <button type='submit'>Enviar</button>
      </form> 
      
      {respuesta ? <Card userName={name} userTeam={team} /> : null}
    </div>
  )
}

export default App
