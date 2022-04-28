<template>
<div>
    <Navbar/>
    <Header/>
    <Carrusel/>

    <div class="nosotros">
      <div class="jumbotron jumbotron-fluid nosotros-bg">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6 pt-3 pb-3">
              <img class="nosotros-img" src="../../public/img/familia.jpeg" alt="">
            </div>
            <div class="col-sm-12 col-md-6">
              <h1 class="nosotros-titulo">Verde Creación</h1>
              <p class="nosotros-text">(Que es Verde Creación?) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quisquam, veniam ea voluptas aut in deserunt fuga incidunt nisi! Magnam corrupti illum autem, hic incidunt accusantium tempora odit vel adipisci? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis laborum qui quasi, fuga sit omnis eligendi, accusantium accusamus ipsum quia voluptatibus corrupti doloribus harum possimus? Cupiditate est accusantium nihil maxime?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="productos">
      <div class="jumbotron jumbotron-fluid productos-bg">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h1 class="productos-titulo">Productos y Servicios</h1>
              <p class="productos-text">(Resúmen de productos y servicios ?) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quisquam, veniam ea voluptas aut in deserunt fuga incidunt nisi! Magnam corrupti illum autem, hic incidunt accusantium tempora odit vel adipisci? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis laborum qui quasi, fuga sit omnis eligendi, accusantium accusamus ipsum quia voluptatibus corrupti doloribus harum possimus? Cupiditate est</p>
            </div>
            <div class="col-sm-12 col-md-6">
              <img class="productos-img" src="../../public/img/productos.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="locales">
      <div class="jumbotron jumbotron-fluid locales-bg">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="col-5 ">
                <img class="locales-img" src="../../public/img/local1.jpg" alt="">
              </div>
              <div class="col-5 m-auto">
                <img class="locales-img" src="../../public/img/local2.jpg" alt="">
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <h1 class="locales-titulo">Donde ubicarnos?</h1>
              <p class="locales-text">(Dirección y pequeña descripcion del local y vivero móvil?) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quisquam, veniam ea voluptas aut in deserunt fuga incidunt nisi! Magnam corrupti illum autem, hic incidunt accusantium tempora odit vel adipisci? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis laborum qui quasi, fuga sit omnis eligendi, accusantium accusamus ipsum quia voluptatibus corrupti doloribus harum possimus? Cupiditate est</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Carrusel from '@/components/Carrusel.vue'
import Footer from '@/components/Footer.vue'
export default { 
  name: 'Home',
  components: {
    Navbar,
    Header,
    Carrusel,
    Footer
  }
}
</script>
<style scoped>

.nosotros{
  padding: 0;
  margin-top: 5.83em;
  font-family: 'Times New Roman', Times, serif;
}
.productos{
  font-family: 'Times New Roman', Times, serif;
}
.locales{
  font-family: 'Times New Roman', Times, serif;
}
.nosotros-bg{
  margin: 0;
  padding: 10px;
  background-image: url(../../public/img/bg-cesped.jpg);
}
.productos-bg{
  margin:0;
  padding: 2em 10px;
  background-image: url(../../public/img/bg-grava.jpg);
}
.locales-bg{
  margin: 0;
  padding: 2em 10px;
  background-image: url(../../public/img/bg-tierra.jpg);
}
.nosotros-img, .productos-img{
  width: 80vw;
  height: 40vh;
  border-radius: 2em 0;
}
.locales-img{
  width: 60vw;
  height: 20vh;
  border-radius: 0 2em;
}
.nosotros-titulo, .productos-titulo, .locales-titulo{
  margin-top: 1em;
  font-size: 1.3em;
  color: white;
  text-shadow: 0 0 0.2em #82F, 0 0 0.2em #87F,0 0 0.2em #87F
}
.nosotros-text{
  font-size: .8em;
  text-align: justify;
  color: white;
  text-shadow: 0 0 0.2em rgb(14, 13, 13), 0 0 0.2em rgb(14, 13, 13),0 0 0.2em rgb(14, 13, 13)

}
.productos-text{
  font-size: .8em;
  text-align: justify;
  color: greenyellow;  
  text-shadow: 0 0 0.2em rgb(14, 13, 13), 0 0 0.2em rgb(14, 13, 13),0 0 0.2em rgb(14, 13, 13)
}
.locales-text{
  font-size: .8em;
  text-align: justify;
  color: yellow;  
  text-shadow: 0 0 0.2em rgb(14, 13, 13), 0 0 0.2em rgb(14, 13, 13),0 0 0.2em rgb(14, 13, 13)
}
@media (min-width: 780px){
 .nosotros-img, .productos-img{
    width: 30vw;
    height: 30vh;
  } 
  .nosotros-img{
    margin-bottom: 2em;
  }
  .nosotros-img, .nosotros-titulo{
    margin-top:2em;
  }
  .nosotros-titulo, .productos-titulo{
    font-size: 1.5em;
  }
  .nosotros-text, .productos-text, .locales-text{
    font-size: 1em;
  }
  .locales-img{
    width: 20vw;
    height: 20vh;
    border-radius: 0 2em;
  }
}

</style>
