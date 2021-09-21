<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <h1>Person Two</h1>
    <p>{{personTwo.name}}</p>
    <p>{{personTwo.age}}</p>
    <input type="text" v-model="name">
    <button @click="handleClick">Click</button>
    <button @click="age++">Increase Age</button>
    <button @click="change">Change Two</button><br><br>

    <input type="text" v-model="search">
    <p>Search Item- {{search}}</p>
    <div v-for="name in filteredNames" :key="name">
      {{name}}
    </div>
    <PostsList :posts="posts"></PostsList>
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import {reactive,ref,computed} from 'vue';
export default {
  components: {PostsList},
  setup(){
    let name=ref('EMMH');
    let age=ref(20);
    let handleClick=()=>{
      name.value="kyaw kyaw"
    }
    let personTwo=reactive({name:"MgMg",age:30});

    let change=()=>{
      personTwo.name="change MgMg";
    }
    
    let names=ref(["Aung Aung","Kyaw Kyaw"]);
    let search=ref("");

    let filteredNames=computed(()=>{
      return names.value.filter(name=>{
        return name.includes(search.value)
      })
    })

    let posts=ref([
      {title:"post title 1",body:"Hello 1fdssssssssssg",id:1},
      {title:"post title 2",body:"Hello 2gfffffffffffffh",id:2},
    ])

    return {name,age,handleClick,personTwo,names,search,filteredNames,posts}

  }
  
}
</script>
