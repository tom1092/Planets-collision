function createPointsPlanet(radius, numPoints, initPosition, material) {
    var geometry = new THREE.BufferGeometry();

    var positions = new Float32Array(numPoints);

    for (var i = 0; i < numPoints; i+=3) {
        var rho = Math.random() * radius;
        var theta = Math.random() * 360;
        var phi = 90 - (Math.random() * 180);

        positions[i] = initPosition.x + (rho * Math.cos(theta) * Math.cos(phi));
        positions[i+1] = initPosition.y + (rho * Math.sin(theta) * Math.cos(phi));
        positions[i+2] = initPosition.z + (rho * Math.sin(phi));
    }

    geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

    var planet = new THREE.Points(geometry, material);

    return planet;
}

function create_shader_material(texture_path, vShader, fShader){

    var texture = new THREE.TextureLoader().load(texture_path);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    var shaderMaterial = new THREE.ShaderMaterial( {
        uniforms: {
            mytexture: {value: texture}
        },
        vertexShader: document.getElementById(vShader).textContent,
        fragmentShader: document.getElementById(fShader).textContent
    });

    return shaderMaterial;
}

function vectorSum(v1, v2) {
    return new THREE.Vector3().addVectors(v1, v2);
}

function vectorSubtraction(v1, v2) {
    return new THREE.Vector3().subVectors(v1, v2);
}

function vectorScalarProduct(v, t){
    return new THREE.Vector3().copy(v).multiplyScalar(t);
}

function vectorNorm(v){
    return Math.sqrt(new THREE.Vector3().copy(v).dot(v));
}

function movePlanet(planet, dx, dy, dz){
    for (var i = 0; i < planet.obj.geometry.attributes.position.array.length; i += 3) {
        planet.obj.geometry.attributes.position.array[i] += dx;
        planet.obj.geometry.attributes.position.array[i+1] += dy;
        planet.obj.geometry.attributes.position.array[i+2] += dz;
    }
    planet.obj.geometry.attributes.position.needsUpdate = true;

    planet.obj.geometry.computeBoundingSphere();

    return planet.obj.geometry.boundingSphere.center;
}

function movePlanet(planet, dx, dy, dz, initPosition){
    for (var i = 0; i < planet.obj.geometry.attributes.position.array.length; i += 3) {
        planet.obj.geometry.attributes.position.array[i] = dx + initPosition[i];
        planet.obj.geometry.attributes.position.array[i+1] = dy + initPosition[i+1];
        planet.obj.geometry.attributes.position.array[i+2] = dz + initPosition[i+2];
    }
    planet.obj.geometry.attributes.position.needsUpdate = true;

    planet.obj.geometry.computeBoundingSphere();

    return planet.obj.geometry.boundingSphere.center;
}

function newton_movement(planet1, planet2, initPositionPlanet1){

    var delta_t = 0.001;

    var r = vectorSubtraction(planet2.center, planet1.center);

    var a = vectorScalarProduct(r, 1/vectorNorm(r))
    a = vectorScalarProduct(a, scaled_G*planet2.mass/(vectorNorm(r)*vectorNorm(r)));

    var delta_v = vectorSum(vectorScalarProduct(a, delta_t), planet1.velocity);

    var delta_s = vectorSum(vectorScalarProduct(delta_v, delta_t), vectorScalarProduct(a, 0.5*delta_t*delta_t));

    planet1.center = movePlanet(planet1, delta_s.x, delta_s.y, delta_s.z, initPositionPlanet1);
    planet1.velocity = delta_v;
    planet1.acceleration = a;
}

function anelastic_impact(planet1, planet2){

    v_cm_f = vectorScalarProduct(vectorSum(vectorScalarProduct(planet1.velocity, planet1.mass), vectorScalarProduct(planet2.velocity, planet2.mass)), 1/(2*planet1.mass+2*planet2.mass));

    E_k_lost = (planet1.mass*planet2.mass)*Math.pow(vectorNorm(new THREE.Vector3().subVectors(planet2.velocity,planet1.velocity)), 2)/(2*(planet1.mass+planet2.mass));

    return [v_cm_f, E_k_lost];
}