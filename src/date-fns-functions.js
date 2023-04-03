const {
    format,
    isAfter,
    isBefore,
    addDays,
    addWeeks,
    addYears,
    addMonths,
} = require("date-fns");

// is affert
var isDateAfter = isAfter(addDays(new Date(), 2), new Date());

// formated
var f = format(new Date(), "yyyy-MM-dd hh:mm:ss");
var ft = format(new Date(), "yyyy-MM-dd ");

// add weeks
console.log(format(addWeeks(new Date(), 1), "yyyy-MM-dd hh:mm:ss"));

//add years
console.log(format(addYears(new Date(), 1), "yyyy-MM-dd hh:mm:ss"));

// add months
console.log(format(addMonths(new Date(), 1), "yyyy-MM-dd hh:mm:ss"));

// add weeks
console.log(addWeeks(new Date(), 1));

console.log(format(addWeeks(new Date(), 1), "yyyy-MM-dd"));
