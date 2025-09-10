# `SetPositions`

`SetPositions`, along with `SetPosition`, are used to set the position of a 
`Positionable` (such as a `ServoEx`). 

The constructor of `SetPositions` takes a `vararg Pair<Positionable, Double>`. 

:::tabs key:code

== Kotlin

```kotlin
SetPositions(servo1 to position1, servo2 to position2, ...)
```

== Java

```java
new SetPositions(servo1.to(position1), servo2.to(position2), ...)
```

:::

Alternatively, for a single servo, you can use `SetPosition`:

:::tabs key:code

== Kotlin

```kotlin
SetPosition(servo, position)
```

== Java

```java
new SetPosition(servo, position)
```

:::