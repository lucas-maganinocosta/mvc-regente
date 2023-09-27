const app = require('../../startup.js')
const skinModel = require("../models/skinsModel.js")
const path = requiere("path")

app.get("/getSkin", (req,res) => {
    const Skin = skinModel


    item.name = ""
    item.description = ""


    res.json(item.toJSON())
})  

app.get("/", (req,res) => {
    res.sendFile(path.resolve("mvc/views/skinView.html"))
})