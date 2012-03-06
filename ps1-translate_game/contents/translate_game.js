// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
		var lang_to		= "English";
		var lang_from		= "Spanish";
		var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from 	

		$('.toLang').text(lang_to);
		$('.fromLang').text(lang_from);

    });
