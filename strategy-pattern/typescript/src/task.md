# The point of this Kata
You should be able to write code that is extensible, as requirements change, additional features should be quick and easy to implement. With as few changes to the codebase as possible. 

This reduces the risk of introducing defects, and reduces the overall cost of implementing new features.

# Arbitrary rules
- You are not allowed to write an `if statement` anywhere in your code. If statements, when overused or used incorrectly can quickly become a problem.

# Recommended Pattern
- Strategy Pattern

# Project Brief

A games company you work for is developing a new RPG game, to be built in iterations starting with simple requirements and building up to increase in complexity. You have been tasked with implementing player classes within the game. 

During the design standup this morning the game designer has stated that a characters class is dependent upon what weapon the character is holding. When equipping new weapons the characters class can change dynamically at run-time.

Unfortunately; your publisher, Artistic Electronics, is a draconic overlord that demands each iteration be a full working release so that they can sell each update at full price. As such your system design should allow for changes to be made without having to change code that is already in place.

# Iterations

1. The game must support a single character class that is able to fight. For this to be an acceptable release you should be able to create a new character, call fight on that character and see some output.

2. The game must now support multiple character classes. For this to be an acceptable release you should be able to create a new character and give it a weapon type. The weapon type the character has should change which output is show when fight is called. The release should support three different weapons.  

To prove this works, create three different characters, each with a different weapon, and call fight on each one.

It has also been stated that new weapons types need to be added in the future, quickly. So your design needs to ensure that this can happen without existing code needing to be updated.

3. The game must now support the changing of character classes at run-time. For this to be an acceptable release you should be able to create a new character and give it a weapon type, call fight to see the output for that class, and then change the weapon type to another weapon. Calling fight at this point will show output for the new character class.

4. The more classes the better. For this release you need to add another five different weapons.

5. Reviews are in! People are complaining that your game is too violent and your publisher is demanding you add a pacifist class to the game. For this to be an acceptable release you should be able to create a character that when fight is called, output is returned showing that the character does not fight.
