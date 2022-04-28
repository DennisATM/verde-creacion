<template>
  <div id="app">     
    <router-view/>
  </div>
</template>
<script>

import {mapState} from 'vuex'
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  components:{
   
  },
  computed:{
    ...mapState(['productos'])
  },
  created(){
    this.cargarProductos()
  },
  methods:{
    cargarProductos(){
      try {
            this.productos=[];
            var db = firebase.firestore();
            db.collection('productos').get()
            .then((query)=>{
                query.forEach((doc)=>{  
                    this.productos.push( {
                        id:doc.id,
                        image:doc.data().image,
                        nombre:doc.data().nombre,
                        genero:doc.data().genero,
                        precio:doc.data().precio,
                        detail:doc.data().detail,
                    });
                })
            })  
        } catch (error) {
            console.log(error)
        }     
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
