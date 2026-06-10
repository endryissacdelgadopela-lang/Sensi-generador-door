function calcular(){

let valor =
Number(
document.getElementById("sensi").value
);

let resultado =
document.getElementById("resultado");

if(!valor){

resultado.innerHTML =
"Ingresa una sensibilidad";

return;

}

resultado.innerHTML =
`
Sensibilidad recomendada:<br>
General: ${valor}<br>
Punto rojo: ${Math.round(valor*0.9)}<br>
Mira 2x: ${Math.round(valor*0.8)}<br>
Mira 4x: ${Math.round(valor*0.7)}<br>
AWM: ${Math.round(valor*0.5)}
`;

}
