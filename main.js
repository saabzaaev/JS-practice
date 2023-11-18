// Task-1
function functions(num1 , num2)
{
    if(num1 > 0 && num2 > 0) return "1 quarter"
    else if(num1 < 0 && num2 < 0) return "3 quarter"
    else if(num1 < 0 && num2 > 0) return "2 quarter"
    else if(num1 > 0 && num2 < 0) return "4 quarter"
    else return "false"
}
console.log(functions(2,-1));

// Task-2
function cube(num)
{
    return num ** 3
}
console.log(cube(3));

// Task-3
function diapazone(num)
{
    if(num >= 50 && num <= 100) return true
    else return false
}
console.log(diapazone(552));

// Task-4
function mark(num)
{
    if(num >= 85 && num <= 100)return "alo"
    else if(num >= 65 && num <= 84) return "khub" 
    else if(num >= 40 && num <= 64) return "qanoatbakhsh"
    else if(num >= 0 && num <= 39) return "gayriqanoatbakhsh"
    else return "baho vujud nadorad" 
}
console.log(mark(60));

// Task-5
function years(year)
{
    if((year % 4 == 0 && year % 100 != 0 ) || year % 400 == 0)
    {
        return "leaptrue"
    }
    else {
        return "not leap year"
    }
}
console.log(years(2023));

// Task-6
function valyuta(num)
{
    return num * 0.85;
}
console.log(valyuta(50));
