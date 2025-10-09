# Ejercicios de React - useEffectUpdate


## Ejercicio 1
Contador con título dinámico: Crea un contador con un botón que incremente el valor. Usa useEffect para actualizar el título de la pestaña (document.title) cada vez que el contador cambie.

Primero se utilizó el useState para inicializar el contador a 0 y que cada que se usa la función de setCount, este contador tome el nuevo valor que se le haya asignado. En este caso se hace un botón que una vez que se aprete (onClick) se incremente el valor del contador por uno. El useEffect lo que hace en este caso es mostrar los nuevos valores de el contador en el título del documento. 

### Notas


## Ejercicio 2
Input que guarda en localStorage Crea un input controlado. Usa useEffect para guardar el valor en localStorage cada vez que el usuario escriba. Al cargar el componente, inicializa el valor desde localStorage.

## Ejercicio 3
API call dependiente de estado Crea un select con categorías (ejemplo: 'users', 'posts'). Usa useEffect para hacer un fetch a https://jsonplaceholder.typicode.com/[categoria] cada vez que la categoría cambie. Muestra los primeros 5 resultados.

## Ejercicio 4
Temporizador con cleanup Crea un componente que muestre la hora actual actualizada cada segundo. Usa useEffect con setInterval y retorna una función de cleanup para limpiar el intervalo cuando el componente se desmonte.

## Ejercicio 5
Detectar tamaño de la ventana Crea un componente que muestre el ancho de la ventana. Usa useEffect para añadir un event listener al evento resize. Actualiza el estado con el nuevo ancho y limpia el listener al desmontar.