Vue.component('tipo_quimico', {
	data:function(){
		return {
			quimico_h3: "Tipo Quimico",
            img: "PollutionPics/Contaminacion-Quimicos.jpg",
		}
	},
    template: `
 <div>   
 <h3 class="text-center text-info mt-5 mb-4">{{quimico_h3}}</h3>
 <div class="row mb-5">
     <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">				
             <img v-bind:src='img' class="img-fluid" alt="contaminacion tipo quimica"/>
     </div>
     <div class="col-12 col-sm-12 col-md-12 col-lg-6 quimico">
         <p class="lead">Los contaminantes químicos pueden ser de <b>origen inorgánico </b> o bien de <b>origen orgánico.</b><br>
         La contaminación inorgánica consiste en el aporte de nutrientes, detergentes y metales que llegan a los cuerpos de agua. Los metales pesados son los compuestos químicos más preocupantes; el cadmio (Cd), cromo (Cr), mercurio (Hg), níquel (Ni), plomo (Pb) y zinc (Zn), son metales tóxicos y repercuten en el sistema nervioso central y en el riñón, además de que se les atribuyen alergias, intoxicación y en ocasiones un carácter cancerígeno.</p>
         <p class="lead"><strong>Recientemente se ha detectado la presencia de compuestos potencialmente peligrosos, denominados “emergentes” que se derivan principalmente de descargas industriales o domésticas de agua.</strong> Aún no existe información sobre su abundancia e impacto por lo que en su mayoría no están regulados, pero se estima que algunos pueden ser persistentes. Entre estos, tal vez los que suscitan mayor preocupación son los fármacos, particularmente los antibióticos y las drogas.
         </p>
     </div>
 </div>
</div>     
`,
});