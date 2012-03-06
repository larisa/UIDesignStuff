// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

var allFromWords = new Array();
var allGuesses = new Array();
var allToWords = new Array();


$(function() {
		var lang_to		= "English";
		var lang_from		= "Spanish";
		var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from 	

		//supply the To and From Languages
		$('.toLang').text(lang_to);
		$('.fromLang').text(lang_from);
		

		var randomToWord = pickRandomProperty(current_dict);
		allToWords.push(randomToWord);
		var randomFromWord = current_dict[randomToWord]; 
		allFromWords.push(randomFromWord);
		
		//display Prompt
		$('.PromptWord').text(randomFromWord);

		//get user's input
		$('#userGuess').submit(function(){
				var guess = $("input[name=userInput]").val();
				console.log("YOU GUESSED " + guess);
				prepareNextWord(randomFromWord, guess, randomToWord);
				return false;
		});

    });


//prompt for another word, clear the input
function prepareNextWord(prompt, guess, answer){
		if (guess==answer){
				console.log("CORRECT!");
				var out = $("<div/>", {"class": "correctRow"});
				out.append(($("<div/>", 
											{"class": "correctLangFrom",
											 text: prompt})));
				out.append(($("<div/>", 
											{"class": "correctLangTo",
											 text: answer})));
				out.append(($("<div/>",
											{"class": "correctCheck"}).html("&#10003;")));
				$('#entriesLog').prepend(out);
				return true;
		}
		console.log("WRONG");
		var out = $("<div/>", {"class": "wrongRow"});
		out.append(($("<div/>", 
									{"class": "wrongLangFrom",
									 text: prompt})));
		out.append(($("<div/>", 
									{"class": "wrongLangTo",
									 text: guess})));
		out.append(($("<div/>",
								{"class": "actualTo",
								 text: answer})));

		$('#entriesLog').prepend(out);
		return false;
}
				


//get a random element
function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}