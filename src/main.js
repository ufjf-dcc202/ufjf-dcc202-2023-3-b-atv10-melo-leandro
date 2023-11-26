import {getJoao, getMaria, deJoaoParaMaria, deMariaParaJoao, setJoao, setMaria} from "../src/joaoEMaria.js";

let maria = getMaria();
let joao = getJoao();

console.log(`João tem ${joao} maçãs e Maria tem ${maria} maçãs.`)

deMariaParaJoao();
maria = getMaria();
joao = getJoao();

console.log(`Porém, João era um ladrão, e roubou todas as maçãs de Maria, e fugiu com ${joao} maçãs. Maria, triste, acabou com ${maria} maçãs`);

