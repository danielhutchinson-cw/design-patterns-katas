# The Strategy Pattern

The aim of this pattern is to separate parts of a system that may change from those which are not likely to change. This allows for easier maintainability of the system in the future.

# Project Brief

A games company is developing a sports event simulator, to be built in iterations starting with simple requirements and building up to increase in complexity. The system design should allow for changes to be made /without/ having to change what is already in place.

1. The Simulator must support marathon and 10 km run events. The only requirement for these events is that the competitors can be displayed in some way (text is fine) and they can compete in the event. All competitors will compete by running.
2. After running some events they proved to be totally chaotic, so each event should now include a marshal. The marshal can also be displayed but does not compete in events.
3. Since the glorious victory of team GB in the Olympic Triathlon the sport's popularity has increased. So the games company would now like to support triathlon events. Again competitiors must be displayed and be able to compete, however a triathlon competitor will compete by swimming cycling and running.

