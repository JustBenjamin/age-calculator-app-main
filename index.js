const day = document.getElementById("day");
const year = document.getElementById("year");
const month = document.getElementById("month");


const days = document.getElementById("days");
const years = document.getElementById("years");
const months = document.getElementById("months");

const form = document.getElementById("form")



const d = new Date();
const currentDay = d.getDate();
const currentMonth = d.getMonth() + 1;
const currentYear = d.getFullYear() - 1;

function calculate() {

let ageYears = currentYear - year.value;
let ageMonths = currentMonth - month.value;
let ageDays = currentDay  - day.value;


years.innerHTML = ageYears
months.innerHTML = Math.abs(ageMonths)
days.innerHTML = Math.abs(ageDays)


 showError()
    
}

function showError() {


    if (day.value < 1 || day.value > 31 ) {
        document.getElementById("dayError").innerHTML = "Must be a valid date";
        day.style.borderColor  = "red";
        days.innerHTML = "--";
        months.innerHTML = "--";
        years.innerHTML = "--";
        
    }

    if (month.value < 1 || month.value > 12 ) {
        document.getElementById("monthError").innerHTML = "Must be a valid month"
        month.style.borderColor = "red";
        days.innerHTML = "--";
        months.innerHTML = "--";
        years.innerHTML = "--";
    }

    if (year.value > currentYear ) {
        document.getElementById("yearError").innerHTML = "Must be a valid year"
        year.style.borderColor  = "red";
        days.innerHTML = "--";
        months.innerHTML = "--";
        years.innerHTML = "--";
    }
}