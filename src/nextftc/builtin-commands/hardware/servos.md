# Servo Commands

Just like for motors, NextFTC has commands to help you easily control your servos. NextFTC currently has three commands to help you control your servos: `ServoToPosition`, `MultipleServosToPosition`, and `MultipleServosToSeperatePositions`.

> [!IMPORTANT]
> Some time in the future, NextFTC will get a servo wrapper, similar to `MotorEx`.

## `ServoToPosition`

`ServoToPosition` takes a servo and a position:

:::tabs key:code
== Kotlin

```kotlin
ServoToPosition(servo, position, setOf(subsystems))

// or in a subsystem:
ServoToPosition(servo, position, this)
```

== Java

```java
new ServoToPosition(servo, position, Set.of(subsystems))

// or in a subsystem:
new ServoToPosition(servo, position, this)
```

:::

## `MultipleServosToPosition`

`MultipleServosToPosition` is like `ServoToPosition`, but instead of taking a servo, it takes a list of servos.

:::tabs key:code
== Kotlin

```kotlin
MultipleServosToPosition(
    listOf(
        servo1,
        servo2
    ),
    position,
    setOf(subsystems)
)

// or in a subsystem:
MultipleServosToPosition(
    listOf(
        servo1,
        servo2
    ),
    position,
    this
)
```

== Java

```java
new MultipleServosToPosition(
    List.of(
        servo1,
        servo2
    ),
    position,
    Set.of(subsystems)
)

// or in a subsystem:
new MultipleServosToPosition(
    List.of(
        servo1,
        servo2
    ),
    position,
    this
)
```

:::

## `MultipleServosToSeperatePositions`

`MultipleServosToSeperatePositions` is like `MultipleServosToPosition` but instead of moving them to the same position, it moves them to different positions.

> [!WARNING]
> Although in some cases `MultipleServosToSeperatePositions` can be useful, in most cases where you think you need it there is a better option. Often, one of the following can be done:
>
> - Reverse one of the servos. For example, if one servo must go to 0.4 and one must go to 0.6, you can reverse one and then use `MultipleServosToPosition`.
> - Split it into seperate subsystems. Remember: you should have **one subsystem for every part of your robot that can be controlled independently**.

`MultipleServosToSeperatePositions` takes a map of servos to positions.

:::tabs key:code
== Kotlin

```kotlin
MultipleServosToSeperatePositions(
    mapOf(
        servo1 to position1,
        servo2 to position2
    ),
    setOf(subsystems)
)

// or in a subsystem:
MultipleServosToSeperatePositions(
    mapOf(
        servo1 to position1,
        servo2 to position2
    ),
    this
)
```

== Java

```java
new MultipleServosToSeperatePositions(
    Map.of(
        servo1, position1,
        servo2, position2
    ),
    Set.of(subsystems)
)

// or in a subsystem:
new MultipleServosToSeperatePositions(
    Map.of(
        servo1, position1,
        servo2, position2
    ),
    this
)
```

:::

> [!NOTE]
> See the [hardware reference](https://nextftc.dev/reference/ftc/com.rowanmcalpin.nextftc.ftc.hardware/index.html) for more information.