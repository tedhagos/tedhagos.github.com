---

title: How to Delete Conflicted Copies in Dropbox
author: Ted Hagos
categories:  linux

---

You need to be sure you have a backup of your files. These commands are on CLI, if you make a mistake, the only way to go back is to restore the files using the tools found in the Dropbox website.

~~~

$ cd ~/Dropbox/thefolder
$ find . -type f -name "* conflicted copy*" -exec rm -f {} \;
$ awk '!/conflicted/' .git/packed-refs > temp && mv temp $ .git/packed-refs

~~~

The last command is applicable to you if the **thefolder** is also a git repo. If it is not, you should not use that command. Actually it won't hurt if you accidentally typed that last command if thefolder is not a git repo because it will not find the `.git` hidden folder