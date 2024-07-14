const express = require('express')
const cors = require('cors')
const request = require("request");
const PORT = 5000

const app = express()
app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
    const {animal} = req.body
    console.log(animal)
    // type - тип квартиры: aparts - апартаменты, parking - парковка, pantry - складские помещения, commercial - коммерческое помещение
    // building - корпус
    // number - Номер квартиры
    res.sendStatus(200)
})

const start = async () => {
    try{
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e){
        console.log(e)
    }
}
start()