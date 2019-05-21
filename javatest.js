//Functions =
// Inputs (parameters)
// Work (some sort of string)
// Output (return values)

// "turkey", "pepperjack", "wheat"
// "here is your tasty var sandwich on var bread"

function makeSandwich (meat, cheese, bread) {
    var newSandwich = 'here is your tasty' + meat + 'and' + cheese + 'sandwich on' + bread;
    return sandwich;
  } 
  var kindofmeat = prompt('What kind of meat do you want on your sandwich?');
  var kindofcheese = prompt('What kind of cheese do you want?');
  var kindofbread = prompt('What kind of bread do you want on your sandwich?');
  
  var sandwich = makeSandwich(kindofmeat, kindofcheese, kindofbread); 
  
  document.write(sandwich);
  
  var wantanother = prompt('Do you want another sandwich?')
  
  if (wantanother === 'yes'){
      var meat2 = prompt('What kind of meat do you want on your sandwich?');
      var cheese2 = prompt('What kind of cheese do you want?');
      var bread2 = prompt('What kind of bread do you want on your sandwich?')
  
      var secondsandwich = makeSandwich(meat2, cheese2, bread2);
      document.write(secondsandwich);
  }