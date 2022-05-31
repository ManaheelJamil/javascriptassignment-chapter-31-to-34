 // CHAPTER 31 TO 34
// Questionn # 1:
// var rightNow = new Date();
// document.write(rightNow);

// Question # 2:
// var d = new Date();
// var currentMonth = current.getMonth(4);
// document.write("Current Month:"+" "+ currentMonth)

// Question # 3:
// var today = new Date();
// var m = today.toString().slice(0,3);
// document.write("Today is" + " " + m)

// Question # 4:
// var day = new Date();
// var newDay = day.toString();
// var c = newDay.slice(0,3);
// if (c === "sat") {
//     document.write("it's fun day");
// }
// if (c === "sun") {
//     document.write("it's  fun day");
// }

// Questionn # 5:
// var message = ("First Fifteen days of the month");
// var d = new Date();
// var date =d.getDate();
// if (date >= 16) {
//     document.write("Lat days of the month");
// }if(date <=16) {
//     document.write(message)
// }
// console.log(d,getDate());

// Question # 6:
// var d = new Date();
//  document.write("Current Date" + " "+ d+"<br/>")
//  var milliSec = d.getTime();
//  var currMinu = d.getMinutes();
// document.write("Elapsed milliseconds since January  1 ,1970:"+" "+milliSec+"<BR/>")
// document.write("Elapsed minutes since January  1 ,1970:"+" "+currMinu)

// Question # 7:
// var d = new Date();
// var currentTime = d.getHours();
// if (currentTime > 1 && currentTime < 12 ) {
//     alert("It's AM");
// }
// else if (currentTime > 12 && currentTime <24) {
//     alert("It's PM");
// }

// Question # 8:
//  var d = new Date();
//  d. setDate(0);
//  d. setDate(30); 
//  d. setHours(0,0,0,0); 
// document.write("Later Date:"+" "+d)

// Question # 9:
// var dateToday= new Date();
// var todayMilli=dateToday.getTime();
// var lastRamadan=new Date('June 18, 2015');
// var milliRamdan=lastRamadan.getTime();
// var diffMilliSec=todayMilli-milliRamdan;
// var days =Math.floor(diffMilliSec/(1000*60*60*24));
// document.write(days+' days have passed since Ist Ramadan,2015')

// Question # 10;
// var dateNow=new Date();
// var todayMilli=dateNow.getTime();
// var year2015=new Date('1 Jan,2015');
// var milli2015=year2015.getTime();
// var diffMilliSec=todayMilli-year2015
// var seconds=Math.floor(diffMilliSec/(1000));
// document.write('On reference date :'+dateNow+'<br>'+' ,'+seconds+' seconds had passed since beginning of 2015')

// Question # 11;
// var today = new Date();
// var hoursAgo=today.getHours();
// hoursAgo=hoursAgo-1;
// document.write("current date: " + today + "<br>");
// today.setHours(hoursAgo);
// document.write("1 hour ago, it was " + today);

// Question # 12;
// var today = new Date();
// var yearsAgo = today.getFullYear();
// yearsAgo = yearsAgo-100;
// document.write("current date: " + today + "<br>");
// today.setFullYear(yearsAgo);
// document.write("100 years back, it was " + today);

// Question # 13;
// var age = prompt("what is yuor age?");
// var year = (2022 - age);
// document.write("Your age is " + " " + age + "<br/>" +"Your Birth year is" + " " + year);

// Question # 14;
// var customerName = "Manaheel";
// var d = new Date();
// var currentMonth = d.setMonth(4);
// var numberOfUnit = "410";
// var ChargesOfUnit = "16";
// var netAmount = numberOfUnit * ChargesOfUnit;
// var lateCharges = "400";
// var grossAmount = (netAmount + 400);
 
// document.write("<h1>K-Electric Bill</h1>" + "<br/> Customer Name:" + " " + customerName +"<br/>");
// document.write("Month:" + " " + currentMonth +"<br/>" + "Numbers of unit:" + " " + numberOfUnit + "<br/>" );
// document.write("Charges per unit:" + " "+ ChargesOfUnit +"<br/>" +"<br/>"+ "Net Amount Payble( within due date):"+" "+netAmount+"<br/>");
// document.write("Late payment charges:" + " " + lateCharges + "<br/>" + "Gross Amount Payble ( after due date):" +" "+ grossAmount);