---

title: Lubuntu Trusty on Thinkpad Edge 130

---
The E130 is an entry level ThinkPad. It doesn't have the same solid feel of the T420 or even the lower ends of the X series. It's not a bad notebook though. For it's price, it makes a pretty good type writer and secondary development machine.

# Hardware

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">Processor</td>
<td class="left">dual core i5, cpu MHz 774</td>
</tr>


<tr>
<td class="left">RAM</td>
<td class="left">4GB DDR3, expanded it to 8GB</td>
</tr>


<tr>
<td class="left">HDD</td>
<td class="left">500GB SATA2, 9mm slim type drive</td>
</tr>
</tbody>
</table>

## Access Panel

The ThinkPad Edge 130 has an access panel located at the bottom. It is secured by 3 Philip screws. Before you do any unscrewing and removal, make sure that
1.  It is not connected to the wall outlet. It's powered down. The machine is off, not sleeping or stand by. Off
2.  The battery is removed

Carefully remove the screws and lift up the access panel. Once the panel is removed, you can pretty much get to the hard drive and the memory modules. 

## Replace the drive with SSD

This notebook's drive is slim type. Which means if you will replace the drive, you need a drive with a 2.5" form factor. It should be SATA2 (or 3 if you cannot find SATA 2 anymore). This notebook uses the slim type SSD. You need to get one that is 7mm high. This kind of drive is usually used by ultrabooks, so it is no longer exotic. The local computer hardware shop probably carries it already. If not, you can always order it online. 

In order to get to the hard drive chassis, you need to open the access panel at the bottom of the notebook. See the section above on how to do that. 

See the official Lenovo support page on how to replace the hard drive . You will need a philips screw driver to remove the drive from the chassis. Just return it the same way you removed it. The replacement exercise does not involve much risk. There isn't much that will get in your way.

## Increase the RAM

The ThinkPad Edge 130 comes in a lot of varieties. Writing the exact specification of the RAM module in this page is futile. This page will become a wikipage for the E130, I can't possibly keep up with that amount of information. The best way to upgrade the RAM is to inspect the existing RAM module. The speed specifications should actually be somewhere on the sticker of the RAM. Make a note of that and buy the additional RAM accordingly.

The second memory bay is usually empty. This notebook comes with 4GB out of the box. There are two clips on the side of the memory bay, you need to flex them a bit. You just need to be careful a bit, but there is no need to be nervous about it also. The official Lenovo support page for RAM replacement is here .  

# Software

At the time of writing, Lubuntu's version is 14.04. The Edge 130 should be able to handle the 64 bit version of Lubuntu. Why else would I put an 8GB RAM on this box if I wouldn't use the 64 bit Linux. So head over to the  [Lubuntu site](http://lubuntu.net) and get the 64 bit installer. Don't worry even if the installer says <span class="underline">AMD 64</span>, that is the installer used, even on non-AMD processors. The Intel X86 is the 32 bit version, at the time of writing, there is no <span class="underline">Intel 64</span> installer of Lubuntu. You really will use the AMD 64 installer.  

Use your other PC to prepare the installer. If this is your first PC, then ask somebody's help you prepare a Linux USB installer. When you buy most USB sticks, they are formatted in FAT32, don't mess with that. There is usually no need to format those sticks.  

There are plenty of ways to prepare a Linux USB installer. The geeky way is to use `dd`, which assumes you already have a Linux machine. And since you are brave enough to try dd, you probably shouldn't be reading this guide. Linux installation is elementary for you. Anyway, just in case you want to see how it's done, there is a well maintained page over at Arch Linux detailing that installation technique. 

Another way to prepare the USB installer is by using [UnetBootin](http://unetbootin.sourceforge.net). This software can run on Windows, Linux and OSX, so you shouldn't have any problems getting it.

Stick in the USB, fire up UnetBootIn. Select the ISO image (the Lubuntu image you downloaded) and make sure you actually see that UnetBootIn has recognized the USB drive. Follow the prompts and you should have a Lubuntu installer

## Installation

1.  Plug the USB installer on one the ports
2.  Power up the E130. Press RET (Enter key) quickly when you see the prompt
3.  The UnetBootIn menu should be visible. Choose "Install Lubuntu"
4.  There will be a series of guide questions, like choosing the language, keyboard etc. Do them accordingly
5.  Make sure you are connected to the internet. Although you can install Lubuntu while offline, it will save you hours of tweaking and troubleshooting if you do the installation online. If you will use WiFi to connect to the net, make sure you're joined to WiFi access point before proceeding. Lubuntu will inform you of WiFi access points at this point of the installation
6.  Lubuntu will format the disk. You don't have to do much. But you may need to select some action. Choose the one that says "Use the whole disk etc" or something like that. If there is an existing OS on the disk, the installer will ask you if you want to install Lubuntu side by side with this OS. You are on your own if you choose this route. This guide is about how to install Lubuntu and only Lubuntu on the E130 notebook. There are plenty of other resources on how to dual boot with Windows. This page is not one of them
7.  After a while, Lubuntu will setup a user. Type your full name, edit the name you want to give to the machine and your password
8.  Shortly thereafter, you will be asked to reboot. Wait for the screen that says "Remove the installation media and press ENTER". Then, do as it says

# Configuration

Login to your shiny and blazing fast Lubuntu. When I timed it, it booted under 12 seconds. That's how fast Lubuntu boots on an dual core i5 with 8GB RAM and SSD. Next, configure it.

## The root password

Lubuntu doesn't want you to use the root credential. I don't want you too either. There is just too much danger. But there are times that you do need to use it. So, change the root password to something you can actually remember

`sudo passwd root`

It will ask you for a password. Type the same password you used to login. When you use `sudo`, you are being challenged for your **own** password, not root's. The sudo command grants you elevated privileges only for the duration of the current command. It's not forever. If you want to use an elevated privilege for a long time, use `su`. Now that will require the root password. That is why we are changing it right now to something we can recall from memory in the future.

## Update the system

`sudo apt-get update`  
`sudo apt-get upgrade`

After this, just install and get whatever software you need. You can refer to the [Linux cheatsheet](/linux/linux-cheatsheet.html)
 for some ideas on what you can do and install in Lubuntu.

## References

1. Lenovo Hardware and maintenance manual for Edge 130 and 135


<div id="footnotes">
<h2 class="footnotes">Footnotes: </h2>
<div id="text-footnotes">

<div class="footdef"><sup><a id="fn.1" name="fn.1" class="footnum" href="#fnr.1">1</a></sup> Hard drive removal and replacement is detailed on this page <http://support.lenovo.com/en_PH/product-and-parts/detail.page?&DocID=PD024375></div>

<div class="footdef"><sup><a id="fn.2" name="fn.2" class="footnum" href="#fnr.2">2</a></sup> This page has detailed steps, though a bit terse. But to compensate, they drew pictures, which helps a lot. The page is at <http://support.lenovo.com/en_PH/product-and-parts/detail.page?&DocID=PD024374></div>

<div class="footdef"><sup><a id="fn.3" name="fn.3" class="footnum" href="#fnr.3">3</a></sup> <https://wiki.archlinux.org/index.php/USB_Flash_Installation_Media></div>

<div class="footdef"><sup><a id="fn.4" name="fn.4" class="footnum" href="#fnr.4">4</a></sup> This link points to the hardware maintenance manual of the Edge 130 <http://www.manualowl.com/m/Lenovo/ThinkPad-Edge-E130/Manual/309636></div>


</div>
</div>
