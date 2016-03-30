
requirejs.config({
    paths:{
        jquery:"jquery/jquery"
    }
});

requirejs(['jquery','validate'],function($,validate){
    $("body").css("background","red");
    alert(validate.C(1,2));
});

requirejs(["abc"],function(abc){
    alert(abc.AB(1,2));
});