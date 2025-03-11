import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function main(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,0.1,1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshPhongMaterial({color: 0xADD8E6 });
    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1,2,4);
    scene.add(light);

    const cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);

    const loader = new GLTFLoader();
        loader.load('./scene.gltf', function(gltf){
           let malenia = gltf.scene;
           scene.add(malenia);
           camera.position.set(0, 1, 2);
           camera.lookAt(1, 0.5, -4);

          //  camera.position.y = 1;
            renderer.setAnimationLoop(animate);
        
            function animate(){
               // cube.rotation.x += 0.01;
             //   cube.rotation.y += 0.01;
                    //TO DO - Smoothen out the rotation
                malenia.rotation.y += 0.004;
                camera.lookAt(1, 0.5, -4);
                renderer.render(scene,camera);
            } 
        }, undefined, function (error){
            console.error(error);
        });
    
}
   
main();