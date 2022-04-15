Vue.component('evitar', {
	data:function(){
		return {
			titulo: "¿Como evitar la contaminación?",
			parrafo:"Para evitar o disminuir la contaminación del agua basta con tomar conciencia de ello y procurar su utilización más ahorrativa, eficiente y responsable. Esto pasa por:",
            sub_evitar1: "Políticas urbanas e industriales más responsables.", 
			evitar1: "Que obliguen a disponer de manera correcta de los subproductos de la industria y de las aguas servidas, atenuando el impacto que estos desechos infligen sobre el mar y los lagos.",
            sub_evitar2: "Campañas de concientización del consumo.", 
			evitar2: "El derroche de aguas potables es una realidad cotidiana, que va desde el grifo que queda abierto mientras nos enjabonamos las manos, hasta el agua potable que derrochamos “limpiando” la acera.",
            sub_evitar3: "Cultura de reciclaje.", 
			evitar3: " La disminución de la basura sólida que va a dar, de una forma u otra, al agua o a rellenos sanitarios en contacto con aguas subterráneas, puede darse mediante el reciclaje y un consumo más responsable.",
		}
	},
    template: `
    <article class="container-fluid my-5 bg-light">
    <div Class="container">	
    <h2 class="text-center pt-4 mb-4">{{titulo}}</h2>
                
                <p class="lead">{{parrafo}}</p>
                    <ul id="evitar">
                        <li><p class="lead"><strong><u>{{sub_evitar1}}</u></strong> {{evitar1}}</p></li>

                        <li><p class="lead"><strong><u> {{sub_evitar2}}</u></strong> {{evitar2}}</p></li>

                        <li><p class="lead"><strong><u> {{sub_evitar3}}</u></strong> {{evitar3}}</p></li>
                    </ul>
    </div>
</article>
                
`,
});