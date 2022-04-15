Vue.component('edit', {
	data:function(){
		return {
			nuevoObj:{
                nombre:this.$route.params.nombre,
				  apellido: this.$route.params.apellido,
			       email: this.$route.params.email,
			      comentario: this.$route.params.comentario,
			      fecha:this.$route.params.fecha
				}
}
		},
		name:"editar",
template:`
<aside class="bg-dark text-white">
	<h2 class= "pt-5 mb-5 text-center" > EDITAR </h2>
	   <div class="container pb-5">
	  	 <div class="row justify-content-center">

		   <div class="col-md-8 borde pb-3 ">

				<form v-on:submit.prevent>

				<div class="form-group">
					<label for="nombre">Nombre *</label>
					<input type="text"  class="form-control" v-model="nuevoObj.nombre" >
				</div>
		   
				<div class="form-group">
					<label for="nombre">Apellido *</label>
					<input type="text" class="form-control" v-model="nuevoObj.apellido">
				</div>
						   
				<div class="form-group">
					<label for="mail">Email *</label>
					<input type="email"  class="form-control" v-model="nuevoObj.email">                                            
					<small id="ayudamail" class="form-text text-muted">Tu dirección de email está segura con nosotros.</small>
				</div>
		   
				 <div class="form-group py-3">
					<label for="comentario">Tu mensaje *</label>
					<textarea class="form-control" v-model="nuevoObj.comentario" cols="30" rows="5"></textarea>
				</div>
		   
				<button type="button" @click="editar(nuevoObj)" class="btn btn-info mb-2 btn-lg float-right" value="guardar">Guardar</button>
			
				
			 </form>

            </div>
        </div>
    </div>         
    </aside>	




`,
methods:{
     editar:function(){
		let aceptar_d= JSON.parse(localStorage.getItem ("dato"))

	    for (var i=0; i < aceptar_d.length; i++){
				if (aceptar_d[i].fecha == this.nuevoObj.fecha ) {
					aceptar_d.splice(i, 1);	
					}
				}

				aceptar_d.push(this.nuevoObj);
        localStorage.setItem("dato", JSON.stringify(aceptar_d));
		this.$router.push('/datos');

}

	},
});