Vue.component('tipo_biologico', {
	data:function(){
		return {
            biologico_h3:"Tipo Biológico",
            img: "PollutionPics/Contaminacion-Biologicos.jpg",
		}
	},
    template: `
 <div>   
 <h3 class="text-center text-info mt-5 mb-4">{{biologico_h3}}</h3>
 <div class="row bg-light mb-5">
     <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">	
             <img v-bind:src='img' class="img-fluid" alt="contaminacion tipo biologica"/>
     </div>
             <div class="col-12 col-sm-12 col-md-12 col-lg-6 ">
                 <p class="lead"><strong> Diversos tipos de patógenos como bacterias, protistas, helmintos y virus pueden encontrarse en agua.</strong> Algunos afectan a todas las personas, pero existen otros llamados oportunistas que impactan principalmente a grupos vulnerables como niños, ancianos y personas con enfermedades crónicas.  La inmunidad a este tipo de organismos también depende de factores como la edad, el sexo y las condiciones de vida.</p>
                 <p class="lead">A nivel global, los patógenos han tenido un gran impacto en la salud de las personas, entre los más frecuentes están: Campylobacter sp., causante más importante de diarrea infecciosa y gastroenteritis de origen bacteriano en seres humanos;  Vibrio cholerae, agente infeccioso del cólera; Salmonella sp. responsable de 16 millones de casos de diarrea al año.
                 </p>
             </div>
 </div>
</div>     
`,
});



