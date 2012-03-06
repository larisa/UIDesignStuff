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

		//get user's input
		
		var guess = $("#toLangInput").attr("name");
		console.log(guess);

		console.log(lang_to);
		console.log(lang_from);
		console.log(current_dict);
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