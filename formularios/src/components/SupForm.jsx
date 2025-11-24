import { useState } from "react"

const SupForm = ({listSup, setListSups})=>{
    const arrayData ={
        name: "",
        lastname:"",
        email:"",
        password:"",
        passwordConfirmation:""
    }

    const [state, setState] = useState(arrayData)
    const [errors, setErrors] = useState(arrayData)

    const updateState =(e)=>{
        setState({...state, [e.target.name]: e.target.value})
    }

    const crearSup = (e)=>{
        e.preventDefault()
        const errorsCopy = {...errors}
        state.name.length < 4? (errorsCopy.name = "El elemento debe tener mas de 4 carácteres.") : (errorsCopy.name = "")
        state.lastname.length < 4? (errorsCopy.lastname = "El elemento debe tener mas de 4 carácteres.") : (errorsCopy.lastname = "")
        state.password != state.passwordConfirmation ? (errorsCopy.passwordConfirmation = "Confirmacion de contraseña incorrecta") : (errorsCopy.passwordConfirmation="")
        state.email.length < 10 || !state.email.includes('@')? (errorsCopy.email = "El email debe tener mas de 10 carácteres y una @") : (errorsCopy.email = "")
        state.password.length < 12? (errorsCopy.password = "El elemento debe tener al menos 12 carácteres.") : (errorsCopy.password = "")

        if (errorsCopy.name || errorsCopy.lastname || errorsCopy.email || errorsCopy.password || errorsCopy.passwordConfirmation){
            setErrors(errorsCopy)
            return
        }

        setListSups([...listSup, state])
        setState(arrayData)
        setErrors(arrayData)
    }
    return(
        <>
        <h3>Registro de superhéroes</h3>
        <form onSubmit={(e)=> crearSup(e)}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input className="input-group-text" type="text" id="name" name="name" value={state.name} onChange={(e)=>updateState(e)} />
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="lastname">Apellido:</label>
                <input className="input-group-text" type="text" id="lastname" name="lastname" value={state.lastname} onChange={(e)=>updateState(e)} />
                {errors.lastname && <p style={{color: "red"}}>{errors.lastname}</p>} 
            </div>
            <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input className="input-group-text" type="email" id="email" name="email" value={state.email} onChange={(e)=>updateState(e)} />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input className="input-group-text" type="password" id="password" name="password" value={state.password} onChange={(e)=>updateState(e)} />
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            </div>
            <div>
                <label htmlFor="passwordConfirmation">Confirmar contraseña:</label>
                <input className="input-group-text" type="password" id="passwordConfirmation" name="passwordConfirmation" value={state.passwordConfirmation} onChange={(e)=>updateState(e)} />
                {errors.passwordConfirmation && <p style={{color: "red"}}>{errors.passwordConfirmation}</p>} 
            </div>
            <br/>
            <button className="btn btn-primary">Crear Superhéroe</button>
        </form>
        </>
    )
}

export default SupForm