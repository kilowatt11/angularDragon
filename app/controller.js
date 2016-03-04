app.controller("dragonController", function($scope){
    
    var slaying = true;
var youHit= Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5+1);
var totalDamage = 0;

while(slaying){
    
    if(youHit == 1){
        console.log("you've hit the Dragon!");
        totalDamage = totalDamage += damageThisRound;
    if(totalDamage >=4){
    console.log("You have slain the Dragon!");
    slaying = false;
}else{
    youHit = Math.floor(Math.random()*2);
}
}else{
    console.log("You have become a burnt snacky human tostada");
    slaying =  false;
}

};

    
    
})