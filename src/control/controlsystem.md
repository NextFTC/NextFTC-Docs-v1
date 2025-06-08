# Control System

Control Systems represent a combination of the Four Elements of control described earlier.
They are created using convenient builder syntax, or, for Kotlin users, a DSL-style builder.

Here is an easy example:

::: tabs key:code

== Kotlin

```kotlin
val system = controlSystem {
    posPid(0.5, 0.0, 0.0)
}

system.goal = KineticState(10.0, 0.0, 0.0)
```

== Java

```java
ControlSystem system = ControlSystem.builder()
    .posPid(0.5, 0, 0)
    .build();
    
system.setGoal(new KineticState(10.0, 0.0, 0.0));
```

:::

There are many quick methods to add pre-defined control elements, 
or you can define your own!

::: tabs key:code

== Kotlin

```kotlin
val controller = controlSystem {
        posFilter { 
            custom { 
                state -> 0.5 * state
            } 
        }
    }
```

== Java

```java
val controller = ControlSystem.builder()
                .posFilter(
                        filterBuilder -> filterBuilder.custom(
                                state -> state * 0.5
                        )
                ).build();
```

:::

::: warning
If you do not add an interpolator using the builder, 
you should specify the goal of the control system.
The default is `KineticState(0.0, 0.0, 0.0)`.
:::

## Using a Control System

To run the control system's calculations, call `calculate`, 
which accepts one `KineticState` argument representing the current measurement,
and returns an output following the process defined earlier.

We can then use this output to, say, power a motor.

More examples on using `ControlSystem`s will be provided in the Examples section.
