---

title: DeviceReady event not firing 

---

If you deleted manually anyone of the `platforms` directory in a phonegap folder, either ios or android etc, then re-added them, that somehow messes up the `json` files for the platforms. 

One of the problems that messed up json platform files could cause is that, the `deviceready` event of cordova will not be triggered. To solve this, remove and then re-add the platforms using the `cordova command`

~~~
cordova remove ios
cordova remove android
~~~

Then add them again, and build

~~~
cordova platform add ios
cordova platform add android
cordova build
~~~


