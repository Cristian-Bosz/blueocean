Vue.use(VueRouter)

let home = { template: `<comp-home/>`, name:'home' }
let nosotros = {template: `<comp-nosotros/>`, name:"nosotros"}
let contactos = {template: `<comp-contactos/>`, name:"contactos"}
let datos = {template: `<comp-datos/>`, name:'datos' }
let editar = {template: `<edit/>`, name:"editar"}


let router = new VueRouter({
  routes: [
  { 
    path: '/home', 
    component: home 
  },
  { 
    path: '/nosotros', 
    component: nosotros 
  },
  { 
    path: '/contactos', 
    component: contactos 
  },
  { 
    path: '/datos',
    component: datos
  },
  { 
    path: '/editar/:nombre/:apellido/:email/:comentario/:fecha',
    component: editar
  },
  { 
    path: '*', 
    redirect: '/home' 
  }
]
})



new Vue({
    el: '#app',
    router
});


