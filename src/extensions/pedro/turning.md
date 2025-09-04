# Turning

The Pedro extension also provides two commands for turning: `TurnTo` and 
`TurnBy`.

## `TurnTo`

The `TurnTo` command turns the robot to a specified angle. It takes an `Angle` 
as an argument.

:::tabs key:code

== Kotlin

```kotlin
TurnTo(angle)

// examples:
TurnTo(180.deg)
TurnTo((PI / 2).rad)
```

== Java

```java
new TurnTo(angle);

// examples:
new TurnTo(Angle.fromDeg(180));
new TurnTo(Angle.fromRad(Math.PI / 2));
```

:::

## `TurnBy`

The `TurnBy` command turns the robot by a specified angle. Like `TurnTo`, it 
also takes an `Angle` as an argument.

:::tabs key:code

== Kotlin

```kotlin
TurnBy(angle)

// examples:
TurnBy(180.deg)
TurnBy((PI / 2).rad)
```

== Java

```java
new TurnBy(angle);

// examples:
new TurnBy(Angle.fromDeg(180));
new TurnBy(Angle.fromRad(Math.PI / 2));
```

:::