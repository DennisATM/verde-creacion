<template>
   <div>
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-nav">
       <a class="nav-link text-white" href="" @click="goToHomeAdmin()"><img class="nav__logo" src="../../public/img/logoNav.jpg" alt="Logo vivero"> &nbsp;<span class="navbar-logo-text"><em>Vivero y jardines</em></span> </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-danger"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav m-auto">
            <li class="nav-item active">
              <a href="" @click="goToHomeAdmin()" class="nav-link text-white font-weight-bold" 
              ><em>Pedidos</em></a>
            </li>
            <li class="nav-item active">
              <a href="" @click="goToProductos()" class="nav-link text-white font-weight-bold"  
              ><em>Productos</em></a>
            </li>
            <li class="nav-item active">
              <a href="" class="nav-link text-white font-weight-bold" 
              ><em>Reporte Ventas</em></a>
            </li>
            <li class="nav-item active">
              <a href="" @click="exit()" class="nav-link text-white font-weight-bold"  
              ><em>Salir</em></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>
export default{
  methods:{
    goToHomeAdmin(){
     this.$router.push('HomeAdmin');
    },
    goToProductos(){
     this.$router.push('MainProduct');
    },
    exit(){
     this.$router.push('/')
    },
  }
}
</script>

<style scoped>

.navbar-text{
    color: saddlebrown;    
}
.nav__logo{
    width: 20vw;
    height: 10vh;
    border-radius: 10px;
    text-shadow: 0 0 0.2em #87F, 0 0 0.2em #87F,0 0 0.2em #87F
}

.navbar-logo-text{
  font-family:sans-serif;
  font-weight: bold;
  background: linear-gradient(rgb(233, 223, 223),white,rgb(121, 4, 121),white,white);
  background-clip: text;
  color: transparent;
}

.bg-nav{
    background: rgb(93, 9, 126);
}
li a{
  border-radius: 10px;
}
li a:hover{
  background: linear-gradient(white,rgba(167, 137, 201, 0.87),rgb(106, 15, 148),white);
}

@media (min-width: 760px){
    
    .nav__logo{
        width: 10vw;
        height: 10vh;
        border-radius: 10px;
    }   
    .nav-item{
      margin: 0 20px;
    }
}
</style>>
