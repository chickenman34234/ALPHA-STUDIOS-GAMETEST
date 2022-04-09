# ALPHA-STUDIOS-GAMETEST
- This is all the files used for alpha networks gametest.
- These can be used in your own packs however this repo must be credited in the files.
- Do not use files for a paid pack without permision
# HOW-TO-ADD-YOUR-OWN-COMMANDS
- To add your own chat command a switch command is used. To do this simply use this format:
```js
case '<cmd name>':
//command code here
break;
```
- Commands can also be added to be activated by a player join, this is done by using this method:
```js
import {world} from "mojang-minecraft"

world.events.playerJoin.subscribe(joiner => {
//everything in here runs on a player joining
//joiner = player that joined object
//to get there name you would use joiner.player.name

})

```

- Commands can also be ran on tick events however these are slightly more complicated and use:
```js
world.events.tick.subscribe({})
```

- If you need help be sure to join the [Discord](https://discord.gg/JGDkX2PDsY) and head to the Alpha Studios section.

# EXTRA

- This repo will also have example commands added to be to your own packs! This includes things like a inventory checker and auto spam detection.
