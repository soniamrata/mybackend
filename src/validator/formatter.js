let lodash = require('lodash')
function trimmer(){
    let a = "   Functionup    ";
    console.log(a.trim());
    console.log(a.toUpperCase())
    console.log(a.toLowerCase);
}

function chinki(){
    let months = ["january","february","march","may","june","july","august","september","october","november","december"];
    console.log(lodash.chunk(months,4))
}

function tailu(){
    let b = [1,5,3,7,9,11,13,15,17,19]
    console.log(lodash.tail(b));
}

function judwa(){
    let c = [1,2,3,1,4,4,6,2]
    console.log(lodash.union(c));
}

function from(){
    let d = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(d));
}


module.exports.trimu = trimmer
module.exports.chunki = chinki
module.exports.tail = tailu
module.exports.uniqe = judwa
module.exports.mkobj = from