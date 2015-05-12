---

title: Org problems and errors
author: Ted Hagos
categories: emacs

---

`M x org-version` shows 7.x.x when you expect it to be 8.x. This is a version conflict problem. This happened to my installation when I copied an .emacs init file, with 'org' references to it, and used it to load up a fresh install of emacs. Once I grabbed the org package from elpa, it resulted into tons of errors. 

The solution is to do the following:

1.  Remove the org folder inside ~/.emacs.d/elpa
2.  Edit the ~/.emacs init files, remove any references to 'org'
3.  Load up emacs using the clean .emacs init file
4.  Reinstall org from either elpa or orgmode source
5.  Exit and restart emacs. That solved the problem
