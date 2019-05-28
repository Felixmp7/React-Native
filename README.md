# React-Native
Curso de App Nativas con React-Native


## Componentes Básicos

- View -> Reemplaza div, section, article, etc.
- Text -> Reemplaza p, span, etc.
- Image -> Reemplaza las imágenes.

Existe una gran cantidad de componentes ya hechos que nos provee React-Native.
Revisa la documentación.

## Estilos en Native

Para proyectos que no requieran de estilos totalmente personalizados podemos utilizar algunos de estos paquetes para potenciar la velocidad de nuestro desarrollo cuanto estilos:

  - Native Base en lo personal mi favorita ya que trae una gran variedad de componentes que pueden ver aquí.

  - React Native Material UI, basada en el estándar Material de Google, pueden ver los componentes que trae aquí.

  - React Native Easy Grid Este es un paquete desarrollado por los autores de Native Base, y sirve para hacer layouts bastante complejos de una manera bastante intuitiva.

Aunque es bastante recomendado que practiquemos antes desarollando nuestros estilos de una forma más vanilla, sin el uso de paquetes de terceros.

    - SafeAreaView - renderiza el contenido en un area segura para que el contenido se vea bien en todos los dispositivos principalmente los que tienen un notch

    - Estilos para imagenes dentro de RN, se llama resizeMode que sería similar a background-size de css.

    **_resizeMode_** por Default esta en cover, otras opciones son contain, stretch, repeat, center.

    - El padding en RN funciona un poco diferente ya que se le puede dar un padding general (top, right, bottom, left), pero si se quiere hacer solamente para right & left se tiene que hacer a mano. Para estos casos se agregan 2 opciones para utilizar:

    paddingVertical: esto sería lo equivalente a utilizar (paddingTop y paddingBottom)

    paddingHorizontal: esto sería lo equivalente a utilizar (paddingRight y paddingLeft)

## Listas en React Native.

React N tiene dos tipos de Listas para usar.

- FlatList
- SectionList

**FlatList**: Puede ser utilizada para listas sencillas

Las propiedades que tienen son:

  - data => Recibe un array de obj o un json. Este vendría a ser el listado
  - renderItem => Es una prop que recibe un componente a renderizar, hace algo similar a un “.map()” sobre la lista pasada a Data, por lo tanto recibimos al listado como propiedad, al cual podemos hacerle un “destructuring” pasandole mediante llaves al elemento.
