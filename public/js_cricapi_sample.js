// be sure to include jquery
// be sure to replace <YOUR API KEY> with your actual api key


$.get("https://cricapi.com/api/cricket?apikey=<TmPEXXFO4bM4SjsiPllTCcS1pzn1>", function(matchdata) {
	matchdata.data.forEach(function(md) {
		console.log(md.description + " - to grab more details, simply use the unique_id " + md.unique_id + " with the cricketScore api!");
	});
});