<template>
  <div class="footer bg-dark">
      <div class="row justify-content-center m-auto p-2 mw-100">
          <div class="footer-empresa col-sm-12 col-md-4">
                <h4>VERDE CREACIÓN</h4>
                <h6 class="mt-0 pt-0"> Vivero y jardínes</h6> <br>
              <div class="row mw-100 justify-content-center pl-5">
                <i class="bi bi-geo-alt-fill"></i> &nbsp;Calle Chile #999 - Parral - Maule
              </div>
              <div class="mt-2">
                  <h6>&copy;Derechos Reservados - 2022</h6>
              </div>
          </div>
          <div class="footer-productos col-sm-12 col-md-4">
                <h4>PRODUCTOS</h4>
                <ul class="footer-list m-auto p-0">
                    <li>Plantas Ornamentales</li>
                    <li>Plantas Tropicales y frutales</li>
                    <li>Insecticidas</li>
                    <li>Semillas y bulbos</li>
                    <li>Accesorios</li>
                </ul>
          </div>
          <div class="footer-rrss col-sm-12 col-md-4">
                <h4>RR.SS.</h4>
                <a href="#" class="rrss-icon"><i class="bi bi-whatsapp"></i></a>
                <a href="#" class="rrss-icon"><i class="bi bi-facebook"></i></a>
                <a href="#" class="rrss-icon"><i class="bi bi-instagram"></i></a>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{ 
    font-size: .6em;
}
.footer-empresa, .footer-productos, .footer-rrss{
    color:rgb(255, 255, 158);
    margin-top: 2em;
}
.footer-list{
    list-style: none;
}
.rrss-icon{
    font-size: 2em;
    color: rgb(255, 255, 158);
    margin: 1em;
}

@media(min-width: 780px){
    .footer-empresa, .footer-productos, .footer-rrss{
        margin-top: .5em;
    }   
}
</style>