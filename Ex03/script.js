const totalN = prompt("Dgiite valor das dimensoes da matriz");

if(!isNaN(totalN) && totalN > 0){
	let tabela = "<table>";
	let cont=0;

	for(let l=0; l<totalN; l++){
		tabela += "<tr>";

		for(let c=0; c<totalN; c++){
			tabela += "<td>" + l + c + "</td>";
		}
		tabela += "</tr>";
	}
	tabela += "</table>";

	document.body.innerHTML = tabela;
}

array_td = document.getElementsByTagName("td");
let cont=0;

for(let i=0; i<totalN; i++){
	for(let j=0; j<totalN; j++){
		if(i==j){
			array_td[cont].style.backgroundColor="orange";
		}
		cont++;
	}
}