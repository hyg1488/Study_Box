$(document).ready(function() {
    
    var hideCode = function houdini(){
        let numRand = random();
        $(".guess_box").each(function(index, value){
            if(numRand == index){
                $(this).append("<span id='has_discount'></span>");
                return false;
            }
        });
      }


      hideCode();
    $(".guess_box").click(testClick);

    $(".guess_box").hover(functionHoverStart, functionHoverEnd);
});

function random(){
    let random_num = Math.floor(Math.random() * 4);
    return random_num;
}



function testClick(){
    // $(".guess_box p").remove();
    // var my_num = Math.floor((Math.random()*5) + 5);
        // var discount = "<p>Your Discount is "+my_num+"%</p>";
        // $(this).append(discount);

        // $(".guess_box").each(function () {
        //     $(this).unbind();						
        // })
    let discount;
    if($.contains(this, document.getElementById("has_discount"))){
        discount = "<p>you'r good !</p>"
        console.log("yes");
    }else{
        discount = "<p>sorry..</p>"
        console.log("no");
    }

    $(".guess_box").each(function(){
        if($.contains(this, document.getElementById("has_discount"))){
            $(this).addClass("discount");
        }else{
            $(this).addClass("no_discount");
        }
    });

    $(this).append(discount);
    $(".guess_box").each(function () {
            $(this).unbind();						
    });
};

// if($.contains(this, document.getElementById("has_discount") ) )
// 		{
// 			var my_num = getRandom(100);
// 			discount = "<p>Your Code: CODE"+my_num +"</p>";
// 		}else{
// 			discount = "<hr>Sorry, no discount this time!" ;
// 		}
// 		$(".guess_box").each(function() { 
// 			if($.contains(this, document.getElementById("has_discount") ) )
// 			{
// 				$(this).addClass("discount");
// 			}else{
// 				$(this).addClass("no_discount");            
// 			}
// 			$(this).unbind();
// 		});
// 		$("#result").append(discount);

function functionHoverStart(){
    $(this).addClass("hover");
}

function functionHoverEnd(){
    $(this).removeClass("hover");
}

