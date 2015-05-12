---

title: Linux Cheatsheet
author: Ted Hagos
categories: linux

---

# Copy pasting clipboard to/from terminal

Can be done either via *xsel* or *xclip*. Xclip is part of most modern installations, so you it may be there in your installation already. The common usages are:

You copied something in an X window (browser or editor etc), you want to paste the content to the terminal. Unfortunately the terminal doesn't have access to the clipboard. But you can do this on the terminal using 

`` echo `xclip -selection clipboard -o` `` 

That command will echo the contents of clipboard to the console. If you wanted to append the clipboard contents to a file, you can do 

``echo `xclip -selection clipboard -o` >> somefile.txt`` 

and that will do the trick

If you  need to copy the **contents of a text file to the clipboard**. This can be done by 

`cat somefile.txt | xclip -selection clipboard`

Now you can paste that content using *CTRL V* 

Typing `xclip -selection clipboard` is just way too many keystrokes. Put an alias to it. In ~/.bashrc, add the following

    alias pbpaste="xclip -selection clipboard -o"
    alias pbcopy="xclip -selection clipboard"

Now you can

``echo `pbpaste` >> somefile.txt``  
`cat somefile.txt | pbcopy`

# Find the version name

Find version name &#x2014; the wonky names, not the kernel number &#x2014; of Ubuntu, Lubuntu, Mint or any of its many derivatives.

`lsb_release -a`

# Is my Linux 64 or 32 bit

`uname -a`

Does it contain *X86\_64*? If it does, it is 64 bit

# Find out how much disk space is left

`df -h`

# Change the password for root

`sudo passwd root`

If you have an admin, ask for permission first if it is okay to do this. If it is just your own machine, go ahead and knock yourself off. You don't need to do things as root &#x2014; always. For that there is *sudo*

# Divide your terminal screen and multiplex

`sudo apt-get install tmux`

You still need to configure tmux, but the basic idea is to launch tmux and do all your windowing there
`tmux new -s <session-name>`

# Secure Copy file from one machine to another\*

`scp username@remotemachine:somefile.txt ~/somefile.txt`

This will copy *somefile.txt* on *remotemachine* to the local machine

`scp somefile.txt username@remotemachine:/somefile.txt`

It will copy *somefile.txt* from the local machine to *remotemachine*

# See if there is a CUPS configured printer

`lynx http://localhost:631`

You can use Chrome or Firefox if it better suits you

# Find out RAM and CPU info

`cat /proc/meminfo` to find out how much RAM  
`cat /proc/cpuinfo` to find out CPU information

# Mess around with network interfaces

The file you want is in `/etc/network/interfaces/`

# CLI browsing

`sudo apt-get install lynx`  
`lynx http://tldp.org`

# Display calendar

With week numbers etc
-   **cal     :** displays the current month
-   **cal 2014:** displays the whole year
-   **ncal -w :** shows the week numbers
-   **ncal -e:** shows when Easter is

# Rip YouTube videos

`sudo apt-get install youtube-dl ffmpeg lame`  
`cd ~/Videos`  
`youtube-dl http:/youtubevideoaddress`

The downloaded video is in *.webm* format, to convert to wav, do this

`ffmpeg -i filename.webm filename.wav`

To convert to mp3, do this further

`lame filename.wav filename.mp3`

# RDP from Windows to Linux

`sudo apt-get install xnest`  

Edit *etc/gdm/gdm.conf* then uncomment *RemoteGreeter* in the daemon section. Just delete the pound sign. Next, find the *xdmcp* section and change the value of the *Enable Key*, set it to *true*.

Log out so you can restart the GDM or you can execute this command

`sudo /etc/init.d/gdm restart`

After that, the box is ready to accept remote desktop connections from Windows clients

**Get a download accelerator**

`sudo apt-get install axel`  
`cd ~/Downloads`  
`axel -n 10 http://wordpress.org/latest.zip`

The int value of *-n* means the number of threads it will use to pull the file. Go easy on this one, don't try to punish the web server by setting a very high number. 10 seems a bit excessive already.

# Backup a MySQL database

`sudo mysqldump -u YourUserName -p --all-databases > /path/to/dump/file.backup`

The dumped file is basically text. They are SQL commands that has both structure and data of the dumped database. To restore the db from the dumped file, do this

`mysql -u YourUserName -p`

`mysql> create database nameOfNewDatabase`  
`mysql> use nameOfNewDatabase`  
`mysql> .\file.backup`

# Manage the run level configuration

If you don't want to always type `/etc/init.d/processname restart` get the run level config manager

`sudo apt-get install sysv-rc-conf`  
`sysv-rc-conf`

Use the minus sign(-) to stop processes and plus(+) sign to restart them. 

# SSH to your Linux box

First, you need to make it an SSH server

`sudo apt-get install ssh`

Then from a remote host, connect to it

`ssh yourusername@remotehost`

*yourusername* has to be a defined account in the remotehost computer. You will be asked, the first time around, to store an entry inside ~/.ssh/known\_hosts, say yes to this question

**Connect Windows to a CUPS printer**

