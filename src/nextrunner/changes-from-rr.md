# Changes From RoadRunner

NextRunner has a few major differences from RoadRunner 1.0.

## 1. Package Layout

RoadRunner 1.0 places all classes in the `com.acmerobotics.roadrunner` package.
NextRunner places classes in subpackages of `com.acmerobotics.roadrunner`,
such as `com.acmerobotics.roadrunner.paths`. 
This is similar to, but not the same as, the RoadRunner 0.5 package layout.

Unfortunately, due to this change, NextRunner is not backwards compatible
with RoadRunner 1.0. 
However, IntelliJ IDEA and Android Studio will automatically import classes,
so you do not need to worry about the package locations.

## 2. Trajectory Creation

The [`Drive` interface](https://javadoc.io/doc/dev.nextftc.nextrunner/ftc/latest/ftc/com.acmerobotics.roadrunner.ftc/-drive/index.html)
has a `trajectoryBuilder` method, allowing you to create trajectories without `Action`s.
The API of the [`TrajectoryBuilder` class](https://javadoc.io/doc/dev.nextftc.nextrunner/core/latest/core/com.acmerobotics.roadrunner.trajectories/-trajectory-builder/index.html)
is very similar to that of `TrajectoryActionBuilder`, 
but its `build` method returns a `List<Trajectory>` instead of an `Action`.
Alternatively, the `buildToComposite` method returns a `CompositeTrajectory` object,
which may be easier to use.


