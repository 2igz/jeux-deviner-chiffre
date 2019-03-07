// ajouter dix valeur dans un tableau vide avec la boucle for


var tableau = [];
    
    var i = 0;  
        for( i=0; i< 10; i++){
                var x = Math.random() * 10;
                    tableau.push(x);

    }
                         console.table(tableau);


                         // ajouter dix valeur dans un tableau avec une boucle while
var tableau2 =[];
    var i=0;
         while(i<10){
                var x = Math.random()* 10;
                    tableau2.push(x);
                         i++;

         }

                             console.table(tableau2);



//ajouter dix valeur dans un tableau avec la boucle do while


var y = Math.random()* 10;
var i = 0;
        do {tableau2.push(y);i++;}
            while(i<10);

                console.table(tableau2);


                // rajouter trois aux valeurs de la moitié d'un tableau


                var tableau3=[5,8,7,3,2,43,222,9];
                
                console.table(tableau3);

                    for(var i =(tableau3.length/2); i<tableau3.length; i++){
                        tableau3[i]+= 3;
                        
                    }

                            console.table(tableau3);




                            //JEUX 

    
    
      var floor = Math.floor(Math.random() * 100);
      
        do {
            console.log(floor);

            var boite2 = prompt("entrer un chiffre");
            if (boite2 > floor){
                alert("Vous etes au dessus");
            }

            if (boite2 < floor){
                alert("Vous etes en dessous");
            }
            
            if (boite2 == floor){
                alert("gagné");
            }
        }while(boite2!=floor);

       

          

    
                          