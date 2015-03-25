---
title: PhoneGap Dev Environment
---


To install the PhoneGap SDK, you will need **NodeJS** and **npm**. You can download the binaries of Node which are available from the [nodejs.org](http://nodejs.org). The binaries are simple to install, just install them as you would do any other software you installed on your platform. It is as simple as download the file, double click it, follow the prompts. You may to adjust your system path settings after the installation so that you can run node and npm from the command line.

Alternatively, you can install node and npm using some package managers. On a Mac with Homebrew as package manager, node and npm can be installed as follows.

On a terminal window, run the following command

~~~
$ brew update
$ brew doctor
$ brew install node # this will install npm as well
~~~

On Windows with Chocolatey as package manager, run PowerShell as Administrator and then run the following command

~~~
C:\> cinst node -y
C:\> cinst npm -y
~~~


Next step is to install the PhoneGap tool chain

~~~
$ sudo npm install -g phonegap
~~~

On Windows, run **cmd** as Adminstrator then run the command

~~~
C:\> npm install -g phonegap
~~~

If you get a "command not found error", the node and npm directories are probably not yet added to system path variable. Make the necessary adjustment/edits to the path variable and run the npm install command again.

When the installation has finished, run `phonegap` on a command line just to make sure everything installed properly. The result you should get from running `phonegap` should be a help screen, not a "command not found error"
