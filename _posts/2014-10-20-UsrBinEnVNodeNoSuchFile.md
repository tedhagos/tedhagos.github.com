---

title: /usr/bin/env No Such File
author: Ted Hagos
categories: linux

---

If your platform is Debian, Ubuntu, Lubuntu or any of the Debian derivatives and you installed NodeJS via the `aptitude` or `apt-get` package manager, you may experience this error when you try to use NodeJS. Not only will this appear by using NodeJS itself but it may appear as well when you use any package gotten via **npm** e.g. `http-server` or `express`. 

The error `/usr/bin/env node no such file or directory` means it is looking for the node executable in `/usr/bin/node` but it's not there because what the package manager installed was `/usr/bin/nodejs` intead. 

# Solution

Either rename nodejs to node or just create a symlink. Better to just create the symlink

`$ cd /usr/bin` 
`$ sudo ln -s nodejs node`

Another way to solve this is get **nodejs-legacy** instead **node**

`$ sudo apt-get install -y nodejs-legacy`




