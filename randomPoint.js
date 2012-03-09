function Point(xx,yy)
{
	this.x = xx;
	this.y = yy;
};

Point.prototype = 
{
	getX: 		function() {return this.x;},
	getY: 		function() {return this.y;},
	getDistance:  	function(that) 
					{
						return Math.sqrt(Math.pow((this.x-that.x),2)+Math.pow((this.y-that.y),2));
					}


};

//crea un point randomizzato in [-100,100]

var randomPoint = function(){
	var rndX, rndY;
	rndX = (Math.random() * 200) - 100;
	rndY = (Math.random() * 200) - 100;
	return new Point(rndX,rndY);
}

//genera un array di n punti random

var generatePoints = function(n){
	var a;
	var i;
	for (i=0; i< n; i++){
		a[i]=randomPoint();
	}
	return a;
}

