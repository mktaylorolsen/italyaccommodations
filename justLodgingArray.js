$(document).ready(addTuscanLodgingOption);
$(document).ready(addRomeLodgingOption);

var tuscanLodgeArr = [
  {name:'Villa Poggio',location:'Chianti',price:'313',blurb:'A lovely Italian farmhouse situated within an olive grove and a vineyard.',sleeps:'10',beds:'6',extra:'pool',link:'https://www.airbnb.com/rooms/272439?location=Tuscany%2C%20Italy&adults=8&check_in=2019-05-18&check_out=2019-05-24&s=fhW0UZsH',img:'tuscany/img/villa-poggio.png'},
  {name:'Il Villino',location:'Chianti',price:'447',blurb:'An updated Italian villa located within a farm community with shared accesses.',sleeps:'10',beds:'6',extra:'pool',link:'https://www.airbnb.com/rooms/18541249?location=Tuscany%2C%20Italy&adults=8&check_in=2019-05-18&check_out=2019-05-24',img:'tuscany/img/il-villino.png'},
  {name:'Villa Tontenano Capannole',location:'Chianti',price:'650',blurb:'Solar powered Italian farmhouse surrounded by gardens and olive groves, complete with Tuscan chef and massage services available.',sleeps:'12',beds:'12',extra:'pool',link:'https://www.airbnb.com/rooms/7830415?location=Tuscany%2C%20Italy&adults=8&check_in=2019-05-18&check_out=2019-05-24&s=fhW0UZsH',img:'tuscany/img/villa-tontenano.png'},
  {name:'Abbadia Isola Villa',location:'Monteriggioni',price:'382',blurb:'Modern Italian Villa with multiple hangout spaces and plenty of games. Located next to a historic pilgrimage road and a medieval castle.',sleeps:'16',beds:'19',extra:'game and hangout space',link:'https://www.airbnb.com/rooms/14970312?location=Tuscany%2C%20Italy&adults=8&check_in=2019-05-18&check_out=2019-05-24&s=fhW0UZsH',img:'tuscany/img/abbadia-isola.png'},
  {name:'Angolo Divino',location:'Pieve Vecchia',price:'337',blurb:'Artsy and rustic stone farmhouse with modern applicances divided into individual apartments.',sleeps:'12',beds:'9',extra:'pool table',link:'https://www.airbnb.com/rooms/25175452?location=Tuscany%2C%20Italy&adults=8&check_in=2019-05-18&check_out=2019-05-24&s=fhW0UZsH',img:'tuscany/img/angolo-divino.png'},
  {name:'Casa Cernano',location:'Castelnuovono Berardenga',price:'336',blurb:'Full Italian breakfast prepared each morning by the owners of this tradition stone farmhouse turned bed and breakfast.',sleeps:'12',beds:'12',extra:'breakfast',link:'https://www.airbnb.com/rooms/1299590?location=Tuscany%2C%20Italy&adults=8&check_in=2019-05-18&check_out=2019-05-24&s=fhW0UZsH',img:'tuscany/img/casa-cerrano.png'},
];


function addTuscanLodgingOption (){
  console.log('function engaged');
  for(i = 0; i < tuscanLodgeArr.length; i++){
    console.log('for loop enagaged');
    var lodgingText = `
    <div class='lodgingOption row mb-5'>
      <img class='lodgeImg col-sm-5 img-fluid' src='${tuscanLodgeArr[i].img}'/>
      <div class='lodgingOptionText col-md-5 ml-2'>
        <h2 class='lodgeName display-1'> ${tuscanLodgeArr[i].name} </h2>
        <h3 class='lodgeLocation display-4'>${tuscanLodgeArr[i].location}</h3>
        <h3 class='lodgePrice display-4'>$${tuscanLodgeArr[i].price} per night</h4>
        <p class='lodgeBlurb'>${tuscanLodgeArr[i].blurb}</p>
        <ul class='lodgeDetails'>
          <li>Sleeps: ${tuscanLodgeArr[i].sleeps} adults</li>
          <li># of Beds: ${tuscanLodgeArr[i].beds}</li>
          <li>Extras: ${tuscanLodgeArr[i].extra}</li>
        </ul>
          <button type="button" class="btn btn-secondary airBnbBtn"><a href='${tuscanLodgeArr[i].link}'>View AirBnb Listing</a></button>
      </div>
    </div>`;
    //add the text to the element with the class .allLodgingOptions
    $('.allTuscanLodgingOptions').append(lodgingText);
  }
}


