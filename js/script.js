var submit= function() {
    var daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame"
    ];
    var femaleNames = [
      "Akosua",
      " Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama"
    ];

    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value)
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    var paragraph=document.getElementById("paragraph")
    var date = new Date(year + "/" + month + "/" + day);
    var results = date.getDay();
   if (year < 1950) {
      paragraph.innerHTML = " please enter a valid year! "
   }
   else if (month < 1 || month > 12) {
      paragraph.innerHTML = " please enter a valid month! "
   }
   else if (day < 0 || day > 31) {
     
      paragraph.innerHTML = " please enter a valid day! "
   }
    else if(male.checked) {
      
        paragraph.innerHTML =  " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
    }
     else if (female.checked) {
      
      paragraph.innerHTML =" you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
   }
};


