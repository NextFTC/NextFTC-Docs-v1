# Motor Commands

NextFTC has a bunch of motor commands so that you don't have to write your own!

## `RunToPosition`

`RunToPosition` is likely the most common motor command you will use. It takes a `Controllable` (like a `MotorEx` or a `MotorGroup`), a `Controller`, and a target. It finishes once the motor is in a tolerable distance of the target.

:::tabs key:code
== Kotlin

```kotlin
RunToPosition(motor, target, controller, setOf(subsystems))

// or in a subsystem:
RunToPosition(motor, target, controller, this)
```

== Java

```java
new RunToPosition(motor, target, controller, Set.of(subsystems))

// or in a subsystem:
new RunToPosition(motor, target, controller, this)
```

:::

The tolerance of the controller can be set with `controller.setPointTolerance` as follows:

:::tabs key:code
== Kotlin

```kotlin
controller.setPointTolerance(20.0) // default is 10
```

== Java

```java
controller.setPointTolerance(20.0); // default is 10
```

:::

## `HoldPosition`

`HoldPosition` holds a motor at the position it was at when the command was scheduled.

:::tabs key:code
== Kotlin

```kotlin
HoldPosition(motor, controller, setOf(subsystems))
```

== Java

```java
new HoldPosition(motor, controller, Set.of(subsystems))
```

:::

It is mostly commonly used as the default command in a subsystem, which means it will run when no other command is being run.

:::tabs key:code
== Kotlin

```kotlin
override val defaultCommand: Command
        get() = HoldPosition(motor, controller, this)
```

== Java

```java
@Override
public Command getDefaultCommand() {
    return new HoldPosition(motor, controller, this);
}
```

:::

## `SetPower`

`SetPower` is very simple: it sets the power and ends instantly.

:::tabs key:code
== Kotlin

```kotlin
SetPower(motor, power, setOf(subsystems))

// or in a subsystem:
SetPower(motor, power, this)
```

== Java

```java
new SetPower(motor, power, Set.of(subsystems))

// or in a subsystem:
new SetPower(motor, power, this)
```

:::

## `RunToVelocity`

`RunToVelocity` uses a controller on a motor until it reaches a set velocity and then *depowers the motor*.

:::tabs key:code
== Kotlin

```kotlin
RunToVelocity(motor, velocity, controller, setOf(subsystems))

// or in a subsystem:
RunToVelocity(motor, velocity, controller, this)
```

== Java

```java
new RunToVelocity(motor, velocity, controller, Set.of(subsystems))

// or in a subsystem:
new RunToVelocity(motor, velocity, controller, this)
```

:::

Optionally, you can pass the condition when it ends as well.

:::tabs key:code
== Kotlin

```kotlin
RunToVelocity(
    motor,
    velocity,
    controller,
    setOf(subsystems),
    { abs(motor.velocity) - velocity < 10 } // this is the default
)
```

== Java

```java
new RunToVelocity(
    motor,
    velocity,
    controller,
    Set.of(subsystems),
    () -> Math.abs(motor.getVelocity()) - velocity < 10 // this is the default
)
```

:::

## `HoldVelocity`

`HoldVelocity` is like a combination of `RunToVelocity` and `HoldPosition`: it keeps a motor at the velocity it was at when the command was scheduled.


:::tabs key:code
== Kotlin

```kotlin
HoldVelocity(motor, controller, setOf(subsystems))
```

== Java

```java
new HoldVelocity(motor, controller, Set.of(subsystems))
```

:::

Like `HoldPosition`, `HoldVelocity` is most commonly used as the default command in a subsystem. This is useful for something like a flywheel. You can have `RunToVelocity` commands that bring it to a velocity (spinning or stopped), and the `HoldVelocity` command will run when those stop to keep it at that velocity.

:::tabs key:code
== Kotlin

```kotlin
override val defaultCommand: Command
        get() = HoldVelocity(motor, controller, this)
```

== Java

```java
@Override
public Command getDefaultCommand() {
    return new HoldVelocity(motor, controller, this);
}
```

:::

## `ResetEncoder`

`ResetEncoder` does exactly what it sounds like: it resets the encoder.

:::tabs key:code
== Kotlin

```kotlin
ResetEncoder(motor, setOf(subsystems))

// or in a subsystem:
ResetEncoder(motor, this)
```

== Java

```java
new ResetEncoder(motor, Set.of(subsystems))

// or in a subsystem:
new ResetEncoder(motor, this)
```

:::

> [!NOTE]
> See the [controllables reference](https://nextftc.dev/reference/ftc/com.rowanmcalpin.nextftc.ftc.hardware.controllables/) for more information.