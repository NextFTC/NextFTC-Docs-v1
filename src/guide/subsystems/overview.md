# Subsystems

Subsystems are an important feature of NextFTC. A subsystem is a collection of
hardware devices and commands that all interact with a discrete aspect of the
robot, such as a lift, claw, or arm.

Generally, the first step when programming a robot is to program your
subsystems. This guide will walk you through a
couple example subsystems that are found on many FTC robots, in order to give
you the tools to create your own that fit
your needs exactly.

## Why Use Singletons?

While not all subsystems need to be singletons, 
using singletons for your subsystems ensures that 
there is only one instance of each subsystem throughout your robot's code. 
This has a couple benefits:

1. **Global Access**: Singletons provide a global point of access to your subsystems, 
    making it easy to reference them from anywhere in your code.
2. **Consistent State**: Since there is only one instance of each subsystem, 
    you can be sure that all parts of your code are interacting with the same instance. 
    This helps to avoid issues with inconsistent state or behavior.
3. **Simplified Management**: With a single instance per subsystem, 
    managing the lifecycle and state of your subsystems becomes easier. 
    You don't have to worry about coordinating multiple instances or their interactions.

Overall, using singletons for your subsystems is a best practice that can help to simplify your code and improve its reliability.
