# Delays

In NextFTC there are two types of delays.

## `Delay`

A `Delay` is a command that waits a certain amount of time before finishing. It takes a [`TimeSpan`](/nextftc/concepts/units#timespan) to determine how long it will take. Alternatively, it can take a time in seconds.

:::tabs key:code
== Kotlin

```kotlin
// it can take a TimeSpan:
Delay(5.sec)
Delay(500.ms)

// or a time in seconds, as an Int or a Double
Delay(5)
Delay(5.0)
```

== Java

```java
// it can take a TimeSpan:
new Delay(TimeSpan.fromSec(5))
new Delay(TimeSpan.fromMs(500))

// or a time in seconds, as an int or a double
new Delay(5)
new Delay(5.0)
```

:::

## `WaitUntil`

`WaitUntil` evaluates a check every loop and ends when it returns true.

:::tabs key:code
== Kotlin

```kotlin
WaitUntil { false } // never ends
```

== Java

```java
new WaitUntil(() -> false) // never ends
```

:::

## Delay Utilities

There are a few utilities that help you write common delays more easily.

### `endAfter`

`endAfter` returns a `ParallelRaceGroup` with the command and a `Delay`. This causes the command to have a maximum time it can be before it ends.

:::tabs key:code
== Kotlin

```kotlin
// All are equivalent
command.endAfter(2.sec)
command.endAfter(2000.ms)
command.endAfter(2)
command.endAfter(2.0)
ParallelRaceGroup(
    command,
    Delay(2.sec)
)
```

== Java

```java
// All are equivalent
command.endAfter(TimeSpan.fromSec(2))
command.endAfter(TimeSpan.fromMs(2000))
command.endAfter(2)
command.endAfter(2.0)
new ParallelRaceGroup(
    command,
    new Delay(TimeSpan.fromSec(2))
)
```

:::

### `afterTime`

`afterTime` returns a `SequentialGroup` with a `Delay` and then the command. This causes the command to wait a certain amount of time before starting.

:::tabs key:code
== Kotlin

```kotlin
// All are equivalent
command.afterTime(2.sec)
command.afterTime(2000.ms)
command.afterTime(2)
command.afterTime(2.0)
SequentialGroup(
    Delay(2.sec),
    command
)
```

== Java

```java
// All are equivalent
command.afterTime(TimeSpan.fromSec(2))
command.afterTime(TimeSpan.fromMs(2000))
command.afterTime(2)
command.afterTime(2.0)
new SequentialGroup(
    new Delay(TimeSpan.fromSec(2)),
    command
)
```

:::

### `thenWait`

`thenWait` is like `afterTime`, but the opposite! `thenWait` returns a `SequentialGroup` with the command *and then* a `Delay`.

:::tabs key:code
== Kotlin

```kotlin
// All are equivalent
command.thenWait(2.sec)
command.thenWait(2000.ms)
command.thenWait(2)
command.thenWait(2.0)
SequentialGroup(
    command,
    Delay(2.sec)
)
```

== Java

```java
// All are equivalent
command.thenWait(TimeSpan.fromSec(2))
command.thenWait(TimeSpan.fromMs(2000))
command.thenWait(2)
command.thenWait(2.0)
new SequentialGroup(
    command,
    new Delay(TimeSpan.fromSec(2))
)
```

:::

> [!NOTE]
> See the [delays reference](https://nextftc.dev/reference/core/com.rowanmcalpin.nextftc.core.command.utility.delays/index.html) for more information.