# Planets-collision

## Project goals

* Simulate the collision among two particles systems.
* Modeling the motion of an astronomical object.
* Use shaders programming (other than ThreeJs and WebGL libraries) to render our scene.

### Spheres modeling

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/1.png">
</p>

![Alt Text](https://github.com/tom1092/Planets-collision/blob/master/readmeImages/img1764.png)

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/Sun.png">
</p>

##### Generate uniformly random distribution inside a sphere

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/2.png">
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/3.png">
</p>

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/circleNonUniform.png">
</p>

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/4.png">
</p>

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/sampling.gif">
</p>

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/5.png">
</p>

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/circleUniform.png">
</p>

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/6.png">
</p>

### Collisions

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/7.png">
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/8.png">
</p>


<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/CollisionDirection_mod.gif">
</p>

<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/9.png">
</p>


### Modelling the motion
<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/motion1.png">
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/motion2.png">
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/motion3.png">
</p>


### Modelling lights
<p align="center"> 
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/10.png">
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/9.png">
  <img src="https://github.com/tom1092/Planets-collision/blob/master/readmeImages/11.png">
</p>
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
