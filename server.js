const { json } = require("stream/consumers")
const { request } = require("http")
const express = require("express")
const { name } = require("ejs")
const path = require("path")
const fs = require("fs")
const { send } = require("process")
const app = express()

const filePath = './Databases/data.json'

app.set('views','./views')
app.set("view engine",'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'styles')))

app.get("/Home",(req,res) => {
    res.render("index.ejs")
})
app.get("/Guide",(req,res) => {
    res.render("guid.ejs")
})
app.get("/Tour",(req,res) => {
    res.render("tour.ejs")
})
app.get("/Hotels",(req,res) => {
    res.render("Hotels.ejs")
})
app.listen(3002,() => {
    console.log("Hello New Project")
})
