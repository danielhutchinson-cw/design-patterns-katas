# The Strategy Pattern

The strategy pattern is a behavioral design pattern that allows you to decide which course of action a program should take, based on a specific context during runtime. You encapsulate two different algorithms inside two classes, and decide at runtime which strategy you want to go with.

The aim of this pattern is to separate parts of a system that may change from those which are not likely to change. This allows for easier maintainability of the system in the future.

# Project Brief

A games company you work for is developing a new RPG game, to be built in iterations starting with simple requirements and building up to increase in complexity. You have been tasked with implementing player classes within the game. 

During the design standup this morning the game designer has stated that a characters class is dependent upon what weapon the character is holding. When equipping new weapons the characters class can change dynamically at run-time.

Unfortunately; your publisher, Artistic Electronics, is a draconic overlord that demands each iteration be a full working release so that they can sell each update at full price. As such your system design should allow for changes to be made without having to change code that is already in place. Once an iteration has been completed, you are no longer allowed to go back and modify existing code.

# Iterations

1. The game must support a single character class that is able to fight. For this to be an acceptable release you should be able to create a new character, call fight on that character and see some output.

2. The game must now support multiple character classes. For this to be an acceptable release you should be able to create a new character and give it a weapon type. The weapon type the character has should change which output is show when fight is called. The release should support three different weapons.

3. Keep it going, the more classes the better. For this release you need to add another five different weapons. At this point it may be worth looking at your design and ensuring it is as easy as possible to add new weapons in the future.

4. Reviews are in! People are complaining that your game is too violent and your publisher is demanding you add a pacifist class to the game. For this to be an acceptable release you should be able to create a character that when fight is called, output is returned showing that the character does not fight.
