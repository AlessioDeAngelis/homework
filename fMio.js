//input un array con la funzione e un valore. Applica la funzione su quel valore

var apply = function(a){
	return a[0](a[1]);
}

apply([Math.cos, Math.PI/3]);//0.5
 
//apply to all

var aa = function(a){
	return a;//da finire
}

var comp2  = function([f,g])(x){
	return f(function (g)(x)){
		return g(x);
	}
}

//composizione a n funzioni
var comp = function(a) {
	var l = a.length;
	var funz = function(a,l,i)(res){
		if i === l
			return a[i](res);
		var j = i+1;	
		return a[i](funz(a[j],l,j));
	};
	return funz;
}

var compCorretto = function(a){
	return function (x){
		return arr.reduce(function(f,g){
			return function(x){
				return f(g(x));
			}
		})
	}
}

var consMio = function(a){

	return function(x){
		var b;
		for(var i=0;i<a.length;i++){
			b[i]=a[i](x);
		}
		return b;
	}
}
