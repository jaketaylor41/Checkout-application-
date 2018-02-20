var employeeInfoArray = [];

$(document).ready(function () {
    init();
});


function init (){
    startHomePage();
}

function enable(){
    $("#confirmBtn").on("click", function () {
    createCustomerNode();
    startSecondPage();
    });

    $("#container").on("click", ".deleteBtn", function () {
        $(this).parent().remove();
    });

    $("#backBtn").on("click", function () {
        startHomePage();
    });
}