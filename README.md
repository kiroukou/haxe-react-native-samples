# Purpose of that repository

This repository aims to provide some easy to run haxe / react-native samples.
Through different samples, the idea is to share a way to setup a valid development environment to use react-native stack with the haxe programming language/toolkit.


# How to use

First, clone the repository.
## Setup haxe environment
Before anything, once inside the sample of your choice, create a local haxelib repo.
```haxelib newrepo```

Right after that, you can run the commands specified into the projet ```ìnstall.hxml```
Beware of the dependencies installation which might change the desired lib version during the install process...

Each sample has a build.hxml file, which compiles haxe to the JS output.
The folder where the react-native sdk is setup is ```bin/```

## Setup Javascript environment

install the npm dependencies, running : 

```npm install```

Depending on the way the react-native project has been setup (expo init or react-native init command), the way to run it may vary a little.
npm run start if the way to go most of the time.

# Purpose of this samples

The way these samples are structured is also to help people to improve the stack.
Currently, the projects are organized to manage the HMR (Hot Module Replacement). To do so, we use a non official JS generator hxgenjs.
This generator allows a "draft" of ES6 output. Each sample use that feature at the moment.

The HRM is currently working "out of the box" on the basic samples (both expo and react-native bundlers).

BUT it doesn't seem to be working everytime and everywhere.

# How to help

There's a issue to get it work with the sample using react-native-navigation.  There's where other developers can help us.
The Hot Reloading, once enabled on the device/emulator, seems to detect the file change (there's a notification in-app to notify that), but the module isn't replaced.

So far the investigation would lead to : 
  * a JS module definition which has its limit
  * the react-native-navigation doesn't register the module with AppRegistry like other samples do, hence the problem.
 * react-native-navigation being a native wrapper, there's something subtle in the way JS modules are loaded, which require some adjustments in the toolchain.
 
 
 Any help would be greatly appreciated !
 
