# Using Other Commands with RoadRunner

The `TrajectoryCommandBuilder` has functions to schedule other commands
during trajectory execution. This can be useful for coordinating
mechanisms on your robot while following a path.

Here are the functions available in `TrajectoryCommandBuilder`
for this purpose:
- `waitSeconds(seconds: Double)`: Adds a wait period to the trajectory.
  An additional overload accepts a `Duration` argument instead of a `Double`.
- `afterTime(seconds: Double, command: Command)`: Schedules a command to run
after a specified time into the trajectory.
  An additional overload accepts
a `Duration` argument instead of a `Double`.
- `afterDisplacement(displacement: Double, command: Command)`: Schedules a command
to run after the robot has traveled a specified distance along the trajectory.
- `stopAndAdd(command: Command)`: Stops the trajectory following and runs
the specified command.
  The trajectory will resume after the command completes.

`afterTime`, `afterDisplacement`, and `stopAndAdd` also have overloads
that accept a `Runnable` instead of a `Command` object,
which schedules an `InstantCommand`.

Here is an example of using these functions in an OpMode,
using the [lift](../../guide/subsystems/lift) and
[claw](../../guide/subsystems/claw) subsystems from the previous guides.

As you can see, this example requires you to use the `SubsystemComponent`
to add the subsystems to your OpMode, so that their `periodic` methods
are called during the OpMode.
You can add other subsystems to the same
`SubsystemComponent` if needed, and other `Component` types can be added
alongside it if needed or desired.

::: tabs key:code
== Kotlin
```kotlin
class OtherCommandsKt : NextFTCOpMode() {
    private val startPose = Pose2d(9.0, 111.0, Math.toRadians(-90.0))
    private val scorePose = Pose2d(16.0, 128.0, Math.toRadians(-45.0))

    val drive: MecanumDrive by onInit {
        MecanumDrive(hardwareMap, startPose)
    }
    
    val driveCommand: Command by onInit {
        drive.commandBuilder(startPose)
            .splineTo(scorePose.position, scorePose.heading)
            .afterTime(500.milliseconds, Lift.toHigh)
            .stopAndAdd(Claw.open)
            .build()
    }
    
    init {
        addComponents(
            SubsystemComponent(Lift, Claw)
        )
    }

    override fun onStartButtonPressed() {
        driveCommand.schedule()
    }
}
```
== Java
```java
public class OtherCommands extends NextFTCOpMode {
    private final Pose2d startPose = new Pose2d(9.0, 111.0, Math.toRadians(-90.0));
    private final Pose2d scorePose = new Pose2d(16.0, 128.0, Math.toRadians(-45.0));

    MecanumDrive drive;
    Command driveCommand;
    
    public OtherCommands() {
        addComponents(
            new SubsystemComponent(Lift.INSTANCE, Claw.INSTANCE)
        );
    }

    @Override
    public void onInit() {
        drive = new MecanumDrive(hardwareMap, startPose);

        driveCommand = drive.commandBuilder(startPose)
            .splineTo(scorePose.position, scorePose.heading)
            .afterTime(0.5, Lift.INSTANCE.toHigh())
            .stopAndAdd(Claw.INSTANCE.open())
            .build();
    }

    @Override
    public void onStartButtonPressed() {
        driveCommand.schedule();
    }
}
```
