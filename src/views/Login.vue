<template>
  <div class="login">
      <div class="login-bg">
          <img class="bg-img" src="../../public/img/header3.jpg" alt="">
      </div>
      <div class="row mw-100 login-form mt-5 justify-content-center">
        <div class="col-sm-8 col-md-5 bg-primary" style="filter:opacity(.8);border-radius:10px;">
            <div class="form-logo m-2 bg-info border border-white">
                <img class="m-2" src="../../public/img/logoNav.jpg" alt="Logo Verde-Creacion" style="width:5em;heigth:4em; border-radius:10px">
                <h4 style="font-weight:bold; color:black;">Vivero y jardínes</h4>
            </div>
            <h3 class="text-white">Bienvenido</h3>
            <h5 class="text-white">Zona Administradores</h5>
            <form class="form form-sm">
                <div class="form-group m-4">
                    <input v-model=email class="form-control" type="email" placeholder="Ingrese correo">
                </div>
                <div class="form-group m-2 col-6">
                    <input v-model=password class="form-control" type="password" placeholder="Ingrese clave">
                </div>
                <div>
                    <div> <h6 v-if="error==true" class="text-danger font-weight-bold bg-info">Email o clave incorrectos</h6> </div>
                </div>

                <div class="form-group m-4">
                    <button class="btn btn-danger form-control col-5 mr-3" type="button" @click="goToBack()">Cancelar</button>
                    <button class="btn btn-success form-control col-5 ml-3" type="button" @click="validateLogin()">Ingresar</button>    
                </div>
            </form>
        </div> 
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            error:false,
            email:"",
            password:"",
        }
    },
    methods:{
        validateLogin(){
            if (this.email=="dennisalbertotm@gmail.com" && this.password=="Green"){
                this.$router.push('/HomeAdmin');
            }else{
                this.error=true;
            }
        },
        goToBack(){
            this.$router.push('/');
        }
    }
}
</script>

<style>
.bg-img{
    width: 100vw;
    height: 100vh;
    filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
}
.login-form{
    position: relative;
    margin: 0 auto;
    
}
</style>