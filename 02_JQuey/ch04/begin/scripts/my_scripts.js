
$(document).ready(function(){

    // $(".menu_list").children().first().before("<li class='test'<em>test </em></li>");
    // // $f = $(".menu_list").children().filter(".fish").detach();
    // $(".menu_list").children().eq(3).replaceWith("<li class='test'<em>eq3 </em></li>");

    // $(".menu_list").children().filter(".test").detach();
    // $(".menu_list").children().slice(1,3).detach();

    // $(".menu_list").children().not(".test").detach();

    // $(".menu_list").children().first().detach();
    // $(".menu_list").children().first().before($f[0]);
    let check = false;
    let $f, $m;
    $("button#vegOn").click(function(){
        if (check == false){
            $f = $(".fish").parent().parent().detach();

            $(".hamburger").replaceWith("<li class='portobello'<em>portobello mushroom </em></li>");
            $(".portobello").parent().parent().addClass("veg_leaf");
        //    $(".meat").replaceWith("<li class='tofu'<em>tofu</em></li>");
        
            $(".meat").after("<li class='tofu'<em>tofu</em></li>");
            $m = $(".meat").detach();
            $(".tofu").parent().parent().addClass("veg_leaf");

        }
        check = true;
    });

    $("button#restoreMe").click(function(){
        if(check == true){
            $(".menu_entrees li").first().before($f);
            $(".portobello").replaceWith("<li class='hamburger'<em>hamburger </em></li>");

            $(".tofu").each(function(i){
                $(this).after($m[i]);
            });
            $(".tofu").remove();

        }

        check = false;
    });

});