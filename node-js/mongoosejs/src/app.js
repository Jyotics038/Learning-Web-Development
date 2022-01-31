const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect(
  "mongodb://localhost:27017/ttchannel",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => 
      console.log("connection successfully..."))
    .catch((err) => 
      console.log(err)
      );


      //Schema
const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cType:String,
    videos:Number,
    author:String,
    active:Boolean,
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid");
            }
        }
    },
    date:{
        type:Date,
        defalt:Date.now
    }
})

//collection creation
const Playlist=new mongoose.model("Playlist",playlistSchema);


//create document or insert

const createDocument=async()=>{
    try{
        const jsPlaylist=new Playlist({
        name:"javascript",
        cType:"Front End",
        videos:80,
        author:"jyoti",
        email:"jyoti@gmail.com",
        active:true
    })
    
     
            const mongoPlaylist=new Playlist({
            name:"mongo",
            cType:"database",
            videos:10,
            author:"jyoti",
            active:true
        })
       
        
                const mongoosePlaylist=new Playlist({
                name:"mongoose",
                cType:"database",
                videos:17,
                author:"jyoti",
                active:true
            })


    const result=await Playlist.insertMany([jsPlaylist,mongoosePlaylist,mongoPlaylist]);
    console.log(result);
}catch(err){
    console.log(err);
}
}
//createDocument();


//reading document
const getDocument=async()=>{
    const result=await Playlist.find({ctype:'Front End'});
    console.log(result); 
}

//update document
