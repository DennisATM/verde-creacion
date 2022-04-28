<template>
  <div class="carrito">
    <div>
      <Navbar />
    </div>
    <div class="carrito-titulo">
      <h1>Carrito de compras</h1>
    </div>

    <div>
      <div class="col">
        <table class="table table-sm table-bordered carrito-tabla">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio Unit</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody class="text-white">
            <tr v-for="(items, index) of cart" :key="index">
              <td data-titulo="Id" scope="col">{{ index + 1 }}</td>
              <td data-titulo="Imagen" scope="col">
                <img :src="items.image" alt="" style="width:25px;heigth:25px;border-radius:5px;"/>
              </td>
              <td data-titulo="Titulo" scope="col">{{ items.nombre }}</td>
              <td data-titulo="Titulo" scope="col">
                $&nbsp;{{ items.precio }}
              </td>
              <td
                data-titulo="Cantidad"
                scope="col"
                class="justify-contend-around"
              >
                <button
                  class="btn btn-info btn-sm mr-3"
                  @click="increment(items.id)"
                >
                  +
                </button>

                {{ items.quantity }}

                <button
                  class="btn btn-danger btn-sm ml-3"
                  @click="decrement(items.id)"
                >
                  -
                </button>
              </td>
              <td data-titulo="Subtotal" scope="col">
                $ <span>{{ items.precio * items.quantity }}</span>
              </td>
              <td data-titulo="Acciones" scope="col">
                <button class="btn btn-danger mr-2" @click="remove(items.id)">
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="carrito-footer p-2">
          <div
            class="row text-danger m-auto justify-content-center"
            v-if="cart.length == 0"
          >
            <h2>Carrito vacío - comience a comprar!</h2>
            <button class="btn btn-info ml-5" @click="goToCatalogo">Ir a catálogo</button>
          </div>
          <div v-else class="row justify-content-around p-1">
            <h6>Articulos: {{ totalQuantity }}</h6>
            <h6>Subtotal:$ {{totalPrice}}</h6>
            <h6>Reparto:$ {{totalDelivery}}</h6>
            <h4>
              Total a Pagar: $ <span>{{ totalPrice + totalDelivery}}</span>
            </h4>
            <div>
            <button
              class="btn btn-danger btn-sm m-1"
              data-toggle="modal"
              data-target="#cleanModal"
              id="vaciar-carrito"
            >
              Vaciar Carrito
            </button>
            <!--  -->
            <div
              class="modal fade"
              id="cleanModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel2"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel2">
                      Seguridad
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="alert alert-success" role="alert">
                    ¿Desea vaciar el carrito?
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="clean()"
                    >
                      Vaciar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!--  -->
            <button
              class="btn btn-success btn-sm m-1"
              data-toggle="modal"
              data-target="#exampleModal"
              @click="buy()"
            >
              Enviar Pedido
            </button>
            <button
              class="btn btn-info btn-sm m-1"
              @click="goToCatalogo()"
            >
              Ir a Catálogo
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Datos de Cliente
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="alert alert-success" role="alert">
                    Por favor ingrese los datos para la entrega y verifique su
                    pedido.
                  </div>
                  <div class="modal-body">
                    <h5>Ingresado:{{ ticket.date }}</h5>
                    <form>
                      <div class="form-group">
                        <input
                          class="form-control col-12"
                          v-model="ticket.name"
                          type="text"
                          placeholder="Nombre"
                        /><br />
                        <input
                          class="form-control col-12"
                          v-model="ticket.direction"
                          type="text"
                          placeholder="Direccion de entrega"
                        /><br />
                        <input
                          class="form-control col-7"
                          v-model="ticket.ws"
                          type="number"
                          placeholder="N° Whatsapp"
                        />
                      </div>
                    </form>
                    <hr />
                    <h5>Productos:</h5>
                    <hr />
                    <ul
                      v-for="productFinal in ticket.products"
                      :key="productFinal.id"
                    >
                      <li class="font-weight-bold">{{ productFinal.nombre }}</li>
                      <li>Cantidad: {{ productFinal.quantity }}</li>
                      <li>Precio: {{ productFinal.precio }}</li>
                      <li>
                        Total: {{ productFinal.precio * productFinal.quantity }}
                      </li>
                      <hr />
                    </ul>
                    <h4 class="my-4 text-center">
                      Reparto: ${{ totalDelivery }}
                    </h4>
                    <h4 class="my-4 text-center">
                      Total a pagar: ${{ ticket.totalPrice + totalDelivery }}
                    </h4>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="sendData()"
                    >
                      Enviar datos y Terminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="text-danger ml-4" style="text-align:start;" >
            <h6 style="font-weight:bold">* Reparto gratis por compras superiores a $ 20000</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      cont: 0,
      cart: [],
      delivery:0,
      ticket: {
        products: null,
        totalPrice: 0,
        totalQuantity: 0,
        totalDelivery:0,
        name:"",
        direction:"",
        ws:"",
        date:""
      },
    }
  },
  created() {
    if (JSON.parse(localStorage.getItem("cartLocal"))) {
      this.cart = JSON.parse(localStorage.getItem("cartLocal"));
    } else {
      this.cart = [];
    }
    console.log(this.cart);
  },
  computed:{
    totalPrice:function() {
      let t = 0;
      for (let index = 0; index < this.cart.length; index++) {
        t += this.cart[index].precio * this.cart[index].quantity;
      }
      t=t+this.delivery;
      return t;
    },
    
    totalDelivery:function(){
      let deli=0;
      if (this.totalPrice>=20000){
        deli=0;
      }else{
        deli=1500;
      }
      return deli;
    },

    totalQuantity:function() {
      let t = 0;
      for (let index = 0; index < this.cart.length; index++) {
        t += this.cart[index].quantity;
      }
      return t;
    },
  },
  methods: {
    increment(id) {
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].id == id) {
          this.cart[index].quantity++;
          localStorage.setItem("cartLocal", JSON.stringify(this.cart));
        }
      }
    },
    decrement(id) {
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].id == id) {
          this.cart[index].quantity--;
          if (this.cart[index].quantity == 0) {
            this.remove(id);
          }
          localStorage.setItem("cartLocal", JSON.stringify(this.cart));
        }
      }
    },
    remove(id) {
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].id == id) {
          this.cart.splice(index, 1);
          localStorage.setItem("cartLocal", JSON.stringify(this.cart));
        }
        if (this.cart.length == 0) {
          localStorage.clear();
        }
      }
    },
    clean(){
      this.cart=[];
      for (const key in this.cart){
          this.cart[key].cart=false;
          this.cart[key].quantity=1;
      }
      localStorage.setItem('cartLocal',JSON.stringify(this.cart));    
      this.$router.push('/Catalogo');
      location.reload();
    },
    goToCatalogo(){
      this.$router.push('/Catalogo');
    },
    buy(){
      this.ticket = {
        products: this.cart,
        totalDelivery:this.totalDelivery,
        totalPrice: this.totalPrice+this.totalDelivery,
        totalQuantity:this.totalQuantity
      };
      let fecha=new Date();
      this.ticket.date=(fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+" - "+fecha.getHours()+":"+fecha.getMinutes())
      console.log(this.ticket.date)
    },
    sendData(){
      if (this.ticket.name==undefined || this.ticket.direction==undefined || this.ticket.ws==undefined){
        alert("Debe ingresar los datos correctamente")
      }else{
        var db=firebase.firestore()
        db.collection('pedidos').add(this.ticket)
       .then((data)=>{                
                console.log(data);
                this.clean()
        })
        .catch((error)=>{
                console.log(error);
        })
      }
    },
  },
} 
</script>

<style scoped>
.carrito {
  background-image: url(../../public/img/bg-cesped.jpg);
  background-size: 100%;
  background-clip: content-box;
  background-attachment: fixed;
  
}
.carrito-titulo {
  margin-top: 6em;
  padding: .5em;
  color: green;
  background: rgb(218, 170, 81);
  filter: sepia(.4);
}
.carrito-tabla{
  margin-top: 1em;
  background: rgb(189, 142, 49);
}
.carrito-footer{
  color:black;
  background: rgb(218, 170, 81);
}
.footer{
  margin-top: 4em;
  padding-top: 2em;
}

@media (max-width: 30em) {
  table {
    font-size: 0.9em;
  }
  table tr {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }
  table td[data-titulo] {
    display: flex;
  }
  table td[data-titulo]::before {
    content: attr(data-titulo);
    width: 120px;
    color: silver;
    font-weight: bold;
  }
  table thead {
    display: none;
  }
}
</style>
