module.exports ={
    name:"track covid",
    code:`

    $description[

      $thumbnail[https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Seal_of_the_Philippines.svg/800px-Seal_of_the_Philippines.svg.png]
    COVID-19 Philippines Tracker
    
  
   🗒️ Total Cases: $jsonRequest[https://disease.sh/v3/covid-19/countries/ph;cases]
   
   💚 Recoveries: $jsonRequest[https://disease.sh/v3/covid-19/countries/ph;recovered]
   
  🪦 Deaths: $jsonRequest[https://disease.sh/v3/covid-19/countries/ph;deaths]
  
  🦠 Active Cases: $jsonRequest[https://disease.sh/v3/covid-19/countries/ph;active]

  $footer[Updates every 10 minutes.  \n Data Provided by Worldometers | Disease.sh $addTimestamp]

    ]
     `
  }