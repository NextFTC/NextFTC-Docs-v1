# Installation

The first step to using NextFTC is installing it. There are two ways to install it.

## Method 1: Quickstart Repo

_This method is still in development_

## Method 2: Manually using Gradle

Installing NextFTC using Gradle is fairly simple. This tutorial assumes you are starting from an unmodified (or minimally modified) [FtcRobotController](https://github.com/FIRST-Tech-Challenge/FtcRobotController) project.

### Step 1: Add the repositories

Open your `build.dependencies.gradle` file. Inside, you should see two "blocks" of code. The top one is the `repositories` block. Add the following lines to it:

::: code-group

```groovy [.gradle]
maven { url = "https://maven.rowanmcalpin.com/" }
maven { url = "https://maven.pedropathing.com/" } // Remove if you don't intend to use PedroPathing
maven { url = "https://maven.brott.dev/" } // Remove if you don't intend to use the FTC Dashboard (required if using PedroPathing)
```

```kotlin [.gradle.kts]
maven(url = "https://maven.rowanmcalpin.com/")
maven(url = "https://maven.pedropathing.com/") // Remove if you don't intend to use PedroPathing
maven(url = "https://maven.brott.dev/") // Remove if you don't intend to use the FTC Dashboard (required if using PedroPathing)
```

:::

### Step 2: Add the dependencies

Still in the `build.dependencies.gradle` file, go to the `dependencies` block. Add the following lines to the bottom:

::: code-group

```groovy [.gradle]
implementation 'com.rowanmcalpin.nextftc:core:0.5.5-beta1'
implementation 'com.rowanmcalpin.nextftc:ftc:0.5.5-beta1'
implementation 'com.rowanmcalpin.nextftc:pedro:0.5.5-beta1' // Remove if you don't intend to use PedroPathing
implementation 'com.pedropathing:pedro:1.0.3' // Remove if you don't intend to use PedroPathing
implementation 'com.acmerobotics.dashboard:dashboard:0.4.16' // Remove if you don't intend to use the FTC Dashboard (required if using PedroPathing)
```

```kotlin [.gradle.kts]
implementation("com.rowanmcalpin.nextftc:core:0.5.5-beta1")
implementation("com.rowanmcalpin.nextftc:ftc:0.5.5-beta1")
implementation("com.rowanmcalpin.nextftc:pedro:0.5.5-beta1") // Remove if you don't intend to use PedroPathing
implementation("com.pedropathing:pedro:1.0.3") // Remove if you don't intend to use PedroPathing
implementation("com.acmerobotics.dashboard:dashboard:0.4.16") // Remove if you don't intend to use the FTC Dashboard (required if using PedroPathing)
```

:::

### Step 3: Sync Gradle

Click the `Sync Now` button that appeared as a banner at the top of your Gradle file.

_You're good to go!_
