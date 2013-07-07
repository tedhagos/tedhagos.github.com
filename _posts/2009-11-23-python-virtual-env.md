---
layout: post
title: Python Env
categories:
- python
- osx
- linux
---

Get your Python development setup right, from the get-go. Last thing you need is a broken development environment because of a broken site (wide) Python package you just installed. A virtual environment keeps packages separate, not touching each other (which is a good thing). If a broken python package trips you up, you can avoid the hassle of wiping out your entire Python dev setup just to start with fresh plate. 

You already know how to get Python in your system, don’t you? Okay, next, get the [python-setuptools],  easy_install is part of that. On a terminal window, do the following;  

1. sudo easy_install pip
2. sudo pip install virtualenv
3. sudo pip install virtualenvwrapper
4. create a folder somewhere your home directory or where ever you have write permissions. For my setup, I will use *~/pythonenvs*
5. edit *~/.bashrc or  ~/.bash_profile* (for linux and osx, respectively), type the entries below

<pre>
WORKON_HOME=~/pythonenvs
source /usr/local/virtualenvwrapper.sh
</pre>

You will need to restart the terminal window (actually, the shell) to let the changes take effect

## sample usage

1. mkvirtualenv gae
2. mkvirtualenv standard
3. workon gae
4. workon standard

## working on a specific project

1. mkdir ~/workarea/notes-gae (if you are working on a Python Google App Engine project, for example)
2. cd to it
3. mkvirtualenv notes-gae
4. work on notes-gae, install some new eggs, site packages
5. write the software to install inside requirements.txt, Ian Bicking wrote something about this
6. then pip -r requirements.txt
7. you can use yolk -l to see what packages are installed in the env
8. then use pip freeze > stable-requirements.txtto freeze the software versions
9. Use deactivate command to get out of virtual environments
10. version the project, git init (gotta use git for source control) 
11. add some files to the project, then git add .
12. do some commits, git commit -m “comments”
13. and push the commits to a remote repo, git push -u origin master
14. When you pick the project up another day, remember to git pull, before doing anything else

