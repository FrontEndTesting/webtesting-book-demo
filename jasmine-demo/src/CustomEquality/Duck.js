var Duck = function () {
    this.canSwim = true;
    this.canWalk = true;
    this.color = 'white';
    this.canFly = false;
};

Duck.prototype.swim = function(){
    if(this.canSwim){
        //code
    }
};

Duck.prototype.walk = function(){
    if(this.canWalk){
        //code
    }
};