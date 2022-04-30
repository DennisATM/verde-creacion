<template>
   <div>
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-nav">
       <a class="nav-link text-white" href="" @click="goToHome()" ><img class="nav__logo" src="../../public/img/logoNav.jpg" alt="Logo vivero"> &nbsp;<span class="navbar-logo-text"><em>Vivero y jardines</em></span> </a>
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
              <a href="" @click="goToHome()" class="nav-link text-success font-weight-bold" 
              ><em>Inicio</em></a>
            </li>
            <li class="nav-item active">
              <a href="" class="nav-link text-success font-weight-bold"  @click="goToCatalogo()"
              ><em>Productos</em></a>
            </li>
            <li class="nav-item active">
              <a href="" class="nav-link text-success font-weight-bold" @click="goToCarrito()"
              ><em>Carrito de Compras</em></a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-success font-weight-bold"
                href=""
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <em>Admin</em>
              </a>
              <div class="dropdown-menu bg-nav" aria-labelledby="navbarDropdown">
                <a href="" class="dropdown-item text-success" @click="goToLogin()">Login</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>
export default{
  methods:{
    goToHome(){
     this.$router.push('/')
    },
    goToCatalogo(){
     this.$router.push('/Catalogo')
    },
    goToCarrito(){
     this.$router.push('/Carrito')
    },
    goToLogin(){
     this.$router.push('/Login')
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
  background: linear-gradient(red,rgba(0, 255, 85, 0.87),rgb(121, 4, 121));
  background-clip: text;
  color: transparent;
}

.bg-nav{
    background: lightgreen;
}
li a{
  border-radius: 10px;
}
li a:hover{
  background: linear-gradient(white,rgba(197, 243, 191, 0.87),rgb(100, 189, 100),white);
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
