function reverse(name) {
    let len = name.length;
    let reversed = "";

    for (let i = len - 1; i >= 0; i--) {
        reversed += name[i];
    }

    return reversed;
}

let name = "javascript is fun";
console.log(reverse(name)); 
