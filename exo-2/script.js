// you can write js here
console.log('exo-2');
let isTesting = true;
 let dayofweek;
   let currentHour ;
 if (isTesting){
    dayofweek= parseInt(prompt( " Entrez le jour de la semaine (0 pour Dimanche, 6 pour samedi"));
    currentHour= parseInt(prompt("Entrez l'heure Actuelle (de 0 à 23) :"));





 } else {
const myDate=new Date();
 dayofweek=myDate.getDate();
 currentHour=myDate.getHours();



 }
const myDate = new Date();
const weekdayMessage=" c'est un jour de la semaine" // weekday de 0(dimanche)à 5(vendrendi)
const weekendMessage= " c'est le weekend"

const ddayofweek= myDate.getDay();
const ccurrentHour = myDate.getHours();
if( dayofweek===1 && currentHour<9){
console.log(weekendMessage)

}
else if( dayofweek===5 && currentHour>17){
console.log(weekendMessage);

}

else if ( dayofweek>=1 && dayofweek<=5){
console.log( weekdayMessage);
 } else { console.log (weekendMessage);

 }

