function shout(words){
  return words.toUpperCase();
}

function whisper(words){
  return words.toLowerCase();
}

function logShout(words){
  console.log(words.toUpperCase());
}

function logWhisper(words){
  console.log(words.toLowerCase());
}

function sayHiToGrandma(string){
  if(string == "I love you, Grandma."){
    return "I love you, too."
  } else{
    return string == string.toUpperCase() ? "YES INDEED!" : "I can't hear you!";
  }
}