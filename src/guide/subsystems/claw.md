# Claw Subsystem

Another common subsystem in FTC is a claw. Generally, a claw is powered by one servo, generally with open and closed
positions.

This guide assumes you have already read the [lift subsystem guide](/nextftc/subsystems/lift). Let's get started!

## Step 1: Create your subsystem

Just like with the lift Subsystem, we need to start by creating our subsystem.

:::tabs key:code
== Kotlin

```kotlin
object Claw : Subsystem {

}
```

== Java

Remember the boilerplate!

```java
public class Claw implements Subsystem {
    // Boilerplate
    public static final Claw INSTANCE = new Claw();
    private Claw() { }

    // User Code
}
```

:::

## Step 2: Create your servo

Now, since we're using a servo, instead of a motor, let's create a servo variable.

:::tabs key:code
== Kotlin

```kotlin
private val servo = ServoEx("claw_servo")
```

== Java
Just like our motor variable from the lift subystem, we can't initialize it right away:

```java
private ServoEx servo = new ServoEx("claw_servo");
```

:::

## Step 3: Create commands

Programming servo commands is very easy in NextFTC.

For servos, the command you will be using is `SetPosition`. You will pass your servo and a target position.

:::tabs key:code
== Kotlin

Just like your lift, you will be creating properties that contain instances of Commands:

```kotlin
val open = SetPosition(servo, 0.1).setSubsystems(this)
```

== Java
Just like your lift, you will be creating fields that contain instance of commands:

```java
public Command open = new SetPosition(servo, 0.1).setSubsystems(this);
```

:::

Nice! Let's do the same with the `close` command:

:::tabs key:code
== Kotlin

```kotlin
val close = SetPosition(servo, 0.2).setSubsystems(this)
```

== Java

```java
public Command close = new SetPosition(servo, 0.2).setSubsystems(this);
```

:::

## Final result

You've successfully created your claw subsystem! Here's the final result:

:::tabs key:code
== Kotlin

```kotlin
object Claw : Subsystem {
    
    private val servo = ServoEx("claw_servo")

    val open = SetPosition(servo, 0.1).setSubsystems(this)
    val close = SetPosition(servo, 0.2).setSubsystems(this)
}
```

== Java

```java
public class Claw implements Subsystem {

    // Boilerplate
    public static final Claw INSTANCE = new Claw();
    private Claw() { }

    // User code
    private ServoEx servo = new ServoEx("claw_servo");

    public Command open = new SetPosition(servo, 0.1).setSubsystems(this);
    public Command close = new SetPosition(servo, 0.2).setSubsystems(this);
}
```

:::
