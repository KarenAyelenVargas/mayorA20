let valor = document.getElementById("dato");
let btnEnviar = document.getElementById("btnEnviar1");

btnEnviar.addEventListener("click", () => {
  let valor: number = Number(dato.value);
  if (valor > 20) {
    console.log(
      "el número ingresado es mayor a 20, ya que se ingresó el número",
      valor
    );
  } else {
    console.log(
      "el número ingresado es menor o igual a 20, ya que se ingresó el número",
      valor
    );
  }
});
