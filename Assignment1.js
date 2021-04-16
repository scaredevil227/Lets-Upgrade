
//Question 1
//Slice Operation
const michael = "People say I'm the best boss.";
//(i)
console.log(michael.length);
//(ii)
console.log(michael.slice(15));
//(iii)
console.log(michael.slice(11,29));
//(iv)
console.log(michael.slice(11,-1));
//(v)
console.log(michael.slice(-5));
//(vi)
console.log(michael.slice(-10,-6));



//Question 2
//Array Methods
let dukeOfHastingsSays="I burn for you.";

  //(i)
  let newArray = dukeOfHastingsSays.toLowerCase().split(" ");
  console.log(newArray);
  
  //(ii)
  let newStringWithSpace = newArray.join(" ");
  console.log(newStringWithSpace);
  
  //(iii)
  let newStringWithoutSpace = newArray.join("");
  console.log(newStringWithoutSpace);


 
//Question 3
//Splice Operation
//(i))
let starHollows = ['Lorelai','Rory','Luke','Lane','Kirk','Taylor'];
  
  let removed = starHollows.splice(1);
  console.log(removed);
  console.log(starHollows);
  
//(ii)
let beverlyHillsGang = ['Brandon','Brenda','Dylan','Andrea','Steve','Kelly','Donna','David'];
  
  let removed1 = beverlyHillsGang.splice(1,2);
  console.log(removed1); //removed variable is already used above and couldn't be overwritten in the same program
  console.log(beverlyHillsGang);
  
//(iii)
let seinfeld = ['Jerry','George','Kramer','Newman','Elaine'];

  let removed2 = seinfeld.splice(-2,1);
  console.log(removed2); //same case as above so another variable name is used
  console.log(seinfeld);
  
//(iv)
let brooklynNineNine = ['Jake','Amy','Charles','Rosa','Captain Holt','Gina','Terry'];

  let removedAndInserted = brooklynNineNine.splice(5,1,'Hitchcock','Scully');
  console.log(removedAndInserted);
  console.log(brooklynNineNine);
  
//(v)
let friends = ['Ross','Rachel','Joey','Chandler','Monica','Phoebe'];

  let insertedOnly = friends.splice(1,0,'Gunther','Carol','Susan');
  console.log(insertedOnly);
  console.log(friends);