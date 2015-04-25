---

title: Error 10810 LsUrlOpenWithRole
author: Ted Hagos
tags: tmux user-namespace yosemite osx10.10

---

Error 10810 happens on a Mac when you try to open a file and launch the file's associated application via the command line. This happens especially when you are inside a **tmux session**.

This is a problem with tmux on OSX, it has been for quite some time. OSX 10.9 and below was able to work around this issue of tmux but the **launchd** of Yosemite can't seem to do so.

## The Fix

Get the **reattach-to-user-namespace** either from Homebrew or MacPorts

`$ brew install reattach-to-user-namespace`

then add the following line to **.tmux.conf**

~~~
set -g default-command "reattach-to-user-namespace -l /bin/bash"
~~~

## References

1. [Macports, ticket 18357](https://trac.macports.org/ticket/18357)
2. [GitHub, atom issues/3093](https://github.com/atom/atom/issues/3093)
