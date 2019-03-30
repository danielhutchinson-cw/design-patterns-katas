# The Strategy Pattern

The strategy pattern is a behavioral design pattern that allows you to decide which course of action a program should take, based on a specific context during runtime. You encapsulate two different algorithms inside two classes, and decide at runtime which strategy you want to go with.

The aim of this pattern is to separate parts of a system that may change from those which are not likely to change. This allows for easier maintainability of the system in the future.

# Project Brief

A games company you work for is developing a new RPG game, to be built in iterations starting with simple requirements and building up to increase in complexity. You have been tasked with implementing player classes within the game. 

During the design standup this morning the game designer has stated that a characters class is dependent upon what weapon the character is holding.

Unfortunately; your publisher, Artistic Electronics, is a draconic overlord that demands each iteration be a full working release so that they can sell each update at full price. As such your system design should allow for changes to be made without having to change code that is already in place.

# Iterations

1. The game must support a single character class that is able to fight.

2. After running some events they proved to be totally chaotic, so each event should now include a marshal. The marshal can also be displayed but does not compete in events.

3. Since the glorious victory of team GB in the Olympic Triathlon the sport's popularity has increased. So the games company would now like to support triathlon events. Again competitiors must be displayed and be able to compete, however a triathlon competitor will compete by swimming cycling and running.

