const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const date = new Date();

const renderCalendar = () => {
date.setDate(1);
const currentDay = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const indexFirstDay = date.getDay();
const indexLastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

const nextDays = 7 - indexLastDay - 1;

console.log(indexLastDay);



document.querySelector('.date_title').innerHTML = allMonths[date.getMonth()];

document.querySelector('.date_subtitle').innerHTML = new Date().toDateString();

let days = "";

for (let k = indexFirstDay; k > 0; k--) {
  days += `<div class="prev-day">${prevLastDay - k + 1}</div>`;
} 

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

for (let j = 1; j <= nextDays; j++) {
  days += `<div class="next-day">${j}</div>`;
  currentDay.innerHTML = days;
}

};



document.querySelector(".prev").addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
})

renderCalendar();
