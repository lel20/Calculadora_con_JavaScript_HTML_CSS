// constantes

class Calculadora {
    constructor(anterior, actual) {
        this.elementAnterior = anterior;
        this.elementActual = actual;
        this.borrar();
    }
    borrar(){
        this.operand1=0;
        this.operand2=0;
        this.visualizar();
        
    }
    borrarElemento(){
        if(this.operand2===0){
            return
        }else{
            this.operand2= +this.operand2.toString().slice(0,-1)
        }
        this.visualizar()
    }
    visualizar(){
        this.elementAnterior.innerHTML= this.operand1;
        this.elementActual.innerHTML= this.operand2
    }
    añadirNumero(numero){
        if(numero ==="." && this.operand2.includes('.')){
            return;
        } 
        if (this.operand2==0){
            this.operand2=numero
        }else{
            this.operand2=this.operand2+numero
        }
        this.visualizar()
        
    }

}
const displayAnterio=document.querySelector('#anterior');
const displayActual= document.getElementById('actual');
const numeros=document.querySelectorAll(".numeros");
const borrar=document.querySelector('.clearboton');
const borrarElemento=document.querySelector('.borrarElemento');

const calculadora=new Calculadora(displayAnterio,displayActual);
borrar.addEventListener("click",()=>{
    calculadora.borrar();
})
numeros.forEach(boton =>{
    boton.addEventListener("click",()=>{
        calculadora.añadirNumero(boton.innerHTML)
    })
})
borrarElemento.addEventListener("click",()=>{
    calculadora.borrarElemento()
})