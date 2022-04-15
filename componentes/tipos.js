Vue.component('tipos', {
	data:function(){
		return {
			titulo: "Contaminación del agua. Tipos de contaminantes",
            parrafo: "La contaminación del agua es cualquier cambio químico, físico o biológico en la calidad del agua que tiene un efecto perjudicial y dañino en los seres vivos que consuman la misma. La contaminación del agua es un problema habitual dentro del ciclo del agua. Así, las aguas contaminadas han aumentado al mismo ritmo que el desarrollo industrial, planteando un problema que requiere de soluciones inmediatas.",
          
           
		}
	},
    template: `
   
	<article class="container-fluid bg-light">	
	<div class="container">
		<h2 class="text-center pt-4 mt-5">{{titulo}}</h2> 
		<p class="lead mt-4">{{parrafo}}.</p>
	
			<tipo_fisico></tipo_fisico>
		

			<tipo_quimico></tipo_quimico>


			<tipo_biologico></tipo_biologico>
	</div>
	</article>
                
`,
}); 