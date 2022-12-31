// //****** Commentaire ******/
// //***************Conditions*****//
// let x = 3;
// let y = 6;
// if (!x  === y || x >3){ 
//     //si le x n'est pas égale a 3 ou x est superieur à 3 donc il est true
//     console.log("True !");
//     // Si ce n'est pas conrrect ben c'est false
// } else {
//     console.log("false !");
// }

// //*************  2 eme condition*//

// let H = 10;
// let C = 20; 

// if (!H == C  && H >3){ 
//     // éperlouette qui veut dire et
//     //si le H n'est pas égale a 10 et H est superieur à 10 donc il est true
//     console.log("True !");
//     // Si ce n'est pas conrrect ben c'est false
// } else {
//     console.log("false !");
// }


//  //***************Les functions**********//

//  function faireQuelqueChose(){
//     console.log("Je suis pas la ");
//     console.log("Je suis la");
//  }

// //  faireQuelqueChose();

//  // //***************Les functions fléchées**********//

//  const faireUneTache =(tache)=>{
//     console.log("Je fais :"+ tache);


//  };
//  faireUneTache("les pizzas");


//*******************************l'exercice***********************//
let total =0;

function addition(x){
    total += x ; 
    return total;
}


function soustraction(x){
    total -= x; 
    return total;
}

function division(x){
    if (total=== 0){
        return(total = x) 
    } else { 
        total /= x;
        return total;
    }
}

function multiplication(x){
    if (total=== 0){
        return(total = x) 
    } else { 
        total *= x;
        return total;
    }
 }