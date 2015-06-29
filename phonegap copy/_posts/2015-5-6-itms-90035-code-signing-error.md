---

title: ITMS-90035 Code is not signed at all
tags: [ios8, phonegap5]

---

This happens during submission to the Apple app store using either the XCode Organizer or the XCode application loader. The application loader will detail the offending file which triggers the code signing error. There could be several so make a list of them.

Check the offending files by inspecting their contents using a code editor. Try to see if there is a line that is similar to

~~~
#!/bin/sh
~~~

Or something like that. The key characters are `#!`. These chars seem to trip up the submission process. Apple appears to require that files with a shebang or hashbang character be code signed. A cordova project may have several files that contains shebang characters. You will typically find them in the following folders

~~~
/path/to/project/platforms/ios/cordova
/path/to/project/platforms/ios/cordova/lib
~~~

Inspect every file and simply remove the shebang chars. Do a clean on the cordova project

~~~
./path/to/project/platforms/ios/cordova/clean
~~~

Then do a clean on XCode, from the `Product` menu choose `Clean`. After this, try to do another archive on XCode and resubmit.

Alternatively, you could also remove the cordova/lib folder on the build phase, copy bundle resources

# Other things to check

There are a couple more reasons that can trigger ITMS-90035, if the shebang didn't do it, check the other possible reasons.

1. **Build Target is not set to Release**. Check the scheme, `Product > Scheme > Edit Scheme`, make sure it is set to `Release` when archiving
2. **Code signing entity in Build Settings is not valid for distribution**. Check your certificates and provisioning profiles in iOS Dev Center. Make sure all certificates are still valid and you are using provisioning profiles and certificates which are for distribution, not development




1. Invalid provisioning profile

3. Multiple distribution certificates
4. Duplicate CODE_SIGN_IDENTITY
5. Build target is not Release
