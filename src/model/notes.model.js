import mongoose ,{Schema} from "mongoose";

const notesSchema = new Schema({
    title:{
        type: String,
        required: true
    },

    content:{
        type: String,
        required: true
    }
},{timestamps:true})




const Note = mongoose.model('Note', notesSchema)

export default Note