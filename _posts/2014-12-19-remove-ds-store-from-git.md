---

title: Remove .DS_STORE from a Git Repo
author: Ted Hagos
categories: osx

---

~~~
$ cd path/to/repo
$ find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
~~~

Once everything is removed, make sure that .DS\_STORE will not be added to the repo in the future. Add the following line to the **.gitignore** file

~~~
.DS_STORE
~~~

Commit and push as usual


