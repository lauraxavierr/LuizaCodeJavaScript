class MachineOptions {
  constructor({opt}){
     this._opt = opt; // "_" referencia um objeto no construtor;
  }
 
  sort(){
   const sortOpt = Math.floor(Math.random() * 3 - 0);  //arredonda um valor para baixo;
   return this._opt[sortOpt].name 

  }

  set opt(options){
   this._opt = options;
  }

  get opt(){
   return this._opt;
  }
}

module.exports = MachineOptions
