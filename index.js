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
$("#cbtn").click(function () {
   custom[0].year=$("#year").val() ;
   custom[0].month=$("#month").val() ;
   custom[0].day=$("#day").val() ;
   custom[0].hours=$("#hours").val() ;
   custom[0].minutes=$("#minutes").val() ;

clearInterval(setter);
setInterval(function () {
    render(new Date(custom[0].year, custom[0].month, custom[0].day, custom[0].hours, custom[0].minutes,custom[0].seconds));
   
    if (custom[0].seconds == 60) {
        custom[0].minutes += 1;
        custom[0].seconds = 0
    }
    if (custom[0].minutes == 60) {
        custom[0].hours += 1;
        custom[0].minutes = 0
    }
    if (custom[0].hours == 13) {
        custom[0].hours =1;
        custom[0].day+=1;
        
    }
    custom[0].seconds+=1;
}, 1000);


})