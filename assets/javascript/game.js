var wins = 0;
var numGuessRemain =15;
var lettersAlreadyGuessed = [];
var hangmanChoices = ["whiteside", "wade", "richardson", "riley", "spoelstra", "adebayo", "mourning"];
   
function hangmanGenerator(arr){
  return hangmanChoices[Math.floor(Math.random() * arr.length)];
};
var hangmanWord = hangmanGenerator(hangmanChoices);
function placeGenerator(str){
  var myArr = [];
  for(var i = 0; i< str.length; i++){
    myArr.push("_"); 
    document.getElementById("wordisplay").innerHTML = 
    "Current Word: " + myArr.join(" ");
  }
  return myArr;
};
var hangmanPlacementholders = placeGenerator(hangmanWord);
document.onkeyup=function(event) {
  var keyPressed = event.key;
  var charIndex = hangmanWord.indexOf(keyPressed);
  
  if(numGuessRemain === 0){
    alert("You lose");
    startOver();
  }
 
  if(charIndex === -1){
    lettersAlreadyGuessed.push(keyPressed); 
    numGuessRemain=numGuessRemain-1; 
    alert("Nope,Try Again!"); 
    document.getElementById("guessRemain").innerHTML =
     "Guesses Remaining: " + numGuessRemain;
    document.getElementById("letterGuess").innerHTML =
     "Letters Guessed: " + lettersAlreadyGuessed.join(" ");
    }
    else{
      lettersAlreadyGuessed.push(keyPressed);
      numGuessRemain = numGuessRemain-1;
      for(var i=0;i<hangmanPlacementholders.length;i++){
        if(hangmanWord[i] === keyPressed){
          hangmanPlacementholders[i] = keyPressed;
          document.getElementById("wordisplay").innerHTML = 
          "Current Word: " + hangmanPlacementholders.join(" "); 
           document.getElementById("letterGuess").innerHTML = 
           "Letters Guessed: " + lettersAlreadyGuessed.join(" ");
          }
            
        }
        document.getElementById("guessRemain").innerHTML = 
        "Guesses Remaining: " + numGuessRemain;
         
        }
        
        var hangmanCompare = hangmanPlacementholders.join("");
        
        // To determine if you win //
        if(hangmanCompare === hangmanWord){
          alert("You Win!");
         
          // To keep track of how many wins you have // 
          document.getElementById("wins").innerHTML = "Wins: " + ((wins++)+1);
          hangmanCompare = "blank"; 
          startOver(); 
         }
         
       
      
      function startOver(){
        keyPressed = "";
        numGuessRemain =10;
        lettersAlreadyGuessed = [];
        myPlaceholders =[];
        hangmanWord = hangmanGenerator(hangmanChoices);
        hangmanPlacementholders = placeGenerator(hangmanWord); 
        document.getElementById("guessRemain").innerHTML = "Guesses Remaining: ";
         document.getElementById("letterGuess").innerHTML = "Letters Guessed: ";
        document.getElementById("wordisplay").innerHTML = "Current Word: ";
        
      }
        
      };