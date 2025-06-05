# PedroPathing

If you're using [Pedro Pathing](https://pedropathing.com/), an Advanced Reactive
Vector Follower developed by FTC Team 10158, NextFTC has a simple integration of
this path following system in your autonomous programs. It's recommended that
you first read and implement the [Autonomous](/guide/opmodes/autonomous)
page into your code, before referring to this page.

This guide will show you how to use the basic following features of Pedro
Pathing, using its follower, with the core features of NextFTC such as command
groups and delays.

Let's begin!

## Step 1: Create your OpMode

Just like with our first autonomous, let's create an OpMode and add our 
subsystems and bulk reading. This time, we'll also add a `PedroComponent` 
with our constants classes.

:::tabs key:code

== Kotlin

```kotlin
@Autonomous(name = "NextFTC PedroPathing Autonomous Program Kotlin")
class PedroPathingAutonomousProgram : NextFTCOpMode() {
   init {
      addComponents(
         SubsystemComponent(Lift, Claw),
         BulkReadComponent(),
         PedroComponent(FConstants::class.java, LConstants::class.java)
      )
   }
}
```

== Java

```java
@Autonomous(name = "NextFTC PedroPathing Autonomous Program Java")
public class PedroPathingAutonomousProgram extends NextFTCOpMode {
    {
         addComponents(
            new SubsystemComponent(Lift.INSTANCE, Claw.INSTANCE),
            new BulkReadComponent(),
            new PedroComponent(FConstants.class, LConstants.class)
         );
    }
}
```

:::

## Step 2: Defining your PedroPathing Paths

We'll assume that you're following an autonomous similar to the PedroPathing
Example Auto, so you should have two poses and one `PathChain` that's already
been built in a `buildPaths()` function. Place your poses right below where you
instantiate your subsystems, then place your paths below that. It should look
like this:

:::tabs key:code

== Kotlin

```kotlin
private val startPose = Pose(9.0, 60.0, Math.toRadians(0.0))
private val finishPose = Pose(37.0, 50.0, Math.toRadians(180.0))

private val move = follower.pathBuilder()
    .addPath(BezierLine(Point(startPose), Point(finishPose)))
    .setLinearHeadingInterpolation(startPose.heading, finishPose.heading)
    .build()
```

== Java

```java
private final Pose startPose = new Pose(9.0, 60.0, Math.toRadians(0.0));
private final Pose finishPose = new Pose(37.0, 50.0, Math.toRadians(180.0));

private final PathChain move = follower().pathBuilder()
        .addPath(new BezierLine(new Point(startPose), new Point(finishPose)))
        .setLinearHeadingInterpolation(startPose.getHeading(), finishPose.getHeading())
        .build();
```

> [!IMPORTANT]
> Make sure to add the following to your imports:
> ```java
> import static com.rowanmcalpin.nextftc.pedro.PedroComponent.follower;
> ```

:::

## Step 3: Constructing your Path Following Routine

Now, to actually run your paths as part of your routine, it's very
straightforward! We're going to take our previous routine and create a new one,
this time with path following. The routine will:

1. _Simultaneously_ move your robot forward and raise the lift to the high
   position
2. _Simultaneously_ open the claw and move the lift to the middle position
3. Wait for a second
4. Move the lift to the low position

We're going to start by creating a new routine:

:::tabs key:code

== Kotlin

```kotlin
val autonomousRoutine: Command
```

== Java

```java
private Command autonomousRoutine() {
}
```

:::

We will then create our main `SequentialGroup`. Since the first step of our
routine is to _simultaneously_ move the robot and move the lift to the high
position, we'll also create a `ParallelGroup` that does this.

In order to actually have our robot follow a path, we can use the `FollowPath`
command to tell our follower to follow a specific path or path chain.

In this case, we will use our path chain we defined before, called `move`.

:::tabs key:code

== Kotlin

```kotlin
val autonomousRoutine: Command
    get() = SequentialGroup(
        ParallelGroup(
            FollowPath(move),
            Lift.toHigh
        )
    )
```

== Java

```java
private Command autonomousRoutine() {
    return new SequentialGroup(
        new ParallelGroup(
            new FollowPath(move),
            Lift.INSTANCE.toHigh
        )
    );
}
```

:::

For the second step, to _simultaneously_ open the claw and move the lift to the
middle position, we will simply create another `ParallelGroup` that does this

:::tabs key:code

== Kotlin

