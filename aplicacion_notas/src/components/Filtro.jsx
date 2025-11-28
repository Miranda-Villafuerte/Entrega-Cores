const Filtro = ({filtro,setfiltro})=>{
    return(
    <>
        <select className="form-select" name="priority " id="filtro" value={filtro} onChange={e=> setfiltro(e.target.value)}>
            <option value="---">---</option>
            <option value="All">Todo</option>
            <option value="High">Alto</option>
            <option value="Medium">Medio</option>
            <option value="Low">Bajo</option>
        </select>
    </>
    )
}

export default Filtro