const mongoose=require('mongoose')

const ConnectDB=async()=>{
    try {
      await  mongoose.connect(process.env.localhost,{ useNewUrlParser: true,useUnifiedTopology: true 
            
        });
        console.log('data is connected')
    } catch (error) {
       console.log(error)  
    }
 
};
module.exports=ConnectDB()