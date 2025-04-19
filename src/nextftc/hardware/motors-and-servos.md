# Introduction

NextFTC has a few motor and servo wrappers to make your life easier. There 
are three interfaces:

1. `Powerable` has a power that can be get and set.
2. `Positionable` has a position that can be get and set. The position in a 
   `Positionable` can be directly set (e.g. the target position), like in a 
   servo.
3. `Controllable`, which extends `Powerable`, has a current position and 
   velocity.

The interfaces, along with the commands, are in the `hardware` module. The 
implementations are in the `ftc` module, which has a `compileOnly` 
dependency on the `hardware` module.

All implementations implement caching with a configurable cache tolerance 
that defaults to 0.01.