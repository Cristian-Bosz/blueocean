Vue.component('soluciones', {
	data:function(){
		return {
			titulo: "¿Soluciones?",
			parrafo:"El agua contaminada a menudo tiene solución. Existen procesos de potabilización y limpieza tales como:",
            soluciones_ul:[
              "Métodos de control bacteriológico y control biológico de las aguas.",
              "Tratamientos de aguas residuales y reutilización antes de devolverlas al mar.",
              "Mecanismos de filtrado de diversa índole.",
              "Combatir también la contaminación del aire y tierra.",
              ]
		}
	},
    template: `
    <article class="container">
    <h2 class="text-center mb-4">{{titulo}}</h2>
            
        <p class="lead">{{parrafo}}</p>
            <ul id="soluciones">
            <li v-for="lista in soluciones_ul"><p class="lead"> {{lista}} </p></li>
            </ul>


</article>	
`,
});