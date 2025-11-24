import { useState } from "react"

const SupForm = ()=>{
    const arrayData ={
        name: "",
        lastname:"",
        email:"",
        password:"",
        passwordConfirmation:""
    }

    const [state, setState] = useState(arrayData)

    const updateState =(e)=>{
        setState({...state, [e.target.name]: e.target.value})
    }
    return(
        <>
        <h3>Registro de superhéores</h3>
        <form>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input className="input-group-text" type="text" id="name" name="name" value={state.name} onChange={(e)=>updateState(e)} />
            </div>
            <div>
                <label htmlFor="lastname">Apellido:</label>
                <input className="input-group-text" type="text" id="lastname" name="lastname" value={state.lastname} onChange={(e)=>updateState(e)} />
            </div>
            <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input className="input-group-text" type="email" id="email" name="email" value={state.email} onChange={(e)=>updateState(e)} />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input className="input-group-text" type="password" id="password" name="password" value={state.password} onChange={(e)=>updateState(e)} />
            </div>
            <div>
                <label htmlFor="passwordConfirmation">Confirmar contraseña:</label>
                <input className="input-group-text" type="password" id="passwordConfirmation" name="passwordConfirmation" value={state.passwordConfirmation} onChange={(e)=>updateState(e)} />
            </div>
            <br/>
            <button className="btn btn-primary">Crear Superhéroe</button>
        </form>
        </>
    )
}

export default SupForm