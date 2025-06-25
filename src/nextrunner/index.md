# NextRunner
![Maven Central Version](https://img.shields.io/maven-central/v/dev.nextftc.nextrunner/core?label=latest%20release&labelColor=darkBlue&color=yellow)

NextRunner is our modernized fork of RoadRunner designed to make using RoadRunner easier.

## QuickStart

We recommend using the [QuickStart](https://github.com/NextFTC/NextRunner-Quickstart),
as it already has `Localizer`, `Drive`, and `Follower` implementations, 
the required tuning OpMode setup, and some convenient examples!

If you wish to use NextRunner with NextFTC's command-based library,
we recommend downloading the [NextFTC branch](https://github.com/NextFTC/NextRunner-Quickstart/tree/nextftc)
of the QuickStart.

## Adding To An Existing Project

If you are installing NextRunner to an existing project, 
we recommend downloading the QuickStart and copying *its* 
`TeamCode` module package to the `TeamCode` module in your project. 

You will also need to add the library as a dependency in your Gradle scripts.
In your `build.dependencies.gradle` file, add the following three lines
to the `dependencies` block:

```groovy
    implementation 'dev.nextftc.nextrunner:core:<latest>>'
    implementation 'dev.nextftc.nextrunner:actions:<latest>'
    implementation 'dev.nextftc.nextrunner:ftc:<latest>'
```

Where `latest` is replaced by the latest version as displayed above.

If you are using NextRunner with NextFTC's command-based library,
add the following to the `repositories` block of the same file:

```groovy
    maven {
        url = 'https://maven.zharel.me/releases'
    }
```
And then add this line in the `dependencies` block:

```groovy
    implementation 'com.rowanmcalpin.nextftc:roadrunner:0.6.1'
```

Then, sync your project with Gradle files.

> [!CAUTION]
> The compatibility module `com.rowanmcalpin.nextftc:roadrunner`
> is in beta and subject to change.
> Please check this documentation regularly for updates.
> 
> The compatibility module is currently compatible with NextFTC 0.6.1 and 0.6.2.

## Tuning 

If you are using the QuickStart, the tuning process is
the exact same as the [RoadRunner 1.0 tuning process](https://rr.brott.dev/docs/v1-0/tuning/).
Future changes to the tuning process will be listed here.
