let upcount=0;
function up()
{
    var img=document.getElementById("img");
    if(upcount == 0){
        img.src="./img/Without_Mask.jpeg";
        upcount=1;
    }
    else{
        img.src="./img/With_Mask.jpeg";
        upcount=0;
    }
    console.log(upcount);
}