---

title: create, compile and test

---


# To Create a Project

~~~
phonegap create <project name> <app id> <app display name>
~~~

project name
: this will be the name of top folder where all phonegap project files will be located. It is best if this project name will not contain any whitespace or special characters. You cannot change the value of the project name later in the project. The project name is the only required parameter in the `phonegap create` command

app id
: this is a package identifier. It is written, usually, in reverse domain name style. For example, if you have a website named myawesomeapp.com, then what you might put as an app namespace is `com.myawesomeapp`. Unlike the the project name, the app id parameter is optional and you can change its value later in the phonegap configuration file (config.xml)

app display name
: this is just something that you will see on the default user interface that phonegap generates as a result of the project creation command. Like the app id, this one too is optional and you can change its value in the config.xml

~~~
phonegap create hello
~~~

The above command will create a folder named `hello` in the current working directory. Similarly, a phonegap project can also be created using either one of the following commands

~~~
phonegap create hello com.myawesomeapp Hello
phonegap create hello -id "com.myawesomeapp" --name "Hello"
~~~

Either one of the commands above will produce similar results as our first `project create` command. You need to be connected to the internet while creating the project because the creation process will pull some files from the internet.


# To Compile and Run a Project

When you create a phonegap project, it generates a bunch of folders and files for you. It contains a pretty generic Hello World app that you can compile against a target platform. Its usually a good idea to compile and run the generated app, even if you haven't written a single piece of code for your app. Try to see if the generated app actually works. If it doesn't, you know that you have a setup problem pretty early in the development cycle. Attend to the setup problem first then try to compile the default app again. To compile a project, you have to specify for which platform.

~~~
phonegap build ios
~~~

The above command will fetch some more file from the internet so you need to be online when you do this for the first time. When you call the `build` command later on, you won't need to be online anymore. This command will generate a bunch of runtime files and it will put them inside `hello/platforms/ios`. More specifically, it will generate an xcode project file which you can then open and run using xcode. To open and run the project in xcode, you can either open a Finder window, navigate to `hello/platforms/ios` folder and double click **Hello.xcodeproj** or open it from the terminal

~~~
open hello/platforms/ios/Hello.xcodeproj
~~~

If you don't want your hands to leave the keyboard thoughout the compile and run cycle, you can install the `ios-sim` tool and run the emulator from the cli

~~~
sudo npm install -g ios-sim
~~~

The above command will install an ios simulator globally using the  node package manager. When you already have the ios-sim tool, you can now build and run the project from the cli without having to go to xcode.

~~~
phonegap build ios
phonegap emulate ios
~~~

These two commands will be your best friends because you will type them many times over. Everytime you make a change on the source code or you replace some image files or some other application asset, you need to recompile and rebuild the project.
