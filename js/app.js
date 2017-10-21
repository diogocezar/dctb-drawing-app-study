App = {
    Preloader: {
        loaded : false,
        config : {
            delay    : 500,
            recheck  : 200,
            velocity : "slow"
        },
        init: function(){
            if(App.Preloader.loaded){
                App.Preloader.pageLoaded();
            }
            else{
                setTimeout(function(){
                    App.Preloader.init();
                }, App.Preloader.recheck);
            }
        },
        pageLoaded: function(){
            App.Preloader.hide();
        },
        show: function(){
            $("#preloader").delay(App.Preloader.delay).fadeIn(App.Preloader.velocity);
        },
        hide: function(){
            $("#preloader").delay(App.Preloader.delay).fadeOut(App.Preloader.velocity);
        }
    },
    init: function(){
        App.Preloader.init();
    }
}

$(window).on("load", function(){
	App.Preloader.loaded = true;
});

$( document ).ready(function(){
    App.init();
});