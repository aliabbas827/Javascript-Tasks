function doOuterFunctionStuff(nr) {
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x) {
    let z = 10;
    }
    console.log("Not accessible:", z);
    }
    doOuterFunctionStuff(2);