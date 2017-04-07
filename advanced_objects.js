var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


var output = {

}

//TAX FOR TELUS SK 60 BC 84

var taxStuff = 0;
var totalTaxes = 0;

// get tax rates as per province
function getTaxRates(salesData, taxRate) {

    var a = salesData.province;
    var b = taxRate[a]

    return b


}


function CalcSalesAndTax(salesData, taxRate) {
  // Implement your code here

  var totalSales = 0;

  for (var i = 0; i < salesData.sales.length; i++) {
      totalSales += salesData.sales[i]

      // taxStuff = getTaxRates(salesData, taxRate)
      // console.log(taxStuff);

        // totalTaxes =  taxStuff * totalSales
  }

  // console.log(salesData.name + " " + totalSales + " totalTaxes: " + totalTaxes);

  return totalSales;

}


// just to loop all array elements in companySalesData
function getSalesData(salesData, taxRate) {
var salesNumber = 0;

  for (var i = 0; i < salesData.length; i++) {
    salesNumber = CalcSalesAndTax(salesData[i], taxRate)
    taxStuff = getTaxRates(salesData[i], taxRate)

    totalTaxes =  taxStuff * salesNumber

    if (salesData[i].name == 'Telus') {
          output.Telus = {totalSales: salesNumber,
          totalTaxes: totalTaxes}
      } else {
          output.Bombardier = {totalSales: salesNumber,totalTaxes: totalTaxes}
      }

  }

  console.log(output);
}




var results = getSalesData(companySalesData, salesTaxRates);


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
