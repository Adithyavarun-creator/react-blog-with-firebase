import React from 'react'
import { db, storage } from '../firebase'
import { deleteDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { deleteObject,ref } from 'firebase/storage'

const DeleteArticle = ({id,imageUrl}) => {

    const handleDelete = async() => {
      if(window.confirm("Are you sure you want to delete this article")) {
        try{
        await deleteDoc(doc(db,"articles",id))
        toast("Article deleted successfully",{type:"success"})
        const storageRef = ref(storage,imageUrl)
        await deleteObject(storageRef)
        }catch(error){
            toast("Article not deleted successfully",{type:"error"})
        }
      }
    }

  return (
    <div>
        <i className='fa fa-times'
        style={{cursor:'pointer'}}
        onClick={handleDelete}>
        </i>
    </div>
  )
}

export default DeleteArticle