var romanLodgeArr = [
  {name:'Saint B Boutique Hotel',
  location:'Via Veneto & Piazza Barberini',
  price:'194',
  blurb:'Modern elegance five minutes from the Spanish Steps and Trevi Fountain.',
  sleeps:'2',
  beds:'1',
  extra:'Free wi-fi. Terrace.',
  img:'rome/img/st-b.png',
  link:'https://www.tablethotels.com/en/rome-hotels/saint-b-boutique-hotel?query=Rome&arrDate=2019-05-22&depDate=2019-05-24&nA=1&nC=0&nR=1&lang=en&location_id=234&hotelId=119215&pid=8797&language=en'},
  {name:'The Fifteen Keys Hotel',
  location:'Monti',
  price:'243',
  blurb:'Low-key, apartment-style living.',
  sleeps:'2',
  beds:'1',
  extra:'Includes breakfast and free wi-fi. 24 hour concierge.',
  img:'rome/img/fifteen-keys.png',
  link:'https://www.tablethotels.com/en/rome-hotels/the-fifteen-keys-hotel?query=Rome&arrDate=2019-05-22&depDate=2019-05-24&nA=1&nC=0&nR=1&lang=en&location_id=234&hotelId=118278&pid=7879&language=en'},
  {name:'Casa Montani',
  location:'Piazza del Popola',
  price:'217',
  blurb:'Small hotel, impeccably run, giving the modern traveler a taste of the Eternal City.',
  sleeps:'2',
  beds:'1',
  extra:'Includes breakfast and free wi-fi.',
  img:'rome/img/casa-montani.png',
  link:'https://www.tablethotels.com/en/rome-hotels/casa-montani?query=Rome&arrDate=2019-05-22&depDate=2019-05-24&nA=1&nC=0&nR=1&lang=en&location_id=234&hotelId=118265&pid=7878&language=en'},
  {name:"Gigli D'Oro Suite",
  location:'Piazza Navona & the Pantheon',
  price:'264',
  blurb:'Aristocratic residence dividied into 6 suites featuring eclectic high-end Roman fashion.',
  sleeps:'3',
  beds:'2',
  extra:'Includes breakfast and free wi-fi. 24 hour concierge. Bar.',
  img:'rome/img/gigli-d-oro.png',
  link:'https://www.tablethotels.com/en/rome-hotels/gigli-doro-suite?query=Rome&arrDate=2019-05-22&depDate=2019-05-24&nA=1&nC=0&nR=1&lang=en&location_id=234&hotelId=115759&pid=5323&language=en'},
  {name:'Villa Laetitia',
  location:'Vittorio on the banks of the Tiber',
  price:'358',
  blurb:'A historical residence owned and remodeled by the Fendi family of the Fendi fashion house.',
  sleeps:'2',
  beds:'1',
  extra:'Restaurant and bar. Breakfast included.',
  img:'rome/img/villa-laetitia.png',
  link:'http://www.villalaetitia.com/roma/'},
  {name:'166 Cavour Street House',
  location:'Monti',
  price:'243',
  blurb:'3 Bedroom home within walking distance of the Colosseum.',
  sleeps:'8',
  beds:'5',
  extra:'Free wi-fi. Breakfast.',
  img:'rome/img/cavour-street.png',
  link:'https://www.airbnb.com/rooms/24073001?location=Rome%2C%20Metropolitan%20City%20of%20Rome%2C%20Italy&adults=8&children=0&infants=0&guests=1&check_in=2019-05-22&check_out=2019-05-24&s=IdPp_-wn'}
];




function addRomeLodgingOption (){
  console.log('function engaged');
  for(i = 0; i < romanLodgeArr.length; i++){
    console.log('for loop enagaged');
    var lodgingText = `
    <div class='lodgingOption row mb-5'>
      <img class='lodgeImg col-md-5 img-fluid' src='${romanLodgeArr[i].img}'/>
      <div class='lodgingOptionText col-md-5 ml-2'>
        <h2 class='lodgeName'> ${romanLodgeArr[i].name} </h2>
        <h3 class='lodgeLocation'>${romanLodgeArr[i].location}</h3>
        <h3 class='lodgePrice'>$${romanLodgeArr[i].price} per night</h4>
        <p class='lodgeBlurb'>${romanLodgeArr[i].blurb}</p>
        <ul class='lodgeDetails'>
          <li>Sleeps: ${romanLodgeArr[i].sleeps} adults per room</li>
          <li># of Beds: ${romanLodgeArr[i].beds} per room</li>
          <li>Extras: ${romanLodgeArr[i].extra}</li>
        </ul>
          <button type="button" class="btn btn-secondary airBnbBtn"><a href='${romanLodgeArr[i].link}'>View Hotel Website</a></button>
      </div>
    </div>`;
    //add the text to the element with the class .allLodgingOptions
    $('.allRomeLodgingOptions').append(lodgingText);
  }
}
