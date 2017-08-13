var CarAssemble = function () {
    this.wheel = 0;
    this.engine = null;
};

CarAssemble.prototype.addWheel = function(){
    this.wheel += 1;
};

CarAssemble.prototype.addEngine = function(engineName){
    this.engine = engineName;
};

CarAssemble.prototype.assemble = function(){
    this.addWheel();
    this.addWheel();
    this.addWheel();
    this.addWheel();
    
    this.addEngine('V8');
};