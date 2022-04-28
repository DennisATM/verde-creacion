<template>
  <div class="main">
      <NavbarAdmin/>
      <Products/>
  </div>
</template>

<script>
import Products from '@/components/Products.vue'
import NavbarAdmin from '../components/NavbarAdmin.vue'
export default {
    components:{
        Products,
        NavbarAdmin,
    }
}
</script>

<style>
    .main{
        margin-top: 7.4em;
    }
</style>