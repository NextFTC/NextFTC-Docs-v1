# Servos

To control your servos, you can use NextFTC's `ServoEx` class. A `ServoEx` 
wraps a `Servo` and implements `Positionable`.

:::tabs key:code

== Kotlin

```kotlin
ServoEx { servo }
ServoEx(servo)
ServoEx("servo_name")
```

== Java

```java
new ServoEx(() -> servo)
new ServoEx(servo)
new ServoEx("servo_name")
```

:::

Additionally, you can pass a position caching tolerance (defaults to 0.01):

:::tabs key:code

== Kotlin

```kotlin
ServoEx(cacheTolerance) { servo }
ServoEx(servo, cacheTolerance)
ServoEx("servo_name", cacheTolerance)
```

== Java

```java
new ServoEx(cacheTolerance, () -> servo)
new ServoEx(servo, cacheTolerance)
new ServoEx("servo_name", cacheTolerance)
```

:::