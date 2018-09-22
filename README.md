# Planets-collision

## Project goals

* Simulate the collision among two particles systems.
* Modeling the motion of an astronomical object.
* Use shaders programming (other than ThreeJs and WebGL libraries) to render our scene.

### Spheres modeling

Each planet was treated like a full sphere made by points. The approach followed consists in a simple application of a coordinate system conversion: from spherical to cartesian.

![Alt Text](https://github.com/tom1092/Planets-collision/blob/master/readmeImages/img1764.png)


with <img src="https://latex.codecogs.com/svg.latex?\Large&space;\theta\in[-\pi,\pi],\phi\in[-\pi/2,\pi/2],r\in[0,R]" />

An example of final result with 300K particles is shown below

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/Sun.png">
</p>

##### Generate uniformly random distribution inside a sphere

Uniform sampling over a generic hypercube ![f3] gives, through a standard spherical-cartesian transformation, a non uniform n-shpere where points are gathered in the center.

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/circleNonUniform.png">
</p>

In order to avoid this issue we can sampling in a non uniform manner over the ![f3] set, just make a sqrt operation. Next gif shows a one dimensional empirical proof of that fact.

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/sampling.gif">
</p>

Using this procedure in a 2d cube and mapping each point generated into a circle we can get a visual confirmation of the improvement carried out.

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/circleUniform.png">
</p>

Similar consideration are still valid for the 3d case.

### Collisions

When two particles point touch and interact each other for an insignificant time interval respect to the system observation time, we take about collision among two points. Without any external forces during the collision, the entire momentum of the system is conserved.
There are two types of collisions:
* Elastic collision (kinetic energy and momentum conservation)
* Inelastic collision (momentum conservation)
In a perfectly inelastic collision (colliding particles stick together), under reasonable conditions, the amount of kinetic system energy lost is given by  ![f2]

We modeled the collision beetween an asteroid and a star like an inelastic collision. The collision was not perfectly inelastic because a part of the asteroid was lost while the impact even if, for simplicity reasons, we use the previous formula in our project.

#### Particles impact directions

Let ![f4], ![f5], ![f6] three points representing the center of the sun, the asteroid center and the hit point of the collision.
Consider a point ![f7] involved in the motion after the impact (only the points sufficiently closed to the hit point were involved in this motion); a pseudo algorithm of our procedure is the following

1. Compute an impact direction ![f8]
2. Let sun direction ![f9] and asteroid direction ![f10], compute a random direction ![f11] where ![f13] is a random factor
3. Compute the final vector direction as ![f12]

Next figure will clarify the previous method.

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/CollisionDirection_mod.gif">
</p>

This operation was repeated for every points then each point was moved onto its computed direction with a uniform linear motion. The speed of this motion depend by the kinetic energy lost, the more this is bigger the more the velocity module is higher.

[f1]: http://chart.apis.google.com/chart?cht=tx&chl=\theta\in[-\pi,\pi],\phi\in[-\pi/2,\pi/2],r\in[0,R]
[f3]: http://chart.apis.google.com/chart?cht=tx&chl=[0,1]^n 
[f2]: http://chart.apis.google.com/chart?cht=tx&chl=-\Delta{E_k}=\frac{1}{2}\frac{m1\cdot{m2}}{m1+m2}(v_1-v_2)^2 

[f4]: http://chart.apis.google.com/chart?cht=tx&chl=\widetilde{s}
[f5]: http://chart.apis.google.com/chart?cht=tx&chl=\widetilde{c}
[f6]: http://chart.apis.google.com/chart?cht=tx&chl=\widetilde{h}
[f7]: http://chart.apis.google.com/chart?cht=tx&chl=\widetilde{p}
[f8]: http://chart.apis.google.com/chart?cht=tx&chl=\vec{v}=\widetilde{p}-\widetilde{h}
[f9]: http://chart.apis.google.com/chart?cht=tx&chl=\vec{x}=\widetilde{s}-\widetilde{p}
[f10]: http://chart.apis.google.com/chart?cht=tx&chl=\vec{y}=\widetilde{c}-\widetilde{p}
[f11]: http://chart.apis.google.com/chart?cht=tx&chl=\vec{u}=\lambda(\vec{x}\wedge\vec{y})
[f12]: http://chart.apis.google.com/chart?cht=tx&chl=\vec{w}=\vec{v}\verb|+|\vec{u}
[f13]: http://chart.apis.google.com/chart?cht=tx&chl=\lambda