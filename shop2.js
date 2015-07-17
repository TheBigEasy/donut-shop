
var Shop = function(shopName,minCust, maxCust,avgDonuts) {
  this.shopName = shopName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgDonuts = avgDonuts;
  this.opens = 700;
  this.closes = 1800;
  this.hoursOpen = (this.closes - this.opens)/100;
  this.hourly = [];
  this.totalDonuts = 0;
};

Shop.prototype.render = function(){
  this.donutsPerHour();
  this.donutsPerDay();
  this.insertShop();
};

// creates random number for amount of customers
Shop.prototype.randomCustomers = function() {
  // console.log("random customers is " + (Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust));
  return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
};

// creates random number by calling randomCustomers and multiplying by avg donuts/customer
Shop.prototype.createDonuts = function() {
  return Math.floor(this.randomCustomers() * this.avgDonuts);
};

//fills in the array "hourly" with 11 numbers - later corresponding to each hour
Shop.prototype.donutsPerHour = function() {
  for(var i = 0; i < this.hoursOpen; i++) {
    this.hourly[i] = this.createDonuts();
  }
  console.log(this.hourly + " " + this.shopName + ' hourly');
};

//sum of 'hourly' Array to get donuts per day
Shop.prototype.donutsPerDay = function() {
  for(var i = 0; i < this.hourly.length; i++) {
    this.totalDonuts += this.hourly[i];
    // console.log(this.hourly[i] + "line 43");
  }
  console.log(this.totalDonuts + ' totalDonuts');
};


//finds body in html and creates a table
var body = document.body;
var tbl = document.createElement('table');

//create header for table: 'hours, times, total'
var createTable = function(){
  tbl.style.width = '100px';
  tbl.style.border = '1px solid black';

for(var i = 0; i < 1; i++) {
  var tr = tbl.insertRow();
  var td = tr.insertCell();
  td.appendChild(document.createTextNode('Hours'));
  td.style.border = '1px solid black';

for(var j = 0; j < 12; j++) {
  var tdl = tr.insertCell();
  if(i === 0 && j < 11) {
    var time = 700 + (j * 100);
    tdl.appendChild(document.createTextNode(time));
    tdl.style.border = '1px solid black';
  } else {
    tdl.appendChild(document.createTextNode('Totals'));
    tdl.style.border = '1px solid black';
  }
}
}
body.appendChild(tbl);
};

// Creates a row for the given shop and fills in the corresponding data (aka magic)
Shop.prototype.insertShop = function() {

    var tr = tbl.insertRow();
    for(var j = 0; j<13; j++) {
      var td = tr.insertCell();
      if(j%2) {
        td.style.background = 'gray';
      }
      if(j === 0) {
        td.appendChild(document.createTextNode(this.shopName));
        td.style.border = '1px solid black';
      } else if (j === 12) {
        td.appendChild(document.createTextNode(this.totalDonuts));
        td.style.border = '1px solid black';
      } else {
        td.appendChild(document.createTextNode(this.hourly[j-1]));
        td.style.border = '1px solid black';
      }
    }

};

// creates header and main table
createTable();

//Declaring and instantiating new Shops --> calling render to add to table

var downtown = new Shop('Downtown',8,43,4.5);
downtown.render();

var capitolHill = new Shop('Capitol Hill',4,37,2);
capitolHill.render();

var southLakeUnion = new Shop('South Lake Union',9,23,6.33);
southLakeUnion.render();

var wedgewood = new Shop('Wedgewood',2,28,1.25);
wedgewood.render();

var ballard = new Shop('Ballard',8,58,3.75);
ballard.render();
















// alert("the ouput of randomCustomers is " + downtown.randomCustomers());
// downtown.createDonuts();
// downtown.donutsPerHour();
// downtown.donutsPerDay();













