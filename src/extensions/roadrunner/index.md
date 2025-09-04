# RoadRunner Extension

This extension provides integration with the
[RoadRunner Library](https://rr.brott.dev/)
and [QuickStart](https://github.com/acmerobotics/road-runner-quickstart).

## Installation

Add the following line to your `build.gradle` file
to install the RoadRunner extension:

```groovy
implementation 'dev.nextftc.extensions:roadrunner:1.0.0'
```

::: warning
Version `1.0.0` supports RoadRunner `1.0.1`
and RoadRunner FTC `0.1.25`, and is not compatible with earlier versions.

This guide also assumes you are using QuickStart for RoadRunner
and its `MecanumDrive` class.
:::

## QuickStart Additions

To use the RoadRunner extension,
make the following additions to the QuickStart code.

First, make your `MecanumDrive` class extend `NextFTCMecanumDrive`:

```java
public class MecanumDrive extends NextFTCMecanumDrive {
    // ...
}
```

You will probably get an error about unimplemented members.
You can copy the following implementations into your class:

```java
    HolonomicController controller = new HolonomicController(
            PARAMS.axialGain, PARAMS.lateralGain, PARAMS.headingGain,
            PARAMS.axialVelGain, PARAMS.lateralVelGain, PARAMS.headingVelGain
    );

    @NotNull
    @Override
    public HolonomicController getController() {
        return controller;
    }

    @NotNull
    @Override
    public Pose2d getPose() {
        return localizer.getPose();
    }

    @Override
    public void setDrivePowersFF(@NotNull PoseVelocity2dDual<Time> powers) {
        MecanumKinematics.WheelVelocities<Time> wheelVels =
            kinematics.inverse(poseVelocity2dDual);
        double voltage = voltageSensor.getVoltage();
       
        final MotorFeedforward feedforward = new MotorFeedforward(
            PARAMS.kS,
            PARAMS.kV / PARAMS.inPerTick,
            PARAMS.kA / PARAMS.inPerTick
        );
        double leftFrontPower = feedforward.compute(wheelVels.leftFront) / voltage;
        double leftBackPower = feedforward.compute(wheelVels.leftBack) / voltage;
        double rightBackPower = feedforward.compute(wheelVels.rightBack) / voltage;
        double rightFrontPower = feedforward.compute(wheelVels.rightFront) / voltage;
        mecanumCommandWriter.write(new MecanumCommandMessage(
            voltage, leftFrontPower, leftBackPower, rightBackPower, rightFrontPower
        ));

        leftFront.setPower(feedforward.compute(wheelVels.leftFront) / voltage);
        leftBack.setPower(feedforward.compute(wheelVels.leftBack) / voltage);
        rightBack.setPower(feedforward.compute(wheelVels.rightBack) / voltage);
        rightFront.setPower(feedforward.compute(wheelVels.rightFront) / voltage);
    }

    @Override
    @NotNull
    public TrajectoryCommandBuilder commandBuilder(@NotNull Pose2d beginPose) {
        return new TrajectoryCommandBuilder(
                turn -> new Turn(this, turn),
                traj -> new FollowTrajectory(this, traj),
                new TrajectoryBuilderParams(
                        1e-6,
                        new ProfileParams(
                                0.25, 0.1, 1e-2
                        )
                ),
                beginPose, 0.0,
                defaultTurnConstraints,
                defaultVelConstraint, defaultAccelConstraint
        );
    }
```

Android Studio will probably suggest the necessary imports.

There is an example `MecanumDrive` class in the NextFTC branch of my
[RoadRunner QuickStart fork](https://github.com/zachwaffle4/road-runner-quickstart/tree/nextftc).
Note that this is just an example and may not be updated
to the latest version of RoadRunner or NextFTC.
