function resultat() {

    let notaExamen = Number(nota.value);

    if (notaExamen >=0 && notaExamen < 5){
        alert("Has suspès l'examen amb un " + notaExamen);

      }else if (notaExamen >= 5 && notaExamen <= 10){
        alert("Felicitats, has aprovat amb un " + notaExamen);

      }else{
        alert("No has introduït bé la nota");
      }

}
