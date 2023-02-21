import Color from "color";

const validateCSSColor = (color) => {
  try {
    Color(color);
    return color;
  } catch (err) {
    return "pink";
  }
};

export const createPigment = (input) => {
  const color = validateCSSColor(input);
  console.log(color);

  const barn = `
    <svg id="barn" fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 486.809 486.809" xml:space="preserve">
    <g>
	<path d="M486.804,260.418L382.855,70.512L243.404,0L103.953,70.512L0.005,260.418l26.316,14.404l22.143-40.453v252.439h389.881
		V234.37l22.143,40.453L486.804,260.418z M221.948,373.059l-64.545,63.106V309.952L221.948,373.059z M243.404,394.037l64.203,62.772
		H179.201L243.404,394.037z M264.861,373.059l64.545-63.106v126.213L264.861,373.059z M243.404,352.081l-64.203-62.772h128.407
		L243.404,352.081z M408.345,456.809h-48.938v-197.5H127.402v197.5H78.464V179.562l47.335-86.478l117.605-59.466L361.01,93.083
		l47.335,86.478V456.809z"/>
	<path d="M193.404,219.309h100v-100h-100V219.309z M223.404,149.309h40v40h-40V149.309z"/>
    </g>
    </svg>
  `;
  const pig = `
    <svg id="pig" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" style="display: none">
    <g fill="${color}"><path d="M337.1,718.3c8.2,32.7,49,85.7,65.3,98h44.9c0,0-16.3-73.4-16.3-81.6C365.7,730.6,337.1,718.3,337.1,718.3z"/>
    <path d="M724.8,734.6c12.2,32.6,36.7,69.4,49,81.6h36.7c0,0-12.2-85.7-12.2-93.8C757.4,734.6,724.8,734.6,724.8,734.6z"/>
    <path d="M116.7,281.7c8.1,0,16.3-4.1,20.4-8.1c28.6-12.3,40.8-40.8,36.7-69.4c-8.2-24.5-32.6-40.8-57.1-40.8c-32.7,0-61.2,24.5-61.2,61.2c0,4.1,0,16.3,4.1,24.5c-40.8-12.3-32.7-36.7-44.9-32.7c-8.2,4.1-4.1,24.5,0,36.7c12.2,20.4,36.7,32.6,61.2,36.7c12.2,24.5,32.6,65.3,77.5,93.8c4.1,0-4.1-16.3,0-16.3c4.1,0,0-12.2,4.1-16.3c4.1-8.2,32.6-28.6,20.4-24.5C153.5,326.6,129,298,116.7,281.7z M96.3,249c0-8.2-4.1-16.3-4.1-24.5c0-20.4,16.3-24.5,24.5-24.5c16.3,0,20.4,12.3,20.4,16.3c4.1,8.2,0,24.5-16.3,28.6C116.7,245,108.6,245,96.3,249z"/>
    <path d="M965.5,522.4c-73.4,8.2-36.7-77.5-97.9-106.1c0,0,44.9,0,77.5-28.6c77.5-53,24.5-142.8,24.5-142.8s-12.2,53-93.8,69.4c-77.5,16.3-89.8,77.5-89.8,106.1c-24.5-57.1,20.4-122.4,24.5-126.5C777.8,228.6,635,163.3,500.3,163.3c-179.5,0-367.3,81.6-367.3,277.5c0,102,24.5,257.1,85.7,375.4h57.1c4.1-24.5,20.4-114.3,24.5-146.9c93.8,24.5,281.6,24.5,281.6,24.5c16.3,53,44.9,106.1,61.2,130.6c8.2,12.2,12.2,12.2,20.4,12.2c4.1,0,16.3,0,20.4,0c12.2,0,8.2-16.3,8.2-16.3V697.9c146.9-4.1,236.7-40.8,273.4-73.4c12.3-8.2,24.5-40.8,24.5-61.2C990,542.8,981.8,506.1,965.5,522.4z M847.2,534.7c-12.2,0-24.5-12.2-24.5-24.5c0-12.2,12.3-24.5,24.5-24.5c12.2,0,24.5,12.3,24.5,24.5C871.6,522.4,859.4,534.7,847.2,534.7z"/>
    </g>
    </svg>
`;
  return `
  <html lang="en">
  <head>
    <title>barnyard</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/public/favicon.png" type="image/png" />
    </head>
    <body class="audio-trigger">
    <script>
    window.onload = function () {
      var audio = document.getElementById("myAudio");
      console.log(audio);
      window.addEventListener("scroll", function () {
        audio.play();
      });
    };
    </script>
    <script>
    function swapSVG() {
        var pig = document.getElementById('pig');
        var barn = document.getElementById('barn');
  
        if (pig.style.display === 'none') {
          pig.style.display = 'block';
          barn.style.display = 'none';
        } else {
          pig.style.display = 'none';
          barn.style.display = 'block';
        }
      }
    </script>

    <audio id="myAudio" loop>
      <source src="/public/squeal.wav" type="audio/wav" />
      your browser does not support the audio element :(
    </audio>

    <h1 style="color: salmon">click on the barn ↓</h1>

    ${pig}
    <button onclick="swapSVG()">
    ${barn}
    </button>

    </body>
    </html>
    `;
};
