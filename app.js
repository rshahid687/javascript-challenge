// from data.js
var dataValues = data;
var tBody = d3.select("tbody");

//generate button and form inputs 
var buttonClick = d3.select('#filter-btn');  
var formFill = d3.select('#form')
buttonClick.on("click", ufoFun);
formFill.on("submit", ufoFun);

function ufoFun() {

    // prevent refresh
    d3.event.preventDefault();
 
    $('tbody').innerHTML = "";
    
    var input = $('#datetime').value;
    var dataFilter = dataValues.filter(dates => dates.datetime === input);   
    console.log(dataFilter) 
    if (dataFilter.length == 0) {
        //do nothing;
      }
      else {
        
        // create columns
        var Date = dataFilter.map(dates => dates.datetime);
        var City = dataFilter.map(dates => dates.city);
        var State = dataFilter.map(dates => dates.state);
        var Country = dataFilter.map(dates => dates.country);
        var Shape = dataFilter.map(dates => dates.shape);
        var Duration = dataFilter.map(dates => dates.durationMinutes);
        var Comments = dataFilter.map(dates => dates.comments);   
    
        // iterate through each value of column data
        dataFilter.forEach((dataFilter) => {
      
          var rows = tbody.append("tr");
          Object.entries(dataFilter).forEach(([key, value]) => {
          var cells = rows.append("td");
          cells.text(value);
          $('#datetime').value = ""
  
        });
        });
      };

    };