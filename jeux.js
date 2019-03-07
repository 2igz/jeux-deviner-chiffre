

                            //JEUX 

                            var floor = Math.floor(Math.random() * 1000);
                            //var diff=floor-=boite2;
                           // var marge= (diff<100)?"moin de cent":"plus de cent";
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
                                if (boite2 == "triche"){
                                    alert(floor);

                                }
                               
                            

                            }while(boite2!=floor);
                           
                        
    