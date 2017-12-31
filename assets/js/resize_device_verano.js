$(window).load( function() {
    //width: 100% mobile container
    var width = window.innerWidth || document.body.clientWidth || window.outerWidth;
    if(width < 992) { //mobile
        $('.category-verano-deportes .row .category-box').removeClass('pull-right');
        $('.category-verano-deportes .row .category-box').removeClass('box-right');
        $('.category-verano-deportes .row .category-box').addClass('pull-left');
        $('.category-verano-terrazas .row .category-box').removeClass('pull-right');
        $('.category-verano-terrazas .row .category-box').removeClass('box-end');
        $('.category-verano-terrazas .row .category-box').addClass('pull-left');
    }
    else { //desktop
        $('.category-verano-deportes .row .category-box').removeClass('pull-left');
        $('.category-verano-deportes .row .category-box').addClass('box-right');
        $('.category-verano-deportes .row .category-box').addClass('pull-right');
        $('.category-verano-terrazas .row .category-box').removeClass('pull-left');
        $('.category-verano-terrazas .row .category-box').removeClass('box-right');
        $('.category-verano-terrazas .row .category-box').addClass('pull-right');
    }
});

$(window).resize( function() {
    //width: 100% mobile container
    var width = window.innerWidth || document.body.clientWidth || window.outerWidth;
    if(width < 992) {
        $('.category-verano-deportes .row .category-box').removeClass('pull-right');
        $('.category-verano-deportes .row .category-box').removeClass('box-right');
        $('.category-verano-deportes .row .category-box').addClass('pull-left');
        $('.category-verano-terrazas .row .category-box').removeClass('pull-right');
        $('.category-verano-terrazas .row .category-box').removeClass('box-end');
        $('.category-verano-terrazas .row .category-box').addClass('pull-left');
    }
    else {
        $('.category-verano-deportes .row .category-box').removeClass('pull-left');
        $('.category-verano-deportes .row .category-box').addClass('box-right');
        $('.category-verano-deportes .row .category-box').addClass('pull-right');
        $('.category-verano-terrazas .row .category-box').removeClass('pull-left');
        $('.category-verano-terrazas .row .category-box').removeClass('box-end');
        $('.category-verano-terrazas .row .category-box').addClass('pull-right');
    }
});
