define([
], function() {
    const testDialog = function(){
        const dialog = document.querySelector('.dialog');
        dialog.innerHTML = '<p class="ttt"> Hi ~ !</p>';
        $('.dialog').dialog({
            title: '다이얼로그 제목', // 다이얼로그 제목
            modal: true,        // 배경색 어둡게 true, false
            width: '300',       // 넓이
            height: '300',      // 높이
            resizeable : false,    // 사이즈 조절가능 여부
            show : 'slide',     // 나타날 때 사용하는 애니메이션 (slide, explode, blind)
            hide : 'explode',      // 사라질때 사용하는 애니메이션
            "position" : {
                my	: "center",
                at	: "center",
                //of	: window,
                //of	: "#INI_mainModalDialog",
            },buttons: {
                "확인":function() {
                    var test = document.querySelector('#TEST').value;
                    var divTest = document.querySelector(".TEST");
                    divTest.innerHTML = "이름 : "+test;
                    $(this).dialog("close"); //dialog 닫기 메소드 실행

                },  
                "취소":function() {
                  $(this).dialog("close"); //dialog 닫기 메소드 실행
              },
              
            },
            open: function() {
                dialog.innerHTML = '<p class="ttt"> 이름을 적으세요 </p><br><input type="text" id="TEST" value="TEST">';
                $(this).closest('.ini-ui-dialog').find('.ini-ui-dialog-buttonpane').hide();
                //$(this).dialog("widget").find(;
                //$(".ui-dialog-buttonpane").find('button:contains("Cancel")').addClass('cancelButtonClass');
            },
      });
    }
    const test = function(){
        console.log("TESt");
    }
    return {
        testDialog : testDialog,
        test : test
    };
});


// const button = document.querySelector('.dialogButton');
// button.addEventListener('click', TestDialog);


