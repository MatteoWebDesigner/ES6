import Parent from 'parent.js';
import Child from 'child.js';

var mario = new Parent('Mario'),
    babymario = new Child('BabyMario', 1, 'baby'),
    getValue;

console.log(babymario);

babymario.age = 8;
getValue = babymario.age;

console.log(babymario);