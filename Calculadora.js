// constantes
const displayAnterio=document.querySelector('#anterior');
const displayActual= document.querySelector('.actual');
const numeros=document.querySelectorAll(".numeros");
const borrar=document.querySelector('.clearboton');
const borrarElemento=document.querySelector('.borrarElemento');
const operadores= document.querySelectorAll('.operadores');
const igual=document.querySelector(".igual");
class Calculadora {
    constructor(anterior, actual) {
        this.elementAnterior = anterior;
        this.elementActual = actual;
        this.borrar();
    }
    borrar(){
        this.operand1=0;
        this.operand2=0;
        this.operador='';
        this.visualizar();
        
    }
    borrarElemento(){
        if(this.operand2===0){
            return
        }else{
            this.operand2= +this.operand2.toString().slice(0,-1)
        }
        this.visualizar();
    }
    visualizar(){
        this.elementAnterior.innerHTML= +this.operand1.toString() ;
        this.elementActual.innerHTML= this.operand2;
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
    operaciones(operador) {
        // if(this.operador){
        //     this.calculo();
        // }
        // si Operador existe entoces se ejecuta la funion calculo(), caso
        //contrario se hace un retorno.
        this.operador ? this.calculo():this.return;
        this.operador=operador
        //si operadn2=== 0 entoces operand1 = operadn1, caso contrario operand1= operand2
        this.operand1=+this.operand2===0 ? this.operand1=this.operand1: this.operand2;
        this.operand2=0;
        this.visualizar();
        
        
    }
    calculo(){
        console.log(this.operador);
        switch(this.operador){
            
            case "+":
                this.operand1=+this.operand1+ +this.operand2;
            break;
            case "-":
                this.operand1=+this.operand1- +this.operand2;
            break;
            case "*":
                this.operand1=+this.operand1* +this.operand2;
            break;
            case "/":
                this.operand1=+this.operand1 / +this.operand2;
            break;
        }
        this.operand2=0;
        this.operador='';
        this.visualizar();
    }
}

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
operadores.forEach(opera =>{
    opera.addEventListener("click",()=>{
        calculadora.operaciones(opera.innerHTML);
    })
})
igual.addEventListener("click",()=>{
    calculadora.calculo();
});