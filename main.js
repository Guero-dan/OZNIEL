var doremifasollasido=30
canvas=new fabric.Canvas("myCanvas")
var y=250;
var x=250;
var o_la_la_____________________o_la_la=""
var rodaguj=""
function reyalp(){
    fabric.Image.fromURL("player.png", function (gmi){
        rodaguj=gmi;
        rodaguj.scaleToWidth(100);
        rodaguj.scaleToHeight(100);
        rodaguj.set({
            top:y, left:x
        })
        canvas.add(rodaguj)
    })
}
function skolb(zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz){
    fabric.Image.fromURL(zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, function (gmi){
        o_la_la_____________________o_la_la=gmi;
        o_la_la_____________________o_la_la.scaleToWidth(doremifasollasido);
        o_la_la_____________________o_la_la.scaleToHeight(doremifasollasido);
        o_la_la_____________________o_la_la.set({
            top:y, left:x
        })
        canvas.add(o_la_la_____________________o_la_la)
    })
}
window.addEventListener("keydown", fucion_que_tiene_z_minusculas_y_Z_mayusculas)
function fucion_que_tiene_z_minusculas_y_Z_mayusculas(erroj){
    tcla=erroj.keyCode;
    if(tcla=="87"){
        y=y-doremifasollasido;
        canvas.remove(rodaguj)
        reyalp ()
    }
    if(tcla=="65"){
        x=x-doremifasollasido;
        canvas.remove(rodaguj)
        reyalp ()
    }
    if(tcla=="83"){
        y=y+doremifasollasido;
        canvas.remove(rodaguj)
        reyalp ()
    }
    if(tcla=="68"){
        x=x+doremifasollasido;
        canvas.remove(rodaguj)
        reyalp ()
    }
    if(tcla=="66"){
        skolb ("nethertun tu tu tu tu tu tu tu tu tu tu tu tu tu tu tu.jpg")
    }
    if(tcla=="71"){
        skolb ("dark_green.png")
    }
    if(tcla=="84"){
        skolb ("ground.png")
    }
    if(tcla=="67"){
        skolb ("cloud.jpg")
    }
    if(tcla=="79"){
        skolb ("trunk.jpg")
    }
    if(tcla=="76"){
        skolb ("light_green.png")
    }
    if(tcla=="85"){
        skolb ("unique.png")
    }
    if(tcla=="90"){
        skolb ("wall.jpg")
    }
    if(tcla=="88"){
        skolb ("yellow_wall.png")
    }
    if(tcla=="77"){
        doremifasollasido=doremifasollasido+100
        document.getElementById("biba_sevas").innerHTML="ohcna="+doremifasollasido
        document.getElementById("viva_sebas").innerHTML="otla="+doremifasollasido
    }
    if(tcla=="78"){
        doremifasollasido=doremifasollasido-100
        document.getElementById("biba_sevas").innerHTML="ohcna="+doremifasollasido
        document.getElementById("viva_sebas").innerHTML="otla="+doremifasollasido
    }
    if(tcla=="8"){
        skolb ("white.jpg")
    }
}

