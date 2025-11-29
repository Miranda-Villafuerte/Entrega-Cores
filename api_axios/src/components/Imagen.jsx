import axios from "axios";
import { useEffect } from "react";

const Imagen = ({ setImagen }) => {
    const getData = () => {
        const URL = "https://api.thedogapi.com/v1/images/search";
        axios(URL).then(
            response => {
                const data = response.data;
                const imgrandom = data[0].url;  
                setImagen(imgrandom);
            }
        );
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div>
                <br />
                <button className="btn btn-danger" onClick={getData}>Ver un perrito</button>
            </div>
        </>
    );
};

export default Imagen;