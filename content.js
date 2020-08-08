var BINOD_UPPERCASE = "BINOD";
var BINOD_SENTENCE_CASE = "Binod";

// Generates a random Binod text so that its not all boring
function getRandomBinod(){
  var selected_phrase = Math.floor((Math.random() * 10) + 1);
  
  switch(selected_phrase) {
    case 1:
      return "binod ";
    case 2:
      return "binod ";
    case 3:
      return "binod? "
    case 4:
      return "binod! ";
    case 5:
      return "binod ";
    case 6:
      return "binod!? ";
    case 7:
      return "binod ";
    case 8:
      return "binod ";
    case 9:
      return "(binod) ";
    case 10:
      return "binod??? ";
    default:
      return "binod. ";
  }
}


// Get a list of all the elements on the page
var pageElements = document.children;

// A function that loops through every single item
function binodify(parent) {
  parent.childNodes.forEach(element => {
    if (element.hasChildNodes() && !(element.tagName == "STYLE" || element.tagName == "SCRIPT" || element.tagName == "NOSCRIPT")) {
      binodify(element);
    } else if (element.nodeType === 3 && /\S/.test(element.nodeValue)) {
      replaceText(element);
    }
  });
}

function getNoOfBinodsToFillIn(length) {
  return Math.floor(length / BINOD_UPPERCASE.length);
}

function replaceText(node) {
  var originalSentence = node.nodeValue.trim();
  if(!isNaN(originalSentence)) return;
  var originalSentenceArray = originalSentence.split(" ");
  var originalSentenceLength = originalSentence.length;
  var binodsLength = getNoOfBinodsToFillIn(originalSentenceLength);

  var newSentence = [];

  if (originalSentenceArray[0] === originalSentenceArray[0].toUpperCase())
    newSentence.push(BINOD_UPPERCASE);
  else if (originalSentenceArray[0][0] === originalSentenceArray[0][0].toUpperCase())
    newSentence.push(BINOD_SENTENCE_CASE);

  while (binodsLength--) {
    newSentence.push(getRandomBinod());
  }
  node.nodeValue = newSentence.join(" ");
}


chrome.runtime.onMessage.addListener(
  function(request) {
    if(request.binodify == true) {
      var html = document.getElementsByTagName('html')[0];
      binodify(html);
    }
});