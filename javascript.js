let upcount=0;
var img=document.getElementById("img");
function up()
{
    if(upcount == 0){
        img.src="https://thumbs.dreamstime.com/b/animals-farm-imaga-cows-57225867.jpg";
        upcount=1;
    }
    if(upcount == 1){
        img.src="https://i.pinimg.com/474x/50/20/c1/5020c1390a26e1f6eed943a59498b27e.jpg";
        upcount=0;
    }
    console.log(upcount);
}