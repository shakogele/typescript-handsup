/** Types
 * Union - multiple types piped
 * Literal
 * Alias / Custom Types
*/

type Combinable = number | string; // Alias or Custom type
type ConversionDescriptor = 'as-number' | 'as-text';

function combine1(
    n1: Combinable,  // Union Type
    n2: Combinable, // Union Type
    resultType:  ConversionDescriptor // Literal-type
    ){
        let result;
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            result = n1 + n2;
        }else{
            result = n1.toString() + n2.toString()
        }
    if(resultType === 'as-number'){
        return +result;
    }else{
        return result.toString();
    }
};

const combined1 = combine1(10, 31, 'as-number');

console.log({combined1})

const combined2 = combine1('10', '31', 'as-number');

console.log({combined2})


const combined3 = combine1('Shalva', 'Gelenizde', 'as-text');

console.log({combined3})


// Better Example
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; 


