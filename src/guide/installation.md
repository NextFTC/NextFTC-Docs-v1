---
next: Subsystems
---

# Installation

The first step to using NextFTC is installing it.

In the TeamCode `build.gradle` file, go to the `dependencies` 
block.
Add the following lines to the bottom:

::: tabs key:gradle

== .gradle

```groovy
implementation 'dev.nextftc:ftc:1.0.0'
implementation 'dev.nextftc:hardware:1.0.0'
```

== .gradle.kts

```kotlin
implementation("dev.nextftc:ftc:1.0.0")
implementation("dev.nextftc:hardware:1.0.0")
```

:::

Press the `Sync Now` button that appeared as a banner at the top of your Gradle
file.

*You're good to go!*
