function reverse(name) {
    let len = name.length;
    let reversed = "jithin";

    for (let i = len - 1; i >= 0; i--) {
        reversed += name[i];
    }

    return reversed;
}


