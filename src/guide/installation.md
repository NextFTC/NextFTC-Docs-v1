---
next: Subsystems
---

# Installation

The first step to using NextFTC is installing it. There are two ways to install
it.

## Method 1: Quickstart Repo (new project)

The easiest way to install NextFTC is by using the quickstart. In addition to
having NextFTC preinstalled, it also has
all the example code created in the guides on these docs. To install the
quickstart, do one of the following:

1. In Android Studio, go to
   `Main Menu -> File -> New -> Project from Version Control`. For URL, enter
   `https://github.com/NextFTC/Quickstart.git`.
2. **OR** in the directory you want to install it in, run
   `git clone https://github.com/NextFTC/Quickstart.git`.
   Make
   sure you have [git](https://git-scm.com/) installed first.

> [!NOTE]
> If you are using PedroPathing, use the `nextftc-and-pedro` branch instead.

## Method 2: Manually using Gradle (existing project)

Installing NextFTC using Gradle is fairly simple.

In the `build.dependencies.gradle` file, go to the `dependencies` block.
Add the following lines to the bottom:

::: tabs key:gradle

== .gradle

```groovy
implementation 'dev.nextftc:core:1.0.0'
implementation 'dev.nextftc:ftc:1.0.0'
implementation 'dev.nextftc:hardware:1.0.0'
implementation 'dev.nextftc:control:1.0.0'
implementation 'dev.nextftc:bindings:1.0.0'
implementation 'dev.nextftc:pedro:1.0.0' // If you would like to use NextPedro
```

== .gradle.kts

```kotlin
implementation("dev.nextftc:core:1.0.0")
implementation("dev.nextftc:ftc:1.0.0")
implementation("dev.nextftc:hardware:1.0.0")
implementation("dev.nextftc:control:1.0.0")
implementation("dev.nextftc:bindings:1.0.0")
implementation("dev.nextftc:pedro:1.0.0") // If you would like to use NextPedro
```

:::

### Step 3: Sync Gradle

Press the `Sync Now` button that appeared as a banner at the top of your Gradle
file.

*You're good to go!*
