/*
var libertyStatu=93;
var tourPerret=110;
var heighestMonument="?";

if(libertyStatu>tourPerret){
  heighestMonument="Liberty Statu";
}else{
  heighestMonument="Tour Perret";
}

console.log("The heighest monument is the "+heighestMonument);


var day=6;
var monthNumber=11;
var monthName="";
var message="";

switch(monthNumber){
	case 1:
		monthName="january";
		break;
	case 2:
		monthName="february";
		break;
	case 3:
		monthName="march";
		break;
	case 4:
		monthName="april";
		break;
	case 5:
		monthName="may";
		break;
	case 6:
		monthName="june";
		break;
	case 7:
		monthName="jully";
		break;
	case 8:
		monthName="august";
		break;
	case 9:
		monthName="september";
		break;
	case 10:
		monthName="october";
		break;
	case 11:
		monthName="november";
		break;
	case 12:
		monthName="december";
		break;
}
console.log("The Prix Goncourt is annouced the "+day+"th of "+monthName);

var fridayPriceTicket=5;
var saturdayPriceTicket=10;
var fridayBudjet=35;
var leavingFriday="Friday";
var leavingSaturday="Saturday";
var leavingDay="?";

if(fridayPriceTicket<fridayBudjet|saturdayPriceTicket>fridayPriceTicket){
   leavingDay=leavingFriday;
}else{
    leavingDay=leavingSaturday;
}
console.log("I\'ll be leaving "+leavingDay);
var canAskCard = "No";
var city = "Bayonne";
var age = 18;
var jobApplicant = true;
var departement = "Pyrenes-Atlantique";
var region = "Nouvelle-Aquitaine";
var rsa = true;
var salary = 1100;
var lonlyWife = false;
var veteran = false;
var minimumAge = 18;
var maximumAge = 27;

  if (city=="Bayonne" & age>17 & age<27) {
    canAskCard = "yes";
  }else if (city=="Bayonne" & age>28 & jobApplicant) {
    canAskCard = "yes";
  }else if (departement =="Pyrenes-Atlantique" & rsa) {
    canAskCard = "yes";
  }else if (region=="Nouvelle-Aquitaine" & lonlyWife & salary<1600) {
    canAskCard ="yes";
  }else if (veteran) {
    canAskCard ="yes";
  }

  console.log(canAskCard);*/

  //10.3
/*
  var mostTalkenLanguages=["Anglais", "Francais", "Mandarin", "Arabe", "Hindi"];
  var message="The most talken language in the world is : ";
  console.log(message+mostTalkenLanguages[0])*/

/*  var threeClassMates=["Florian", "Marine", "Mohamed"];
  firstClassMate(threeClassMates);

  function firstClassMate(array){
      console.log(array[0]);
  }*/

