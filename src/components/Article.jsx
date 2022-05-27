import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

const Article = () => {

    const {id} = useParams()
    const [article,setArticle] = useState(null)

    useEffect(()=>{
        const docRef = doc(db,"articles",id);
        onSnapshot(docRef,(snapshot)=>{
            setArticle({
                ...snapshot.data(),
                id:snapshot.id
            })
        })
    },[])

  return (
    <div className='container border bg-light' style={{marginTop:70}}>
        {
            article && (
                <div className='row'>
                    <div className='col-3'>
                        <img src={article.imageUrl} style={{width:'100%', padding:'10'}} alt={article.title}/>
                    </div>
                    <div className='col-9 mt-3'>
                        <h2>{article.title}</h2>
                        <h5>Author is {article.createdBy}</h5>
                        <div> Posted on: {article.createdAt.toDate().toDateString()}</div>
            <hr />
            <h4>{article.description}</h4>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Article