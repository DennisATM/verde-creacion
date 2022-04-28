<template>
  <div class="catalogo">
      <Navbar/>
      <!-- <Header/> -->
      <div class=" mt-5 p-2 bg-danger">
        <h1 class=" p-0 m-0 text-white border border-white">Catálogo de productos</h1>
      </div>
      <div class="row p-0 m-0">
          <div class="col-sm-12 col-md-3 bg-danger p-5 content-find">
              <Find/>
          </div>
          <div class="col-sm-12 col-md-9 justify-content-around content-show p-3">
              <div class="row justify-content-around" v-if="porGenero.length===0">
                <Card v-for="(producto,index) in productos" :key="index" :producto="producto" />
              </div>
              <div class="row justify-content-around" v-if="porGenero.length>0">
                <Card v-for="(producto,index) in porGenero" :key="index" :producto="producto" />
              </div>
          </div>
      </div>
      <div class="footer">
        <Footer/>
      </div>
  </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import Find from '@/components/Find.vue'
    import Card from '@/components/Card.vue'
    import Footer from '@/components/Footer.vue'
    import {mapState} from 'vuex'
    // import Header from '@/components/Header.vue'
    export default {
        
        components:{
            Navbar,
            Find,
            Card,
            Footer,
        },
        computed:{
          ...mapState(['productos','porGenero'])
        },
    }
</script>

<style scoped>
.catalogo{
    position: relative;
    top: 3.8em;
    background-image: url(../../public/img/bg-cesped.jpg);
    background-size: 100%;
    background-attachment: fixed;
}
.content-find{
  height: 30vh;
  padding-bottom: 0;
  margin-bottom: 0;
}
@media(min-width:670px) {
  .content-find{
    height: 23  0vh;
  }
}
</style>
