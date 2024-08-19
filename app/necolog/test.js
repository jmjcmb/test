var cats = [
    {name:"ありす",color:"三毛",age:"",from:"健軍",height:"",weight:"",comment:"おっきい"},
    {name:"こまち",color:"黒",age:"",from:"中央区",height:"",weight:"",comment:"かしこい"},
    {name:"なごみ",color:"ハチワレ",age:"",from:"和水町",height:"",weight:"",comment:"あほあほ"},
    {name:"てつ",color:"白黒",age:"",from:"山鹿",height:"",weight:"",comment:"かしこい２"},
    {name:"べる",color:"三毛",age:"",from:"久留米",height:"",weight:"",comment:"たぬき"},
    {name:"しじみ",color:"キジ白",age:"月出",from:"",height:"",weight:"",comment:"やくざ"},
    {name:"あさり",color:"キジ白",age:"月出",from:"",height:"",weight:"",comment:"ほんとははまぐり"},
    {name:"もろみ",color:"茶白",age:"小国",from:"",height:"",weight:"",comment:"きんにくまん"},
    {name:"はな",color:"灰",age:"",from:"大津",height:"",weight:"",comment:"はいかぶりひめ"},

   ]

   for(var i=0; i<cats.length; i++){
     var cat = cats[i];
     var list = document.getElementById('list');
     var li = document.createElement('div');
     li.id = "card"
     li.className = "card"
     var card = "<a href=\"\"><div class=\"card__imgframe\"></div><div class=\"card__textbox\"><div class=\"card__titletext\">"+cat.name+"</div><div class=\"card__overviewtext\">"+cat.comment+"</div></div></a>";
     li.innerHTML =  card;
     list.appendChild(li); 
   }

   function addName(){
    var plus = {};
    for(var key in cats[0]){
    var input = document.getElementById(key);
    plus[key]=input.value;
    cats.push(plus);
    }
    var cat = cats[i];
     var list = document.getElementById('list');
     var li = document.createElement('div');
     li.id = "card"
     li.className = "card"
     var card = "<a href=\"\"><div class=\"card__imgframe\"></div><div class=\"card__textbox\"><div class=\"card__titletext\">"+cat.name+"</div><div class=\"card__overviewtext\">"+cat.comment+"</div></div></a>";
     li.innerHTML =  card;
     list.appendChild(li); 
     location.href = "/necolog/main.html";
  }


