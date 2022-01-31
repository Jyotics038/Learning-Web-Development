const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 8000;


// app.get('/', (req, res)=>{

//         res.send("Hello from other side");
// })

app.use(express.json());
app.use(studentRouter);

//to register/create new students
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   //for posting data from postman to console
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
//   //    res.render("Hello from other side");
// });

// //create a new router
// const router = new express.Router();

// //define the router
// router.get("/student",(req, res) => {
//     res.send("Helloooo");
// });

//we need to register the router
//app.use(router);

// //by async await
// app.post("/students", async (req, res) => {
//   try {
//     const user = new Student(req.body);
//     const createUser = await user.save();
//     res.status(201).send(createUser);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// //to read the data of registered students
// app.get("/students", async (req, res) => {
//   try {
//     const studentsData = await Student.find();
//     res.send(studentsData);
//   } catch (e) {
//     res.send(e);
//   }
// });

// //get the individual Student data using id
// app.get("/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentData = await Student.findById(_id);
//     console.log(studentData);

//     if (!studentData) {
//       return res.status(404).send();
//     } else {
//       res.send(studentData);
//     }
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// //update the students by id
// app.patch("/students/:id",async(req, res) => {
//     try{
//       const _id=req.params.id;
//      const updateStudents=await Student.findByIdAndUpdate(_id,req.body,{
//          new:true
//      });
//      res.send(updateStudents);
//     }catch(e){
//       res.status(400).send(e);
//     }
// })


// //delete the students by its id
// app.delete("/students/:id", async(req, res)=>{
//     try{
//     //    const _id=req.params.id;
//        const deleteStudent= await Student.findByIdAndDelete(req.params.id);
//        if(!req.params.id){
//            return res.status(400).send();
//        }
//        res.send(deleteStudent);
//     }catch(e){
//        res.status(500).send(e);
//     }
    
// })

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
