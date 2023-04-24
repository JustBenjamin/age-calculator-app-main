const day = document.getElementById("day");
const year = document.getElementById("year");
const month = document.getElementById("month");

const days = document.getElementById("days");
const years = document.getElementById("years");
const months = document.getElementById("months");

const form = document.getElementById("form")


function calculate() {
const d = new Date();
const currentDay = d.getDate();
const currentMonth = d.getMonth() + 1;
const currentYear = d.getFullYear();

    console.log(currentYear - month.value)
}