import express from "express";
import { getUsers } from "./users.js";

import { createUser, deleteUser, updateUser, getUser } from "./user.js";
import cors from "cors";
import { upload } from "./uploadHandler.js";

const server = express();
server.use(express.json())
server.use(cors())
server.use(express.static('uploads'))

/*

    Root Route

*/
server.get('/', (req, res) => {

    res.send('Hello World')

})

/*

    User Route

    (GET) - Get User /user?id=124

*/
server.get('/user', (req, res) => {

    console.log(req.query.id)

    getUser(req.query.id).then( (result) => {

        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.status(200);
        res.send(result)
    
    })

});

/*


    (POST) - Create User /user


*/
server.post('/user', (req, res) => {

    createUser(req.body).then( (result) => {

        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.status(200);
        res.send(result);

    });
    
});


/* 

    (POST) - Update User Profile Image /user/profile

*/
server.post('/user/profile', upload.single('profile'), (req,res) => {

    let userObj = {
        "id" : req.body.id,
        "profile" : req.body.id + '.jpg'
    }

    updateUser(userObj).then( () => {

        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.status(200);
        res.send({"status" : "ok", "message" : "User profile image updated", "data" : req.body});

    })
    
})

/* 

    (DELETE) - Delete User /user?id=124

*/
server.delete('/user', (req, res) => {

    deleteUser(req.query.id).then( (result) => {

        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.status(200);
        res.send(result);

    })


})

/* 

    (PUT) - Update User /user 

    Her er ID i body objektet og ikke i URL'en

*/
server.put('/user', (req, res) => {

    updateUser(req.body).then( (result) => {

        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.status(200);
        res.send(result);

    })

})

/*

    Users Route

    (GET) - Get Users /users

*/
server.get('/users', (req, res) => {

    getUsers().then( (result) => {

        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.status(200);
        res.send(result)

    } )


});

/*

    Product / Producs

*/


export default server