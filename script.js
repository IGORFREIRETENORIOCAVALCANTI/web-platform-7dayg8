var appForm = document.querySelector("#app form");

appForm.onsubmit = dolarprareal;

function dolarprareal(e){
	e.preventDefault();

	var input_taxa = document.getElementById("input_taxa").value;
  var input_dollar = document.getElementById("input_dollar").value;
  var input_real = document.getElementById("input_real").value;
	var result = document.getElementById("result");
  var resultdollar = document.getElementById("resultdollar");
  var resultreal = document.getElementById("resultreal");


	var result_dollar = document.getElementById("resultdollar");

	var valor_dollar = parseFloat(input_dollar);
  var valor_taxa = parseFloat(input_taxa);
  var valor_real = parseFloat(input_real);

	result.innerHTML = valor_dollar;
  resultdollar.innerHTML = valor_dollar;
  resultreal.innerHTML = valor_real;

	var total = calculo(valor_dollar);

	result_dollar.innerHTML = "Reusltado da conversão: " + total;
}

function calculo(valor_dollar){
	var total = valor_dollar;
	var quarters = 0;
  //var resultado = valor_taxa * valor_dollar;
	return [total];
}