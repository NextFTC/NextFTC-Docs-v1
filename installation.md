<script setup>
import {ref, onMounted} from "vue";

const pedroPathingVersion = ref("Loading...");

onMounted(async () => {
    try {
        const response = await fetch(
            "https://api.github.com/repos/Pedro-Pathing/PedroPathing/releases/latest",
            {
                headers: {
                    "Accept": "application/vnd.github+json",
                    "X-GitHub-Api-Version": "2022-11-28"
                }
            }
        );

        if (!response.ok) {
            throw new Error(`Error fetching version (${response.status})`);
        }

        const data = await response.json();
        if (data.tag_name.charAt(0) === "v") {
            pedroPathingVersion.value = data.tag_name.substring(1); // or str.slice(1);
        } else {
            pedroPathingVersion.value = data.tag_name;
        }
    } catch (error) {
        pedroPathingVersion.value = `Error fetching version: ${error.message}`;
    }
});
</script>

# Installation

The first step to using NextFTC is installing it. There are two ways to install it.

## Method 1: Quickstart Repo (new project)

The easiest way to install NextFTC is by using the quickstart. In addition to having NextFTC preinstalled, it also has all the example code created in the guides on these docs. To install the quickstart, do one of the following:

1. In Android Studio, go to `Main Menu -> File -> New -> Project from Version Control`. For URL, enter `https://github.com/rowan-mcalpin/NextFTC-Quickstart.git`.
2. OR in the directory you want to install it in, run `git clone https://github.com/rowan-mcalpin/NextFTC-Quickstart.git`. Make sure you have [git](https://git-scm.com/) installed first.

## Method 2: Manually using Gradle (existing project)

Installing NextFTC using Gradle is fairly simple. This tutorial assumes you haven't modified your Gradle files..

### Step 1: Add the repositories

Open your `build.dependencies.gradle` file. Inside, you should see two "blocks" of code. The top one is the `repositories` block. Add the following lines to it:

::: tabs key:gradle

== .gradle

```groovy
maven { url = "https://maven.rowanmcalpin.com/" }
maven { url = "https://maven.pedropathing.com/" } // Remove if you don't intend to use PedroPathing
maven { url = "https://maven.brott.dev/" } // Remove if you don't intend to use the FTC Dashboard (required if using PedroPathing)
```

== .gradle.kts

```kotlin
maven(url = "https://maven.rowanmcalpin.com/")
maven(url = "https://maven.pedropathing.com/") // Remove if you don't intend to use PedroPathing
maven(url = "https://maven.brott.dev/") // Remove if you don't intend to use the FTC Dashboard (required if using PedroPathing)
```

:::

### Step 2: Add the dependencies

Still in the `build.dependencies.gradle` file, go to the `dependencies` block. Add the following lines to the bottom:

::: tabs key:gradle

== .gradle

```groovy-vue
implementation 'com.rowanmcalpin.nextftc:core:0.6.1'
implementation 'com.rowanmcalpin.nextftc:ftc:0.6.1'
implementation 'com.rowanmcalpin.nextftc:pedro:0.6.1' // Remove if you don't intend to use PedroPathing
implementation 'com.pedropathing:pedro:{{ pedroPathingVersion }}' // Remove if you don't intend to use PedroPathing
implementation 'com.acmerobotics.dashboard:dashboard:0.4.16' // Remove if you don't intend to use the FTC Dashboard (required if using PedroPathing)
```

== .gradle.kts

```kotlin-vue
implementation("com.rowanmcalpin.nextftc:core:0.6.0")
implementation("com.rowanmcalpin.nextftc:ftc:0.6.0")
implementation("com.rowanmcalpin.nextftc:pedro:0.6.0") // Remove if you don't intend to use PedroPathing
implementation("com.pedropathing:pedro:{{ pedroPathingVersion }}") // Remove if you don't intend to use PedroPathing
implementation("com.acmerobotics.dashboard:dashboard:0.4.16") // Remove if you don't intend to use the FTC Dashboard (required if using PedroPathing)
```

:::

### Step 3: Sync Gradle

Click the `Sync Now` button that appeared as a banner at the top of your Gradle file.

_You're good to go!_
