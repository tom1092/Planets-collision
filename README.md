# Planets-collision

## Project goals

* Simulate the collision among two particles systems.
* Modeling the motion of an astronomical object.
* Use shaders programming (other than ThreeJs and WebGL libraries) to render our scene.

### Spheres modeling

Each planet was treated like a full sphere made by points. The approach followed consists in a simple application of a coordinate system conversion: from spherical to cartesian.

![Alt Text](https://github.com/kinik93/Planets-collision/blob/master/readmeImages/img1764.png)

with ![f1]

An example of final result with 300K particles is shown below

<p align="center"> 
  <img src="https://github.com/kinik93/Planets-collision/blob/master/readmeImages/Sun.png">
</p>

##### Generate uniformly random distribution inside a sphere

Uniform sampling over a generic hypercube ![f3] gives, through a standard spherical-cartesian transformation, a non uniform n-shpere where points are gathered in the center.

<p align="center"> 
  <img src="https://github.com/kinik93/Planets-collision/blob/master/readmeImages/circleNonUniform.png">
</p>

In order to avoid this issue we can sampling in a non uniform manner over the ![f3] set, just make a sqrt operation. Next gif shows a one dimensional empirical proof of that fact.

<p align="center"> 
  <img src="https://github.com/kinik93/Planets-collision/blob/master/readmeImages/sampling.gif">
</p>

Using this procedure in a 2d cube and mapping each point generated into a circle we can get a visual confirmation of the improvement carried out.

<p align="center"> 
  <img src="https://github.com/kinik93/Planets-collision/blob/master/readmeImages/circleUniform.png">
</p>

Similar consideration are still valid for the 3d case and higher dimension.

[f1]: http://chart.apis.google.com/chart?cht=tx&chl=\theta\in[-\pi,\pi],\phi\in[-\pi/2,\pi/2],r\in[0,R]
[f3]: http://chart.apis.google.com/chart?cht=tx&chl=[0,1]^n 
