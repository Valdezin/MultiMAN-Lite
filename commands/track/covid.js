module.exports ={
    name:"track covid",
    code:`

    $description[

      $thumbnail[https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Seal_of_the_Philippines.svg/800px-Seal_of_the_Philippines.svg.png]
    COVID-19 Philippines Tracker
    
  
   đī¸ Total Cases: $jsonRequest[https://disease.sh/v3/covid-19/countries/ph;cases]
   
   đ Recoveries: $jsonRequest[https://disease.sh/v3/covid-19/countries/ph;recovered]
   
  đĒĻ Deaths: $jsonRequest[https://disease.sh/v3/covid-19/countries/ph;deaths]
  
  đĻ  Active Cases: $jsonRequest[https://disease.sh/v3/covid-19/countries/ph;active]

  $footer[Updates every 10 minutes.  \n Data Provided by Worldometers | Disease.sh $addTimestamp]

    ]
     `
  }