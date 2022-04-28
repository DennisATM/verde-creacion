<template>
  <div>
      <h3 class="mt-2 text-warning">Buscar productos</h3>
      <form class="form mt-4">
        <label class="text-warning"> Por Categorías</label> &nbsp;
        <select v-model="eleccion" @change="filterGeneros" a>
          <option selected disabled>Elige una categoria</option>
          <option v-for="(tipos,index) in Generos" :key="index">{{ tipos }}</option>
        </select>
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            Generos:["Todos","Ornamentales","Jardin","Frutales","Insumos","Accesorios"],
            eleccion:null,
        }
    },
    methods:{
        filterGeneros: function(){
                this.$store.state.porGenero = this.$store.state.productos.filter(prod => prod.genero.includes(this.eleccion));
                console.log(this.$store.state.porGenero);
            },
    }

}
</script>

<style>

</style>