import { Persona } from "../Interfaces/IFormulario";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./FirebaseApp";


export const registrarPersona = async(p:Persona)=>{
    
    
      const docRef = await addDoc(collection(db, "personas"), p)

     

}