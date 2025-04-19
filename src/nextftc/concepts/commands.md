# Commands

_Why use commands?_ Commands allow you to **organize your code** much more efficiently than you could otherwise. They are an excellent alternative to [finite state machines](https://gm0.org/en/latest/docs/software/concepts/finite-state-machines.html), but are a lot easier to create and modify, and can reach higher levels of complexity than a finite state machine can.

## Parts of a Command

A command has four main components: `isDone`, `start`, `update`, and `stop`.

-   `isDone` is checked every loop. If it ever evaluates to `true`, the command will stop running.
-   `start` is run once, when the command is scheduled. It is used for setting up starting states and doing other things that should only happen once.
-   `update` runs every loop, many times per second. Because of this, it is crucial that it never takes more than a trivial amount of time to execute. You should be extremely careful of looping or doing anything else that could take significant amounts of time
-   `stop` runs once when the command ends, and recieves a parameter of whether or not it was interrupted by a different command.

Additionally, it has two more properties:

-   `interruptible` determines whether or not the command is able to be interrupted. A command is interrupted when another command is scheduled that requires a subsystem the command is using. If a command is not interruptible, then the new command will not run.
-   `subsystems` is a set of all the subsystems a command uses. This is used for determing when two commands requrie the same subsystem. This is passed to the constructor of most premade commands.

## Creating Commands

There are two ways to create a command: a `LambdaCommand` and by creating your own command class.

### Lambda Commands

A lambda command is the main way to create a command in NextFTC. A lambda command can be created as follows:

:::tabs key:code
== Kotlin

```kotlin
val myLambdaCommand = LambdaCommand()
    .setStart {
        // Runs on start
    }
    .setUpdate {
        // Runs on update
    }
    .setStop { interrupted ->
        // Runs on stop
    }
    .setIsDone { true } // Returns if the commmand has finished
    .setSubsystems(/* subsystems the command implements */)
    .setInterruptible(true)
```

== Java

```java
Command myLambdaCommand = new LambdaCommand()
    .setStart(() -> {
        // Runs on start
    })
    .setUpdate(() -> {
        // Runs on update
    })
    .setStop(interrupted -> {
        // Runs on stop
    })
    .setIsDone(() -> true) // Returns if the command has finished
    .setSubsystems(/* subsystems the command implements */)
    .setInterruptible(true)
```

:::

> [!TIP]
> All functions are completely optional. You only need to call the ones you will use. They can be called in any order.

> [!NOTE]
> See the [`LambdaCommand` reference](https://nextftc.dev/reference/core/com.rowanmcalpin.nextftc.core.command.utility/-lambda-command/index.html) for more information.

## Commands as Classes

It is unlikely that you will need to use this very often, but you can also create a command as a class. This is useful for cases where you need to reuse your command a lot. An command can be created as a class as follows:

:::tabs key:code
== Kotlin

```kotlin
class MyCommand(): Command() {

    init {
        setSubsystems(/* subsystems */) // you can make this a constructor parameter, if needed
        setInterruptible(true) // this is the default, so you don't need to specify
    }

    override val isDone: Boolean
        get() = false // whether or not the command is done

    override fun start() {
        // executed when the command begins
    }

    override fun update() {
        // executed on every update of the command
    }

    override fun stop(interrupted: Boolean) {
        // executed when the command ends
    }
}
```

== Java

```java
public class MyCommand extends Command {

    public MyCommand() {
        setSubsystems(/* subsystems */); // you can make this a constructor parameter, if needed
        setInterrptuptible(true); // this is the default, so you don't need to specify
    }

    @Override
    public boolean isDone() {
        return false; // whether or not the command is done
    }

    @Override
    public void start() {
        // executed when the command begins
    }

    @Override
    public void update() {
        // executed on every update of the command
    }

    @Override
    public void stop(boolean interrupted) {
        // executed when the command ends
    }
}
```

:::

## Executing Commands

There are two ways to schedule a command.

You can either call:
:::tabs key:code
== Kotlin

```kotlin
val myCommand = MyCommand() // Or a LambdaCommand
CommandManager.scheduleCommand(myCommand)
```

== Java

```java
Command myCommand = new MyCommand(); // Or a LambdaCommand
CommandManager.INSTANCE.scheduleCommand(myCommand);
```

:::

Or just:
:::tabs key:code
== Kotlin

```kotlin
val myCommand = MyCommand() // Or a LambdaCommand
myCommand()
```

== Java

```java
Command myCommand = new MyCommand(); // Or a LambdaCommand
myCommand.schedule();
```

:::

> [!NOTE]
> See the [`Command` reference](https://nextftc.dev/reference/core/com.rowanmcalpin.nextftc.core.command/-command/index.html) for more information.
