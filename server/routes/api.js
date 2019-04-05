const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')

const mongoose = require('mongoose')
const db ="mongodb+srv://vivek:vivek@cluster1-zfbnm.mongodb.net/users?retryWrites=true"

mongoose.connect(db, err=>{
    if(err){ console.error(err)}
    else{ console.log('Mongodb Connected')}
})
router.get('/',(req,res)=>{
    res.send('From Api')
})

router.post('/register',(req,res)=>{
    let userData = req.body
    let user = new User(userData)

    user.save((error,registeredUser)=>{
        if(error){console.log(error)}
        else {
            let payload = { subject: registeredUser.id}
            let token = jwt.sign(payload,'secretkey') 
            res.status(200).send({token})
            }
        }
            )

})

router.post('/login',(req,res)=>{
    let userData = req.body
    
    User.findOne({email:userData.email},(error,user)=>{
        if (error) { console.log(error)}
        else{ 
             if(!user)
             {
                 res.status(401).send('Invalid Email')
             }
             else{
                    if (user.password !== userData.password){
                        res.status(401).send('Invalid Password')   
                    }
                    else{
                        let payload= {subject : user.id}
                        let token = jwt.sign(payload,'secretkey')
                        res.status(200).send({token})
                    }
             }

        }
    })
})

router.get('/movies',(req,res)=>{
    let movies=[
        {
            "id":"1",
            "name":"Arya",
            "description":"Allu Arjun's First Hit Movie"
        },
        {
            "id": "2",
            "name": "Bunny",
            "description": "Allu Arjun's Second Hit Movie"
        },
        {
            "id": "3",
            "name": "Desamuduru",
            "description": "Allu Arjun's BlockBuster Hit Movie"
        },
        {
            "id": "4",
            "name": "Happy",
            "description": "Allu Arjun's Sweet Hit Movie"
        },
        {
            "id": "5",
            "name": "Julai",
            "description": "Allu Arjun's Entertaining Hit Movie"
        }
    ]
    res.json(movies)
})

router.get('/mymovies', (req, res) => {
    let movies = [
        {
            "id": "1",
            "name": "Arya",
            "description": "Allu Arjun's First Hit Movie"
        },
        {
            "id": "2",
            "name": "Bunny",
            "description": "Allu Arjun's Second Hit Movie"
        },
        {
            "id": "3",
            "name": "Desamuduru",
            "description": "Allu Arjun's BlockBuster Hit Movie"
        },
        {
            "id": "4",
            "name": "Happy",
            "description": "Allu Arjun's Sweet Hit Movie"
        },
        {
            "id": "5",
            "name": "Julai",
            "description": "Allu Arjun's Entertaining Hit Movie"
        }
    ]
    res.json(movies)
})

module.exports = router