# Pedro Pathing Extension

::: info
This guide is a work-in-progress.
Check back later for updates!
:::

This extension provides integration with the 
[Pedro Pathing Library](https://pedropathing.com/),
allowing you to use its features within your NextFTC projects.

## Installation

To install the Pedro Pathing extension, 
add the following line to your `build.gradle` file:

```groovy
implementation 'dev.nextftc.extensions:pedro:1.0.0'
```

::: warning
Version `1.0.0` supports Pedro Pathing `2.0.0`,
and is not compatible with earlier versions.
:::

## Usage

### `PedroComponent`

To use the Pedro Pathing extension,
add a `PedroComponent` object to the `addComponents` call
in your `NextFtcOpMode`, using `createFollower` from your
`Constants` class.

::: tabs key:code

== Kotlin
```kotlin
class MyOpModeKt : NextFTCOpMode() {
    init {
        addComponents(
            PedroComponent(Constants::createFollower)
        )
    }
}
```

== Java
```java
public class MyOpModeJava extends NextFTCOpMode {
    public MyOpModeJava() {
        addComponents(
            new PedroComponent(Constants::createFollower)
        );
    }
}
```
:::

### The Follower

Once you've added the `PedroComponent`, 
you can access the `Follower` instance
as a static property of the `PedroComponent` class
(`PedroComponent.follower` in Kotlin, or `PedroComponent.follower()` in Java).

### Creating Path Commands

To create path commands, you can use the `FollowPath` command,
passing in a `Path` or a `PathChain` argument.

::: tabs key:code
== Kotlin
```kotlin
private val startPose = Pose(9.0, 111.0, Math.Math.toRadians(-90.0))
private val scorePose = Pose(16.0, 128.0, Math.Math.toRadians(-45.0))
private val pickup1Pose = Pose(30.0, 121.0, Math.Math.toRadians(0.0))
private val pickup2Pose = Pose(30.0, 131.0, Math.Math.toRadians(0.0))
private val pickup3Pose = Pose(45.0, 128.0, Math.Math.toRadians(90.0))
private val parkPose = Pose(68.0, 96.0, Math.Math.toRadians(-90.0))

class MyOpModeKt : NextFTCOpMode() {
    init {
        addComponents(
            PedroComponent(Constants::createFollower)
        )
    }

    val pathCommand by onInit { 
        FollowPath(PedroComponent.follower.pathBuilder()
            .addPath(BezierLine(startPose, scorePose))
            .setLinearHeadingInterpolation(startPose.heading, scorePose.heading)
            .build())
    }

    override fun onWaitForStart() {
        pathCommand.schedule()
    }
}
```

== Java
```java
public class MyOpMode extends NextFTCOpMode {
    private final Pose startPose = new Pose(9.0, 111.0, Math.toRadians(-90.0));
    private final Pose scorePose = new Pose(16.0, 128.0, Math.toRadians(-45.0));
    private final Pose pickup1Pose = new Pose(30.0, 121.0, Math.toRadians(0.0));
    private final Pose pickup2Pose = new Pose(30.0, 131.0, Math.toRadians(0.0));
    private final Pose pickup3Pose = new Pose(45.0, 128.0, Math.toRadians(90.0));
    private final Pose parkPose = new Pose(68.0, 96.0, Math.toRadians(-90.0));
    
    private FollowPath pathCommand;

    public MyOpMode() {
        addComponents(
            new PedroComponent(Constants::createFollower)
        );
    }

    @Override
    public void onInit() {
        pathCommand = new FollowPath(PedroComponent.follower().pathBuilder()
            .addPath(new BezierLine(startPose, scorePose))
            .setLinearHeadingInterpolation(startPose.getHeading(), scorePose.getHeading())
            .build());
    }

    @Override
    public void onWaitForStart() {
        pathCommand.schedule();
    }
}
```

:::

## KDoc

This guide is a work-in-progress,
so we recommend checking the KDoc [here](https://javadoc.io/doc/dev.nextftc.extensions/pedro/latest/index.html).