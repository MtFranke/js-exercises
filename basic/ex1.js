// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const date = new Date();
const dayOfWeek = date.getDay();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
];
const ampm = (hour >= 12) ? "PM" : "AM";

console.log(`Today is : ${weekday[dayOfWeek]}`);
console.log(`Current time is : ${hour} ${ampm}: ${minutes} : ${seconds}`)