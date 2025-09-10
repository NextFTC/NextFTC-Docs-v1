# Pedro Pathing Extension

This is our extension to add built-in support
for [Pedro Pathing](https://pedropathing.com), a GVF-based path-planning and
following library for FTC.

## Installation

In the TeamCode `build.gradle`, go to the `dependencies` block.
Add the following lines:

::: tabs key:gradle

== .gradle

```groovy
implementation 'dev.nextftc.extensions:pedro:1.0.0'
```

== .gradle.kts

```kotlin
implementation("dev.nextftc.extensions:pedro:1.0.0")
```

:::

Then, press the `Sync Now` button that appeared as a banner at the top of your
Gradle file.

*You're good to go!*

## Credit

Thanks so much to the Pedro Pathing team for creating such an amazing pathing
library!