var day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
var stopwatch=1;
var d;
var t = [{year:0,month:0,day:0, hour: 0, minute: 0, second: 0, milisecond: 0 }];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var setter=setInterval(function () {
    d=new Date(Date.now());
    render(d)
}, 1000);

function render(d) {

     $("#date1").text(day[d.getDay()] + " " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear());
    $("#span1").text(d.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }));

  
}
var myInterval;
$(".stopwatch").on("click", "#startbtn", function () {
   
    if(stopwatch%2!=0)
    {
        myInterval= setInterval(function () {
        $("#stopwatch").text(t[0].hour + ":" + t[0].minute + ":" + t[0].second + ":" + t[0].milisecond);
        if (t[0].milisecond == 1000) {
            t[0].second += 1;
            t[0].milisecond = 0;
        } if (t[0].second == 60) {
            t[0].minute += 1;
            t[0].second = 0
        }
        if (t[0].minute == 60) {
            t[0].hour += 1;
            t[0].minute = 0
        }
        if (t[0].hour == 13) {
            // t[0].hour+=1;
            t[0].minute = 0
        }
        t[0].milisecond += 1;
        
    }, 1);
    
    $(this).text("STOP");
    $(this).attr("style","border:5px solid orange;border-radius:5px");
}
else
{
    // alert();
    clearInterval(myInterval);

    $(this).text("START");

    $(this).attr("style","border:5px solid green;border-radius:5px");
}
stopwatch++;
});
var custom = [{year:0,month:0,day:0, hours: 0, minutes: 0, seconds: 0}];
const mday=[31,28,31,30,31,30,31,31,30,31,30,31];
var flag=1;
var stateInt;
$("#cbtn").click(function () {
    clearInterval(stateInt);
    
    custom[0].year=parseInt($("#year").val()) ;
    custom[0].month=parseInt($("#month").val()) -1;
        if(custom[0].month>12)
            return alert("month value cannot be greater than 12.");
    custom[0].day=parseInt($("#day").val()) ;
        if(custom[0].day>mday[custom[0].month])
            return alert("This Month have maximum No. of Days is: "+mday[custom[0].month]);
    custom[0].hours=parseInt($("#hours").val());
        if(custom[0].hours>23)
        return alert("Hours value must lie between 0 to 23.");
    custom[0].minutes=parseInt($("#minutes").val()) ;
        if(custom[0].minutes>59)
        return alert("Minutes value must lie between 0 to 59.");

clearInterval(setter);
stateInt=setInterval(function () {
    var y=new Date(custom[0].year, custom[0].month, custom[0].day, custom[0].hours, custom[0].minutes,custom[0].seconds);
    y.toLocaleString('en-GB')
    render(y);
   
    if (custom[0].seconds >59) {
        custom[0].minutes += 1;
        custom[0].seconds = 0;
        console.log("This is hour: "+custom[0].hours)
    }
    if (custom[0].minutes > 59) {
        custom[0].hours += 1;
        custom[0].minutes = 0;

        console.log("This is hour: "+custom[0].hours)
    }
    if (custom[0].hours > 23) {
        if (custom[0].hours == 24 && custom[0].minutes ==0 && custom[0].seconds ==0)
         custom[0].day+=1;


        custom[0].hours =0;
        console.log("This is day: "+custom[0].day)
        
    }
    if (custom[0].day > mday[custom[0].month]) {
        custom[0].day =1;
        custom[0].month+=1;
    }
    if (custom[0].month > 12) {
        custom[0].month =1;
        custom[0].year+=1;
    }
    if(checkLeapYear(custom[0].year)=="yes")
    {
         mday[1]=29;
    }
    else{
        mday[1]=28;
    }
    custom[0].seconds+=1;
}, 1000);
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return "yes";
    } else {
        return "not";
    }
}

}

)