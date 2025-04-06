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
      antialias: true,
      precision: 'highp'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x0062ff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    const backLight = new THREE.PointLight(0x0050d8, 0.8);
    backLight.position.set(-5, 3, -5);
    scene.add(backLight);
    
    // Create geometry for floating particles with varying sizes
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    const sizeArray = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create a more interesting distribution of particles
      const radius = 8 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      // Spherical to cartesian coordinates for more natural distribution
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i+1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i+2] = radius * Math.cos(phi);
      
      // Vary particle size
      sizeArray[i/3] = Math.random() * 0.02 + 0.005;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizeArray, 1));
    
    // Create shader material for better-looking particles
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0x0062ff) },
        pointTexture: { value: new THREE.TextureLoader().load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTItMzBUMDE6Mzc6MjArMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTMwVDAxOjM4OjI4KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTEyLTMwVDAxOjM4OjI4KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZjBkN2U1LWMwMjQtNDQ0MC04MGJlLWJlMzQ5ZTVkNjI5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphNGYwZDdlNS1jMDI0LTQ0NDAtODBiZS1iZTM0OWU1ZDYyOTciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNGYwZDdlNS1jMDI0LTQ0NDAtODBiZS1iZTM0OWU1ZDYyOTciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE0ZjBkN2U1LWMwMjQtNDQ0MC04MGJlLWJlMzQ5ZTVkNjI5NyIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0zMFQwMTozNzoyMCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Mcu/jQAAAGNJREFUWIXt1jEKwCAMBFCR4v0P6Rwc3BS3gIVCx+aJdPgDhK8nREQtDQwA2LsDUYs1VL7bAfLzqVkDyGZCK+5/5O7XJRzTtt8H0HvMeiDVWLlp8UdQr1ztAQxs85/APvGNDh1DOhOxyBFCAAAAAElFTkSuQmCC') }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = vec3(0.0, 0.385, 1.0); // Base blue color
          // Add some variation to color based on position
          vColor.r += position.x * 0.01;
          vColor.g += position.y * 0.01;
          vColor.b += position.z * 0.01;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform sampler2D pointTexture;
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Create floating geometries with more varied and interesting materials
    const geometries = [
      new THREE.IcosahedronGeometry(0.6, 1),
      new THREE.OctahedronGeometry(0.5, 1),
      new THREE.TetrahedronGeometry(0.4, 1),
      new THREE.TorusKnotGeometry(0.3, 0.1, 64, 8, 2, 3),
      new THREE.DodecahedronGeometry(0.4, 0)
    ];
    
    const meshes: THREE.Mesh[] = [];
    const materials = [
      // Glowing blue wireframe
      new THREE.MeshPhongMaterial({
        color: 0x0050d8,
        emissive: 0x0050d8,
        emissiveIntensity: 0.3,
        wireframe: true,
        transparent: true,
        opacity: 0.7
      }),
      // Shimmering blue glass effect
      new THREE.MeshPhysicalMaterial({
        color: 0x0062ff,
        metalness: 0.2,
        roughness: 0.1,
        transmission: 0.9,
        transparent: true,
        opacity: 0.7
      }),
      // Light blue hologram
      new THREE.MeshStandardMaterial({
        color: 0x0077ff,
        emissive: 0x0077ff,
        emissiveIntensity: 0.2,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      })
    ];
    
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)].clone();
      
      // Add some variation to each instance
      if (material instanceof THREE.MeshPhysicalMaterial) {
        material.metalness = Math.random() * 0.3 + 0.1;
        material.roughness = Math.random() * 0.2;
      } else if (material instanceof THREE.MeshStandardMaterial) {
        material.emissiveIntensity = Math.random() * 0.3 + 0.1;
      }
      
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
      
      // Add scale variation
      const scale = Math.random() * 0.8 + 0.5;
      mesh.scale.set(scale, scale, scale);
      
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
        },
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseAmount: Math.random() * 0.15 + 0.05,
        initialScale: scale
      };
      
      scene.add(mesh);
      meshes.push(mesh);
    }
    
    // Add a larger central wireframe structure
    const centralGeometry = new THREE.IcosahedronGeometry(2, 1);
    const centralWireframe = new THREE.EdgesGeometry(centralGeometry);
    const centralMaterial = new THREE.LineBasicMaterial({
      color: 0x0062ff,
      transparent: true,
      opacity: 0.2,
      linewidth: 1
    });
    
    const centralShape = new THREE.LineSegments(centralWireframe, centralMaterial);
    centralShape.position.set(-2, 0, -4);
    scene.add(centralShape);
    
    // Create a digital grid effect on the floor
    const gridSize = 15;
    const gridDivisions = 20;
    const gridGeometry = new THREE.PlaneGeometry(gridSize, gridSize, gridDivisions, gridDivisions);
    gridGeometry.rotateX(-Math.PI / 2);
    
    const gridMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0xf5f8fc) },
        color2: { value: new THREE.Color(0x0062ff) }
      },
      transparent: true,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        
        float grid(vec2 uv, float res) {
          vec2 grid = fract(uv * res);
          return step(0.98, grid.x) + step(0.98, grid.y);
        }
        
        void main() {
          // Calculate distance from center
          float dist = length(vUv - 0.5) * 2.0;
          
          // Grid effect
          float gridValue = grid(vUv, 20.0) * 0.5;
          
          // Pulse effect
          float pulse = sin(time + dist * 5.0) * 0.5 + 0.5;
          
          // Combine effects
          vec3 color = mix(color1, color2, gridValue * pulse * (1.0 - dist * 0.5));
          float alpha = gridValue * (1.0 - dist * dist * 0.8) * 0.7;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      side: THREE.DoubleSide
    });
    
    const grid = new THREE.Mesh(gridGeometry, gridMaterial);
    grid.position.y = -3;
    grid.position.z = -2;
    scene.add(grid);
    
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
    const clock = new THREE.Clock();
    
    const animate = () => {
      requestId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      
      // Update grid shader time uniform
      if (grid.material instanceof THREE.ShaderMaterial) {
        grid.material.uniforms.time.value = time;
      }
      
      // Smooth camera movement based on mouse position
      targetX = mouseX * 0.3;
      targetY = mouseY * 0.3;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      // Rotate and animate meshes
      meshes.forEach(mesh => {
        const userData = mesh.userData as any;
        mesh.rotation.x += userData.rotationSpeed.x;
        mesh.rotation.y += userData.rotationSpeed.y;
        mesh.rotation.z += userData.rotationSpeed.z;
        
        mesh.position.x += userData.movementSpeed.x;
        mesh.position.y += userData.movementSpeed.y;
        mesh.position.z += userData.movementSpeed.z;
        
        // Pulsing scale effect
        const pulseFactor = Math.sin(time * userData.pulseSpeed) * userData.pulseAmount + 1;
        mesh.scale.set(
          userData.initialScale * pulseFactor,
          userData.initialScale * pulseFactor,
          userData.initialScale * pulseFactor
        );
        
        // Boundary check to keep meshes in view
        if (mesh.position.x > 6 || mesh.position.x < -6) userData.movementSpeed.x *= -1;
        if (mesh.position.y > 6 || mesh.position.y < -6) userData.movementSpeed.y *= -1;
        if (mesh.position.z > 3 || mesh.position.z < -8) userData.movementSpeed.z *= -1;
      });
      
      // Rotate central shape
      centralShape.rotation.x = time * 0.1;
      centralShape.rotation.y = time * 0.15;
      
      // Slowly rotate particles
      particlesMesh.rotation.x = time * 0.03;
      particlesMesh.rotation.y = time * 0.04;
      
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
