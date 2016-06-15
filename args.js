function gen(){
	var vec = [];
	for(var i=0;i<arguments.length;i+=1){
		vec[i] = typeof(arguments[i]);
		document.write("\""+vec[i]+"\"<p>");
	}
}
gen("s",1,alert,[1,3]);
