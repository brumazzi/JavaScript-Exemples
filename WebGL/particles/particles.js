var th = THREE;
var rand = Math.random;
var win_rand = function(){return rand()*500-250;}
var particle = [];
var scene = new th.Scene();
var render = new th.WebGLRenderer();
var cam = new th.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var pat_count = 100;
var pat = new th.Geometry();
var pat_mat = new th.PointsMaterial({
	color: 0xFFFFFF,
	size: 2
});

render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);

for (var p=0; p < pat_count; p++){

	var px = win_rand();
	var py = win_rand();
	var pz = win_rand();

	pat.vertices.push(
		new th.Vector3(px,py,pz)
	);
}

var pat_sys = new th.Points(pat, pat_mat);

var light = new th.PointLight(0xff0000, 1, 100);
light.position.set(2,2,2);
scene.add(light);

scene.add(pat_sys);

render.render(scene, cam);

var step = function(){
	render.setSize(window.innerWidth, window.innerHeight);
	requestAnimationFrame(step);

	render.render(scene, cam);
}

step();
