/* randomPoints */

var sqrt = Math.sqrt;
var pow = Math.pow;
var random = Math.random;

/* POINT */

var Point = function (x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Point.prototype.getDistance = function(point) {
  return sqrt(pow(point.y - this.y, 2) + pow(point.x - this.y, 2));
};

Point.prototype.translate = function(dx, dy) {
  this.x += dx;
  this.y += dy;

  return this;
};


/* TRIANGLE */

var Triangle = function (p1, p2, p3) {
  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;

  this.l1 = p2.getDistance(p3);
  this.l2 = p3.getDistance(p1);
  this.l3 = p1.getDistance(p2);
}

Triangle.prototype.getPerimeter = function() {
  return this.l1 + this.l2 + this.l3;
};

Triangle.prototype.getArea = function() {
  var p = this.getPerimeter() / 2;

  return sqrt(p*(p - this.l1)*(p - this.l2)*(p - this.l3));
};


var randomPoint = function () {
  var x1 = random() * 200 - 100;
  var y1 = random() * 200 - 100;
  
  return new Point(x1, y1);
};

var randomPoints = function (n) {
  var n = n || 1;
  var res = new Array(n);

  for (var i = 0; i < n ; i += 1) {
    res[i] = randomPoint();
  }

  return res;
}

var points = randomPoints(100);

/* fare una funzione filterBisettrice che 
preso in input un array di Point ritorna tutti 
quelli siti nel semipiano positivo definito dalla funzione y - x = 0 */

var filterBisettrice = function(array){
  var array = array || [];
  return array.
    filter(function(p){
      return p.y - p.x >=0;
    });
}

//appartenenza a un semipiano definito da una rnretta
Point.prototype.membership = function (funzioneRetta){
  var value = funzioneRetta(this.x, this.y);

  if (value > 0){
    return +1;
  }

  if (value < 0){
    return -1;
  }

  return 0;
}

//Line rappresenta delle rette di equazione ax+by+c

var Line = function (a,b,c){

  // se l'utente si dimentica il new
  if(!(this.instanceof Line)){
    return new Line(a,b,c);


  this.a = a || 0;
  this.b = b || 0;
  this.c = c || 0;
};

Point.prototype.distance = function(line){
  var numeratore =  Math.abs((line.a * this.x + line.b * this.y + line.c));
  var denominatore = Math.sqrt(Math.pow(line.a,2) + Math.pow(line.b,2));
  return numeratore/denominatore;
};