```kotlin
val autonomousRoutine: Command
    get() = SequentialGroup(
        ParallelGroup(
            FollowPath(move),
            Lift.toHigh
        ),
        ParallelGroup(
            Claw.open,
            Lift.toMiddle
        )
    )
```

== Java

```java
private Command autonomousRoutine() {
    return new SequentialGroup(
        new ParallelGroup(
            new FollowPath(move),
            Lift.INSTANCE.toHigh
        ),
        new ParallelGroup(
            Claw.INSTANCE.open,
            Lift.INSTANCE.toMiddle
        )
    );
}
```

:::

And finally, our last two steps of our routine are adding a delay for a second,
and then moving our lift to the low position.

:::tabs key:code

== Kotlin

```kotlin
val autonomousRoutine: Command
    get() = SequentialGroup(
        ParallelGroup(
            FollowPath(move),
            Lift.toHigh
        ),
        ParallelGroup(
            Claw.open,
            Lift.toMiddle
        ),
        Delay(1.0),
        Lift.toLow
    )
```

== Java

```java
private Command autonomousRoutine() {
    return new SequentialGroup(
        new ParallelGroup(
            new FollowPath(move),
            Lift.INSTANCE.toHigh
        ),
        new ParallelGroup(
            Claw.INSTANCE.open,
            Lift.INSTANCE.toMiddle
        ),
        new Delay(1.0),
        Lift.INSTANCE.toLow
    );
}
```

:::

## Step 4: Running your PedroPathing routine

Finally, we can run our routine by overriding the `onStartButtonPressed()`
function.

:::tabs key:code

== Kotlin

```kotlin
override fun onStartButtonPressed() {
    autonomousRoutine()
}
```

== Java

```java
@Override
public void onStartButtonPressed() {
    autonomousRoutine().schedule();
}
```

:::

## Final Result

That's everything! This completes the integration of Pedro Pathing with NextFTC
in your autonomous program. Hopefully, you can also use what you've learned from
this guide to create more complex routines, combining path following with other
robot actions.

Here is the final result:

:::tabs key:code

== Kotlin

```kotlin
@Autonomous(name = "NextFTC PedroPathing Autonomous Program Kotlin")
class PedroPathingAutonomousProgram : NextFTCOpMode() {
    init {
        addComponents(
            SubsystemComponent(Lift, Claw),
            BulkReadComponent(),
            PedroComponent(FConstants::class.java, LConstants::class.java)
        )
    }

    private val startPose = Pose(9.0, 60.0, Math.toRadians(0.0))
    private val finishPose = Pose(37.0, 50.0, Math.toRadians(180.0))

    private val move = follower.pathBuilder()
        .addPath(BezierLine(Point(startPose), Point(finishPose)))
        .setLinearHeadingInterpolation(startPose.heading, finishPose.heading)
        .build()

    private val autonomousRoutine: Command
        get() = SequentialGroup(
            ParallelGroup(
                FollowPath(move),
                Lift.toHigh
            ),
            ParallelGroup(
                Claw.open,
                Lift.toMiddle
            ),
            Delay(1.0.sec),
            Lift.toLow
        )

    override fun onStartButtonPressed() {
        autonomousRoutine()
    }
}
```

== Java

```java
@Autonomous(name = "NextFTC PedroPathing Autonomous Program Java")
public class PedroPathingAutonomousProgram extends NextFTCOpMode {
    {
        addComponents(
                new SubsystemComponent(Lift.INSTANCE, Claw.INSTANCE),
                new BulkReadComponent(),
                new PedroComponent(FConstants.class, LConstants.class)
        );
    }

    private final Pose startPose = new Pose(9.0, 60.0, Math.toRadians(0.0));
    private final Pose finishPose = new Pose(37.0, 50.0, Math.toRadians(180.0));

    private final PathChain move = follower().pathBuilder()
            .addPath(new BezierLine(new Point(startPose), new Point(finishPose)))
            .setLinearHeadingInterpolation(startPose.getHeading(), finishPose.getHeading())
            .build();

    private Command autonomousRoutine() {
        return new SequentialGroup(
                new ParallelGroup(
                        new FollowPath(move),
                        Lift.INSTANCE.toHigh
                ),
                new ParallelGroup(
                        Claw.INSTANCE.open,
                        Lift.INSTANCE.toMiddle
                ),
                new Delay(1.0),
                Lift.INSTANCE.toLow
        );
    }

    @Override
    public void onStartButtonPressed() {
        autonomousRoutine().schedule();
    }
}
```

:::