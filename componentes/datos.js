Vue.component("comp-datos", {
	data:function(){
			return {
				local:[],
				sin_datos: ""
			}
	},
	template:`
	
	
<section class="container-fluid bg-dark mb-1 py-5">
	
<div class="container ">
	<h2 class="display-4 text-center text-white mb-5">Datos Guardados</h2>
    <div class="row m-0 p-0">
        <div class="col-12 m-0 p-0">
            <div class="table-responsive">
                <table class="table table-bordered table-dark table-hover ">
                    <thead class="text-center">
                        <tr>
                            <th class="text-warning">Nombre</th>
                            <th class="text-warning">Apellido</th>
                            <th class="text-warning">Email</th>
                            <th class="text-warning">Mensaje</th>
                            <th class="text-warning">Fecha</th>
                            <th class="text-warning">Acciones</th>         
                        </tr>
                    </thead>
                    <tbody>

                                <tr class="text-center" v-for="item in local">
                                    <td>{{item.nombre}}</td>
                                    <td>{{item.apellido}}</td>
                                    <td>{{item.email}}</td>
                                    <td>{{item.comentario}}</td>
                                    <td>{{item.fecha}}</td>
									<td class="text-center">
										<div class="btn-group">
											<router-link :to="'/editar/' + item.nombre + '/' + item.apellido + '/' + item.email + '/' + item.comentario + '/' + item.fecha " class="btn btn-outline-info mr-3"> Editar </router-link>
											<button class="borrar btn btn-outline-danger" @click="borrar(item)">Borrar</button>            
										</div>
                                    </td>
                                </tr>
                    </tbody>
                </table>
				<h3 class="text-info text-center">{{sin_datos}}</h3>
			</div>
        </div>
	</div>
</div>
</section>
	`,

	mounted:function(){
		this.ver_local();
	},

	
	methods:{
		ver_local:function(){
			
            if(localStorage.dato){
            var dame=JSON.parse(localStorage.getItem("dato"))	
                    this.local = dame
                
            }
            if(this.local.length == 0){
                this.sin_datos ="No hay ningún dato ingresado."
            }
        
            },
		borrar:function(item){
			        
			local= JSON.parse(localStorage.getItem ("dato"))

	for (var i=0; i < local.length; i++){
	
			if (local[i].fecha == item.fecha ) {
					alert("Queres borrar " + local[i].titulo)
						local.splice(i, 1);
			}
	}

		localStorage.setItem("dato", JSON.stringify(local))

		this.ver_local();
		}



		},  


})