function Obj(){
	//typeof instanceof = 'Objeto';
	typeof 'Obj' = 'Objeto';
	this.info = 'obj_info';
}

x = new Obj();

console.log(x.info);
console.log(typeof(x));
