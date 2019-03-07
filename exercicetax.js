

// Je crée une fonction qui calcul un prix TTC en fonction du taux de tva et d'in prix HT
function prixTTC(prixHT, tva){
    var prix = prixHT * tva;
    return prix;
}
var x = prixTTC(122, 5.5);
console.log(x);
console.log(prixTTC(122, 5.5));

function tva20(prixHT){
    return (prixHT * 1.2);
    
}

console.log (prixTTC(100, 1.2));
var monprix = prixTTC(100, 1.055);


//    5! => 5 * 4 * 3 * 2 * 1;

function factoriel(monchiffre){
    var monfactoriel = 1;
    for (var i = 1 ; i <=monchiffre; i++){
        monfactoriel = i * monfactoriel;
    }
    console.log(monfactoriel);
}


function init(tab, valeurMax){
    
    for (var i= 0; i <= valeurMax; i++)
        tab.push(i);
    return tab;
}

var table1 = [];
var table2 = init(table1, 100);
console.table(table2);

console.table(init(table2, 50));

// 

//function toto(){
 //   document.getElementById("monid").innerHTML = document.getElementById("monid").value

//}




//function copytext(param){
  //  document.getElementById("world").innerHTML = param; 
//}


function toto(){
    

     document.getElementById("ttc").innerHTML = document.getElementById("ttc").value
}


function copytext(para){
    
    document.getElementById("world").innerHTML = para; 

}



