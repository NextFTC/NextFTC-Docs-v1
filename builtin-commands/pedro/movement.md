# Movement

NextFTC has commands to help you move your robot in autonomous with PedroPathing.

## `FollowPath`

`FollowPath` follows a PedroPathing `Path` or `PathChain`. If you pass a `Path` it will automatically convert it to a `PathChain`. `PathChains` have the added benefit of (optional) `holdEnd`.

:::tabs key:code
== Kotlin

```kotlin
FollowPath(path)
FollowPath(pathChain)

// or with holdEnd:
FollowPath(path, true)
FollowPath(pathChain, true)
```

== Java

```java
new FollowPath(path)
new FollowPath(pathChain)

// or with holdEnd:
new FollowPath(path, true)
new FollowPath(pathChain, true)
```

:::

You can also pass a max power that will be used only for that path.

:::tabs key:code
== Kotlin

```kotlin
new FollowPath(path, maxPower = 0.75)
```

== Java

```java
new FollowPath(path, true, 0.75)
```

:::

## `Turn`

`Turn` turns the robot by an angle. It takes an [`Angle`](/concepts/units#angle) to turn by.

:::tabs key:code
== Kotlin

```kotlin
Turn(180.deg)
```

== Java

```java
new Turn(Angle.fromDeg(180))
```

:::

Optionally, you can pass a tolerance as well, which is how far from the target heading the robot needs to be to finish.

:::tabs key:code
== Kotlin

```kotlin
Turn(180.deg, 10.deg) // the default tolerance is 5 degrees.
```

== Java

```java
new Turn(Angle.fromDeg(180), Angle.fromDeg(10)) // the default tolerance is 5 degrees.
```

:::

## `TurnTo`

Unlike `Turn`, which turns *by* an angle, `TurnTo` turns *to* an angle.

:::tabs key:code
== Kotlin

```kotlin
TurnTo(45.deg)

// we can also specify a tolerance:
TurnTo(45.deg, 10.deg)
```

== Java

```java
new TurnTo(Angle.fromDeg(45))

// we can also specify a tolerance:
new TurnTo(Angle.fromDeg(45), Angle.fromDeg(10))
```

:::

> [!NOTE]
> See the [PedroPathing reference](https://nextftc.dev/reference/pedro/com.rowanmcalpin.nextftc.pedro/index.html) for more information.