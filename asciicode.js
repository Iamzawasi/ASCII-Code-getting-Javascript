document.getElementById("txt_ascii").disabled=true;
let alpha=undefined
let index=0;
 function findAscii(){
     //let key=Event.charCode || event.keyCode;
     var key =window.event.keyCode;
     if( key == 8 || key == 46 ){
         document.getElementById("txt_ascii").value="";
         return false
     }
    let ch=document.getElementById("txt_entry").value.charCodeAt(index);
    //let ch=alpha.charCodeAt(index)
    document.getElementById("txt_ascii").value=ch;
}
