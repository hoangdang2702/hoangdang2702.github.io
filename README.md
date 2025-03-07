tạo post mới:
1. tạo file mới shader_n.html trong folder posts
2. template:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Second Shader</title>
    <style>
        body { font-family: sans-serif; background: #121212; color: white; padding: 20px; }
        h1 { color: #ffcc00; }
        pre { background: #222; padding: 10px; border-radius: 5px; overflow-x: auto; }
        canvas { width: 100%; height: 400px; display: block; background: black; }
    </style>
</head>
<body>
    <h1>Second Shader Experiment</h1>
    <p>This is my second shader post!</p>

    <h2>Shader Code</h2>
    <pre>
        <code>
        precision mediump float;
        void main() {
            gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);
        }
        </code>
    </pre>

    <h2>Live Shader</h2>
    <canvas id="shaderCanvas"></canvas>

    <script>
        const canvas = document.getElementById("shaderCanvas");
        const gl = canvas.getContext("webgl");
        if (!gl) alert("WebGL not supported");

        const vertexShaderCode = `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `;
        const fragmentShaderCode = `
            precision mediump float;
            void main() {
                gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);
            }
        `;

        function createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        }

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderCode);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderCode);
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1, 1, -1, -1, 1,
            -1, 1, 1, -1, 1, 1
        ]), gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    </script>
</body>
</html>



3. up thumbnail vào folder thumbnails
4. thêm đoạn mới vào index.html
<a href="posts/second-shader.html" class="thumbnail">
    <img src="thumbnails/second-shader.jpg" alt="Second Shader Thumbnail">
</a>

đoạn này ở trong <div class="grid">
