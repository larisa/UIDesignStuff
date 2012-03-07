// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

var allFromWords = new Array();
var allGuesses = new Array();
var allToWords = new Array();


$(function() {
		var lang_to		= "English";
		var lang_from		= "Spanish";
		var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from 	

		var autocompleteEnglish = getKeys(current_dict);

		//supply the To and From Languages
		$('.toLang').text(lang_to);
		$('.fromLang').text(lang_from);
		
		var randomToWord = pickRandomProperty(current_dict);
		allToWords.push(randomToWord);
		var randomFromWord = current_dict[randomToWord]; 
		allFromWords.push(randomFromWord);
		
		//display Prompt and focus text field
		$('.PromptWord').text(randomFromWord);
	//	$("#textField").userDataInput.focus();


		//get user's input
		$('#userGuess').submit(function(e){
				e.preventDefault();
				var guess = $("input[name=userInput]").val();
				console.log("YOU GUESSED " + guess);
				processGuess(randomFromWord, guess, randomToWord);
				prepareNextWord();

				return false;
		});

		//filter autocomplete list
		$("#userDataInput").autocomplete({
				source:autocompleteEnglish

		});

    });

function getKeys(dict){
		var allKeys = new Array();
		for (var key in dict){
				allKeys.push(key);
		}
		return allKeys;
		
}


function processGuess(prompt, guess, answer){
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
				out.insertBefore($('.row')[0]);

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

		out.insertBefore($('.row')[0]);
		return false;
}

//prompt for another word, clear the input				
function prepareNextWord(){
		$("#textField").userDataInput.text('');
		console.log("we're clearing the form");
		return;
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