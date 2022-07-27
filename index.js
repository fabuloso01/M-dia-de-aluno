
 function media(){
  var Nota1 = parseFloat(document.getElementById("Nota1").value);
  var Nota2 = parseFloat(document.getElementById("Nota2").value);

  var media = (Nota1 + Nota2) / 2;



  if(media ==10){
    alert('Aprovado com distinção! Média = ' + media)
  }

  else if(media >= 6){
    alert('Aprovado! Média = '+ media);
  }

  else if (media >= 5) {
    alert("Recuperação! Média = " + media)

  }

  else{
    alert("Reprovado! Média = " + media)
  }
  
 }


