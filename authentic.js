const express = require('express');

const app = express();

const cors = require('cors');
const { default: mongoose } = require('mongoose');

// importing signup schema
const userInfo = require('./signUp')

const PORT  = 3000;

app.use(cors());

app.use(express.json());


// connecting to MongoDB database
mongoose.connect("mongodb+srv://QaiserM:Doncaster1122!@cluster0.ypzvsfo.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Mongodb connected")
});


// testing server using app.get
app.get("/testing", (req,res) =>{
    res.send({key:" Hello World1"})   
}); 


// getting signup data from the front end
app.post("/data", (req, res) =>{
    console.log(req.body)
    res.send(req.body)

// using the mongoose method to save data into MongoDb
const savingInfo = new userInfo(req.body)
savingInfo.save()

});

// getting data from the login frontend to store into server
// which can then be used to retrieval and verification.
app.post("/pasroute", async (req, res) => {
    console.log(req.body)
    // res.send(req.body)

        const pass = req.body.password
        const user  = userInfo.find({name:req.body.name}).then((feedback) => {
            if(feedback[0].password===pass){
                console.log(feedback, "feedbackuserData")
                res.json(feedback)
            }else{res.send("check email or password")}
        })
});
        

// port running server
app.listen(PORT, ()=>{
    console.log("server is running")
});

