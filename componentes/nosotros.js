Vue.component('comp-nosotros', {
	data:function(){
		return {   
            titulo: "¿Que está haciendo BlueOcean?",
			img_barco: "PollutionPics/limpiando.webp",
			img_activista: "PollutionPics/activistas.webp",

		}
	},
    template: `



<article class="container-fluid">	

<div class="container-fluid banner6">
	<div class="container py-4 ">
		<div class="row">
			<div>
				<img class="img-fluid" src="PollutionPics/banner6.jpg" alt="banner del sable de luke skywalker">
			</div>
		</div>
	</div>
</div>



<div class="container-fluid bg-light">
<div class="container">
		<h2 class= "display-5 mt-5 text-center text-uppercase font-weight-bold" > ¿Quienes somos? </h2>	
		<p class="lead mt-4 pb-5 text-center">Somos una organización ecologista y pacifista internacional, económica y políticamente independiente, que no acepta donaciones ni presiones de gobiernos, partidos políticos o empresas.<br>
		BlueOcean utiliza la acción directa no violenta para atraer la atención pública hacia los problemas globales del medio ambiente e impulsar las soluciones necesarias para tener un futuro verde y en paz.</p>
</div>
</div>



<div class="container-fluid py-2 my-5 bg-light">
<h2 class= "display-5 mb-5 text-dark text-center text-uppercase font-weight-bold" > Trabajamos para </h2>
  		<div class= "row text-dark justify-content-center pastillitas">
	 
	  			<div class="col-12 col-sm-6 col-md-6 col-lg-2 my-4 mx-2 text-center">
	  				<img  src="PollutionPics/icons/cambio-climatico.png" alt="icono de cambio climatico">
	  				<p class="my-3"><b> Detener</b> el cambio climático </p>
	  			</div>	

	  			<div class="col-12  col-sm-6 col-md-6 col-lg-2  my-4 mx-4 text-center ">
	  				<img  src="PollutionPics/icons/nature.png" alt="moneda">
	  				<p class="my-3"><b>Proteger</b> la biodiversidad en todas sus formas. </p>
	  			</div>

				<div class="col-12 col-sm-6 col-md-6 col-lg-2 my-4 mx-4 text-center ">
	  				<img  src="PollutionPics/icons/la-contaminacion-del-agua.png" alt="tarjeta de credito">
	  				<p class="my-3"><b>Prevenir</b>  la contaminación y el abuso de los océanos, las tierras, el aire y el agua dulce.</p>
	  			</div>	

	  			<div class="col-12 col-sm-6 col-md-6 col-lg-2 my-4 mx-4 text-center">
	  				<img  src="PollutionPics/icons/whale.png" alt="auricualres">
	  				<p class="my-3"><b>Promover</b> la paz, el desarme mundial y la no violencia.</p>
	  			</div>
	  	</div>
</div>



<div class="container">   
<h3 class="display-5 mt-5 mb-5 text-center text-uppercase font-weight-bold">{{titulo}}</h3>				
<div class="row  mb-5">	
	<div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">	
			<img v-bind:src='img_barco' class="img-fluid" alt="contaminacion tipo fisica"/>	
	</div>
	<div class="col-12 col-sm-12 col-md-12 col-lg-6 fisic">	
		<p class="lead">En un momento tan decisivo para el futuro de los océanos, su biodiversidad y toda la vida que depende de ellos, BlueOcean urge a Naciones Unidas la rápida adopción de un <strong>tratado internacional de los océanos</strong> que proteja las aguas de altamar y el lecho marino bajo ellas.</p>

		<p class="lead">El principal objetivo de BlueOcean es lograr unos océanos y mares saludables, con las poblaciones de peces recuperadas, ecosistemas marinos bien conservados y con comunidades pescadoras sostenibles que puedan vivir de la pesca sostenible.</p>
	</div>
</div>
</div>  
 

<div class="container">   				
	<div class="row pb-5">	
		<div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">	
				<img v-bind:src='img_activista' class="img-fluid" alt="contaminacion tipo fisica"/>	
		</div>
		<div class="col-12 col-sm-12 col-md-12 col-lg-6 fisic">	
			<p class="lead">La salud de los océanos y mares también pasa por <strong>desterrar el urbanismo ilegal costero</strong>, la mala gestión de la <b>contaminación</b>, del <strong>tráfico marítimo</strong> y la presión sobre el litoral y concretar herramientas que permitan prevenir y hacer frente a los efectos del <strong>cambio climático</strong> y la <strong>acidificación oceánica</strong>.</p>

			<p class="lead">Argentina tiene mucho trabajo pendiente en este sentido. Por ello trabajamos en el control de la contaminación y la urbanización en la costa, la implementación de las políticas pesqueras sostenibles y la protección marina.</p>	
		</div>
	</div>
</div>     

</article>




`,
}); 