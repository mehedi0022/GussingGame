let wonecounter = 0;
let lostcounter = 0;

for( let i = 1; i < 6; i++){
    let num = parseInt(prompt("Enter your Gussing Number (1 - 5): "));
    let gussNumber = Math.random() * 5 + 1;
    gussNumber = Math.floor(gussNumber);
    if(num==gussNumber){
        document.write("Yeah! You have Wone. And The Rendom Number Was " + gussNumber + "<br/>");
        wonecounter++
    }
    else{
        document.write("Oh! You have Lost. And The Rendom Number Was " + gussNumber + "<br/>");
        lostcounter++
    }
}
document.write("<b>"+"You have Wone:"+ " "+ wonecounter + " Times <br/>" + "</b>");
document.write("<b>"+"You have Lost:"+ " "+ lostcounter + " Times" + "</b>");