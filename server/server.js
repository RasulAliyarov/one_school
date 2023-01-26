const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const Joi = require("joi")
const PORT = 8080

app.use(express.json())
app.use(cors())

const TeacherJoi = Joi.object({
    name: Joi.string().required(),
    subject: Joi.string().required(),
    desc: Joi.string().required(),
    email: Joi.string().required(),
})

const TeacherShema = new mongoose.Schema({
    name: String,
    subject: String,
    desc: String,
    email: String
})

const TeacherModel = new mongoose.model("Teachers", TeacherShema)
mongoose.set("strictQuery", false)
mongoose.connect("mongodb+srv://RasulAliyarov:yhDM5vvDNiuCJT0K@cluster0.78j7miz.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connect to MongoDb"))
    .catch(error => console.log(error))

// Delete 
app.delete("/api/teachers/:id", (req, res) => {
    TeacherModel.findByIdAndDelete(req.params.id, () => {
        res.send("Teacher is successfuly deleted")
    })
})

// POST
app.post("/api/teachers/",
    (req, res, next) => {
        let { error } = TeacherJoi.validate(req.body)

        if (!error) next()
        else {
            let { detail } = error
            let message = detail.map(i => i.message).join(",")
            res.status(422).send({ erro: message })
        }
    },
    (req, res) => {
        let newTeacher = new TeacherModel({
            ...req.body
        })

        newTeacher.save()

        res.send(newTeacher)
    })

// GET
app.get("/api/teachers/", (req, res) => {
    TeacherModel.find(null, (error, data) => {
        res.send(data)
    })
})
// GETBID
app.get("/api/teachers/:id", (req, res) => {
    TeacherModel.findById(req.params.id, (error, data) => {
        res.send(data)
    })
})

app.listen(PORT, () => {
    console.log("Server is up")
})