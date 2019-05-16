  
  
  // Select the submit button
  var submit = d3.select("#filter-btn");
  submit.on("click", function() {
 
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Bill Total
  var billtotal = d3.select("#bill");
  // Get the value property of the input element
  var billValue = billtotal.property("value");
  // Log the user input and the table data
  console.log(billValue);

  // Tip Percentage 
  var tip_percentage = d3.select("#tip");
  // Get the value property of the input element
  var tip = tip_percentage.property("value");
  // Log the user input and the table data
  console.log(tip);

  // Split
  var split = d3.select("#split");
  // Get the value property of the input element
  var split_value = split.property("value");
  // Log the user input and the table data
  console.log(split_value);

if (!billValue || !tip) {
  
  alert("Woah! Not enough info. Please enter both a bill amount and tip percentage");}

else

  {
  
  tiptotal = (parseFloat(tip) / 100) * parseFloat(billValue)
  total = parseFloat(tiptotal) + parseFloat(billValue)

  if (!split_value) {
    split_total = total / 1;
  } else {
    split_total = total / parseFloat(split_value);
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  tiptotal = formatter.format(tiptotal)
  final_total = formatter.format(total)
  final_split = formatter.format(split_total)

  console.log(tiptotal)
  console.log(final_total)
  console.log(final_split)



     document.getElementById('output_tip').innerHTML = tiptotal;
     document.getElementById('output_total').innerHTML = final_total;
     document.getElementById('output_split').innerHTML = final_split;
    
}});