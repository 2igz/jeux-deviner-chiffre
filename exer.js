

// tableau 

var tab = [1,65,22,43,77,6,26,8,30,33,11,22,13,24,15];
console.table(tab);


// random ajouter  100 valeur dans le tableau

//function ajoutvaleurtab() {
  //   var x = Math.random() * 100;
    //    }


// boucle pour ajouter 100 valeurs random au tableau 

var i;
for (i = 0; i < 100; i++) {
    var x = Math.random() * 100;
         tab.push(x);
       
}
            console.log(tab);

// parcourrir la valeur maximum du tableau

var max =0;
    for ( i = 0; i<tab.length; i++);
    {
        if (tab[i]>max){
              max = tab[i];
        }
          
    }
                console.log(max);

//calculer la somme des valeurs d'un tableau

var somme = tab;
var sum = 0; 
    for(var i=0; i<somme.length; i++){
        sum+=somme[i];
    }
            console.log(sum);

// calculer la moyen des valeurs du tableau

var moyen= sum/tab.length;
                console.log(moyen);

//Si la valeur est <= 10, placer cette valeur dans un tableau tab1
// Si la valeur est > 10, placer cette valeur dans un autre tab2

var tab1 =[];
var tab2 =[];


for (i=0; i<tab.length; i++){
    if (tab[i] < 10) {
        tab1.push(tab[i]);
}
        else
{
             tab2.push(tab[i]);
}
}
      
                    console.table(tab1);
                    console.table(tab2);




//     Trier les tableaux tab1 et tab2


    tab1.sort();
        console.log(tab1);

      tab2.sort();
        console.log(tab2);

// Concaténer les deux tableaux tab1 et tab2 dans un tableau tab3 trié (croissant)

        console.log(tab1.concat(tab2));

        
//• Supprimer toutes les valeurs de tab en utilisant une boucle for
for (var i=0 ; i<tab.length ; i++){

delete tab[i];
}
console.log(tab);

// Supprimer toutes les valeurs de tab1 en utilisant une boucle while
var i = 0;

while (i<tab1.length){
    delete tab1[i];
    
}
console.log(tab1);

//• Supprimer toutes les valeurs de tab2 en utilisant une boucle do…while

