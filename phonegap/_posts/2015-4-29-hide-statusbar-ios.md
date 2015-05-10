---

title: Hide StatusBar on iOS
tags:
- ios8
- phonegap5

---


After you have built your app for iOS, open it in Xcode

On the Project Navigator, click on the topmost item which shows your app's display name. On the right hand side, Click on the **General** tab and under deployment info, check the box that says **Hide Status Bar**. You may have to do this for both iPhone and IPad

Next, click the **Info** tab. We need to add a key to the **Custom iOS Target Properties**. You can do this by selecting any item from the existing keys, might be best to click the very last entry, as you are clicking the last key, you will notice that there is a plus and minus sign. Click the plus sign so we can start keying in our additional key.

~~~
View controller-based status bar appearance
~~~

The value of this key should be set to NO.

Build and run your app. The status bar should now be hidden and the app should be in full-screen mode
