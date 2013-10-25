---
layout: post
title: OSX Cheatsheet
subtitle: Things I do on OSX but can't remember always

excerpt: This is a growing list of things I do on OSX. They are on the list because I can't memorize them and they are not always easy to find *Googling*. These cheats range from networking to more elaborate setups

description: php setup on mac. ripping audio and video. dev environment. shell hacks. terminal hacks. mac admin.

categories: 
- osx
- cheatsheet
- mac
- rip
- hack

---

**1. SHOW THE ROUTING TABLE**. <code class="codeblock">route print</code> won't work, try <code class="codeblock">netstat -nr</code>

<hr/>

**2. HIDE OR SHOW HIDDEN FILES IN FINDER**. 

If you are always working on the command line, don't even bother with this, a simple **ls -a** should do the trick. If however, you really do need to display hidden stuff in Finder, here's how to do it.

<code class="codeblock">
  $ defaults write com.apple.finder AppleShowAllFiles -bool YES <br/>
  $ defaults write com.apple.finder AppleShowAllFiles -bool NO
</code>

The first one obviously shows hidden files and the other hides it. You need kill the Finder app each time you change this setting.

<code class="codeblock">
  $ killall Finder
</code>

<hr/>

**3. HOW TO SET THE HOSTNAME**

<code class="codeblock">
  $ sudo scutil --set HostName anyname_you_want
</code>

<hr/>

**4. JAVA**

