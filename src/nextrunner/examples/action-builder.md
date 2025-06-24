# Action Builder Example

The easiest way to create a NextRunner autonomous is with `actionBuilder`,
similarly to RoadRunner 1.0. 
Both `TankDrive` and `MecanumDrive` have an `actionBuilder` method,
with an optional `startPose: Pose2d` parameter.
If `startPose` is not provided, it defaults to `localizer.pose`.

Here is an example of how to use `actionBuilder`:

:::tabs key:code

== Kotlin

```kotlin 
@Autonomous
@Disabled
class ActionBuilderExampleKt : LinearOpMode() {
    lateinit var drive: MecanumDrive
    //because the variable is not initialized upon declaration, we add the lateinit modifier
    //remember that we can't initialize it until the runOpMode method, as it relies on hardwareMap
    //which itself is not initialized until then
    lateinit var action: Action

    override fun runOpMode() {
        drive = MecanumDrive(hardwareMap, Pose2d(0.0, 0.0, 0.0))
        action = drive.actionBuilder()
            .forward(10.0)
            .splineTo(Vector2d(10.0, 10.0), Math.toRadians(90.0))
            .build()

        waitForStart()

        runBlocking(action)
    }
}
```

== Java

```java
@Autonomous
@Disabled
public class ActionBuilderExample extends LinearOpMode {
    MecanumDrive drive;
    Action action;

    @Override
    public void runOpMode() throws InterruptedException {
        drive = new MecanumDrive(hardwareMap, new Pose2d(0.0, 0.0, 0.0));
        action = drive.actionBuilder() //since startPose is not provided, it will be Pose2d(0.0, 0.0, 0.0)
                .forward(10.0)
                .splineTo(new Vector2d(10.0, 10.0), Math.toRadians(90.0))
                .build();

        waitForStart();

        Actions.runBlocking(action);
    }
}
```

:::