import express from "express"
import "reflect-metadata"
import {Connection, DataSource}from "typeorm"
import { Profile } from "./entity/Profile"
import { User } from "./entity/user"
const app=express()
app.use(express.json())
const PORT=9000
app.get("/",async(req,resp)=>{
    const userRepo=  AppDataSource.getRepository(User)
    const profilerepo= AppDataSource.getRepository(Profile) 
    // find all user
    const allrecords= await userRepo.find()
    const user =allrecords[9];
    const result=await user.profile
    // 
    resp.send(result)



    // delet user 
    // await userRepo.delete(13)
    // resp.send("delete user")

// insert user
// let user:User=new User();
// user.firstName=req.body.firstName;
// user.lastName=req.body.lastName;
// user.age=req.body.age;
// user.id=req.body.id

// const userinsert =await userRepo.save(user)

// update user 
// const update= await userRepo.update(3,{
// firstName:"3user",
// lastName:"3last",
// age:88
// })

// filter  record .
// const record =await userRepo.find({where:{
//     firstName:"3user"
// }})


//  resp.send(record)




// one to one Connection 
// let profile:Profile=new Profile()
// profile.gender="male",
// profile.photo="my frist pic"

// // const Profileinsert=await profilerepo.save(profile)
// let user:User=new User();
// user.firstName=req.body.firstName;
// user.lastName=req.body.lastName;
// user.age=req.body.age;
// user.profile=profile
// const userinsert= await userRepo.save(user)


// resp.json(userinsert)

// update data 
// const userfound= await userRepo.findOne({where:{id:12}});
// if(userfound){
//     userfound.firstName="vaibhav45";
//     userfound.lastName="bhanderi45";
//     userfound.age=45;
//     userfound.profile.gender="male";
//     userfound.profile.photo="updatephoto";
//     const updaterecord= await userRepo.save(userfound);
//     resp.json(updaterecord)
// }
//  else{
//     resp.send("record does not exsist")
//  }

// delete user 
// await profilerepo.delete(4)
// resp.send("delete profile")


})


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 49153,
    username: "postgres",
    password: "postgrespw",
    database: "Demo1",
    synchronize: true,
    logging: true,
    entities: ["src/entity/*{.ts,.js}"],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log("connection successfully")
        
app.listen(PORT,()=>{
    console.log("Server is listing "+PORT)
})
    })
    .catch((error) => console.log(error))

