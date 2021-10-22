define([
], function() {
    const testDialog = function(){
        const dialog = document.querySelector('.dialog');
        dialog.innerHTML = "<p> Hi ~ !</p>";
        $('.dialog').dialog();
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


