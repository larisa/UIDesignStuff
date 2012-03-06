// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
		var lang_to		= "English";
		var lang_from		= "Spanish";
		var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from 	

		
		//supply the To and From Languages
		$('.toLang').text(lang_to);
		$('.fromLang').text(lang_from);
		
		//pick a random word.
		var randomToWord = pickRandomProperty(current_dict);
		var randomFromWord = current_dict[randomToWord]; 
		$('.PromptWord').text(randomFromWord);

		//get user's input and check it
		$('#userGuess').submit(function(){
				console.log("form has submitted!");
				var guess = $("input[name=userInput]").val();
				console.log("YOU GUESSED " + guess);
				if (guess==randomToWord)
						console.log("Correct!");
				else
						console.log("WRONG");
				return false;
		});

    });



//get a random element
function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}