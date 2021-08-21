const inquirer = require("inquirer");
const MachineOptions = require("./machine");
const options = require("../data");

//Herança: herdar classes específicas de uma classe;
class User extends MachineOptions{
  constructor({opt, name, selected}){
	super({opt}); //Preciso definir ele quando trabalho com herança;
	this._name = name;
	this._selected = selected;
	this._sort = this.sort();
  }

  set name(string){
	this._name = string;
  }

  set selected(string){
	this._selected = string;
  }

  get name(){
	return this._name;
  }

  get selected(){
	return this._selected;
  }


    logic(){
    if(this._selected === this._sort){
	return `${this._name}, máquina escolheu ${this._sort}. Você escolheu ${this.selected} - Resultado => Você empatou!`
    } else if (
	    (this._selected === 'Pedra' && this._sort === 'Tesoura') ||
	    (this._selected === 'Tesoura' && this._sort === 'Papel') ||
	    (this._selected === 'Papel' && this._sort === 'Pedra')
    ){
      return `${this._name}, máquina escolheu ${this._sort}. Você escolheu ${this.selected} - Resultado => Você ganhou!`
    } else {
	return `${this._name}, máquina escolheu ${this._sort}. Você escolheu ${this.selected} - Resultado => Você perdeu!`
    }
}

    game(){
	return inquirer.prompt([
		{
		  name: 'name',
		  message: 'Qual o seu nome?',
		  default: 'Jogador'
		},
		{
		  type: 'list',
		  name: 'jokenpo',
		  message: 'Escolha uma destas opções: ',
		  choices: options,
		}
	]).then((answer) => {
		this._name = answer.name;
		this._selected = answer.jokenpo;
		console.info(`${this.logic()}`)
	}) //Após esperar essas respostas "THEN" será executado.
    }

  }

module.exports = User;