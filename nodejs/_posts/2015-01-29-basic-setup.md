---

title: Basic Setup
tags:
- nvm
- node setup
---

There are 3 ways to install node, each with pros and cons. You can get node going in your system using anyone of the following

1. **Precompiled binaries**. This is the simplest. You simply head over towards [nodejs.org](http://nodejs.org) and download the precompiled binary that is right for your system. NodeJS installers are available for OSX, Linux and Windows. If you install node this way, you would have installed npm as well. Npm is the node package manager. This is the easiest for most users because the installation process is very familiar to anyone who have installed applications before. It is a a wizard. You download, double click and follow the prompts. There is nothing more to it. When a new version of node comes along though, you have to go through this process again
2. **Node Version Manager**. This method of installation allows you to run multiple versions of node within the sample computer. You can install a new version (or an older version) of node with just a few simple commands. This is not as simple as using precompiled binaries because before you can install node itself, you need to install the nvm first. If you are using OSX or Linux, you can use nvm. If you are on windows, nvm is currently not officially supported on that platform. There were people who made nvm available to Windows users.Y0u can find the instructions on how to get nvm going on Windows on the [github page for nvm](https://github.com/creationix/nvm)
3. **Compilation from source**. This has the highest difficulty of all the options for node installation. If you have installed software before by compiling them from source, you maybe right at home with this option. If you haven't, the process for a first time user may prove to be daunting. This is the most flexible though because you can control the compilation using options. If you want to run node on a platform other than OSX,  Linux or Windows, this maybe the only the option available to you
4. **Other package managers**. OSX users have homebrew or macports, Windows users have chocolatey and Linux users have either yum, aptitude and many other else, depending on the Linux flavor. Node has been around for a quite a while now and its precompiled binaries have made it to the most popular and common code repositories

# OS Package Managers 

On a Linux machine with Debian or Ubuntu, you could install node with the following commands

~~~
sudo apt-get update
sudo apt-get upgrade
sudo apt-get -y build-essential
sudo apt-get -y install curl
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get -y install nodejs npm
~~~

Installation instructions for other Linux distros can be found at [joyent wiki page at github](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager). 

On OSX with homebrew, you could install it with the command `brew install node`. You need to ensure that the folder `/usr/local/bin` is included in your system path because brew will put the node executable on that folder. On Windows with the chocolatey package manager, you could get node going with the command `cinst nodejs`.

For information on chocolatey, head over to their website at [chocolatey.org](http://chocolatey.org). For information on homebrew, go to their website at [brew.sh](http://brew.sh). You may need to install some other software before you can even install either chocolatey or brew.

# Node Version Manager

We need to install nvm first before we can proceed with the node installation. You will need either `curl` or `wget` to install nvm. In our case, we will use curl. If you don't have `curl`, you need to get it first. On OSX you can get it with `brew install curl` and on Linux you can get using `sudo apt-get install curl`. Once done, open a terminal window and run the command 

~~~
curl https://raw.githubusercontent.com/creationix/nvm/v0.24.1/install.sh | bash
~~~ 

You may need to completely quit the terminal window and relaunch it again in order to use nvm. At this point, we can now install node. Once nvm is up and running, node can be installed with a simple nvm command like `nvm install 0.10`. This command will fetch the node binaries from preconfigured software repositories where node is hosted. You can test if node was downloaded to your system by using the commadn `node -v`. It should echo on your screen the version number of node. Here's a small list of nvm commands that you might need for daily use

nvm
: Displays a help file on how to use nvm. It lists options and flags the nvm command

nvm install 0.10
: Installs node version .10. You don’t need to specify anything after 10, nvm will automatically fetch the latest version in the .10 series. Just replace 0.10 for whatever version of node that you want to install

nvm use 0.10
: Switch to version .10 of node

nvm use 0.08
: Switch to version .08, if you have installed it before

nvm alias default 0.10
: It makes version 0.10 of node the default version. Every time you open a terminal window and use the command `node -v`, it will always point to version 0.10 



# References

1. Joyent page at github - [github.com/joyent/node/wiki](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
2. Creationix github page - [github.com/creationix/nvm](https://github.com/creationix/nvm)

