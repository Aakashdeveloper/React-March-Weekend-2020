let a  = 10
console.log(a)

a  = 20
console.log(a)


//es5
function add(a,b){
    return a+b
}

console.log(add(1,2))

//es6
var add = (a,b) => {return a+b}

class add{
    constructor(a,b){
        this.a = a
        this.b = b
    }
    sum(){
        return a+b
    }
}

var mytest = new add()
mytest.sum()


var a = 10
var b = 10

number + number = add
string+string = concat 

number + number = number
string+string = string 
string+number = string 
number+string = string 

10+"10"+10
"10"+10+10
10+10+"10"

10+"10"+10
"101010"
"10"+10+10
"101010"
10+10+"10"
"2010"


10+"10"+10 -1
101009
"10"+10+10 -1
101009
10+10+"10"-1
2009


'1'+1
11
'1'-1
0
'a'-1
NaN
'sv32we'-1
NaN


