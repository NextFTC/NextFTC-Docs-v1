# Trajectory Command Builder

The RoadRunner extension provides a `TrajectoryCommandBuilder` class 
that makes it easy to create commands that follow trajectories,
similar to `TrajectoryActionBuilder` in the RoadRunner library.

Once you've set up the RoadRunner extension in your project,
including the relevant changes to your `MecanumDrive` class,
you can create trajectory-following commands using the 
`commandBuilder` method of your `MecanumDrive` instance.
It takes an optional `Pose2d` parameter to set the starting pose of the trajectory;
if not provided, it will use the starting pose of the robot
(as set in your localizer or by the `MecanumDrive` constructor).

Here is an example OpMode that creates and runs a simple trajectory:

::: tabs key:code
== Kotlin
This example uses the `onInit` property delegate
to initialize the `MecanumDrive` and `Command` properties
once the OpMode is initialized on the Driver Station.

```kotlin
class CommandBuilderKt : NextFTCOpMode() {
    private val startPose = Pose2d(9.0, 111.0, Math.toRadians(-90.0))
    private val scorePose = Pose2d(16.0, 128.0, Math.toRadians(-45.0))

    val drive: MecanumDrive by onInit {
        MecanumDrive(hardwareMap, startPose)
    }
    
    // the onInit blocks are executed in the order they are defined,
    // so `drive` will be initialized before `driveCommand`.
    val driveCommand: Command by onInit {
        drive.commandBuilder(startPose)
            .splineTo(scorePose.position, scorePose.heading)
            .build()
    }

    override fun onStartButtonPressed() {
        driveCommand.schedule()
    }
}
```

== Java
```java
public class CommandBuilder extends NextFTCOpMode {
    private final Pose2d startPose = new Pose2d(9.0, 111.0, Math.toRadians(-90.0));
    private final Pose2d scorePose = new Pose2d(16.0, 128.0, Math.toRadians(-45.0));
    
    MecanumDrive drive;
    Command driveCommand;

    @Override
    public void onInit() {
        drive = new MecanumDrive(hardwareMap, startPose);

        driveCommand = drive.commandBuilder(startPose)
                .splineTo(scorePose.position, scorePose.heading)
                .build();
    }
    
    @Override
    public void onStartButtonPressed() {
        driveCommand.schedule();
    }
}
```

If you are not using any `Components`, 
you can omit the constructors and `addComponents` calls,
like in the above examples.

Otherwise, move on to the next example,
which shows how to use the RoadRunner extension
with other components.