$(document).ready( function() {
    $.get("/static/categorias/contenidoEstatico/landings/Verano/menu.shtml?v=CywsRSkTzf3UMS0", function(data){
        $('#menu').append(data);

        $('.link').click(function() {
            if(!$(this).hasClass("active")){
                $(this).addClass('active');
                $(this).find("span").removeClass('glyphicon glyphicon-menu-down');
                $(this).find("span").addClass('glyphicon glyphicon-menu-up');
                $(this).find("label").css('color', '#dd0021');
                $(this).find("span").css('color', '#dd0021');
            }else{
                $(this).removeClass("active");
                console.log("out");
                $(this).find("span").removeClass('glyphicon glyphicon-menu-up');
                $(this).find("span").addClass('glyphicon glyphicon-menu-down');
                $(this).find("span").css('color', '#595959');
                $(this).find("label").css('color', '#595959');
            }
        });
        $('.button-camp-right').click( function(){
            NextSliderCamping();
        });
        $('.button-camp-left').click( function(){
            PrevSliderCamping();
        });
        function NextSliderCamping() {
            var currentNext = $('.next-active-camping');
            var actualNext = currentNext.next();
            var currentPrev = $('.prev-active-camping');
            var actualPrev = currentPrev.next();

            if(actualNext.length){
                currentPrev.removeClass('prev-active-camping').css('display', 'none');
                actualPrev.addClass('prev-active-camping');
                currentNext.removeClass('next-active-camping');
                actualNext.addClass('next-active-camping').css('display', 'block');
            }
            else if($('.img-camping-10').hasClass('next-active-camping') && $('.img-camping-6').hasClass('prev-active-camping')){
                $('.img-camping-10').removeClass('next-active-camping');
                $('.img-camping-5').addClass('next-active-camping');
                $('.img-camping-6').removeClass('prev-active-camping');
                $('.img-camping-1').addClass('prev-active-camping');
                $('.img-camping-6').css('display','none');
                $('.img-camping-7').css('display','none');
                $('.img-camping-8').css('display','none');
                $('.img-camping-9').css('display','none');
                $('.img-camping-10').css('display','none');
                $('.img-camping-1').css('display','block');
                $('.img-camping-2').css('display','block');
                $('.img-camping-3').css('display','block');
                $('.img-camping-4').css('display','block');
                $('.img-camping-5').css('display','block');
            }
        }
        function PrevSliderCamping() {
            var currentNext = $('.next-active-camping');
            var actualNext = currentNext.prev();
            var currentPrev = $('.prev-active-camping');
            var actualPrev = currentPrev.prev();

            if(actualPrev.length){
                currentPrev.removeClass('prev-active-camping').css('display', 'none');
                actualPrev.addClass('prev-active-camping');
                currentNext.removeClass('next-active-camping').css('display', 'none');
                actualNext.addClass('next-active-camping');
            }
            else if($('.img-camping-5').hasClass('next-active-camping') && $('.img-camping-1').hasClass('prev-active')){
                $('.img-camping-5').removeClass('next-active-camping');
                $('.img-camping-10').addClass('next-active-camping');
                $('.img-camping-1').removeClass('prev-active-camping');
                $('.img-camping-6').addClass('prev-active-camping');
                $('.img-camping-1').css('display','none');
                $('.img-camping-2').css('display','none');
                $('.img-camping-3').css('display','none');
                $('.img-camping-4').css('display','none');
                $('.img-camping-5').css('display','none');
                $('.img-camping-6').css('display','block');
                $('.img-camping-7').css('display','block');
                $('.img-camping-8').css('display','block');
                $('.img-camping-9').css('display','block');
                $('.img-camping-10').css('display','block');
            }
        }

        $('.button-deporte-left').click( function(){
            NextSliderDeporte();
        });
        $('.button-deporte-right').click( function(){
            PrevSliderDeporte();
        });
        function NextSliderDeporte() {
            var currentNext = $('.next-active-deportes');
            var actualNext = currentNext.next();
            var currentPrev = $('.prev-active-deportes');
            var actualPrev = currentPrev.next();

            if(actualNext.length){
                currentPrev.removeClass('prev-active-deportes').css('display', 'none');
                actualPrev.addClass('prev-active-deportes');
                currentNext.removeClass('next-active-deportes');
                actualNext.addClass('next-active-deportes').css('display', 'block');
            }
            else if($('.img-deportes-9').hasClass('next-active-deportes') && $('.img-deportes-5').hasClass('prev-active-deportes')){
                $('.img-deportes-9').removeClass('next-active-deportes');
                $('.img-deportes-5').addClass('next-active-deportes');
                $('.img-deportes-5').removeClass('prev-active-deportes');
                $('.img-deportes-1').addClass('prev-active-deportes');
                $('.img-deportes-5').css('display','none');
                $('.img-deportes-6').css('display','none');
                $('.img-deportes-7').css('display','none');
                $('.img-deportes-8').css('display','none');
                $('.img-deportes-9').css('display','none');
                $('.img-deportes-1').css('display','block');
                $('.img-deportes-2').css('display','block');
                $('.img-deportes-3').css('display','block');
                $('.img-deportes-4').css('display','block');
                $('.img-deportes-5').css('display','block');
            }
        }
        function PrevSliderDeporte() {
            var currentNext = $('.next-active-deportes');
            var actualNext = currentNext.prev();
            var currentPrev = $('.prev-active-deportes');
            var actualPrev = currentPrev.prev();

            if(actualPrev.length){
                currentPrev.removeClass('prev-active-deportes').css('display', 'none');
                actualPrev.addClass('prev-active-deportes');
                currentNext.removeClass('next-active-deportes').css('display', 'none');
                actualNext.addClass('next-active-deportes');
            }
            else if($('.img-deportes-5').hasClass('next-active-deportes') && $('.img-deportes-1').hasClass('prev-active-deportes')){
                $('.img-deportes-5').removeClass('next-active-deportes');
                $('.img-deportes-9').addClass('next-active-deportes');
                $('.img-deportes-1').removeClass('prev-active-deportes');
                $('.img-deportes-5').addClass('prev-active-deportes');
                $('.img-deportes-1').css('display','none');
                $('.img-deportes-2').css('display','none');
                $('.img-deportes-3').css('display','none');
                $('.img-deportes-4').css('display','none');
                $('.img-deportes-5').css('display','none');
                $('.img-deportes-5').css('display','block');
                $('.img-deportes-6').css('display','block');
                $('.img-deportes-7').css('display','block');
                $('.img-deportes-8').css('display','block');
                $('.img-deportes-9').css('display','block');
            }
        }

        $('.button-juego-left').click( function(){
            NextSliderJuego();
        });
        $('.button-juego-right').click( function(){
            PrevSliderJuego();
        });
        function NextSliderJuego() {
            var currentNext = $('.next-active-juegos');
            var actualNext = currentNext.next();
            var currentPrev = $('.prev-active-juegos');
            var actualPrev = currentPrev.next();

            if(actualNext.length){
                currentPrev.removeClass('prev-active-juegos').css('display', 'none');
                actualPrev.addClass('prev-active-juegos');
                currentNext.removeClass('next-active-juegos');
                actualNext.addClass('next-active-juegos').css('display', 'block');
            }
            else if($('.img-juegos-7').hasClass('next-active-juegos') && $('.img-juegos-3').hasClass('prev-active-juegos')){
                $('.img-juegos-7').removeClass('next-active-juegos');
                $('.img-juegos-5').addClass('next-active-juegos');
                $('.img-juegos-3').removeClass('prev-active-juegos');
                $('.img-juegos-1').addClass('prev-active-juegos');
                $('.img-juegos-3').css('display','none');
                $('.img-juegos-4').css('display','none');
                $('.img-juegos-5').css('display','none');
                $('.img-juegos-6').css('display','none');
                $('.img-juegos-1').css('display','block');
                $('.img-juegos-2').css('display','block');
                $('.img-juegos-3').css('display','block');
                $('.img-juegos-4').css('display','block');
                $('.img-juegos-5').css('display','block');
            }
        }
        function PrevSliderJuego() {
            var currentNext = $('.next-active-juegos');
            var actualNext = currentNext.prev();
            var currentPrev = $('.prev-active-juegos');
            var actualPrev = currentPrev.prev();

            if(actualPrev.length){
                currentPrev.removeClass('prev-active-juegos').css('display', 'none');
                actualPrev.addClass('prev-active-juegos');
                currentNext.removeClass('next-active').css('display', 'none');
                actualNext.addClass('next-active-juegos');
            }
            else if($('.img-juegos-5').hasClass('next-active-juegos') && $('.img-juegos-1').hasClass('prev-active')){
                $('.img-juegos-5').removeClass('next-active-juegos');
                $('.img-juegos-7').addClass('next-active-juegos');
                $('.img-juegos-1').removeClass('prev-active-juegos');
                $('.img-juegos-3').addClass('prev-active-juegos');
                $('.img-juegos-1').css('display','none');
                $('.img-juegos-2').css('display','none');
                $('.img-juegos-3').css('display','none');
                $('.img-juegos-4').css('display','none');
                $('.img-juegos-5').css('display','none');
                $('.img-juegos-3').css('display','block');
                $('.img-juegos-4').css('display','block');
                $('.img-juegos-5').css('display','block');
                $('.img-juegos-6').css('display','block');
                $('.img-juegos-7').css('display','block');
            }
        }

        $(window).scroll(function(){
            if ($(window).scrollTop() > 100){
                $("#menu-navbar-collapse").addClass("menu-navbar-fixed");
            }
            else {
                $("#menu-navbar-collapse").removeClass("menu-navbar-fixed");
            }
        });
    });

});
