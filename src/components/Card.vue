<template>
  <div class="col-sm-12 col-md-3 d-block">
    <div class="card card-bg p-2 m-2 sombra">
        <img :src="producto.image" :alt="producto.nombre" style="width:150px;heigth:150px;border-radius:10px;" class="m-auto"/>
        <div class="card-body font-weight-bold mt-1 pt-0">
            <h6 class="card-title font-weight-bold text-success" style="font-size:.9em;">{{ producto.nombre }}</h6>
            <p class="card-text mt-0 pt-0 text-dark">$ {{ producto.precio }}</p>
        </div>
        <button class="btn btn-danger mb-2" @click="seeDetail(producto.detail)"><i class="bi bi-eye text-white"></i>&nbsp;Caracteristicas</button>
        <button v-show="!cart.addCart" :hidden="producto.addCart" @click="(producto.addCart=true,producto.quantity=cantidad, addToCart(JSON.parse(JSON.stringify(producto))))" class="btn btn-primary mb-2"      
        > Agregar al carro</button>
        <button class="btn btn-success mb-2 font-weight-bold" v-show="producto.addCart" block>Agregado al carrito</button>
        <div v-if="!producto.addCart" class="d-flex justify-content-center">
            <button class="btn btn-danger" @click="cantidad != 1 && cantidad--">-</button>
            <h4 class="mx-2">{{ cantidad }}</h4>
            <button class="btn btn-primary" @click="cantidad++">+</button>
        </div>  
        <div v-if="producto.addCart">
            <button class="btn btn-danger" @click="goToCart()"><i class="bi bi-eye"></i>&nbsp; Ver Carrito</button>
        </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            cantidad:1,
            cart:[],
        }
    },
    props:{
        producto:Object,
    },
    computed:{
        ...mapState(['productos']),
    },
    methods:{
        addToCart(product) {
            this.cart = [];
            if (JSON.parse(localStorage.getItem("cartLocal"))) {
                this.cart = JSON.parse(localStorage.getItem("cartLocal"));
            } else {
                this.cart = [];
            }
            this.cart.push(product);
            localStorage.setItem("cartLocal", JSON.stringify(this.cart));
            
        },
        seeDetail(produ){
            alert(produ);
        },
        goToCart(){
            this.$router.push('/Carrito')
            location.reload()
        }
    },
    created() {   
        this.cart = [];
        if (JSON.parse(localStorage.getItem("cartLocal"))) {
        this.cart = JSON.parse(localStorage.getItem("cartLocal"));
        } else {
        this.cart = [];
        }
        for (let index = 0; index < this.cart.length; index++) {
            for (let index2 = 0; index2 < this.productos.length; index2++) {
                if (this.cart[index].nombre == this.productos[index2].nombre) {
                this.productos[index2].addCart = true;
                }
            }
        }
    },
}
</script>

<style scoped>
.sombra{
    box-shadow: rgb(150,150,150) 5px 5px; 
}
.card-bg{
    border-radius: 10px;
    background: -webkit-radial-gradient(30px 50px, ellipse, #FFFFFF 50%,#db7fee 70%, #c533f1 90%);
}
</style>