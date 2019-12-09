# CATCHING BALL
https://editor.p5js.org/hzyhzya/sketches/6JT0sRRpG
My project is to catch a ball that appears in a random place on the canvas.

## Summary

The project I made is a simple game. There are three different levels in this game: easy, normal, hard, and each level has a different color background. On the easy level, players have a line to lead them to find where is the ball. After players catch 10 balls, they will reach the normal level. For the normal level, players need to catch the ball without the leading line. After players catch another 10 balls, they need to catch the ball, which is getting smaller and smaller, at the hard level.

## Component Parts

The Ball: I start by setting up some variables. I set the size of the ball as 40 ("var ballSize = 40;")and the starting position of the ball in the middle("var ballx = 250;"and"var bally = 250;"). Then, use the "dist()" from the reference to make the connection with the ball and the mouse. 

The Sound: I upload a sound of bubble. When the player catch the bubble, the sound will play.

The Game State: In my project, there are three levels. Players will start with level one: easy. When they reach 10 balls, they will go to level two: normal.  Based on the code:" if (gameState == "2") { B();}" and "if (score >= 10) { gameState = "2"= }", the processer will go the function B.

The background: the background color will change in each level. "background(230, 230, 250);"

## When your project is completed, you will then add the following sections:

## Timeline

What did you do in each of the past four weeks?

- Week 1: Write Proposal, flush out initial code for your idea
- Week 2: Try different ideas, test those ideas that can be executed or not.
- Week 3: Finishing the coding, and fix mistake.
- Week 4: Present!
 
## Challenges

I think the hardest part of my project is the different levels of the game. I want to make some changes when the players reach some stage. At first, I do not what should I do, so I asked my friend. She told me to search for "gameState", then, I found an example of the "gameState" which helps me a lot in this project. When I almost finish, I found out that every time my ball change to a random place, only the x of the ball changed. Then, I found out there is a typo in the code("ballx = random(width); ballx = random(height);"), I wrote the x twice.

## Completed Work

![](https://github.com/hzyhzya/hw13/blob/master/11111.png)

## References and links

https://editor.p5js.org/urbanatwork/sketches/H18QLyuKM
