class Quiz {
  constructor(){
    this.title = createElement('h1')
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    Contestant.getPlayerInfo();
    //write code to change the background color here
   // chnageBackground("blue");

    //write code to show a heading for showing the result of Quiz
    this.title.html("Results");
    this.title.position(350, 0);

    //call getContestantInfo( ) here
    if(allContestants !== undefined ){
      var display_answers=230
      fill("blue")
      textSize(20);
      text("NOTE:contestants who have answered correctly are highlighted in green color!!!",130,230);


     for(var plr in allContestants){
       var correctans= "2";
       if(correctans===allContestants[plr].answer){
           fill("green")
       }
        else
        {
           fill("red")
        }
         display_answers+=30;
         text(allContestants[plr].name + ":" +allContestants[plr].answer ,250,display_answers)
     }

    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }


}
