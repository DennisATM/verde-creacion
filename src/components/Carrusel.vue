<template>
  <div class="carrusel">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img
            class="d-block w-100 carrusel-img"
            src="../../public/img/header1.jpg"
            data-src="holder.js/900x400?theme=social"
            alt="900x400"
            data-holder-rendered="true"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 carrusel-img"
            src="../../public/img/header2.jpg"
            data-src="holder.js/900x400?theme=industrial"
            alt="900x400"
            data-holder-rendered="true"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 carrusel-img"
            src="../../public/img/header3.jpg"
            data-src="holder.js/900x400?theme=social"
            alt="900x400"
            data-holder-rendered="true"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.carrusel{
    position: relative;
    top: 5.8em;
}
.carrusel-img{
    width: 600px;
    height: 300px;
}

@media (min-width: 780px){
    .carrusel-img{
        width: 900px;
        height: 400px;
}
}
</style>