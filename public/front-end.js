console.log("working");
$('document').ready({
  //for each post
  /*
  var data = (out.json); //read in json object
  //data length needs to be number of objects inside the array
  for (i=0;i<data.length;i++){
    var post = data[i].status_message;
    var total_reactions = data[i].num_reactions;
    var total_likes = data[i].num_likes;
    var total_comments = data[i].num_comments;
    var r_loves = data[i].num_loves;
    var r_wows = data[i].num_wows;
    var r_hahas = data[i].num_hahas;
    var r_sads = data[i].num_sads;
    var r_angrys = data[i].num_angrys;
  }*/


   //new revised code

   //read in json file to variable script can access
    var a = new XMLHttpRequest();
    a.open("GET","../out.json",true);
    a.onreadystatechange = function() {
      if( this.readyState == 4) {
        if( this.status == 200) {
          var json = window.JSON ? JSON.parse(this.reponseText) : eval("("+this.responseText+")");
          // do something with json
        }
        else alert("HTTP error "+this.status+" "+this.statusText);
      }
    }
    a.send();



   //lexicon terms for keyword filter
    var lexicon = ["sudan","people","dinka","country","government","president","kiir","juba","stupid","war","peace","nuer","sudane  se","evil","machar","state","against","never",
      "let","man","ethnic","violence","power","political","spla","new","rebels","splm","southern","need","world","good","security","between","want","genocide","called","states","ethiopian","salva","must","yei","under","2016","egypt","council","united","national","groups","come","io","fighting","uganda","rebel","civilians","countries","riek","africa","last","ethiopia","end","somalia","nations","tribes","first","conflict","international","group","terrorist","deng","always","killed","community","land","equatoria","region","civil","death","independence","african","tribe","tribal","kill","others","down","nation","cannot","forces","british","dogs","army","give","become","agreement","black","force","message","leaders","name","hate","right","republic","today","talks","women","call","minister","troops","killing","chief","human","speech","dinkas","believe","during","leadership","crazy","fight","law","media","equatorians","common","general","union","life","money","god","children","terrorists","soldiers","ever","situation","cameroons","led","yet","information","place","nothing","hon","jce","support","best","syria","put","told","known","current","armed","instead","face","work","lost","tell","hope","arms","regime","better","kenya","leader,"among","men","person","nile","live","full","friend","along","efforts","oil"];
/*
   for (i=0;i<100;i++){
     var post = data[i].status_message;
     var total_reactions = data[i].num_reactions;
     var total_likes = data[i].num_likes;
     var total_comments = data[i].num_comments;
     var r_loves = data[i].num_loves;
     var r_wows = data[i].num_wows;
     var r_hahas = data[i].num_hahas;
     var r_sads = data[i].num_sads;
     var r_angrys = data[i].num_angrys;
   }

*/

})
