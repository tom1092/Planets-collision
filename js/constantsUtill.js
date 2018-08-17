var scaled_G = 6.67408*Math.pow(10,-23);

const SUN_PARTICLES = 3 * 100000;
const SUN_INIT_POSITION = new THREE.Vector3(0.0, 0.0, 0.0);
const SUN_INIT_VELOCITY = new THREE.Vector3(0.0, 0.0, 0.0);
const SUN_INIT_ACCELERATION = new THREE.Vector3(0.0, 0.0, 0.0);
const SUN_RADIUS = 10;
const SUN_MASS = 5.989 * Math.pow(10, 30);

const ASTEROID_PARTICLES = 3 * 100000;
const ASTEROID_INIT_POSITION = new THREE.Vector3(228.0, 0.0, 0.0);
const ASTEROID_INIT_VELOCITY = new THREE.Vector3(0.0, 0.0, 0.0);
const ASTEROID_INIT_ACCELERATION = new THREE.Vector3(0.0, 0.0, 0.0);
const ASTEROID_RADIUS = 4;
const ASTEROID_MASS = 5.9 * Math.pow(10, 24);