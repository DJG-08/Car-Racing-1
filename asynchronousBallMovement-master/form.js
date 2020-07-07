class Form{

        constructor(){

        }
            display(){
                var title = createElement('h2')
                title.html("Car Racing Game")
                title.position(130,0)
                    
                    var input = createInput("Nickname")
                    input.position(400,160)

                    var button = createButton("PLAY")
                    button.position(400,210)
                    var greeting=createElement('h3')
                    button.mousePressed(function(){
                        input.hide();
                        button.hide();
                        var name = input.value();
                        playerCount = playerCount+1
                        player.update(name);
                        player.updateCount(playerCount);
                        greeting.html("Hello"+name)
                        greeting.position(400,160)
                    })
            }

}