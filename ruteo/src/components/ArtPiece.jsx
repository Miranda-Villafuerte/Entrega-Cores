import { useNavigate, useParams } from "react-router-dom"

const ArtPiece=({galeryList})=>{
    const params = useParams()
    const idParams = Number(params.id)
    const navigate = useNavigate();

    const artPiece = galeryList.find((art,index) => index===idParams)


    return(
        <>
        <h1>{artPiece.name}</h1>
        <br/>
        <img src={artPiece.img} alt={artPiece.name}/>
        <div>
            <button onClick={()=> navigate(`/art/${idParams-1}`)} className="btn btn-success" disabled={idParams===0}>Anterior</button>
            <button onClick={()=>navigate('/home')} className="btn btn-success">Inicio</button>
            <button onClick={()=> navigate(`/art/${idParams+1}`)} className="btn btn-success" disabled={idParams===(galeryList.length-1)}>Siguiente</button>
        </div> 
        </>
    )
}

export default ArtPiece