const leapYears = function(year) {

    let leapYearCheckA = year % 4  === 0;
    let leapYearCheckB = year % 400 === 0;
    let leapYearCheckC = year % 100 === 0;


    if(leapYearCheckA && (leapYearCheckB || !leapYearCheckC)  ){
        return true;
    }else {return false;}
};

// Do not edit below this line
module.exports = leapYears;
