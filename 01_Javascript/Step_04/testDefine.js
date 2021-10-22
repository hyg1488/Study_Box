define([
    'noDefine',
], function(noDefine) {
    const button = document.querySelector('.dialogButton');
    button.addEventListener('click', noDefine.testDialog);

});