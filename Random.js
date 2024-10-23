var names=["john","skibiddi","sam","sara"];

function whosPaying(names){
   var numofppl = names.length;
    var posname = Math.floor( Math.random()*numofppl);
    var random = names[posname];

    return random + " is going to pay ";


}
