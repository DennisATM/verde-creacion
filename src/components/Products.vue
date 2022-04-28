<template>
    <div>   
        <div v-if="igree==true" class="border border-success p-1">   
            <form class="form">
                <h1 class="text-success">Agregar Productos</h1>
                <div class="form-row mw-100 justify-content-center">
                    <div class="form-group col-md-5">
                        <label>Nombre</label>
                        <input type="text" class="form-control" v-model="nuevoProducto.nombre">
                    </div>
                    <div class="form-group col-md-2">
                        <label>Género</label>
                        <select class="form-control" v-model="nuevoProducto.genero">
                            <option>Ornamentales</option>
                            <option>Jardin</option>
                            <option>Frutales</option>
                            <option>Insumos</option>
                            <option>Accesorios</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label>Precio</label>
                        <input type="number" class="form-control" placeholder="$1234" v-model="nuevoProducto.precio">
                    </div>
                </div>
                <div class="form-row mw-100 justify-content-center">
                    <div class="form-group col-md-5">
                        <label>Descripción</label>
                        <textarea class="form-control" rows="3" v-model="nuevoProducto.detail"></textarea>
                    </div>
                    <div class="form-group col-md-5">
                        <label class="font-weight-bold">Subir Imagen del producto</label>
                        <input type="text" class="form-control-file" v-model="nuevoProducto.image">
                    </div>
                </div>                            
                <button v-if="edit==false" type="button" class="btn btn-primary" @click="addProducto">Agregar</button>
                <button v-if="edit==true" type="button" class="btn btn-success ml-1" @click="(actualizarProducto(),igree=false)">Actualizar</button>
                <button type="button" class="btn btn-danger ml-1" @click="(igree=false,edit=false)">Cerrar</button>
            </form>
        </div>
        
        <div v-if="igree==false" style="text-align:end;">
            <button class="btn btn-danger" @click="(estadoAgregar(),edit=false)">+ Agregar Producto</button>
        </div>
           
        <div class="mt-5">
            <h1 class="text-white bg-info">Listado de Productos</h1>
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th >Nombre</th>
                        <th >Género</th>
                        <th >Precio</th>
                        <th >Imagen</th>
                        <th >Detalles</th>
                        <th >Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="prod in productos" :key="prod.nombre">
                        <td class="col-md-2">{{ prod.nombre }}</td>
                        <td class="col-md-1">{{ prod.genero }}</td>
                        <td class="col-md-1">${{ prod.precio }}</td>
                        
                        <td class="col-md-1"><img :src="prod.image" class="img-ico" /></td>
                        <td class="col-md-6">{{ prod.detail }}</td>
                        <td class="col-md-1">
                            <button type="button" class="btn btn-warning" @click="(estadoAgregar(),nuevoProducto=prod,edit=true)"><i class="bi bi-pencil"></i></button>
                            <button class="btn btn-danger ml-1" type="button" @click="eliminar(prod.id)"><i class="bi bi-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>   
    </div>
</template>
<script>

import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
 data(){
     return{
         igree:false,
         edit:false,
         productos:[],
         nuevoProducto:{
             addCart:false,
             nombre:"",
             genero:"",
             precio:0,
             image:"",
             detail:"",
         }
    }
 },
 created(){
    this.listProducts();
 },
 methods:{
    estadoAgregar(){
         this.igree=true;
    },
    listProducts(){
        try {
            this.productos=[];
            let db = firebase.firestore();
            db.collection('productos').get()
            .then((query)=>{
                query.forEach((doc)=>{  
                    this.productos.push( {
                        id:doc.id,
                        image:doc.data().image,
                        nombre:doc.data().nombre,
                        genero:doc.data().genero,
                        precio:doc.data().precio,
                        detail:doc.data().detail,
                    });
                })
                this.productos.sort((a, b) =>{
                    if (a.nombre < b.nombre){
                        return -1;
                    }else if (a.nombre > b.nombre){
                        return 1;
                    }else{
                        return 0;
                    }
                }); 
            }) 
        }
        catch (error) {
            console.log(error)
        }   
    },
    addProducto(){
        let db = firebase.firestore();
        db.collection('productos').add({
            nombre:this.nuevoProducto.nombre,
            genero:this.nuevoProducto.genero+", Todos",
            precio:this.nuevoProducto.precio,
            detail:this.nuevoProducto.detail,
            image:this.nuevoProducto.image,
            addCart:false
        })
        this.listProducts();
        this.limpiar();
    },
    actualizarProducto(){
            var db = firebase.firestore();
             this.nuevoProducto.genero+=", Todos";
             this.nuevoProducto.addCart=false;
             db.collection('productos').doc(this.nuevoProducto.id).update(this.nuevoProducto);
             this.limpiar();
             this.listProducts();
        },
    eliminar(id){
        var db = firebase.firestore();
        db.collection('productos').doc(id).delete()
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        })
        location.reload();
    },

    limpiar(){
        this.nuevoProducto.nombre="",
        this.nuevoProducto.genero="Ornamentales",
        this.nuevoProducto.precio=0,
        this.nuevoProducto.image="",
        this.nuevoProducto.detail=""
    }
 }
}
</script>
<style scoped>
    .img-ico{
        width: 60px;
        height: 60px;
    }
</style>