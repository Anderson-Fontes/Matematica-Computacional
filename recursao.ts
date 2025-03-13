//mais eficaz(ocupa menos espaço na memoria, menos complexo) pior de interpretar
function fatorial(n:number):number{
    let fat = 1;
    let count = 1;
    while(count<= n){
        fat = fat*count;
        count = count + 1
    }
    return fat;
}

//pior desempenho para a memoria, melhor de interpretar
function fatorial_r(n:number):number{
    if(n==0 || n ==1){
        return 1;
    } else{
        return n * fatorial_r(n-1);
    }
}

console.log(fatorial(2));
console.log(fatorial_r(2));
console.log(fatorial(3));
console.log(fatorial_r(3));
console.log(fatorial(4));
console.log(fatorial_r(4));
console.log(fatorial(5));
console.log(fatorial_r(5));