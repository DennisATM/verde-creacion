import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCE48cYgKbkNGJPVaeI-prjhLXAZTgWZI4",
  authDomain: "verde-creacion.firebaseapp.com",
  projectId: "verde-creacion",
  storageBucket: "verde-creacion.appspot.com",
  messagingSenderId: "948573951058",
  appId: "1:948573951058:web:72137eba835e52bec63b8b",
  measurementId: "G-160EDWV5W1"
};

firebase.initializeApp(firebaseConfig);
let app;
firebase.auth().onAuthStateChanged(user=>{//se llama N veces
    console.log(user);
    if(!app){//solo una vez
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }  
  });