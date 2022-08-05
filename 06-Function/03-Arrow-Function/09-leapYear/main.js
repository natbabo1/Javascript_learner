const isLeap = year => ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0));

alert(isLeap(+prompt("Enter year")));