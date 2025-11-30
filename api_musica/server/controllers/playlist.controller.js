import { faker } from "@faker-js/faker";
import { cancion } from "../controllers/cancion.controller.js";

const canciones =()=>{
    const n = faker.number.int({min: 3, max: 10});
    const canciones=[]
    for (let i = 0; i < n; i++) {
        canciones.push(cancion())
    }
    return canciones
}

const playlist =()=>{
    return{
        idplaylist:faker.string.uuid(),
        nombre:faker.word.verb(),
        descripcion:faker.word.words({ count: 10 }),
        canciones:canciones(),
        fecha: faker.date.recent()
    }
}

const pcontrolador={
    getplaylist: async (req,res) => {
        try{
            return res.status(201).json(playlist())
        }catch(e){
            return res.status(400).json(e)
        }
    }
}

export default pcontrolador