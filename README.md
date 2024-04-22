<h1>¡Wordle! el divertido juego de adivinar la palabra</h1>
<h3>Hecho por Carlos Bello</h3>
<p>Una versión del reconocido juego, recreado usando React Native Expo</p>
<h1>¿Cómo jugar a Wordle?</h1>
<p>¡Es muy simple!, primero tienes que ingresar una palabra de 5 letras</p>
<p>Cada letra aparecerá por separado y tendrá un color que varía según la posición y la letra:</p>
<ul>
  <li><Image src="https://placehold.it/15/0ca635/ffffff?text="></Image> Si el color es verde, significa que la letra es parte de la palabra y esta en la posición correcta</li>
  <li><Image src="https://placehold.it/15/bf8f26/ffffff?text="></Image> Si el color es naranja, significa que la letra es parte de la palabra, pero esta en la posición incorrecta</li>
  <li><Image src="https://placehold.it/15/666666/ffffff?text="></Image> Si el color es gris, significa que la letra NO es parte de la palabra</li>
</ul>
<p>Cuando la palabra sea la correcta, todas las letras aparecerán en verde.</p>
<h1>Puntuación</h1>
<p>El sistema de puntuación funciona según la cantidad de letras acertadas, la cantidad de intentos, y si se descubrió la palabra o no</p>
<h3>Según las letras</h3>
<ul>
  <li><Image src="https://placehold.it/15/0ca635/ffffff?text="></Image> Cada letra acertada añade 1.000 puntos</li>
  <li><Image src="https://placehold.it/15/bf8f26/ffffff?text="></Image> Cada letra errada añade 500 puntos</li>
  <li><Image src="https://placehold.it/15/666666/ffffff?text="></Image> Cada letra incorrecta no añade ningun puntaje</li>
</ul>
<h3>Según la cantidad de intentos</h3>
<p>El sistema de puntuación reduce la puntuación total en un 20% por cada intento adicional</p>
<h3>Si descubrió la palabra</h3>
<p>Si al final del juego, el ususario descubre la palabra, se añaden 1.000 puntos</p>
<h2>Fórmula de puntuación</h2>
<p>Para las personas que lo requieran, la formula final del puntaje es la siguiente:</p>
<image src="https://latex.codecogs.com/svg.image?%5Ccolor%7BWhite%7D%5B((%7B%5Ccolor%7BGreen%7DAciertos%7D)*1000)&plus;((%7B%5Ccolor%7BOrange%7DErrados%7D)*500)%5D*%5B1-(0.1*(%7B%5Ccolor%7BRed%7DIntentos%7D-1))%5D&plus;1000%5Ctext%7B%5Ctext%7Bpor%20identificar%20la%20palabra%7D"></image>
<h1>Ejemplo</h1>
En este ejemplo, ingresaremos la palabra "Ganar", la aplicación nos muestra lo siguiente:
<ul>
  <li><Image src="https://placehold.it/30/666666/ffffff?text=G"></Image><Image src="https://placehold.it/30/666666/ffffff?text=A"><Image src="https://placehold.it/30/0ca635/ffffff?text=N"></Image><Image src="https://placehold.it/30/666666/ffffff?text=A"><Image src="https://placehold.it/30/666666/ffffff?text=R"></li>
</ul>
<p>Podemos determinar que las letras G, A y R, no están en la palabra, y que la tercera letra es N</p>
<p>Ahora vamos a ingresar la palabra "Marco", la aplicación nos muestra lo siguiente:</p>
<ul>
  <li><Image src="https://placehold.it/30/0ca635/ffffff?text=M"></Image><Image src="https://placehold.it/30/666666/ffffff?text=A"><Image src="https://placehold.it/30/666666/ffffff?text=R"><Image src="https://placehold.it/30/666666/ffffff?text=C"><Image src="https://placehold.it/30/bf8f26/ffffff?text=O"></li>
</ul>
<p>Podemos determinar que la letra C tampoco está en la palabra, que la primera es M y que la palabra contiene la letra O</p>
<p>Ahora vamos a ingresar la palabra "Menos", la aplicación nos muestra lo siguiente:</p>
<ul>
  <li><Image src="https://placehold.it/30/0ca635/ffffff?text=M"><Image src="https://placehold.it/30/0ca635/ffffff?text=E"><Image src="https://placehold.it/30/0ca635/ffffff?text=N"><Image src="https://placehold.it/30/0ca635/ffffff?text=O"><Image src="https://placehold.it/30/0ca635/ffffff?text=S"></li>
</ul>
<p>Cómo todas las letras son verdes, significa que hemos ganado el juego<br>La puntuación final será:</p>
<image src="https://latex.codecogs.com/svg.image?%5Ccolor%7BWhite%7D%5B((%7B%5Ccolor%7BGreen%7D7%7D)*1000)&plus;((%7B%5Ccolor%7BOrange%7D1%7D)*500)%5D*%5B1-(0.1*%7B%5Ccolor%7BRed%7D2%7D))%5D&plus;1000=%5Ctextbf%7B7000%7D"></image>
