import { useState, useEffect } from 'react'
import React from 'react'
import { colelection, getDocs } from 'firebase/firebase'
import db from '../../service/firebase'
import { collection } from 'firebase/firestore'

const Prueba28feb = () => {

    const getData = async () => {
        try {
            const data = collection(db, "items");
            const col = await getDocs(data);
            const result = col.docs.map((doc) => (doc = { id: doc.id, ...doc.data() })
            );
            setItems(result);
        } catch (error) {
            console.log(error);
        }
    };

       
        return (
            <div>Prueba28feb</div>
        )
    }

    export default Prueba28feb