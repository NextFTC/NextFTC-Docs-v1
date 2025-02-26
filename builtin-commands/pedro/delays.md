# Delays

NextFTC has two position-related delays to help you time your commands with PedroPathing.

## `ProximityDelay`

`ProximityDelay` waits until the robot is within a tolerable distance of a point. In other words, it waits until the robot is in a circle centered at a point with a certain radius.

:::tabs key:code
== Kotlin

```kotlin
ProximityDelay(Pose(10.0, 12.0), 5.0) // pose(x, y), tolerance
// default tolerance is 4.0
```

== Java

```java
new ProximityDelay(new Pose(10.0, 12.0), 5.0) // pose(x, y), tolerance
// default tolerance is 4.0
```

:::

## `DisplacementDelay`

`DisplacementDelay` is the opposite of `ProximityDelay`. Instead of waiting until it's close to a point, `DisplacementDelay` waits until the robot is a certain distance *away* from a point. In other words,  it waits until the robot is *outside* of a circle centered at a point with a certain radius.

Another difference from `ProximityDelay` is that instead of specifying the point, the point is wherever the robot was when the command was scheduled.

:::tabs key:code
== Kotlin

```kotlin
DisplacementDelay(10.0) // distance from starting position
```

== Java

```java
new DisplacementDelay(10.0) // distance from starting position
```

:::

> [!NOTE]
> See the [PedroPathing reference](https://docs.rowanmcalpin.com/reference/pedro/com.rowanmcalpin.nextftc.pedro/index.html) for more information.