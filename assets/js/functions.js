var date1=null;

//add data recieving system
var dateRecieved=false;
//temporary

var name;
var startYear=2000;
var year=2000;
var month=10;
var day=28;

var hour=0;
var minute=0;

var threshold=3600*24;
var overTrue=false;
//how often does this repeat
var intervalYear=1;
var intervalMonth=0;
var intervalDay=0;
var intervalTrue=true;
//when it should warn you about countdown
var warningTrue=false;
var warningDay;
var warningHour;
var warningMinute;
setInterval(frame,1000);

function frame()//runs every 1s
{
    if(date1==null)
        {
            date1=moment(year.toString()+("0"+month.toString()).slice(-2)+("0"+day.toString()).slice(-2)+" "+("0"+hour.toString()).slice(-2)+":"+("0"+minute.toString()).slice(-2), "YYYYMMDD HH:mm");
        }
    
    
   var days=moment().diff(date1,"days")*(-1);
var hours=moment().diff(date1,"hours")*(-1);
var min=moment().diff(date1,"minutes")*(-1);
var sec=moment().diff(date1,"seconds")*(-1);
     
        if(sec<0)//ending
        {
            if(Math.abs(sec)>threshold&&intervalTrue)//its over lets wait a nother year
                {
                    //interval
                    TimerNext();
                    return;
                }
            else//party time or interval false and the timer is finished
                {
                    if(overTrue)
                        {
                            return;
                        }
                   TimerOver();
                }
        
        }
    else
        {
            DisplayTime(days,hours,min,sec);
        }

}
function DisplayTime(days,hours,min,sec)
{
    $("#timer").empty();
    $("#timer").append(days+"d "+hours%24+"h "+min%60+"m "+sec%60+"s ");
}
function TimerOver()
{
    var years=moment().year()-startYear;
    
     overTrue=true;
     $("#timer").empty();
    $("#timer").append("~~Happy "+years+"th Birthday~~");
}
function TimerNext()
{
    year+=intervalYear;
    month+=intervalMonth;
    day+=intervalDay;
    overTrue=false;

    date1=moment(year.toString()+("0"+month.toString()).slice(-2)+("0"+day.toString()).slice(-2)+" "+("0"+hour.toString()).slice(-2)+":"+("0"+minute.toString()).slice(-2), "YYYYMMDD HH:mm");
    frame();
}