The Java Development Kit (JDK) in your OSX 10.8 Mountain Lion will be wiped out after upgrading to OSX Maverick. During the upgrade from 10.7 to 10.8, typing <code class="codeblock">java</code> on a Terminal.app launched a helper window to install Java &mdash; that is no longer the case. You will need to [download java](http://www.oracle.com/technetwork/java/javase/downloads/index.html) on your own. Just get it from [Oracle download site](http://www.oracle.com/technetwork/java/javase/downloads/index.html).


**JAVA 8**

Don't install the EA release from Oracle, not on your workhorse machine. If you just want to play around with JDK8, get it at [java8.jdk.net/download](http://java8.jdk.net/download) or [java8.jdk.net/lambda](http://java8.jdk.net/lambda). Untar the downloaded files, then set softlinks to executables.

<code class="codeblock">
  $ sudo ln -s /somewhere/jdk8/bin/java /usr/bin/java8 <br/>
  $ sudo ln -s /somewhere/jdk8/bin/javac /usr/bin/javac8
</code>
<hr/>

**5. CONTROL ANTI-ALIASING**

<code class="codeblock">
  $ defaults -currentHost write -globalDomain AppleFontSmoothing -int 1
</code>

WHERE: 

- 1: Light anti aliasing
- 2: Medium
- 3: Strong

<hr/>


**6. GET A BETTER PACKAGE MANAGER**

[Get BREW first](http://mxcl.github.com/homebrew/), follow the instruction on the web site of brew, after that it's all good

<code class="codeblock">
  $ brew install git <br/>
  $ brew install wget <br/>
  $ brew install curl <br/>
</code>

<hr/>

**Color the Terminal.app** for ls

<code class="codeblock">
  $ vi ~/.bash_profile <br/>
  $ echo "alias ls="ls -G"" >> ~./bash_profile
</code>

<hr/>

**7. MYSQL** client can't be found after OSX 10.8 upgrade, it did not disappear  but for some reason, the PATH was messed up, it is still on */usr/ocal/mysql/bin*, just add it the SYSTEM PATH

<code class="codeblock">
  $ vi ~/.bash_profile <br/>
  $ echo "export PATH=$PATH:/usr/local/mysql/bin:." >> ~./bash_profile
</code>

<hr/>


**8. PICTURES TAKEN IN PHOTOBOOTH** are in *~/Pictures/Photo Booth Library/Pictures*

<hr/>


**9. PANDOC** If you want to write in **Markdown** then publish in HTML, PDF, Latex etc, you will need **pandoc**.

First, you need to [GET Haskell](http://www.haskell.org/haskellwiki/Mac_OS_X), you could try Fink or MacPort but the binaries worked best when I was doodling with this. There is a download link on [HasKell Wiki](http://www.haskell.org/haskellwiki/Mac_OS_X). 

The Haskell installer would have installed the *cabal* binaries at *~/.cabal/bin*, add it to SYSTEM PATH then install pandoc

<code class="codeblock">
$ sudo cabal update
$ sudo cabal install pandoc
</code>

<hr/>

**10. USE A BETTER TERMINAL CLIENT** Get [Iterm2](http://www.iterm2.com/)

<hr/>

**11. PHP PEAR**. This is no longer included in 10.8, maybe it did not even make it in Leopard, I'm not sure. Just **curl** it

<code class="codeblock">
$ curl http://pear.php.net/go-pear.phar > go-pear.phar <br/>
$ sudo php -q go-pear.phar
</code>

PEAR installation will be at <span class="codeblock">~/pear/</span>, bin, etc and all. Next, update your startup script

<code class="codeblock">
$ echo "export PATH=$PATH:~/pear/bin:." >> ~/.bash_profile
</code>

<hr/>

**12. PHAR & PHP COMPOSER**

Create a php.ini file first. OSX does have it at /private/etc. Don't copy the ini file somewhere else, it needs to be at */private/etc/*. Make sure that php.ini is actually in that directory

<code class="codeblock">
$ cd /private/etc <br/>
$ sudo cp php.ini.default php.ini
</code>

Add the following to *php.ini*, it's okay to add it at the very beginning, it 
didn't give me problems that way

<pre>
detect_unicode = Off
date.timezone = YourCountry/YourCity
</pre>

After saving the update php.ini,

<code class="codeblock">
$ cd /path/to/your/workarea <br/>
$ curl -s http://getcomposer.org/installer | php
</code>

composer.phar should be downloaded to <code class="codeblock">/path/to/your/workarea</code>. Test it. <span class="codeblock"> $ php composer.phar</span>
<hr/>

**13. EDITOR**

<pre>
$ brew install vim 
$ git clone https://github.com/gmarik/vundle.git ~/.vim/bundle/vundle 
$ lynx https://gist.github.com/tedhagos/5916935 (say yes to the download)
$ tar -xzvf gistXXXXXX.tar.gz 
$ cp gistXXXX/.vimrc ~/.vimrc 
$ vim +BundleInstall +qall
</pre>

More details at [gmarik/vundle](https://github.com/gmarik/vundle)

<hr/>

**14. GET A BETTER SCREEN MULTIPLEXER**.
 
<code class="codeblock">
$ brew install tmux
</code>

There is a bit of a setup. You need to create ~/tmux.conf and create a script (the one that handles the shortcuts). The [tmux.conf and tdev.sh are here](https://gist.github.com/tedhagos/5917003)

<hr>

**15. COPY/PASTE ON THE CLI**

<code class="codeblock">
$ cat somefile | pbcopy <br/>
$ echo pbpaste
</code>

<hr/>

**16. USING A WINDOWS KEYBOARD ON MAC MINI**

Remap the keyboard for Mac Oriented use. Get the [Double Command Kernel Extension](http://doublecommand.sourceforge.net/). Original instructions from [MacWorld is found here](http://www.macworld.com/article/42446/2005/01/doublecommand.html).

*NOTE*: F12 on the Win Keyboard is the eject button

<hr/>

**17. RIP AUDIO CDS (FLAC)**

I don't want to hear any "But you can use iTunes to rip CDs". I know that. iTunes is very opinionated on how it wants to rip CDs and where to put them. I don't agree with it. Hence, the hacks.

<code class="codeblock">
  $ brew install cdparanoia <br/>
  $ brew install abcde <br/>
  $ touch ~/.abcde.conf
</code>

<pre>
  CDROM=/dev/disk1
  OUTPUTTYPE=flac
  INTERACTIVE=n
  PADTRACKS=y
  OUTPUTDIR=~/Music/abcde
  OUTPUTFORMAT='${ARTISTFILE}/${ALBUMFILE}/${TRACKNUM} - ${TRACKFILE}'
  VAOUTPUTFORMAT='Various/${ALBUMFILE}/${TRACKNUM} - ${TRACKFILE}'
  mungefilename ()
  {
    echo "$@" | sed s,:, -,g | tr /* _+ | tr -d '"?[:cntrl:]
  }
</pre>

dev/disk1 is where my CD is mounted, find out where yours is mounted. A simple <code class="codeblock">df</code> command should give you some clue where the CD drive is mounted. After that, ripping can start.

<code class="codeblock">
  $ diskutil unmount /dev/disk1 <br/>
  $ abcde <br/>
  $ diskutil eject /dev/disk1  
</code>

The unmounting is necessary because abcde works with raw block devices and cannot function when the CD is mounted. 

I shamlessly ripped most of this guide from [MacWorld contributed by extempore](http://hints.macworld.com/article.php?story=2005101620055677)

<hr/>

**17.1 RIP AUDIO CDS (MP3)**

Get [MAX from SBooth](http://sbooth.org/Max/). Work on the archive files and put in <code class="codeblock">/Applications</code> folder or where you want. It's a GUI tool, so it's easy to work with.

MAX uses musicbrainz.org for the CD metadata, the service is not good enough. GraceNotes, which is used by iTunes is more capable. The problem is, I couldn't find a direct way to connect MAX to GraceNotes. You need a bit of AppleScripting, this solution was the from the SBooth forums as well, the [link to the original discussion is here](http://forums.sbooth.org/viewtopic.php?f=4&t=1930)

1. Create a Script in AppleScript, Save it anywhere you can find it easily. The script can be found on the link above (the sbooth forum), but I saved it in gist.github.com, here's the link https://gist.github.com/tedhagos/5845190
2. When you insert the CD, iTunes will launch as well (you need this)
3. Run the script you created. That will get the meta data of iTunes
4. Rip Away

This solution needs both iTunes and MAX running at the same time. When iTunes grabs the metadata from Gracenotes, the script grabs the metadata from iTunes

<hr/>

**18. RIP DVDs**

Just get [Handbrake here](http://handbrake.fr/downloads.php) you can figure out the rest

<hr/>

**19. RIP YOUTUBE VIDEOS**

<code class="codeblock">
  $ brew install youtube-dl <br/>
  $ brew install ffmpeg <br/>
  $ brew install lame <br/>
  $ youtube-dl http://youtube-video-url
</code>

There's a dedicated note for this [somewhere on thelogBox.com](http://thelogbox.com/rip-youtube-videos-linux-osx/)

<hr/>

**20. ACCELERATE DOWNLOADING** 

<code class="codeblock">
  $ brew install axel <br/>
  $ axel -n 5 protocol://resource-uri
</code> 

**-n 5** means you want to use 5 simulateneous threads of download. Sample usage;

<code class="codeblock">
  $ axel -n 10 http://wordpress.org/latest.zip
</code>

<hr/>


**20. SQUEAKY CLEAN HARD DRIVE**

Deleting stuff is easy, even applications. Just drag it to Trash can. Cleaning up left overs is the tedious part. It is not particulary difficulty, but annoying. Time is better employed somewhere else. There are better things to do than hunting down left over files; or worse, Googling about "how to clean up your Mac", swimming through the internet cess pool and trying out blog guides (like the one you are reading). You cannot do that a lot. Just get **Clean My Mac** or anything paid that catches your fancy. The Mac Store is a good place to start.


**21. BACKUP Mail.App**

<pre class="codeblock">
  $ mkdir MailBackup
  $ cd MailBackup
  $ cp -r ~/Library/Mail/V2/ .
</pre>

**22. EXTERNAL DRIVES ARE IN** <code class="codeblock">~/Volumes/</code>

**23. REALLY SIMPLE MUSIC PLAYER** <a href="http://cogx.org/">CogX</a>. There were others like Vox (didn't like it). WinAmp on OSX is no longer the WinAmp I remember from 10 years ago (I liked it then when it was simple) &mdash; and iTunes just isn't for me. It won't let leave my Music organization alone

**23. ASSISTIVE TECHNOLOGY IN OSX MAVERICK** is no longer i *System Preferences &rarr; Accessibility*. It is now in *System Preferences &rarr; Security and Privacy &rarr; Privacy*. 

**24 TEXTEXPANDER DOES NOT WORK IN OSX MAVERICK**. TextExpander needs assistive technology enabled first before you launch it. See item no. 23 above.

   



