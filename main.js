const divResult = document.querySelector("#resultat");

var tabJeu = [
   [0,0,0,0],
   [0,0,0,0],
   [0,0,0,0],
   [0,0,0,0]
];

//var tabResult = [
 //  [1,3,2,5],
 //  [1,5,6,3],
 //  [7,8,4,2],
 //  [8,7,6,4]
//];

var tabResult = genreTableauAleatory();

var oldSelection=[];
var nbFiche = 0;
var ready= true;

traffickerTableau();

function traffickerTableau(){
      var txt =" ";

      for(var i=0; i < tabJeu.length ;i++){
           txt += "<div>";
           for(var j=0; j < tabJeu[i].length ;j++){
             if(tabJeu[i][j] === 0){
               txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px' onClick='verify(\""+i+"-"+j+"\")'>Trafficker</button>";
             } else {
               txt += "<img src='"+getImage(tabJeu[i][j])+"' style='width:100px;height:100px' class='m-2'>";
             }
           }
           txt += "</div>";
      }
      divResult.innerHTML = txt;
}

function getImage(valour){
   var imgTxt = "";
    switch(valour){
      case 1: imgTxt += "image/card1.png.jpg";
      break;
      case 2: imgTxt += "image/card2.png.jpg";
      break;
      case 3: imgTxt += "image/card3.png.jpg";
      break;
      case 4: imgTxt += "image/card4.png.jpg";
      break;
      case 5: imgTxt += "image/card5.png.jpg";
      break;
      case 6: imgTxt += "image/card6.png.jpg";
      break;
      case 7: imgTxt += "image/card7.png.jpg";
      break;
      case 8: imgTxt += "image/card8.png.jpg";
      break;
      default : console.log("cas non pris en compute")
    }
    return imgTxt;
}

function verify(button){
    if(ready){
        nbFiche++;
        var line = button.substr(0,1);
        var colon = button.substr(2,1);

        tabJeu[line][colon] = tabResult[line][colon];
        traffickerTableau();

        if(nbFiche>1) {
            ready=false;
            setTimeout(() => {
                if(tabJeu[line][colon] !== tabResult[oldSelection[0]][oldSelection[1]]){
                   tabJeu[line][colon] = 0;
                   tabJeu[oldSelection[0]][oldSelection[1]] = 0;
                }
                traffickerTableau();
                ready = true;
                nbFiche = 0;
            },500)
        }
        else{
           oldSelection = [line,colon];
        }
    }
}

function genreTableauAleatory(){
     var tab = [];
     var nbImagePosition = [0,0,0,0,0,0,0,0];

     for( var i=0;i<4;i++){
         var line = [];
         for( var j=0;j<4;j++){
            var fin = false;
            while(!fin){
               var randomImage = Math.floor(Math.random() * 8);
               if(nbImagePosition[randomImage] < 2){
                   line.push(randomImage+1);
                   nbImagePosition[randomImage]++;
                   fin = true;
               }
            }
         }
         tab.push(line);
     }
     return tab;
}
