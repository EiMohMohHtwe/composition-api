const{ref} = require("vue");
import {db} from "../firebase/config"
const { default: getPosts } = require("./getPosts");

let getPost=(id)=>{
    let post=ref(null);
    let error=ref("");

    let load=async()=>{
        try{
            //JSON SERVER
            // let response = await fetch("http://localhost:3000/posts/"+id);
            // if(response.status===404){
            //     throw new Error("not found that exact url");
            // }
            // let data=await response.json()
            // post.value=data;

            //firebase
            let doc=await db.collection("posts").doc(id).get()
            post.value={id:doc.id,...doc.data()}
            
        }catch(err){
            error.value=err.message;
        }
    }
    return {post,error,load};
}
export default getPost;