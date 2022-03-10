import { async } from "@firebase/util";
import { collection,getDocs, doc ,getDoc,addDoc } from "firebase/firestore";
import { useState } from "react";
import db from '../service/firebase'

//siempre el nombre tiene que arrancar con use

const useFireStore = () => {

const putItem = async ({newProduct})=> {

  try {
    const data = collection(db,"items");
    const prod = await addDoc(data,newProduct);


    
  } catch (error) {
    console.log(error)
  }
}



  return {
    
  }
}

export default useFireStore