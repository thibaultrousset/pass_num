/*class AlgoTours{
  public static void main (String[] args){
    int libertyStatu=93;
    int tourPerret=110;
    String heighestMonument="?";

    if(libertyStatu>tourPerret){
      heighestMonument="Liberty Statu";
    }else{
      heighestMonument="Tour Perret";
    }

    System.out.println("The heighest monument is the "+heighestMonument);
  }
}
class AlgoExo{
  public static void main (String[] args){

    int fridayPriceTicket=5;
    int saturdayPriceTicket=10;
    int fridayBudjet=35;
    String leavingFriday="Friday";
    String leavingSaturday="Saturday";
    String leavingDay="?";
    if(fridayPriceTicket<fridayBudjet|saturdayPriceTicket>fridayPriceTicket){
       leavingDay=leavingFriday;
    }else{
        leavingDay=leavingSaturday;
    }
    System.out.println("I\'ll be leaving "+leavingDay);
  }
}
class AlgoExo{
  public static void main (String[] args){
    String canAskCard = "No";
    String city = "Bayonne";
    int age = 18;
    booleen jobApplicant = true;
    String departement = "Pyrenes-Atlantique";
    String region = "Nouvelle-Aquitaine";
    booleen rsa = true;
    int salary = 1100;
    booleen lonlyWife = false;
    booleen veteran = false;
    int minimumAge = 18;
    int maximumAge = 27;

    if (city=="Bayonne" & age>17 & age<27) {
      canAskCard = "yes";
    }else if (city=="Bayonne" & age>28 & jobApplicant) {
      canAskCard ="yes";
    }else if (departement =="Pyrenes-Atlantique" & rsa) {
      canAskCard = "yes";
    }else if (region=="Nouvelle-Aquitaine" & lonlyWife & salary<1600) {
      canAskCard ="yes";
    }else if (veteran) {
      canAskCard ="yes";
    }

    System.out.println(canAskCard);
  }
}


//JUDO
class AlgoExo{
  public static void main (String[] args){

//constantes
    final int FRENCH=0;
    final int ENGLISH=1;
    final int MAN=2;
    final int WOMAN=3;

//variables Chaines
    String ageCategory="";
    String wheightCategory="";
    String indivCombatTime="";
    String teamCombatTime="";
    String message="";
    String messageAge="vhulv";
    String messageWheight="";
    String messageTimeCombat="";
    String messageTimeTeamCombat="";

//variables entier
    int sex=WOMAN;
    int language=ENGLISH;
    int age=12;
    int wheight=65;

//variables categories age generiques
    String U11="";
    String U13="";
    String U15="";
    String U17="";
    String U20="";
    String U100="";

//categories age frencaises
    String U11FR="preminimes";
    String U13FR="minimes";
    String U15FR="cadettes";
    String U17FR="espoirs";
    String U20FR="juniors";
    String U100FR="seniors";

//categories age anglaises
    String U11En="U11";
    String U13En="U13";
    String U15En="U15";
    String U17En="U17";
    String U20En="U20";
    String U100En="U100";

//categories poid U11 U13
    String under30="-30kg";
    String between30and50="30kg-50kg";
    String over50="+50kg";

//categories poid -que
    String under32="-32kg";
    String under34="-34kg";
    String under40="-40kg";
    String under42="-42kg";
    String under44="-44kg";
    String under48="-48kg";
    String under55="-55kg";
    String under60="-60kg";

//categories poid +que
    String over63="+63kg";
    String over66="+66kg";
    String over70="+70kg";
    String over78="+78kg";
    String over90="+90kg";
    String over100="+100kg";

//categories poid entre X et Y* FEMME
    String between32and36="32kg-36kg";
    String between36and40="36kg-40kg";
    String between40and44="40kg-44kg";
    String between44and48="44kg-48kg";
    String between48and52="48kg-kg52";
    String between52and57="52kg-57kg";
    String between57and63="57kg-63kg";
    String between63and70="63kg-70kg";
    String between70and78="70kg-78kg";

//categories poid entre X et Y* HOMME
    String between34and38="34kg-38kg";
    String between38and42="38kg-42kg";
    String between42and46="42kg-46kg";
    String between46and50="46kg-50kg";
    String between50and55="50kg-55kg";
    String between55and60="55kg-60kg";
    String between60and66="60kg-66kg";
    String between66and73="66kg-73kg";
    String between73and81="73kg-81kg";
    String between81and90="81kg-90kg";
    String between90and100="90kg-100kg";


// choix langue
switch (language) {
    case FRENCH:
      U11=U11FR;
      U13=U13FR;
      U15=U15FR;
      U17=U17FR;
      U20=U20FR;
      U100=U100FR;
      messageAge="Votre catégorie d'age est : ";
      messageWheight="Votre categorie de poid est : ";
      messageTimeCombat="Vos combats individuels durerons : ";
      messageTimeTeamCombat="Vos combats par équipe durerons : ";
      break;

    case ENGLISH:
      U11=U11En;
      U13=U13En;
      U15=U15En;
      U17=U17En;
      U20=U20En;
      U100=U100En;
      messageAge="Your age category is : ";
      messageWheight="Your wheight category is : ";
      messageTimeCombat="Your alone fights will last : ";
      messageTimeTeamCombat="Your team fights will last : ";
      break;

}

//verification age
        if(age>8 & age<11){
          ageCategory=U11;
          indivCombatTime="1.30 min";
        }else if(age>10 & age<13){
          ageCategory=U13;
          indivCombatTime="2 min";
        }else if(age>12 & age<15){
          ageCategory=U15;
          indivCombatTime="3 min";
          teamCombatTime="3 min";
        }else if(age>14 & age<17){
          ageCategory=U17;
          indivCombatTime="4 min";
          teamCombatTime="4 min";
        }else if(age>16 & age<20){
          ageCategory=U20;
          indivCombatTime="4 min";
          teamCombatTime="4 min";
        }else if(age>19){
          ageCategory=U100;
          indivCombatTime="5 min";
          teamCombatTime="4 min";
        }

//verification poid U11 U13
        if(ageCategory==U11|ageCategory==U13){
          if(wheight<30){
            wheightCategory=under30;
          }else if(wheight>29 & wheight<51){
            wheightCategory=between30and50;
          }else if(wheight>50){
            wheightCategory=over50;
          }
        }
//verification poid FEMME
        switch(sex){
          case WOMAN:
            if(ageCategory==U15){
              if(wheight<32){
                wheightCategory=under32;
              }else if(wheight<36){
                      wheightCategory=between32and36;
              }else if(wheight<40){
                wheightCategory=between36and40;
              }else if(wheight>63){
                wheightCategory=over63;
              }
            }

            if(ageCategory==U17){
              if(wheight<40){
                wheightCategory=under40;
              }else if(wheight>70){
                wheightCategory=over70;
              }
            }

            if(ageCategory==U15|ageCategory==U17){
              if(wheight>40 & wheight<44){
                wheightCategory=between40and44;
              }
            }

            if(ageCategory==U20){
              if(wheight>44){
                wheightCategory=under44;
              }
            }
            if(ageCategory==U15|ageCategory==U17| ageCategory==U20){
              if(wheight>44 & wheight<48){
                wheightCategory=between44and48;
              }
            }
            if(ageCategory==U100){
              if(wheight>48){
                wheightCategory=under48;
              }
            }
            if(ageCategory==U15|ageCategory==U17| ageCategory==U20|ageCategory==U100){
              if(wheight>48 & wheight<52){
                wheightCategory=between48and52;
              }else if(wheight>52 & wheight<57){
                wheightCategory=between52and57;
              }else if(wheight>57 & wheight<63){
                wheightCategory=between57and63;
              }
            }
            if(ageCategory==U17| ageCategory==U20|ageCategory==U100){
              if(wheight>63 & wheight<70){
                wheightCategory=between63and70;
              }
            }
            if(ageCategory==U20|ageCategory==U100){
              if(wheight>70 & wheight<78){
                wheightCategory=between70and78;
              }else if(wheight>78){
                wheightCategory=over78;
              }
            }
          break;
//verification poid HOMME
          case MAN:
            if(ageCategory==U15){
              if(wheight<34){
                wheightCategory=under34;
              }else if(wheight>34 & wheight<38){
                      wheightCategory=between34and38;
              }else if(wheight>38 & wheight<42){
                wheightCategory=between38and42;
              }else if(wheight>66){
                wheightCategory=over66;
              }
            }

            if(ageCategory==U17){
              if(wheight<42){
                wheightCategory=under42;
              }else if(wheight>90){
                wheightCategory=over90;
              }
            }

            if(ageCategory==U15|ageCategory==U17){
              if(wheight>42 & wheight<46){
                wheightCategory=between42and46;
              }else if(wheight>46 & wheight<50){
                wheightCategory=between46and50;
              }else if(wheight>50 & wheight<55){
                wheightCategory=between50and55;
              }
            }
            if(ageCategory==U20){
              if(wheight>55){
                wheightCategory=under55;
              }
            }
            if(ageCategory==U15|ageCategory==U17| ageCategory==U20){
              if(wheight>55 & wheight<60){
                wheightCategory=between55and60;
              }
            }
            if(ageCategory==U100){
              if(wheight>60){
                wheightCategory=under60;
              }
            }
            if(ageCategory==U15|ageCategory==U17| ageCategory==U20 |ageCategory==U100){
              if(wheight>60 & wheight<66){
                wheightCategory=between60and66;
              }
            }
            if(ageCategory==U17| ageCategory==U20|ageCategory==U100){
              if(wheight>73 & wheight<81){
                wheightCategory=between73and81;
              }else if(wheight>81 & wheight<90){
                wheightCategory=between81and90;
              }
            }
            if(ageCategory==U20|ageCategory==U100){
              if(wheight>90 & wheight<100){
                wheightCategory=between90and100;
              }else if(wheight>100){
                wheightCategory=over100;
              }
            }
          break;
        }

        message=messageAge+ageCategory+"\n"+messageWheight+wheightCategory+"\n"+messageTimeCombat+indivCombatTime+"\n"+messageTimeTeamCombat+teamCombatTime;
        System.out.println(message);


  }
}

class AlgoExo{
  public static void main (String[] args){
    String mostTalkenLanguages[]={"Anglais", "Francais", "Mandarin", "Arabe", "Hindi"};
    String message="The most talken language in the world is : ";
    System.out.println(message+mostTalkenLanguages[0]);
  }
}

//10.3
class AlgoExo{
  public static void main (String[] args){
    String threeClassMates[]={"Florian", "Marine", "Mohamed"};
    firstClassMate(threeClassMates);
  }

    public static void firstClassMate(String[] table){
        System.out.println(table[0]);

    }
  }
*/