/*function textprogr(text){
            var txt = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus";
            text.split('');
            var affichage="";
                for(var i = 0; i<txt.length; i++) {
                    affichage+= txt[i];
                    console.log(affichage);
                }

        }
        var k=0;
        function progressText(text, output) {
            if(window.k == 0) { output.innerHTML = ''; }
            output.innerHTML += text[window.k];
            window.k++;
            if(window.k < text.length) { setTimeout(function() { progressText(text, output); }, 20); }
            else { window.k = 0; }
}
*/
/*
var message="salut";
function anacyclique(c){
  var anacycliqueString="";
  var i=c.length-1;
  while (i>-1) {
    anacycliqueString=anacycliqueString+c.charAt(i);
    i=i-1;
  }
  return(anacycliqueString);
}

console.log(anacyclique(message));

var nom="rousset";
function occurance(c,a){
  var i=0;
  var o=0;
  while (i<c.length) {
    if (c.charAt(i)===a) {
      o=o+1;
    }
    i=i+1;
  }
  return(o);
}
console.log(occurance(nom,"s"));

function orderTab(tab){
  var i=0;
  while(i<tab.length-1){
    if (tab[i+1]<tab[i]) {
      tab[i]=tab[i+1]+tab[i];
      tab[i+1]=tab[i]-tab[i+1];
      tab[i]=tab[i]-tab[i+1];
      i=0;
    } else {
      i=i+1;
    }
  }
  return(tab)
}

var tableau=[6,4,0,90,7,0,60];
console.log(orderTab(tableau));

/*function convertStringToLowerCase(c){
  var i=0;
  var rest="";
  while(i<c.length){
    rest=rest+c[i].toLowerCase();
    i=i+1;
  }
  return(rest);
}
var ch="Je nE SUIS paS EnerVE!"
console.log(convertStringToLowerCase(ch));

function moyenneDecimaux(tab){
  var i=0;
  var sum=0;
  var avr=0;
  while(i<tab.length){
    sum=sum+tab[i];
    i=i+1;
  }
  avr=sum/(tab.length);
  return(avr);
}

var tabDecimaux=[1.2,5,7.1,0.7,1];
console.log(moyenneDecimaux(tabDecimaux));

function remplace(cari,carf,ch){
  var i=0;
  var rest="";
  while (i<ch.length) {
    if (ch[i]===cari) {
      rest+=carf;
    }else {
      rest+=ch[i];
    }
    i=i+1
  }
  return(rest);
}

var messageSecret="j'ai mangé le gateau";
console.log(remplace("a","x",messageSecret));

function minMax(tab){
  var i=0;
  var tabMinMAx;
  while(i<tab.length-1){
    if (tab[i+1]<tab[i]) {
      tab[i]=tab[i+1]+tab[i];
      tab[i+1]=tab[i]-tab[i+1];
      tab[i]=tab[i]-tab[i+1];
      i=0;
    } else {
      i=i+1;
    }
  }
  tabMinMAx=[tab[0],tab[tab.length-1]];
  return(tabMinMAx);
}

var tableau=[6,4,0,90,7,0,60];
console.log(minMax(tableau));


function minMax2(tab){
  var i=1;
  var tabMinMAx=[tab[0],tab[0]];
  while (i<tab.length) {
    if (tab[i]<tabMinMAx[0]) {
      tabMinMAx[0]=tab[i];
    }else if (tab[i]>tabMinMAx[1]) {
        tabMinMAx[1]=tab[i];
    }
    i+=1;
  }
  return(tabMinMAx);
}
var tableau2=[6,4,0,90,7,0,60];
console.log(minMax2(tableau2));

function Initials(fullName){
  var i=1;
  var rest=fullName[0];
  while(i<ch.length){
    if (fullName[i-1]===" "|fullName[i-1]==="-") {
      rest+=fullName[i];
    }
    i+=1;
  }
    return(rest);
}
var name="Jean-Jack";
var lastName="de Roquefeuille";
var fullName=name+" "+lastName;
console.log(Initials(fullName));


function crypt(CBnb){
  var CBnbString=CBnb.toString()
  var i=0;
  var rest="";
  while (i<CBnbString.length-4) {
    rest+=CBnbString[i];
    i+=1;
  }
  while (i<CBnbString.length) {
    rest+="X";
    i+=1;
  }
  return(rest);
}

var CBnumber=497855443642;
console.log(crypt(CBnumber));

function occuranceCh(cho, chtot){
  var i=0;
  var j=0;
  var o=0;
  while (i<chtot.length) {
    while (j<cho.length & cho[j]===chtot[i]) {
      j+=1;
      i+=1;
      if (j==cho.length) {
        o+=1;
      }
    }
    j=0;
    i+=1;
  }
  return(o);
}

var message="ces fonctions marcherons avec ton algo";
var cho="on";
console.log(occuranceCh(cho, message));


function remplCh(chARemp, chRemp, chTot){
  var i=0;
  var j=0;
  var res="";
  while (i<chTot.length) {
    if (chARemp[j]===chTot[i]&chTot.substr(i,chARemp.length)===chARemp) {
        res+=chRemp;
        i=i+1;
    }else {
      res+=chTot[i];
    }
    i+=1;
  }
  return(res);
}
var message2="ces fonctions marchoerons avec ton algo";
console.log(remplCh("on", "XXXX", message2));


function remplChs(tabChs, chRemp, chTot){
  var i=0;
  var j=0;
  var res="";
  var lgchTot=chTot.length;
  while (i<lgchTot) {
    while (j<tabChs.length) {
      if(tabChs[j][0]===chTot[i]&chTot.substr(i,tabChs[j].length)===tabChs[j]) {
        res+=chRemp;
        i+=tabChs[j].length;
        j+=1;

      }else {
        j+=1;
      }

    }

    j=0;
    res+=chTot[i];
    i+=1;

  }
  return(res);
}
var tabX=["on","s"];
var message3="ces fonctiononons marchoersons avec ton algo essentiel";
console.log(remplChs(tabX, "X", message3));*/
var g18q1 =[
  "Quelle commande Lunix permet de compter le nombre total de lignes, mots et caractères d'un fichier?",//question en [0]
  "wc",// bonne réponse en [1]
  "wcount",//mauvaises répons
  "countw",//mauvaises répons
  "count p",//mauvaises répons
];

var g18q2 =[
  "Laquelle de ces commande n'est pas une commande de communication?",
  "grep",
  "mail",
  "mesg",
  "write",
];

var g18q3 =[
  "Quelle commande Lunix permet de savoir où je me trouve dans l'arborescence de mon ordinateur?",
  "Pwd",
  "Find",
  "Route",
  "PLace",
];

var g18q4 =[
  "Quelle commande Lunix permet de connaitre le type d'un fichier?",
  "File",
  "Tell",
  "Ln",
  "Type",
];

var g18q5 =[
  "Quelle commande permet d'afficher les interfaces réseaux ?",
  "Ifconfig",
  "Ipconfig",
  "Ethconfig",
  "Faconfig",
];

var g18q6 =[
  "Quelle commande permet de comparer deux fichiers ?",
  "Diff",
  "Compare",
  "Dif",
  "Cmp",
];

var g18q7 =[
  "Quelle commande permet d'afficher les dix dernières lignes d'un fichier ?",
  "Tail",
  "Last",
  "Final",
  "Head",
];

var g18q8 =[
  "Quelle commande permet d'afficher les dix dernières lignes d'un fichier ?",
  "Tail",
  "Last",
  "Final",
  "Head",
];

var g18q9 =[
  "Quelle commande permet d'afficher les dix dernières lignes d'un fichier ?",
  "Tail",
  "Last",
  "Final",
  "Head",
];

var g18q10 =[
  "Quelle commande permet d'afficher les dix dernières lignes d'un fichier ?",
  "Tail",
  "Last",
  "Final",
  "Head",
];

var g18qtab = [g18q1,g18q2,g18q3,g18q4,g18q5,g18q6,g18q7,g18q8,g18q9,g18q10];// tableau contenant chaque tableau de question/reponse
var g18rdQ=Math.floor(Math.random()*g18qtab.length);
console.log(g18qtab[g18rdQ].length);
