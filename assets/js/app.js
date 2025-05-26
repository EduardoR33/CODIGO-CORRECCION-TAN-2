const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //name no es valido con las comillas sencillas, necesita el .
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //Se agregoAsync en la función displayUser para que el await funcionara 
  $n.textContent = 'cargando...';
  
try { //Se implemento un bloque try para ejecutar 
    const response = await fetch('${usersEndpoint}/${username}');
    const data = await response.json(); // Corregido: faltaba extraer el JSON
    console.log(data);
    $n.textContent = data.name || 'Nombre no disponible';//Se cambio la estructura con un or ||
    $b.textContent = data.blog || 'Blog no disponible';//Se cambio la estructura con un or ||
    $l.textContent = data.location || 'Ubicación no disponible'; //Se cambio la estructura con un or ||
  } catch (err) {//En caso de no ejecutarse el bloque try, el bloque catch se ejecutara
    handleError(err);
  }
}

function handleError(err) {
  console.log('¡OH NO!');
  console.log(err);
  $n.textContent = 'Algo salió mal: ${err.message}';
}

displayUser('stolinski');
