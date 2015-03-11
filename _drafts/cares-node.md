---

title: CARES Quick Guides
category: nodejs

---

1. Development Environment Setup
2. DevOps requirement
3. Basics of Node
4. Why are we using Express
	+ Routing
	+ Another routing
5. Basic templating with Jade
6. 


# Development Environment Setup 

Nodejs is available for a variety of platforms. You can get the binary distributions for installation on [nodejs.org](http://nodejs.org). There are binaries for Mac and Windows. If you are using Linux, you can get NodeJS from the Linux repositories appropriate for your specific flavor of Linux.

The installation using the binaries requires nothing more than downloading the installer file, double-cliking it and following the prompts. This is true for either the Windows or the Mac binaries.  



## Exercise

Download the NodeJS installer file for your platform. Install it on your machine. Open a terminal window. A terminal window launches a shell program that allows you to issue OS commands. On a mac, you can open a terminal window by launching the **Terminal.app**, it is in `/Applications/Utilities/Terminal`. On Windows, you can use **cmd.exe**. Press the **SuperKey** on the keyboard and type `cmd.exe`. If you are using Windows 7 and below, press the **SuperKey**, go to **Run** and type `cmd.exe`. 

After launching a terminal, type `node`. You should get to the **node** REPL

~~~

$ node
>

~~~

Quit **node** by pressing `CTRL C`. It will ask you to press `CTRL C` again to completely quit. 
