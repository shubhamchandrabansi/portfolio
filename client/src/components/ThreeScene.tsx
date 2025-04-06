import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Setup
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x64FFDA, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);
    
    // Create geometry for floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0x64FFDA,
      transparent: true,
      opacity: 0.8
    });
    
    // Create points
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Create a few floating geometries
    const geometries = [
      new THREE.IcosahedronGeometry(0.5, 0),
      new THREE.OctahedronGeometry(0.4, 0),
      new THREE.TetrahedronGeometry(0.3, 0)
    ];
    
    const meshes: THREE.Mesh[] = [];
    
    for (let i = 0; i < 5; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: 0x9D4EDD,
        emissive: 0x9D4EDD,
        emissiveIntensity: 0.4,
        transparent: true,
        opacity: 0.7,
        wireframe: true
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        movementSpeed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005
        }
      };
      
      scene.add(mesh);
      meshes.push(mesh);
    }
    
    // Add wireframe cube
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const wireframe = new THREE.EdgesGeometry(cubeGeometry);
    const cubeMaterial = new THREE.LineBasicMaterial({
      color: 0x64FFDA,
      transparent: true,
      opacity: 0.3
    });
    
    const cube = new THREE.LineSegments(wireframe, cubeMaterial);
    cube.position.set(2, -1, -3);
    scene.add(cube);
    
    // Mouse movement parallax effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    let requestId: number;
    
    const animate = () => {
      requestId = requestAnimationFrame(animate);
      
      // Smooth camera movement based on mouse position
      targetX = mouseX * 0.3;
      targetY = mouseY * 0.3;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      // Rotate and move meshes
      meshes.forEach(mesh => {
        const userData = mesh.userData as any;
        mesh.rotation.x += userData.rotationSpeed.x;
        mesh.rotation.y += userData.rotationSpeed.y;
        mesh.rotation.z += userData.rotationSpeed.z;
        
        mesh.position.x += userData.movementSpeed.x;
        mesh.position.y += userData.movementSpeed.y;
        mesh.position.z += userData.movementSpeed.z;
        
        // Boundary check to keep meshes in view
        if (mesh.position.x > 5 || mesh.position.x < -5) userData.movementSpeed.x *= -1;
        if (mesh.position.y > 5 || mesh.position.y < -5) userData.movementSpeed.y *= -1;
        if (mesh.position.z > 3 || mesh.position.z < -7) userData.movementSpeed.z *= -1;
      });
      
      // Rotate the cube
      cube.rotation.x += 0.002;
      cube.rotation.y += 0.003;
      
      // Rotate the particles
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(requestId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Dispose of resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
