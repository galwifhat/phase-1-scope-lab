// Write your solution in this file!

// Global variable
customerName = "bob";
console.log(customerName);

//Function that returns a modified value without directly mutating the global variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
console.log(upperCaseCustomerName);

function setBestCustomer() {
  bestCustomer = "not bob";
}
bestCustomer;

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  return bestCustomer;
}
console.log(overwriteBestCustomer());

const leastFavoriteCustomer = "doe";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Jane";
  return leastFavoriteCustomer;
}
changeLeastFavoriteCustomer();

/* const changeLeastFavoriteCustomer = function () {
  leastFavoriteCustomer = "Jane";
  return leastFavoriteCustomer;
};
console.log(changeLeastFavoriteCustomer()); */

/* function upperCaseCustomerName(customerName) {
  var customerName = "bob";
  if ((customerName = "bob")) {
  }
  return customerName.toUpperCase();
}
console.log(upperCaseCustomerName()); */

/* function upperCaseCustomerName(customerName = "Jane") {
  function customerName2() {
    return (customerName2 = customerName.toUpperCase());
  }
  return customerName2();
}
console.log(upperCaseCustomerName("brooks"));
 */
