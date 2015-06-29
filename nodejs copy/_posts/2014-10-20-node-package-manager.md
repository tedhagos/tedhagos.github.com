---

title: npm
author: Ted Hagos
categories: nodejs

---

When you installed nodejs using the precompiled binaries, npm would have been installed with it. The section on [node setup](/nodejs/basic-setup.html) details the installation of both node and npm. 

The npm tool can also be installed on its own by curling an install file from npmjs.org. If you have already have curl installed, you can run this command from a terminal

~~~
curl http://npmjs.org/install.sh | sudo sh
~~~

# What is it

It's a package manager for node and other apps. Its what you will use to get packages like express, http-server, jade and even phonegap or cordova. If you have ever used a package manager like aptitude, apt-get, yum, emerge, brew, macports, nuget or chocolatey, npm is does what they do. It gets software for you so you don't have to download precompiled binaries manually.

# Basic usage 

npm info <package name>
: find out some info about the package e.g. `npm info express`

npm install <package name>
: installs a package locally, inside the folder where you invoked the npm command. This is useful if you will install a package which is a dependency for an application you are working on e.g. `npm install express`

npm install -g <package name>
: installs a package globally. The binaries will be on a central location in your computer. This is useful when installing packages that are meant as tools rather than package dependency for a software project e.g. `npm install -g http-server`

npm ls
: this is how you list all the packages installed in your system

npm install npm -g
: this is how you update npm itself

npm search <name or grep expressions>
: search for packages

npm update <package name>
: updates a specific package 

npm update
: without specifying a package name, npm will update everything

# registry or repo problems

**npm** is configured to pull from known registries. But from time to time, pulling software from the registries might fail. Repointing the registry to <http://registry.npmjs.org> fixes things 

~~~
sudo npm config set registry http://registry.npmjs.org
~~~

# references

1. faq at docs.npmjs.org - [npmjs.org/faq](https://docs.npmjs.com/misc/faq)


