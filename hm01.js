function Point(xx,yy)
{
	this.x = xx;
	this.y = yy
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

function Triangle(p1,p2,p3)
{
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;
};

Triangle.prototype.getPerimeter = function() 
{
	return this.p1.getDistance(this.p2) + this.p2.getDistance(this.p3) + this.p3.getDistance(this.p1);
};

Triangle.prototype.getArea = function()
{
	var p = this.getPerimeter()/2;
	var l1 = this.p1.getDistance(this.p2);
	var l2 = this.p2.getDistance(this.p3);
	var l3 = this.p3.getDistance(this.p1);
	return Math.sqrt(p*(p-l1)*(p-l2)*(p-l3));
};

