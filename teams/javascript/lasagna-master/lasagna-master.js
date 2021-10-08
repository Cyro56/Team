/// <reference path="./global.d.ts" />

import { STATUS_CODES } from "http"

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer){
    switch(timer){
        case 0: return 'Lasagna is done.'
        case undefined: return  'You forgot to set the timer.'
        default:
            return 'Not done, please wait.'
    }
}

    
    export function preparationTime(kamada,TimerEstimed){
        switch(typeof(TimerEstimed)){
            case "undefined": return 2*kamada.length
            case "number": return kamada.length*TimerEstimed
        }
       
    } 

    export function quantities(kamadas){
        var sauces = 0;
        var noodles = 0;
        for(var index =0; index <kamadas.length; index++){
            if(kamadas[index] == "sauce"){
                sauces += 1
            }
            else if(kamadas[index] == "noodles"){
                noodles += 1
            }
        }
       return {"noodles":50*noodles , "sauce":0.2*sauces}
    }

    export function addSecretIngredient(friendsList ,  myList ){
        myList.push(friendsList[friendsList.length - 1])     
        
    }

    export function scaleRecipe(recebido, quant){ 
        var lista = Object.keys(recebido)
        for(var i =0; i < lista.length; i++){
            recebido[lista[i]] = recebido[lista[i]]*(quant/2)
        }        
        
        return recebido
    }