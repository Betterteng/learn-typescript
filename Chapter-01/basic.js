var a;
a = 12;
// Now, the type of b is 10, like a const.
var b;
// When
function fn(num) {
    if (num > 0) {
        return true;
    }
    else {
        return '123';
    }
}
/*
* When you do not know the quantities & type of the rest of the parameters,
* you can use the following syntax.
* No matter how many or what kind of type the prams are,
* it won't have any error.
* */
var c;
c = { name: 'hhh', age: 19 };
// Set the prams and return type
var d;
d = function (num1, num2) {
    return num1 + num2;
};
/*
* The declaration of array:
*   (1) - type[]
*   (2) - Array<type>
* */
// The following syntax creates string type array
var e;
e = ['a', 'b'];
// The following syntax creates number type array
var f;
f = [1, 2];
// The following syntax is another way to create string type array
var g;
g = ['a', 'b', 'c'];
/*
* tuple: the fixed length version of an array
*   - more efficient (because of the fixed length)
* */
var h; // This declaration represents an array only contains 2 string inside
h = ['a', 'b'];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = { name: 'oscar', gender: Gender.Male };
console.log(i.gender === Gender.Male);
