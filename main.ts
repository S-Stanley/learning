const Utils = require('./utils');

async function start_quiz() {
	let count = 0;
	let data = Utils.get_data("data/words.json");
	let item;
	const size = data.length;
	while (data.length > 0){
		[item, data] = Utils.get_question(data);
		console.log("Def:", item.def, "\nChoices:", item.choices);
		let answer = await Utils.get_answer();
		(answer == Utils.get_key(item.choices, item.good)) ? count++ : console.log('Error, it was', item.good);
	}
	console.log(`Résultat: ${count}/${size}`);
}

start_quiz();
