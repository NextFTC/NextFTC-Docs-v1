# Subsystem Groups and the Robot Subsystem

NextFTC offers a [`SubsystemGroup`](https://javadoc.io/doc/dev.nextftc/core/latest/-next-f-t-c%20-core/dev.nextftc.core.subsystems/-subsystem-group/index.html) class, 
which allows you to group multiple subsystems together for easier management and control. 
This is particularly useful for complex robots with many subsystems, 
as it enables you to treat them as a single unit.

This can be used in multiple ways.
Some examples include a double-jointed arm mechanism,
or a swerve drive train with multiple modules that can be controlled independently.
This example also illustrates using a `SubsystemGroup` to represent your robot as a whole, 
allowing for more streamlined control and coordination between subsystems.

Just like regular subsystems, 
subsystem groups have an `initialize` and `periodic` function;
in addition, the `initialize` function of each subsystem in the group 
will be called when the group is initialized, 
and the `periodic` function of each subsystem will be called every loop.

## Creating a Subsystem Group

To create a `SubsystemGroup`, 
you must create a subclass of `SubsystemGroup`,
and provide the necessary subsystem instances to its constructor.

:::tabs key:code

== Kotlin

```kotlin 
object MySubsystemGroup() : SubsystemGroup(
    MyFirstSubsystem,
    MySecondSubsystem
)
```

== Java

Just like regular subsystems, 
we must provide some boilerplate code to create a `SubsystemGroup` in Java.

```java
public class MySubsystemGroup extends SubsystemGroup {
    public static final MySubsystemGroup INSTANCE = new MySubsystemGroup();

    private MySubsystemGroup() {
        super(
            MyFirstSubsystem.INSTANCE,
            MySecondSubsystem.INSTANCE
        );
    }
}
```

:::

## Using a Subsystem Group

To register a subsystem group, you can simply pass its instance
to the `SubsystemComponent` constructor in a NextFtcOpMode
the way you would with a regular subsystem:

:::tabs key:code

== Kotlin

```kotlin
init {
    addComponents(
        SubsystemComponent(MySubsystemGroup)
    )
}
```

== Java 

```java
public MyOpMode() {
    addComponents(
        SubsystemComponent(MySubsystemGroup.INSTANCE)
    );
}
```

:::

## The Robot Subsystem

A Robot class is often used in FTC robot programs to encapsulate the robot's subsystems 
and provide a unified interface for controlling them. 
This class typically contains references to all of the robot's subsystems, 
as well as methods for initializing and updating them,
and for actions that involve multiple subsystems.

In NextFTC, we can create a Robot class that extends the SubsystemGroup class, 
allowing us to treat the entire robot as a single subsystem. 
This makes it easier to manage the robot's subsystems and their interactions.

Lets assume the [Claw](/claw) and [Lift](/lift) subsystems are both part of our robot,
and implemented as described in those sections.
We can create a Robot class that encapsulates these subsystems and provides a unified interface for controlling them.

:::tabs key:code

== Kotlin

```kotlin
object MyRobot : SubsystemGroup(
    Claw,
    Lift
)
```

== Java

```java
public class MyRobot extends SubsystemGroup {
    public static final MyRobot INSTANCE = new MyRobot();

    private MyRobot() {
        super(
            Claw.INSTANCE,
            Lift.INSTANCE
        );
    }
}
```

:::

Now, we can add methods to `MyRobot` that control the robot as a whole, 
by interacting with its subsystems.

:::tabs key:code

== Kotlin

```kotlin
val score = SequentialGroup(
    Lift.toHigh,
    Claw.open
).named("Score")
```

== Java

```java
public final Command score = new SequentialGroup(
    Lift.INSTANCE.toHigh,
    Claw.INSTANCE.open
).named("Score");
```

:::

You might notice that we use the `.named()` function to give our command a name. 
This can be useful for debugging and logging purposes, 
as it allows us to easily identify the command in the logs.

All command groups can be named in this way, 
making it easier to manage and debug complex robot behaviors,
though they also have default names that include the names of their constituent commands.
Depending on the complexity of a given command, 
you may choose to name it explicitly for clarity,
especially if it is part of a larger sequence of commands,
or keep its default name for simplicity.
