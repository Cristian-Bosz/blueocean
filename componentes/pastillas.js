Vue.component('pastillas', {
	data:function(){
		return {
			titulo: "Consecuencias de la contaminación del agua",
			pastilla1_h4:"Desequilibrios biológicos",
            pastilla1_p: "La presencia de ciertos químicos en el agua pueden causar la proliferación anormal de ciertos microbios o algas, lo cual desbalancea la cadena trófica y genera competencias anormales que, a la larga, ocasionan la muerte excesiva de ciertas especies que van a descomponerse añadiendo materia orgánica al agua. ",
            pastilla2_h4:"Alteraciones químicas",
            pastilla2_p: "Los cambios en la química del agua puede llegar a extremos letales, en los que la fauna y flora locales se extingan o migren hacia otras zonas, causando daños ecológicos severos.",
            pastilla3_h4:"Impacto climático",
            pastilla3_p: "Los cambios de temperatura, pH y otras propiedades del agua consecuencia de sustancias añadidas o sólidos en suspensión inciden en el comportamiento de las masas del líquido, disminuyendo su evaporación y por lo tanto su precipitación y alterando el clima local",
            pastilla4_h4:"Contaminacion de tierra y aire",
            pastilla4_p: "La contaminación hídrica no se queda sólo en el agua, sino que se esparce hacia la tierra y el aire, conforme al ciclo hídrico, en un efecto dominó de consecuencias impredecibles.",
		}
	},
    template: `
    <article  class="container my-5">
				<h2 class="text-center mt-5">{{titulo}} </h2>
			  <div class= "row my-4 text-white justify-content-center text-dark pastillitas">
		 
					  <div class="col-12 col-sm-6 col-md-6 col-lg-3 my-4 text-center border border-3-light rounded">
						  <img src="PollutionPics/Pastilla1.png" alt="cohete">
						  <h4 class=" mt-2 "> {{pastilla1_h4}}</h4>
						  <p class="mt-3"> {{pastilla1_p}}</p>
					  </div>	
	
					  <div class="col-12  col-sm-6 col-md-6 col-lg-3  my-4 text-center border border-3-light rounded">
						  <img  src="PollutionPics/Pastilla2.png" alt="moneda">
						  <h4 class=" mt-2">{{pastilla2_h4}}</h4>
							<p class="mt-3">{{pastilla2_p}}</p>
					  </div>
	
					<div class="col-12 col-sm-6 col-md-6 col-lg-3 my-4  text-center border border-3-light rounded">
						  <img  src="PollutionPics/Pastilla3.png" alt="tarjeta de credito">
						  <h4 class=" mt-2">{{pastilla3_h4}} </h4>
							<p class="mt-3">{{pastilla3_p}}</p>
					  </div>	
	
					  <div class="col-12 col-sm-6 col-md-6 col-lg-3 my-4  text-center border border-3-light rounded">
						  <img  src="PollutionPics/Pastilla4.png" alt="auricualres">
						  <h4 class=" mt-2">{{pastilla4_h4}}</h4>
							<p class="mt-3">{{pastilla4_p}}</p>
					  </div>
				  </div>
			  
	</article>
                
`,
});