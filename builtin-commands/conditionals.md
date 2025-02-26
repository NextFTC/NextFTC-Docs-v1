# Conditionals

NextFTC has four conditional commands to help you implement conditional logic.

## `BlockingConditionalCommand`

A `BlockingConditionalCommand` takes a condition, a command to run on true, and a command to run on false. The condition is a boolean supplier, which is evaluated when the command is scheduled. The `BlockingConditionalCommand` finishes when its inner command finishes.

:::tabs key:code
== Kotlin

```kotlin
BlockingConditionalCommand(
    { 1 == 2 },
    { trueCommand },
    { falseCommand }
)
```

== Java

```java
new BlockingConditionalCommand(
    () -> 1 == 2,
    () -> trueCommand,
    () -> falseCommand
)
```

:::

## `PassiveConditionalCommand`

A `PassiveConditionalCommand` is similar to a `BlockingConditionalCommand`. However, instead of finishing when its inner command finishes, it schedules the inner command and finishes instantly.

:::tabs key:code
== Kotlin

```kotlin
PassiveConditionalCommand(
    { 1 == 2 },
    { trueCommand },
    { falseCommand }
)
```

== Java

```java
new PassiveConditionalCommand(
    () -> 1 == 2,
    () -> trueCommand,
    () -> falseCommand
)
```

:::

## `BlockingSwitchCommand`

A `BlockingSwitchCommand` is like a `BlockingConditionalCommand` but for a `switch` statement.

:::tabs key:code
== Kotlin

```kotlin
BlockingSwitchCommand(
    { "giraffe" },
    "beaver" to { beaverCommand },
    "giraffe" to { giraffeCommand },
    "hippo" to { hippoCommand }
)
```

== Java

```java
new BlockingSwitchCommand(
    Set.of("giraffe"),
    Map.entry("beaver", () -> beaverCommand),
    Map.entry("giraffe", () -> giraffeCommand),
    Map.entry("hippo", () -> hippoCommand)
)
```

:::

In addition, you can optionally pass a default command:

:::tabs key:code
== Kotlin

```kotlin
BlockingSwitchCommand(
    { "giraffe" },
    arrayOf(
        "beaver" to { beaverCommand },
        "giraffe" to { giraffeCommand },
        "hippo" to { hippoCommand }
    ),
    { defaultCommand }
)

```

== Java

```java
new BlockingSwitchCommand(
    () -> "giraffe,
    new Map.Entry[]{
        Map.entry("beaver", () -> beaverCommand),
        Map.entry("giraffe", () -> giraffeCommand),
        Map.entry("hippo", () -> hippoCommand)
    },
    () -> defaultCommand
)
```

:::

## `PassiveSwitchCommand`

A `PassiveSwitchCommand` is like a combination of a `BlockingSwitchCommand` and a `PassiveConditionalCommand`. It is a switch command that schedules the inner command and instantly finishes.

:::tabs key:code
== Kotlin

```kotlin
PassiveSwitchCommand(
    { "giraffe" },
    "beaver" to { beaverCommand },
    "giraffe" to { giraffeCommand },
    "hippo" to { hippoCommand }
)
```

== Java

```java
new PassiveSwitchCommand(
    Set.of("giraffe"),
    Map.entry("beaver", () -> beaverCommand),
    Map.entry("giraffe", () -> giraffeCommand),
    Map.entry("hippo", () -> hippoCommand)
)
```

:::

Just like with a `BlockingSwitchCommand`, you have the option to pass a default command:

:::tabs key:code
== Kotlin

```kotlin
PassiveSwitchCommand(
    { "giraffe" },
    arrayOf(
        "beaver" to { beaverCommand },
        "giraffe" to { giraffeCommand },
        "hippo" to { hippoCommand }
    ),
    { defaultCommand }
)

```

== Java

```java
new PassiveSwitchCommand(
    () -> "giraffe,
    new Map.Entry[]{
        Map.entry("beaver", () -> beaverCommand),
        Map.entry("giraffe", () -> giraffeCommand),
        Map.entry("hippo", () -> hippoCommand)
    },
    () -> defaultCommand
)
```

:::

> [!NOTE]
> See the [conditionals reference](https://docs.rowanmcalpin.com/reference/core/com.rowanmcalpin.nextftc.core.command.utility.conditionals/index.html) for more information.