"use client";

import { useEffect, useRef } from "react";

const vertexShaderSource = `
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_pixelRatio;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  mat2 rotate = mat2(0.82, -0.58, 0.58, 0.82);

  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p = rotate * p * 2.05 + 11.7;
    amplitude *= 0.52;
  }

  return value;
}

vec3 palette(float t) {
  vec3 deepPurple = vec3(0.32, 0.10, 0.72);
  vec3 wardenCyan = vec3(0.02, 0.82, 0.95);
  vec3 hotCore = vec3(1.0, 0.42, 0.14);
  return mix(mix(deepPurple, wardenCyan, smoothstep(0.18, 0.78, t)), hotCore, smoothstep(0.72, 1.0, t));
}

float starField(vec2 uv, float layer) {
  vec2 grid = floor(uv * layer);
  vec2 cell = fract(uv * layer) - 0.5;
  float seed = hash(grid);
  float star = smoothstep(0.045, 0.0, length(cell - vec2(seed - 0.5, fract(seed * 7.23) - 0.5)));
  return star * step(0.975, seed);
}

void main() {
  vec2 frag = gl_FragCoord.xy / u_pixelRatio;
  vec2 uv = (frag - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
  uv.x *= u_resolution.x / u_resolution.y;

  float time = u_time * 0.28;
  float radius = length(uv);
  float angle = atan(uv.y, uv.x);

  float gravity = 1.0 / max(radius * radius * 7.0, 0.08);
  float lens = gravity * 0.06;
  vec2 warped = uv + normalize(uv + 0.0001) * lens;
  float wr = length(warped);
  float wa = atan(warped.y, warped.x);

  float diskPlane = abs(warped.y + 0.09 * sin(warped.x * 5.0 + time * 2.0));
  float diskMask = smoothstep(0.18, 0.02, diskPlane) * smoothstep(0.92, 0.18, wr) * smoothstep(0.13, 0.22, wr);
  float swirl = fbm(vec2(wa * 3.2 + time * 2.5 - gravity * 0.6, wr * 8.0 - time * 1.4));
  float disk = diskMask * (0.48 + 1.25 * swirl);

  float ring = smoothstep(0.42, 0.21, abs(wr - 0.38));
  ring *= smoothstep(0.08, 0.2, wr) * smoothstep(0.95, 0.45, wr);

  float eventHorizon = smoothstep(0.18, 0.12, radius);
  float photonRing = smoothstep(0.024, 0.0, abs(radius - 0.205));

  float sparks = 0.0;
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    float lane = fi * 0.897 + time * (0.55 + fi * 0.07);
    float laneAngle = angle + gravity * 0.35 + lane;
    float laneWave = sin(laneAngle * 5.0 + radius * 18.0 - time * 4.0);
    float streak = smoothstep(0.995, 1.0, laneWave);
    float falloff = smoothstep(1.05, 0.18, radius) * smoothstep(0.08, 0.22, radius);
    float broken = step(0.54, noise(vec2(laneAngle * 2.0, radius * 18.0 - time * 6.0 + fi)));
    sparks += streak * falloff * broken;
  }

  vec2 starUv = uv;
  float pull = smoothstep(1.1, 0.1, radius) * 0.14;
  starUv += normalize(uv + 0.0001) * pull * sin(time + radius * 7.0);
  float stars = starField(starUv + time * 0.015, 86.0) + starField(starUv * 1.3 - time * 0.01, 142.0) * 0.65;

  vec3 background = vec3(0.005, 0.008, 0.02);
  background += vec3(0.05, 0.02, 0.12) * smoothstep(1.0, 0.05, radius);
  background += vec3(0.0, 0.16, 0.2) * smoothstep(0.95, 0.12, length(uv - vec2(0.45, 0.12))) * 0.38;

  vec3 color = background;
  color += vec3(stars) * vec3(0.75, 0.9, 1.0);
  color += palette(swirl) * disk * 0.85;
  color += vec3(0.08, 0.9, 1.0) * ring * 0.18;
  color += vec3(0.75, 0.38, 1.0) * photonRing * 1.25;
  color += palette(fract(swirl + time)) * sparks * 0.65;

  color = mix(color, vec3(0.0), eventHorizon);
  color *= 1.0 - smoothstep(0.62, 1.25, radius) * 0.45;

  gl_FragColor = vec4(color, 1.0);
}
`;

function createShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);

  if (!shader) {
    throw new Error("Unable to create WebGL shader.");
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || "Unknown shader compile error.";
    gl.deleteShader(shader);
    throw new Error(message);
  }

  return shader;
}

function createProgram(gl: WebGLRenderingContext) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  const program = gl.createProgram();

  if (!program) {
    throw new Error("Unable to create WebGL program.");
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program) || "Unknown WebGL link error.";
    gl.deleteProgram(program);
    throw new Error(message);
  }

  return program;
}

export function BlackHoleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
      powerPreference: "high-performance",
      premultipliedAlpha: false,
    });

    if (!gl) {
      return;
    }

    let animationFrame = 0;
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const program = createProgram(gl);
    const positionLocation = gl.getAttribLocation(program, "a_position");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const pixelRatioLocation = gl.getUniformLocation(program, "u_pixelRatio");
    const positionBuffer = gl.createBuffer();
    const start = performance.now();

    if (!positionBuffer) {
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.floor(canvas.clientWidth * pixelRatio));
      const height = Math.max(1, Math.floor(canvas.clientHeight * pixelRatio));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      gl.viewport(0, 0, width, height);
    };

    const render = (now: number) => {
      resize();

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      const time = reducedMotion ? 0 : (now - start) / 1000;

      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(resolutionLocation, canvas.clientWidth, canvas.clientHeight);
      gl.uniform1f(timeLocation, time);
      gl.uniform1f(pixelRatioLocation, pixelRatio);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(render);
      } else {
        window.cancelAnimationFrame(animationFrame);
        render(start);
      }
    };

    window.addEventListener("resize", resize);
    motionQuery.addEventListener("change", handleMotionChange);
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      motionQuery.removeEventListener("change", handleMotionChange);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-80"
    />
  );
}
