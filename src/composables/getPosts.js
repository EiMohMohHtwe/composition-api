import {ref} from 'vue';
import {db} from "../firebase/config"
let getPosts=()=>{
    let posts=ref([]);
        let error=ref("");

        let load=async()=>{
            try{
                //JSON SERVER
                // let response =await fetch("http://localhost:3000/posts")
                // if(response.status===404){
                //     throw new Error("not found url");
                // }
                // let datas=await response.json()
                // posts.value=datas

                //Firebase
                let res=await db.collection("posts").get()
                posts.value=res.docs.map((doc)=>{
                    return {id:doc.id,...doc.data()}
                    //console.log(doc.data());
                })

                }catch(err){
                error.value=err.message;
            }
        }
        return {posts,error,load};
}
export default getPosts;