let upcount=0;
function up()
{
    var img=document.getElementById("img");
    if(upcount == 0){
        img.src="./img/face_mask_detection/Without_Mask.jpeg";
        upcount=1;
    }
    else{
        img.src="./img/face_mask_detection/With_Mask.jpeg";
        upcount=0;
    }
    
}
let Project2=1;
function Project2Up(){
    if(Project2<7){
        Project2++;
    }
    else{
        Project2=1;
    }
    switchFun(Project2);
}
function Project2Down(){
    if(Project2>1){
        Project2--;
    }
    else{
        Project2=7;
    }
    switchFun(Project2);
}
function switchFun(a){
    var img= document.getElementById("img2");
    switch(a){
        case 1:
            img.src="./img/fac/fac1.jpeg";
            break;
        case 2:
            img.src="./img/fac/fac2.jpeg";
            break;
        case 3:
            img.src="./img/fac/fac3.jpeg";
            break;
        case 4:
            img.src="./img/fac/fac4.jpeg";
            break;
        case 5:
            img.src="./img/fac/fac5.jpeg";
            break;
        case 6:
            img.src="./img/fac/fac6.jpeg";
            break;
        case 7:
            img.src="./img/fac/fac7.jpeg";
            break;
        default:
            alert("Thambi velaiya paaru");
            break; 
    }
}

function Toggle(){
    document.body.classList.toggle('nav_open');
}
function ToggleEnd(){
    document.body.classList.remove('nav_open');
}