1.  Ping the CUPS printer, make sure there are no network connectivity issues
2.  Go to *Add Printers* dialog window
3.  Choose *Add network printer*
4.  Choose *My printer is not listed*, because it might not be
5.  There will be a box provided, type `http://ipofCUPSprinter:631/nameofQueue`. The *nameofQueue* is something your sys admin would know, so ask him. Or you could simple open up a browser and go to <http://ipofCUPSprinter:631>, the name of the queue is usually listed in there under the *Printers* section
6.  Select a driver for the printer, most Windows 7/8 boxes can simply pull this from the internet

# Install a print server

`sudo apt-get install cupsys`

Configure /etc/cups/cupsd.conf

# Install Java RE and SDK from Oracle

`sudo add-apt-repository ppa:webupd8team/java`  
`sudo apt-get update`  
`sudo apt-get install oracle-java8-installer`  
`sudo update-alternatives --config java`

# Screen capture

`sudo apt-get install imagemagick`  
`cd ~/Pictures`
-   **`import -window root Image1.png`:** Take the screenshot of the whole screen
-   **`import Image2.png`:** The mouse pointer will turn to a crosshair, click and drag the screen region you want to capture
-   **`import -frame Image3.png`:** Just like the command above but this one captures the frame of the window region

## Other options

1.  `sudo apt-get install shutter`
2.  `sudo apt-get install gimp`
3.  `sudo apt-get install gnome-screenshot` if you don't mind using gnome
4.  Just press PRT SC to get the whole screen
5.  Shift PRT SC to get just a portion of the screen
6.  `scrot` This will silently take a screenshot of the whole screen, and will create a file on the current directory

# View an image

`gpicview Image01.png`

# Mount an SMB or CIFS share

`sudo apt-get install smbclient`  
`sudo apt-get install cifs-utils`  
`sudo mount -t cifs //servername/folder ~/mountFolder`

If you don't know the name of the folder that is shared, use the smbclient to discover it

`sudo smbclient -L servername`

If you don't know the name of the server, although, you should, try to

`arp -n`

It should give you the list of servers that your machine already talked to. The problem is, what if you haven't talked to that machine yet? You could try to

`ping 255.255.255.255`  

Ping the whole network, try to see if you can recognize some servers in there

# System time is wrong all the time

Edit `/etc/default/rcS`

UTC is enabled by default, set it to no

    UTC=no

Reboot

# Check battery

The `ibam` doesn't seem to be applicable anymore. But instead there are two commands that might do the trick

`upower -e`  
`upower -i <power source>`

The -e option gives only the power sources, namely the battery and plugged power. The -i option gives a detailed info about the power source. So use the commands like this

`` upower -i `upower -e` ``

# Terminal color

Find out first how many colors does the terminal already have. The `tput colors` command will tell you the current number of colors

On the **~/.bashrc** file, set the number of colors to 256

    # ~/.bashrc
    
    export TERM="xterm-256color"

If you do this, remove any setting from any tool e.g. tmux, emacs that will interfer with setting the TERM color.

# HP LaserJet P1102W

You will need quite a couple of things. This printer requires the hplip package. That is not all, it also requires a proprietary plugin from HP for it to function properly. 

`sudo apt-get install hplip hplip-gui`

Launch the HPLip Toolbox. If you are using Lubuntu with the default LXDE, it will be in the **Preferences** menu. If you are using **gnome-do**, it is so much easier to find, press the superkey + spacebar

After installation, if you have configured the P1102W properly, your workstation is on the same subnet as the printer, the HPLip Toolbox should have installed it already. In fact, if you check the line printer status, `lpstat`, you should be able to see the printer installed already.  

You need to set a default printer. This can be done using `lpoptions -d PrinterName`. If the LinuxMachine is equipped with GUI, it can also be done there. In Lubuntu it's under **System tools** - **Printers**. If you don't set a default printer, you might not be able to use commands such as `lpstat, lpr, lprm` etc.

# Format external drive to FAT32

`sudo apt-install dosfstools`

Find out the name of the actual device

`sudo fdisk -l`

If you simpy use fdisk without the sudo, you might not see all the disk

`sudo mkdosfs -F -I /dev/sdb1`

Substitute the actual device name to **sdb1**. The primary disk will be sda &#x2014; sda1 is the first partition on the primary disk, sda2 is the second partition etc. If you have a second disk it will be **sdb**. If you have a USB external disk attached, it could be **sdc**. The disk has to be properly partitioned before you format it to FAT32. 

You can use **fdisk** or **cfdisk** to created partitions. There are GUI tools to do this as well like **gparted**. Actually, it's a lot easier to use gparted, so just go use that.

# Hash Sum Mismatch Error

During a software update, you might encounter this error. Just remove the contents of **apt/lists**

`sudo rm -fr /var/lib/apt/lists/*`  
`sudo apt-get update`  
`sudo apt-get upgrade`

# nvPY

`sudo apt-get install nvpy`  

Create a config file for nvpy 

`sudo touch ~/.nvpy.cfg`

    # .nvpy.cfg
    
    [nvpy]
    notes_as_txt = 1
    txt_path = /home/thagos/Dropbox/notes
    
    #disable simplenote syncing, use 1 to enable it
    simplenote_sync = 0
    
    # 0 value will sort in alphanumeric mode
    sort_mode = 1

There is a detailed example and explanation of the cfg file in <https://github.com/cpbotha/nvpy>
