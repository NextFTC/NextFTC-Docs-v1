# Subsystems

Subsystems are a unit of organization for your code. A subsystem represents
a hardware component on your robot. Although they are
completely optional, it is highly recommended that you use them. They
provide a great alternative to the "robot class" antipattern.

## Creating Subsystems

To create a subsystem, just implement the `Subsystem` interface! You can
optionally implement the `initialize` and/or `periodic` functions as well.

:::tabs key:code

== Kotlin

```kotlin
class MySubsystem : Subsystem {
    // put hardware, commands, etc here
    
    override fun initialize() {
        // initialization logic (runs on init)
    }
    
    override fun periodic() {
        // periodic logic (runs every loop)
    }
}
```

== Java

```java
public class MySubsystem implements Subsystem {
    // put hardware, commands, etc here
    
    @Override
    public void initialize() {
        // initialization logic (runs on init)
    }
    
    @Override
    public void periodic() {
        // periodic logic (runs every loop)
    }
} 
```

:::

## Registering Subsystems

To register a subsystem in your OpMode, pass it to a `SubsystemComponent` as
one of your components. A `SubsystemComponent` can take one or many
subsystems. Registering a subsystem ensures that its `initialize` and
`periodic` functions are called at the appropriate times.

## Subsystems as Requirements

It is generally best to have a subsystem as the requirement for the commands
in that subsystem. For example:

:::tabs key:code

== Kotlin

```kotlin
val open = SetPositon(claw, 1.0).setSubsystems(this)
```

== Java

```java
public Command open = new SetPosition(claw, 1).setSubsystems(this);
```

:::

However, if you have multiple degrees of freedom in one subsystem, commands
for each degree of freedom should get its own requirement. A simple way to
do this is as follows.

:::tabs key:code

== Kotlin

```kotlin
private val claw = Any()
private val pivot = Any()

val openClaw = SetPosition(clawServo, 1.0).setSubsystems(claw)
val closeClaw = SetPosition(clawServo, 0.0).setSubsystems(claw)

val pivotLeft = SetPosition(pivotServo, 0.0).setSubsystems(pivot)
val pivotRight = SetPostion(pivotServo, 1.0).setSubsystems(left) 
```

== Java

```java
private Object claw = new Object();
private Object pivot = new Object();

public Command openClaw = new SetPosition(clawServo, 1).setSubsystems(claw);
public Command closeClaw = new SetPosition(clawServo, 0).setSubsystems(claw);

public Command pivotLeft = new SetPosition(pivotServo, 0.0).setSubsystems(pivot);
public Command pivotRight = new SetPosition(pivotServo, 0.0).setSubsystems(pivot);
```

:::