---

title: Terminal Copy and Paste

---

The terminal has no access to X clipboard. That is the general situation. Grabbing text from a GUI app e.g. text from a web page opened in a web browser cannot be simply pasted to xterm, or lxterminal or whatever terminal console you are using. Copying and pasting using CTRL c and CTRL v won't work. At least not without the aid of some extra programs.

Xclip can help during these kind of situations. This program mostly comes automatic with the installation of a modern Linux desktop. My Lubuntu 12 came with xclip, installed already. But just in case you need to install it, you can grab it from the software repositories, a simple `sudo apt-get install xclip` should do the trick. Obviously this is the command to use for Debian or Debian derivatives such as Ubuntu, Lubuntu etc. For other systems. Use your package manager e.g. yum (for Fedora and CentOS)

Once xclip is installed, you can use to do two things. First is to echo the contents of the clipboard to a terminal console. 

`xclip -selection clipboard -o`

If the clipboard has some contents, the command above will dump the textual content of clipboard on the terminal. Try to open some web pages, copy some text and then try out the above command on a terminal console.

A typical usage of this command is when you grab some text from document open in a word processor or a browser window, you can append it to a text file like this

`xclip -selection clipboard -o >> somefile.txt`

The second thing you can do with xclip is move the contents of a text file to the clipboard. This will then allow you to use CTRL v keyboard shortcut to paste the content (obviously to a word processor or program that uses X windows). 

`cat somefile.txt | xclip -selection clipboard`

The command above should do it. If you have, say, GEdit or LibreOffice open, you can already use CTRL v to paste the clipboard content into your document.

# pbpaste and pbcopy hack

OSX has command line tools to copy and paste contents to/from the clipboard. These commands are `pbcopy` and `pbpaste`. You can define pbcopy and pbpaste aliases in the startup files so you can use these commands like you would in OSX. This hack benefits people who use both OSX and Linux. In ~/.bashrc, add the following

    alias pbcopy='xclip -selection clipboard'
    alias pbpaste='xclip -selection clipboard -o'

Of course you need to quit your current terminal and restart it so the new settings will take effect. Or you can issue the command `source ~/.bashrc`.
