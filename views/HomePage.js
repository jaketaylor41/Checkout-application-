function startHomePage() {
    $("body").empty();
    $("body").append( '<div class="main">' +
        '<p><h1>Air Jordan III</h1></p>' +
        '<p><h3>JTH</h3></p>'+
        '<img src=https://sneakernews.com/wp-content/uploads/2018/02/air-jordan-3-jth-justin-timberlake-superbowl-52-3.jpg>' +
        '<p><h1>Enter the Draw</h1></p>' +
        '<p>First and Last Name:' +
        '<form>' +
            '<input type="text" id="firstName" placeholder="Enter First Name">' +
            '<input type="text" id="lastName" placeholder="Enter Last Name"' +
        '</form>' +
        '<p>Address, City, State, and Zip:</p>' +
        '<form action="SecondPage.js" method="get">' +
        '<input type="text" id="address" placeholder="Enter Address">' +
        '<input type="text" id="city" placeholder="Enter City">' +
        '<input type="text" id="state" placeholder="Enter State">' +
        '<input type="text" id="zipCode" placeholder="Enter Zip Code">' +
        '</form>' +
        '<p>Credit Card Information:</p>' +
        '<form action="SecondPage.js" method="get">' +
        '<input type="text" id="creditCard" placeholder="Enter Credit Card Number">' +
        '<input type="text" id="expiration" placeholder="Enter Expiration Date">' +
        '<input type="text" id="csv" placeholder="Enter CSV Number">' +
        '</form>' +

        '<button id="confirmBtn">Enter</button>' +

        '<div id="container"></div>' +


        '</div>'





    );
    enable();
}
    function createCustomerNode(){
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var address = $("#address").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var zipCode = $("#zipCode").val();
        var creditCard = $("#creditCard").val();
        var expiration = $("#expiration").val();
        var csv = $("#csv").val();

        $("#firstName").val("");
        $("#lastName").val("");
        $("#address").val("");
        $("#city").val("");
        $("#state").val("");
        $("#zipCode").val("");
        $("#creditCard").val("");
        $("#expiration").val("");
        $("#csv").val("");

        var newCustomer = {};
        newCustomer.fname = firstName;
        newCustomer.lname = lastName;
        newCustomer.address = address;
        newCustomer.city = city;
        newCustomer.state = state;
        newCustomer.zipcode = zipCode;
        newCustomer.creditcard = creditCard;
        newCustomer.expiration = expiration;
        newCustomer.csv = csv;

        employeeInfoArray.push(newCustomer);

        $("#container").append("<div></div>");
        var el = $("#container").children().last();
        el.append("<p>" + firstName + "</p>");
        el.append("<p>" + lastName + "</p>");
        el.append("<p>" + address + "</p>");
        el.append("<p>" + city + "</p>");
        el.append("<p>" + state + "</p>");
        el.append("<p>" + zipCode + "</p>");
        el.append("<p>" + creditCard + "</p>");
        el.append("<p>" + expiration + "</p>");
        el.append("<p>" + csv + "</p>");
        el.append("<button class = deleteBtn>Delete</button>");




}