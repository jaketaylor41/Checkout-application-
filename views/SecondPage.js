function startSecondPage() {
    console.log(employeeInfoArray[0]);
    var cust = employeeInfoArray[0];
    $("body").empty();
    $("body").append(
        '<h1>Thank You for Your Purchase</h1>' +
    '<div class="summary">' +
        '<h2>Order Summary</h2>' +
        '<h5>Name:</h5>' + cust.fname +' ' + cust.lname +
        '<h5>Address, State, City, Zip:</h5>',
        ' ' + cust.address+ ' ' + cust.city + ' ' + cust.state + ' ' + cust.zipcode +
        '<h5>Credit Card Info:</h5>' + ' ' + cust.creditcard + ' ' + cust.expiration + ' ' + cust.csv +
    '</div>'

    );
        '<button id="backBtn">Back</button>'
        createCustomerNode();
    enable();
}