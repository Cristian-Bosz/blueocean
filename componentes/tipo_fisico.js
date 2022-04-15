Vue.component('tipo_fisico', {
	data:function(){
		return {
			fisico_h3: "Tipo Físico",
            img: "PollutionPics/Contaminacion-Fisicos.jpg",
		}
	},
    template: `
 <div>   
    <h3 class="text-center text-info  mt-4 mb-4">{{fisico_h3}}</h3>				
    <div class="row bg-light mb-5">	
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">	
                <img v-bind:src='img' class="img-fluid" alt="contaminacion tipo fisica"/>	
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 fisic">	
            <p class="lead"><strong>Los contaminantes físicos son principalmente sólidos o materiales en suspensión,</strong> cuyos impactos en los ecosistemas dulceacuícolas, son consecuencia de la obstrucción de la luz que generan.</p>
            <p class="lead">Por otra parte, el calor proveniente de industrias que utilizan el agua para el enfriamiento de sus equipos o que descargan agua o líquidos a altas temperaturas, interfiere en los ciclos de crecimiento y reproducción de las especies presentes y disminuye la solubilidad de los gases en el agua.
            También el ruido que generan turbinas o sonares de las embarcaciones es considerado contaminación física y tiene su principal impacto en la desorientación de mamíferos.
            </p>
        </div>
    </div>
</div>     
`,
});