function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city);
  console.log(state);
  console.log(zip);
}

displayMailingLabel("google","134 ottley Dr NE #100","Atlanta","Georgia","30324");

function addNumbers(num1, num2) {
  console.log(`${num1} + ${num2}= ${parseFloat(num1) + parseFloat(num2)}`);
}
addNumbers(); 

function displayReceipt(totalDue,amountPaid) {
 amountPaid = 100
 totalDue   = 200
 console.log('Total amount due ${totalDue}' );
 console.log('Amount paid  ${amountPaid}')
}
displayReceipt();
{
 if (amountPaid < totalDue) {
    console.log('Change Due ${amountPaid} - ${totalDue}');
 }
    
}