/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let costPerHalfDay = 20;
let countOfDays = 0;

let fullButton = document.getElementById('full');
let halfButton = document.getElementById('half');
let clearButton = document.getElementById('clear-button');
let selectedDay = document.querySelectorAll('.day-selector li');
let costCalculation = document.getElementById('calculated-cost');



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
selectedDay.forEach(function (day) {
    day.addEventListener('click', function () {
        if (!day.classList.contains('clicked')) {
            day.classList.add('clicked');
            countOfDays ++;
           totalCostCalculated();
        }
    });
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener('click', function () {
    selectedDay.forEach(function (day) {
        if (day.classList.contains('clicked')) {
            day.classList.remove('clicked');
        }
    });
    countOfDays = 0;
    totalCostCalculated();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener('click', function () {
    costPerDay = 20;
    costPerHalfDay = 20;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    totalCostCalculated();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener('click', function () {
    costPerDay = 35;
    costPerHalfDay = 20;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    totalCostCalculated();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function totalCostCalculated() {
    let totalCost;
    if (selectedDay[0].classList.contains('clicked')) {
        totalCost = countOfDays * costPerDay;
    } else {
        totalCost = countOfDays * costPerHalfDay;
    }

    costCalculation.innerHTML = '$' + totalCost;
}
