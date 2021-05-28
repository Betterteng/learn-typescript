let a: number;
a = 12;

// Now, the type of b is 10, like a const.
let b: 10;

// When
function fn(num) : boolean | string {
    if (num > 0) {
        return true;
    } else {
        return '123';
    }
}

/*
* When you do not know the quantities & type of the rest of the parameters,
* you can use the following syntax.
* No matter how many or what kind of type the prams are,
* it won't have any error.
* */
let c: {name: string, [propName: string]: any};
c = {name: 'hhh', age: 19};

// Set the prams and return type
let d: (num1: number, num2: number) => number;
d = function (num1, num2) {
    return num1 + num2;
}

/*
* The declaration of array:
*   (1) - type[]
*   (2) - Array<type>
* */

// The following syntax creates string type array
let e: string[];
e = ['a', 'b'];

// The following syntax creates number type array
let f: number[];
f = [1, 2];

// The following syntax is another way to create string type array
let g: Array<string>;
g = ['a', 'b', 'c'];

/*
* tuple: the fixed length version of an array
*   - more efficient (because of the fixed length)
* */
let h: [string, string];    // This declaration represents an array only contains 2 string inside
h = ['a', 'b']



