//! Solicita al usuario 3 palabras, de la primera debes mostrar su segunda letra, de la segunda su tamaño y de la tercera las vocales que se encuentren en posiciones impares.


var palabra1= prompt("Mete la primera palabra ")
var palabra2= prompt("Mete la segunda palabra ")
var palabra3= prompt("Mete la tercera palabra ")


var vocales="a,e,i,o,u"



console.log(palabra1[1]);


console.log(palabra2.length);


var cont=0




// while(!label){
//     if(
//         i<palabra3.length
//         
//     )


// }


for(i=0;i<palabra3.length;i++){         
    for(j=0;j<=i;j+2){              //todo condicion del segundo for 
        if(
        palabra3[j]=vocales[i]
        )
        cont++
    }
}




console.log(cont);