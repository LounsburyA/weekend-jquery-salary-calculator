console.log('js works');
$(readyNow);
console.log('jquery');

let employeeInput= []
let monthlyTotal = 0;

function readyNow() {
    $('#submitBtn').on('click',addEmp);
    $('tbody').on('click', '.deleteBtn',deleteInput)
    
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
    }
    employeeInput.push(employeeObject);
    $('.firstName').val('');
    $('.lastName').val('');
    $('.iD').val('');
    $('.title').val('');
    $('.annualSal').val('');
     
    let data=`<tr><td>${firstName}</td>
    <td>${lastName}</td>
    <td>${iD}</td>
    <td>${title}</td>
    <td>${annualSal}</td>
    <td><button class = "deleteBtn" > Delete </button><td></tr>`;
    //turnRed();

$('#table').append(data);
monthlyTotal += Math.floor(Number(annualSal)/12);
$('.monthlyTotal').empty();
$('.monthlyTotal').append('Total Monthly: '+ '$',monthlyTotal);
turnRed();
}

function deleteInput() {
$(this).closest('tr').empty();  
}

function turnRed() {
    if(monthlyTotal > 20000){
        $('.monthlyTotal').toggleClass('red');
    } 
}