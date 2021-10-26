$(document).ready(function(){
    function getData() {
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                var data = 50;
                resolve(data);
            }, 10000);

        });
    }
     

    // resolve()의 결과 값 data를 resolvedData로 받음
    getData().then(function(resolvedData) {
    $("#test").append('<p>'+resolvedData+'</p>');
    });

      
      

    jsloaderWithPromise().then(function (loadTransKeyResolve) {
        return loadTransKeyResolve+1;
    }).then(function (loadTransKeyResolve) {
        return loadTransKeyResolve+1;
    }).then(function(loadTransKeyResolve){
        $("#test").append('<p>'+loadTransKeyResolve+'</p>');
    })

});


function jsloaderWithPromise(){
    return new Promise(function(jsloaderResolve, reject){
        setTimeout(function(){
            jsloaderResolve(1);
        }, 10000);
    });
}
