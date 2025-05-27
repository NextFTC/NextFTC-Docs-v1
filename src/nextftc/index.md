# Overview

> [!TIP]
> If you are looking to learn NextFTC, take a look at the [guide](/guide/about).

NextFTC is our command-based framework. It has three building-blocks: commands,
subsystems, and components. It also has an optional hardware module that
provides built-in, ready-to-use hardware commands for almost all of your
hardware needs.

## Installation

### Step 1: Add the repositories

> [!TIP]
> You only need to do this step once, so there is no need to repeat it if you
> have already installed another NextFTC
> library.

Open your `build.dependencies.gradle` file. Inside, you should see two "blocks"
of code. The top one is the
`repositories` block. Add the following lines to it:

::: tabs key:gradle

== .gradle

```groovy
maven { url = "https://maven.rowanmcalpin.com/" }
```

== .gradle.kts

```kotlin
maven(url = "https://maven.rowanmcalpin.com/")
```

:::

### Step 2: Add the dependencies

Still in the `build.dependencies.gradle` file, go to the `dependencies` block.
Add the following lines to the bottom:

::: tabs key:gradle

== .gradle

```groovy-vue
implementation 'dev.nextftc:core:1.0.0'
implementation 'dev.nextftc:ftc:1.0.0'
implementation 'dev.nextftc:hardware:1.0.0' // If you would like to use the hardware module
```

== .gradle.kts

```kotlin-vue
implementation("dev.nextftc:core:1.0.0")
implementation("dev.nextftc:ftc:1.0.0")
implementation("dev.nextftc:hardware:1.0.0") // If you would like to use the hardware module
```

:::

### Step 3: Sync Gradle

Press the `Sync Now` button that appeared as a banner at the top of your Gradle
file.

*You're good to go!*