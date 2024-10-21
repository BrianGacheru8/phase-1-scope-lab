var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

function setBestCustomer() {
    // Declare bestCustomer in the global scope
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    // Use the global bestCustomer variable
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'some customer';

function changeLeastFavoriteCustomer() {
    // This will throw an error because leastFavoriteCustomer is a constant
    // leastFavoriteCustomer = 'another customer'; // Remove this line
}
