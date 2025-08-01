import { Router } from "express";
import { createNotes, deleteNote, getAllnotes, getNoteById, updateNote } from "../controllers/notes.controller.js";
const router = Router()

router.get('/',getAllnotes)
router.get('/:id',getNoteById)
router.post('/',createNotes)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

export default router