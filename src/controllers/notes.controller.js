import Note from "../model/notes.model.js"

export const getAllnotes = async(req,res)=>{
    try {
     const notes = await Note.find().sort({createdAt : -1})
     res.status(200).json(notes)

    } catch (error) {
     console.log("Error in getAllnotes : ", error);
     
     res.status(500).json({message : "internal server error"})

    }

}

export const getNoteById = async (req,res) => {
     try {
          
          const {id} = req.params
          const note = await Note.findById(id)
          if (!note) {
               return res.status(404).json({message:"Note not found"})
          }
          res.status(200).json(note)

     } catch (error) {
           console.log("Error in getNoteById : ", error);
     
         res.status(500).json({message : "internal server error"})
     }
}



export const createNotes = async (req,res) => {
     try {
         const {title,content} = req.body
         const newNote  = await Note.create({
          title,
          content
         })

         res.status(201).json(newNote)
     } catch (error) {
           console.log("Error in createNote : ", error);
     
         res.status(500).json({message : "internal server error"})
     }
}


export const updateNote = async (req,res) => {
     try {
          const {title, content} = req.body
          const {id} = req.params
          

         const updatedNote= await Note.findByIdAndUpdate(id,{
               title,
               content,
               },{ new: true })
          if (!updatedNote) {
               return res.status(404).json({message:"Note not found"})
          }
          res.status(200).json(updatedNote)

     } catch (error) {
           console.log("Error in updateNote : ", error);
     
         res.status(500).json({message : "internal server error"})
     }
}


export const deleteNote = async (req,res) => {
     try {
          const {id} = req.params

          const deletedNote =  await Note.findByIdAndDelete(id)
           if (!deletedNote) {
               return res.status(404).json({message:"Note not found"})
          }
          

          res.status(200).json({message:"Note is deleted successfully"})
          
     } catch (error) {
          console.log("Error in deleteNote : ", error);
     
         res.status(500).json({message : "internal server error"})
     }
}
