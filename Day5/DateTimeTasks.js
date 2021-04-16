//create date
let date=new Date(2000,3,28,12,5,59);
console.log(date);//2000-04-28T06:35:59.000Z

//Show a weekday
function getWeekDay(date) {
    let weekDays = ['SU','MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return weekDays[date.getDay()];
  }

  let dat = new Date(2012,0,3);
  console.log(getWeekDay(dat)); //TU

//European weekday
function getLocalDay(date) {
    let day=date.getDay();
    if(day==0) {
      day=7;
    }
    return day;
  }

let dates = new Date(2012, 0, 3);  // 3 Jan 2012
 console.log(getLocalDay(dates)); //2


//Which day of month was many days ago?
function getDateAgo(date,day){
    date.setDate(date.getDate()-day);
   return date.getDate();
}
let dats = new Date(2015,0, 2);

console.log(getDateAgo(dats, 1) ); 
console.log(getDateAgo(dats, 2) );
console.log(getDateAgo(dats, 365) ); 