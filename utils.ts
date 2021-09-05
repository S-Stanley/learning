const fs = require("fs");
const prompt = require('prompt');

function new_array(lst: string[], index_to_delete: number){
	const output = [];
	for (const i in lst){
		if (index_to_delete != parseInt(i)){
			output.push(lst[i]);
		}
	}
	return output;
}

function get_question(lst: string[]){
	const nb = Math.floor(Math.random() * lst.length);
	return [lst[nb], new_array(lst, nb)];
}

function get_data(path: string){
	const data = fs.readFileSync(path, "utf-8");
	return JSON.parse(data);
}

async function get_answer(){
	prompt.start();
	const { answer } = await prompt.get("answer");
	return answer;
}

function get_key(lst: string[], to_find: string): number | boolean{
	for (let i in lst){
		if (lst[i] == to_find){
			return parseInt(i) + 1;
		}
	}
	return false;
}

module.exports = {
	get_question,
	get_data,
	get_answer,
	get_key,
}