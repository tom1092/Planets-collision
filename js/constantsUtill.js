//COSTANTI


var scaled_G = 6.67408*Math.pow(10,-11);

//SUN
const SUN_PARTICLES = 3 * 1000;
const SUN_INIT_POSITION = new THREE.Vector3(0.0, 0.0, 0.0);
const SUN_INIT_VELOCITY = new THREE.Vector3(0.0, 0.0, 0.0);
const SUN_INIT_ACCELERATION = new THREE.Vector3(0.0, 0.0, 0.0);
const SUN_RADIUS = 10;
const SUN_MASS = 5.989 * Math.pow(10, 30);

//EARTH
var EARTH_VELOCITY = new THREE.Vector3(-1.0, 0.0, 0.0);
var EARTH_INIT_POSITION = new THREE.Vector3(0.0, 0.0, -150.0);
EARTH_VELOCITY = vectorScalarProduct(EARTH_VELOCITY, Math.sqrt(scaled_G*SUN_MASS/(vectorNorm(EARTH_INIT_POSITION)*1000)));


const ASTEROID_PARTICLES = 3 * 1000;
const ASTEROID_INIT_POSITION = new THREE.Vector3(0.0, -150.0, 0.0);
//const ASTEROID_INIT_VELOCITY = new THREE.Vector3(1000.0, 0.0, 0.0);
const ASTEROID_INIT_ACCELERATION = new THREE.Vector3(0.0, 0.0, 0.0);
const ASTEROID_RADIUS = 4;
const ASTEROID_MASS = 5.9 * Math.pow(10, 24);
const ASTEROID_INIT_VELOCITY = vectorScalarProduct(new THREE.Vector3(1, 0, 0), 0.2*Math.sqrt(scaled_G*SUN_MASS/(vectorNorm(ASTEROID_INIT_POSITION)*1000)));
console.log(ASTEROID_INIT_VELOCITY);