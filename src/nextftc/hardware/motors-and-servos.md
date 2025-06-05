# Introduction

NextFTC has a few motor and servo wrappers to make your life easier. There
are three interfaces:

1. `Powerable` has a power that can be get and set.
2. `Positionable` has a position that can be get and set. The position in a
   `Positionable` can be directly set (e.g., the target position), like in a
   servo.
3. `Controllable`, which extends `Powerable`, has a current position and
   velocity.

The interfaces, along with the commands, are in the `hardware` module. The
implementations are in the `ftc` module, which has a compile-only
dependency on the `hardware` module.

All implementations, such as `MotorEx` and `ServoEx`, take a supplier
that is lazily evaluated instead of directly taking the hardware to wrap. This
allows you to construct it on construction of your OpMode/subsystem instead
of waiting until init.

Additionally, all implementations implement caching on all writes with a
configurable cache tolerance that defaults to 0.01.