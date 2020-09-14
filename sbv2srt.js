function sbvToSrt(text){
    var str = text.replace(/^\s+|\s+$/g, '');
    var addLine = "\n" + str;
    var split = addLine.split("\n");
    var size = split.length;
    var nSub = "";
    var num = 0;
    var lineNum = 0;

    for(var i = 0; i < size; i++){
        if(lineNum === 0){
            nSub += "\n" + num.toString() + "\n";
            num++;
            lineNum++;
        } else if(lineNum === 1){
            var temp = split[i];
            temp = temp.replace(",", " --> ");
            temp = temp.replace(".", ",");
            nSub += temp + "\n";
            lineNum++;
        } else if(lineNum === 2){
            nSub += split[i] + "\n";
            lineNum = 0;
        }
    }

    nSub += "\n";
    nSub = nSub.substring(1);

    return nSub;
}
