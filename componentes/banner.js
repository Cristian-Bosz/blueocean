Vue.component('banner', {
	data:function(){
		return {
            banner1: "PollutionPics/banner7.jpg",
            banner2: "PollutionPics/Banner2_adaptado.jpg",
            banner3: "PollutionPics/banner3.jpg",
            banner4: "PollutionPics/banner8.jpg",


		}
	},
    template: `
    <section>
    <div class="container my-2">
        <div class="row">
            <div id="galeria" class="carousel slide carousel-fade" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#galeria" data-slide-to="0" class="active"></li>
                    <li data-target="#galeria" data-slide-to="1"></li>
                    <li data-target="#galeria" data-slide-to="2"></li>
                    <li data-target="#galeria" data-slide-to="3"></li>
                 
                   
                </ol>
                
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" v-bind:src='banner1' alt="imagen">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" v-bind:src='banner2' alt="imagen">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" v-bind:src='banner3' alt="imagen">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" v-bind:src='banner4' alt="imagen">
                </div>
                </div>

                <a class="carousel-control-prev" href="#galeria" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Anterior</span>
                </a>

                <a class="carousel-control-next" href="#galeria" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Siguiente</span>
                </a>
            </div>
        </div>
    </div>

</section>
	
                
`,
});