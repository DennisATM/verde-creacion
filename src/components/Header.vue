<template>
  <div class="header">
      <div class="row mw-100 justify-content-center mr-0 pr-0">
          <div class="col-1 text-dark header-icon"><a href="#"><i class="bi bi-whatsapp"></i></a></div>
          <div class="col-1 text-dark header-icon pr-3"><a href="#"><i class="bi bi-facebook"></i></a></div>
      </div>
      <div class="header-text row mw-100 justify-content-center pl-5 text-white"><i class="bi bi-phone"></i>&nbsp;(+56) 999-999999</div> 
      <div class="header-text row mw-100 justify-content-center pl-5 text-white"><i class="bi bi-envelope"></i>&nbsp;contacto@verdecreacion.cl</div> 
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header{
    position: relative;
    padding: .5em 0;
    top: 6.5em;
    background: -webkit-radial-gradient(center, ellipse, #d6d07e 50%,#db7f6f 70%, #e24935 90%);
}
.header-icon{
    font-size: 1.2em;
}
.header-text{
    font-size: .7em;
    text-shadow: 0 0 0.2em rgb(18, 17, 19), 0 0 0.2em rgb(10, 9, 20),0 0 0.2em rgb(11, 9, 26)
}
@media (min-width:780px ) {
    .header{
        top: 6.1em;
    }
    .header-icon{
        font-size: 1.5em;
        margin: 0;
        padding:0;
        text-align: end;
    }
    .header-text{
        font-size: 1em;
    }
    
}
</style>