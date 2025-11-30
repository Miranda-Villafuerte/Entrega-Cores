import {faker} from '@faker-js/faker'

const duracion = ()=>{
    const min = faker.number.int({min: 1, max: 8});
    const seg = faker.number.int({min: 0, max: 59});
    return `${min}:${seg}`;
}

const cancion = ()=>{
    return {
        id: faker.string.uuid(),
        titulo: faker.music.songName(),
        artista: faker.music.artist(),
        album: faker.music.album(),
        duracion: duracion(),
        genero: faker.music.genre(),
        año: faker.date.between({from: '1980-01-01T00:00:00.000Z', to: faker.date.recent()})
    }
}

const ccontrolador={
    getcancion: async (req,res) => {
        try{
            return res.status(201).json(cancion())
        }catch(e){
            return res.status(400).json(e)
        }
    }
}

export default ccontrolador
export {cancion}