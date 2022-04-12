import {world} from "mojang-minecraft";

const cmdPrefix = "!" //can be set to whatever you want

// triggers whenver a chat is sent to chat
world.events.beforeChat.subscribe(chat => {
  //Splits the message alowing you to get each word of it eg. args[1] would be the second word (or first word after the cmd name)
  if(chat.message.startsWith(cmdPrefix)) {
    let args = chat.message.slice(cmdPrefix.length).trim().split(/\s+/);
    const cmd = args[0].replace(cmdPrefix, "")
  
  switch (cmd) {
    case 'test': //what yoy type in chat
    chat.cancel = true //stops the message from showing in chat
      world.getDimension('overworld').runCommand("say Hello World!")
      //runs command 
      break;//ends the block of code to be execute
      case 'worldPlayers':
           chat.cancel = true;// cancels message
            let players = Array.from(world.getDimension('overworld').runCommand(`list`).players.split(/\+s/)) // makes a array containing each player
            world.getDimension('overworld').runCommand(`tellraw @a {"rawtext":[{"text":"Players: ${players}"}]}`)
            //${players} gets the varable players ${} can be used inside of `` to get the value of js code eg ${chat.content} would return the message sent
            //tellraw cmd that says the list of online players
     
        break;
      // code
  }
  }
});

world.events.tick.subscribe(tick => {
  //commands in this section will run every tick so no command filters needed
})

world.events.playerJoin.subscribe(joiner => {
  //commamds written here are ran when a player joins the world/realm
})
