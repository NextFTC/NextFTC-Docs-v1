# Command Builder Example

> [!CAUTION]
> This example requires NextFTC's command-based library,
> and the compatibility module described [here](../index).

If you are using NextFTC's command-based system, 
the NextRunner compatibility module comes with a `TrajectoryCommandBuilder`, 
which acts like the `TrajectoryActionBuilder` from NextRunner's actions module,
but using NextFTC's commands!

The NextFTC branch of the QuickStart ([linked here](../index)) 
contains `MecanumDrive` and `TankDrive` subsystems that have a
`commandBuilder` method, with an optional `startPose: Pose2d` parameter.
If `startPose` is not provided, it defaults to `localizer.pose`.

The following is an example of how to use `commandBuilder` with NextFTC's command system.
Note that it uses NextFTC 0.6:

:::tabs key:code

== Kotlin

```kotlin 
class CommandBuilderExampleKt() : NextFTCOpMode(MecanumDrive.INSTANCE) {
    //despite the OpMode being written in Kotlin,
    //the drive subsystem is written in Java,
    //so its instance must be accessed with .INSTANCE
    lateinit var command: Command

    override fun onInit() {
        command = MecanumDrive.INSTANCE.commandBuilder()
            .forward(10.0)
            .splineTo(Vector2d(10.0, 10.0), Math.toRadians(90.0))
            .build()

    }

    override fun onStartButtonPressed() {
        command()
    }
}
```

== Java

```java
@Autonomous
@Disabled
public class CommandBuilderExample extends NextFTCOpMode {
    Command command;

    public CommandBuilderExample() {
        super(MecanumDrive.INSTANCE); //you must pass your drive subsystem to the constructor.
    }

    @Override
    public void onInit() {
        command = MecanumDrive.INSTANCE.commandBuilder()
                .forward(10.0)
                .splineTo(new Vector2d(10.0, 10.0), Math.toRadians(90.0))
                .build();
    }

    @Override
    public void onStartButtonPressed() {
        command.invoke();
    }
}
```

:::