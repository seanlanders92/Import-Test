//Functions =
// Inputs (parameters)
// Work (some sort of string)
// Output (return values)

// "turkey", "pepperjack", "wheat"
// "here is your tasty var sandwich on var bread"

function makeSandwich (meat, cheese, bread) {
    var newSandwich = ' Here is your tasty ' + meat + ' and ' + cheese + ' sandwich on ' + bread + ' bread ';
    var sandwichHtml = '<p>' + newSandwich + '</p';
    return sandwichHtml;
  } 
  var meat = prompt('What kind of meat do you want on your sandwich?');
  var cheese = prompt('What kind of cheese do you want?');
  var bread = prompt('What kind of bread do you want on your sandwich?');
  
  var sandwich = makeSandwich(meat, cheese, bread); 
  
  document.write(sandwich);
  
  var wantanother = prompt('Do you want another sandwich?')
  
  if (wantanother === 'yes'){
      var meat2 = prompt('What kind of meat do you want on your sandwich?');
      var cheese2 = prompt('What kind of cheese do you want?');
      var bread2 = prompt('What kind of bread do you want on your sandwich?')
  
      var secondsandwich = makeSandwich(meat2, cheese2, bread2);
      document.write(secondsandwich);
  }