const express = require('express')
const app = express()
//ajout de la liste des parkings
const parkings = require('./parkings.json')

//MIDDLEWARE (interprête)
app.use(express.json())

//  ROUTE

// route pour la liste des parkings
app.get('/parkings', (req,res) => {
  res.status(200).json(parkings)
})

// route id parkings
app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id) // Convertion en nombre
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})

// route post parking
app.post('/parkings', (req,res) => {
  parkings.push(req.body)
  pes.status(200).json(parkings)
})

// route put parkings
app.put('/parkings/:id', (req,res) => {
  const id = parseInt(req.params.id)
  let parking = parkings.find(parking => parking.id === id)
  parking.name = req.body.name,
  parking.city = req.body.city,
  parking.type = req.body.type
  res.status(200).json(parking)
})

app.listen(8080, () => {
  console.log("Serveur à l'écoute")
})
