function to12(time) {
  let hours = Number(time.slice(0, 2));
  let minutes = time.slice(2);
  let sign = "AM";

  if(hours >= 12){
    sign = "PM";
    hours -= 12;
  }

  if(hours === 0)
    return "12:"+ minutes+" "+sign;
  else
    return hours + ":" + minutes + " "+ sign;
}

console.log(to12("1124")); // "11:24 AM"
console.log(to12("0900")); // "9:00 AM"
console.log(to12("1455")); // "2:55 PM"
console.log(to12("2346")); // "11:46 PM"
console.log(to12("1200")); // "12:30 AM"