# Encriptador

## Desarrollo de la estructura

La estructura HTML de la página principal de este proyecto, está dividida en 2 secciones.

La primera sección incluye el campo que recibe el texto del usuario, a travéz de un cuadro de texto.

Dentro de la sección estará el texto de aviso con la condición que debe cumplir el texto que ingrese el usuario al encriptador. La parte inferior tendrá los botones 'Encriptar' y 'Desencriptar'.

La segunda sección incluirá el cuadro con el resultado de la encriptación, en el cual habrá una imagen y el texto informativo. Esta sección también incluye el resultado del texto encriptado o desencriptado y un botón para copiar el texto en el portapapeles.

Finalmente la estructura termina con él píe de página y la información del desarrollador.

## Propiedades y atributos destacadas

- `readonly` es un atributo booleano que indica que un campo de entrada es de solo lectura. Un campo de entrada de solo lectura no se puede modificar

- `box-sizing` tiene dos valores: `content-box` y `border-box`. El valor por defecto es `content-box`, que calcula el ancho y el alto teniendo en cuenta solo el contenido, sin incluir el border y el padding.

  `border-box` hace que los elementos mantengan su tamaño y se usa para que el modelo de caja no se rompa. En este caso, el `padding` y el `border` se incluyen en el cálculo del tamaño del contenido.

- `text-decoration` permite que el texto sea decorado mediante una de cinco propiedades:

  - `underline:` (subrayado)
  - `overline:` (línea superior)
  - `line-through:` (tachado)
  - `blink:` (parpadeo)
  - `none:` (ninguna)

- `position: absolute` establece de forma precisa la posición en la que se muestra la caja de un elemento. La nueva posición de la caja se indica mediante las propiedades top, right, bottom y left.

  El elemento con `position: absolute` no estará dentro del flujo normal de la página y tomará como referencia la ventana del navegador o el elemento posicionado más cercano.

- `margin` es una abreviación para evitar tener que establecer cada lado por separado con las otras propiedades de margen: margin-top, margin-right, margin-bottom y margin-left.

- `display: flex` es una propiedad de CSS que ayuda a colocar las cajas como si fueran celdas de tablas. Es uno de los nuevos valores HTML5 para propiedad CSS display, que permite maquetar páginas web de una manera más fácil.

- `align-items: flex-start` significa que los elementos se sitúan al principio de la dirección secundaria. Por ejemplo, si la dirección secundaria es vertical, los elementos se situarán arriba.

- `flex-direction` determina la dirección en la que se ordenan los elementos en el espacio. Los posibles valores de la propiedad son:

  - `row:` Los elementos se colocan horizontalmente de izquierda a derecha.
  - `row-reverse:` Los elementos se colocan horizontalmente de derecha a izquierda.
  - `column:` Los elementos se colocan verticalmente de arriba a abajo.
  - `column-reverse:` Los elementos se colocan verticalmente de abajo a arriba.

- `outline` se utiliza para dibujar un borde alrededor de un elemento HTML. A diferencia de los bordes (border), esta propiedad no ocupa espacio dentro del diseño, es decir, no afecta al tamaño de la caja del elemento.

- `gap` es una abreviatura para fila-gap y columna-gap. Especifica el tamaño de las canaletas, que es el espacio entre filas y columnas dentro de la cuadrícula, flexión y diseño de múltiples columnas.

- `box-shadow` permite proyectar una sombra difuminada desde el marco de casi cualquier elemento. Si `border-radius` es especificado en un elemento con la propiedad `box-shadow`, la sombra adopta la misma curva en las esquinas. El valor `inset` indica que la sombra está en el interior del elemento.

## Captura del proyecto

![captura encriptador](img/captura-encriptador.png)
