This is a project where I get ChatGPT to make a game.
At the same time, I'm trying to identify where ChatGPT will run into challenges, to help with this, I'm modifying the code at certain points to make it more effective.
The commits by chatgpt will be unlabelled. However when I make a change I think helps the 'flow' of the code, I've marked them with [* - Not GPT]. I plan to look over these for later use.



Issues found so far:
- ChatGPT doesn't try to modularise code without express prompting. It started doing it once I told it I was making smaller files to change, however it didn't inherently do it.
    - This means that the file structure is likely to not end out effective for later development, as it is only applying the same approach I used at the very beginning (as in using an object folder. It has yet to add new folders [update this if it changes.])
    - This is something I've seen consistently in vibe-coded programs. Generally one large file that is unweildy and not worth working on. At least it adapts after seeing a structure, but unsure how effective it will be.
- ChatGPT will often use 'patch' fixes even with very little technical debt. For example, chatGPT had an issue was checking collision between an oxygenTank and the player. It used if (distance < oxygenTank.r + player.r) to check collision, however player did not have a .r variable. (it used a .size variable instead). An easy fix would be to change the code to use oxygenTank.r + player.size/2 or to create a local playerRadius = player.size/2, instead it created a class variable for player that was player.r. This immediately fails DRY in a bad way because duplicate data may change seperately and we could have errors when size !~ r for a player. Also, because there were two parameters for the player's size, chatGPT used 'defensive' code to ensure that player.r existed to begin with. This meant it used a triple ternary that was very hard to read for low value.


Potential problems I haven't seen repeatedly, but were bad:
- ChatGPT created an array of oxygenTanks which is good, however when the oxygenTank is collected, it simply sets the oxygenTank to inactive and leaves it in the array. 
    - This is a memory leak
    - Also, this has potential for the oxygenTank to become uncollected and reappear which it should not do. [this would be fine if they were refreshing spawn points, however this was not it's plan.]