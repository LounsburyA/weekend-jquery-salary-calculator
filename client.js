console.log('js works');
$(readyNow);
console.log('jquery');

let employeeInput= []
let monthlyTotal = 0;

function readyNow() {
    $('#submitBtn').on('click',addEmp);  // handles submitting employee info
    $('tbody').on('click', '.deleteBtn',deleteInput)// handles removing employee from table
    
}



function addEmp() {
    console.log('addEmp works');
    let firstName = $('.firstName').val();
    let lastName = $('.lastName').val();
    let iD = $('.iD').val();
    let title = $('.title').val();
    let annualSal = $('.annualSal').val();
    const employeeObject ={
        firstName: firstName,
        lastName: lastName,
        iD: iD,
        title: title,
        annualSal: annualSal
    }  // creates employee object // allows to enter in the inputs
    employeeInput.push(employeeObject);
    $('.firstName').val('');
    $('.lastName').val('');
    $('.iD').val('');
    $('.title').val('');
    $('.annualSal').val('');// these empty inputs
     
    let data=`<tr><td>${firstName}</td>
    <td>${lastName}</td>
    <td>${iD}</td>
    <td>${title}</td>
    <td>${annualSal}</td>
    <td><button class = "deleteBtn" > Delete </button><td></tr>`;
    //

$('#table').append(data);
// sends inputs to the table on DOM

monthlyTotal += Math.floor(Number(annualSal)/12);
$('.monthlyTotal').empty();
$('.monthlyTotal').append(monthlyTotal);
turnRed();
}// calculates monthly cost of employee adds to monthly total
// displays monthly total
function deleteInput() {
$(this).closest('tr').empty();  
}
// removes employee from table
function turnRed() {
    if(monthlyTotal > 20000){
        $('.monthlyTotal').toggleClass('red');
    } 
}// turns background red if monthly total is greater than 20,000

//'Total Monthly: '+ '$',