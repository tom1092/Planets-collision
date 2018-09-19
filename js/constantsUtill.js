//COSTANTI


var scaled_G = 6.67408*Math.pow(10,-11);

//SUN
var SUN_PARTICLES = 3 * 15000;
const SUN_INIT_POSITION = new THREE.Vector3(0.0, 0.0, 0.0);
const SUN_INIT_VELOCITY = new THREE.Vector3(0.0, 0.0, 0.0);
const SUN_INIT_ACCELERATION = new THREE.Vector3(0.0, 0.0, 0.0);
const SUN_RADIUS = 30;
const SUN_MASS = 5.989 * Math.pow(10, 30);



//MARS
var MARS_VELOCITY = new THREE.Vector3(0.0, 1.0, 0.0);
var MARS_INIT_POSITION = new THREE.Vector3(180.0, 0.0, 0.0);
MARS_VELOCITY = vectorScalarProduct(MARS_VELOCITY, Math.sqrt(scaled_G*SUN_MASS/(vectorNorm(MARS_INIT_POSITION)*1000)));



//EARTH
var EARTH_VELOCITY = new THREE.Vector3(-1.0, 0.0, 0.0);
var EARTH_INIT_POSITION = new THREE.Vector3(0.0, 0.0, -150.0);
EARTH_VELOCITY = vectorScalarProduct(EARTH_VELOCITY, Math.sqrt(scaled_G*SUN_MASS/(vectorNorm(EARTH_INIT_POSITION)*1000)));

//JUPITER
var JUPITER_VELOCITY = new THREE.Vector3(140.0, 140.0, 140.0).cross(new THREE.Vector3(140.0, 0.0, 140.0));
JUPITER_VELOCITY = vectorScalarProduct(JUPITER_VELOCITY, 1.0/vectorNorm(JUPITER_VELOCITY));
var JUPITER_INIT_POSITION = new THREE.Vector3(140.0, 140.0, 140.0);
JUPITER_VELOCITY = vectorScalarProduct(JUPITER_VELOCITY, Math.sqrt(scaled_G*SUN_MASS/(vectorNorm(JUPITER_INIT_POSITION)*1000)));


var ASTEROID_PARTICLES = 3 * 5000;
var ASTEROID_INIT_POSITION = new THREE.Vector3(0.0, -120.0, 0.0);

const ASTEROID_INIT_ACCELERATION = new THREE.Vector3(0.0, 0.0, 0.0);
const ASTEROID_RADIUS = 4;
var ASTEROID_MASS = 10000;
var ASTEROID_INIT_VELOCITY = vectorScalarProduct(new THREE.Vector3(1, 0, 0), 0.75*Math.sqrt(scaled_G*SUN_MASS/(vectorNorm(ASTEROID_INIT_POSITION)*1000)));
//var ASTEROID_INIT_VELOCITY = new THREE.Vector3(100000, 0, 0);
console.log("init",ASTEROID_INIT_VELOCITY);