const isLeap = year => ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0));

const ageDayCal = year => {
    let ageDay = 0
    for (i=year; i<=2020; i++) {
        ageDay += 365;
        if (isLeap(i))
            ageDay++;
    }
};

alert(ageDayCal(prompt("Enter year of birth")));