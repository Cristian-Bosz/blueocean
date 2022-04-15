Vue.component('comp-contactos', {
	data:function(){
		return {
			titulo_contacto: "Sé parte del equipo BlueOcean",
			p_form: "Para obtener mas información sobre nuestros proyectos, campañas y oportunidades para participar, podés escribirnos completando el siguiente formulario.",

			form_data:{
				nombre:"",
				apellido:"",
				email:"",
				comentario:"",
				fecha:""
				},
		arr:[]

		}
	},
 	template: `
 	<aside class="container-fluid text-white py-3 bg-dark contacto">


	 <div class="container py-4">
		 <div class="row">
			 <div>
				 <img class="img-fluid" src="PollutionPics/banner5b.jpg" alt="banner del sable de luke skywalker">
			 </div>
		 </div>
	 </div>
 

	<h2 class= "display-5 mt-5 mb-5 text-center font-weight-bold text-uppercase" > {{titulo_contacto}} </h2>
	   <div class="container mb-5">
	  	 <div class="row justify-content-center">

		   <div class="col-md-8 borde pb-3 ">
				<p class="lead mb-5">{{p_form}}</p>	
			
				<div class="popup alert alert-warning alert-dismissible fade show" role="alert">
  					<strong>Ups!</strong> No debe haber ningun campo vacio.
  					<button type="button" id="cerrar_obligatorios" class="close" data-dismiss="alert" aria-label="Close">
			  		</button>
				</div>
				<form v-on:submit.prevent>

				<div class="form-group">
					<label for="nombre">Nombre *</label>
					<input type="text"  class="form-control" v-model.trim="form_data.nombre" name="nombre" id="nombre" >
				</div>
		   
				<div class="form-group">
					<label for="nombre">Apellido *</label>
					<input type="text" class="form-control" v-model.trim="form_data.apellido" name="apellido" id="apellido">
				</div>
						   
				<div class="form-group">
					<label for="mail">Email *</label>
					<input type="email"  class="form-control" v-model.trim="form_data.email" name="email" id="mail" aria-describedby="ayudamail" >                                            
					<small id="ayudamail" class="form-text text-muted">Tu dirección de email está segura con nosotros.</small>
				</div>
		   
				 <div class="form-group py-3">
					<label for="comentario">Tu mensaje *</label>
					<textarea id="comentario" name="comentario" class="form-control" v-model.trim="form_data.comentario" cols="30" rows="5"></textarea>
				</div>
		   
				<button type="button" @click="guardar(form_data)" class="btn btn-info mb-2 btn-lg float-right" value="enviar">Enviar</button>
			
				
			 </form>

            </div>
			
				
				
		</div>
        </div>
    </div>         
    </aside>
	`,


	methods:{
		guardar:function(form_data){
			if (this.form_data.nombre == "" || this.form_data.apellido == "" || this.form_data.email == "" || this.form_data.comentario == "") {
				
				let mostrarAlerta = document.querySelector(".popup");
				
				mostrarAlerta.style.display = "block";
				 
				return false;
			};
	
	nuevoObj={  
				nombre: this.form_data.nombre,
				apellido: this.form_data.apellido,
				email: this.form_data.email,
				comentario: this.form_data.comentario,
				fecha: new Date().toLocaleTimeString()
	}
	
			if(!localStorage.dato){
				arr=[]
			}else{
				arr=JSON.parse(localStorage.getItem("dato"))
				}
	
		arr.push(nuevoObj)
		localStorage.setItem("dato",JSON.stringify(arr))
		this.$router.push('/datos');
	
	}
	},

});

