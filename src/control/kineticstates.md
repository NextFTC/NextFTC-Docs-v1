# KineticStates

A `KineticState` is simply a structure for storing the one-dimensional motion states of a system at a given point in time.
It contains a `position`, a `velocity`, and an `acceleration`, and works for whatever unit you provide:
if `position` is given in inches, `velocity` should be given in inches per second, 
and `acceleration` should be given in inches per second squared.

`KineticState`s can be added or subtracted componentwise, or multiplied by a scalar quantity.