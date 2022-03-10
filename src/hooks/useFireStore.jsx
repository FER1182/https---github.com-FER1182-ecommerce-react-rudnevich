import { async } from "@firebase/util";
import { collection,getDocs, doc ,getDoc,addDoc } from "firebase/firestore";
import { useState } from "react";
import db from '../service/firebase'

//siempre el nombre tiene que arrancar con use

const useFireStore = () => {

const generateOrder = async ({newTiket})=> {

  try {
    const col = collection(db,"tikets");
    const tiket = await addDoc(col,newTiket);
    alert(`gracias por tu compra tu orden es la ${tiket.id}`)


    
  } catch (error) {
    console.log(error)
  }
}



  return {
    generateOrder
  }
}

export default useFireStore