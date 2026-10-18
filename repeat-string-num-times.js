function repeatStringNumTimes (str, num){
    if(num <= 0)
        return "";

    const originalString = str;
    for(let count = 0; count < num - 1; count++)
        str += originalString;
    return str;
}

const string = repeatStringNumTimes("*", 3);
const string2 = repeatStringNumTimes("abc", -2);

console.log(string);
console.log(string2);