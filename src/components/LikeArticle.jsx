//  import React from "react";
//  import { useAuthState } from "react-firebase-hooks/auth";
//  import { auth, db } from "../firebase";
//  import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

// export default function LikeArticle({ id, likes }) {
//       //const [user] = useAuthState(auth);

//    const likesRef = doc(db, "Articles", id);

//    const handleClick = () => {
//      if (likes?.includes(user.uid)) {
//        updateDoc(likesRef, {
//          likes: arrayRemove(user.uid),
//        }).then(() => {
//            console.log("unliked");
//        }).catch((e) => {
//              console.log(e);
//        });
//      }
//      else{
//          updateDoc(likesRef,{
//              likes:arrayUnion(user.uid)
//          }).then(() => {
//              console.log("liked");
//          }).catch((e) => {
//                console.log(e);
//          });
//      }
//    };
//    return (
//      <div>
//        <button></button>
//      </div>
//    );
//  }