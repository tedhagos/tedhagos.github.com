---
title: Send and receive SMS messages using Linux
layout: post
categories: linux
permalink: /posts/send-receive-sms-usb-modem/
comments: false
date:   2011-10-04 
---

This guide uses gnokii-sms to send and receive SMS messages using Linux PC. The project I was working on did not require industrial grade throughput. That is the reason I cannot justify the cost of WaveComm iTegra type equipment. The SMS project was ran on a Debian Linux. If you are using a different distro, use the packaging mechanism of your distro.

There were a couple of other solution approaches but I went for gnokii-sms. I didn't have a lot of time, which ruled out whipping serial I/O codes and concocting SMS messages using Hayes AT command set.

I could have used Kannel but it was so big. I only needed a simple mechanism to receve and send SMS message. I did not need a full gateway with all the bells and whistles.

GNOKii-SMS and Gammu were mature solutions. I went eventually with gnokii-sms but Gammu would have been a fit as well.

Hence, this mashup uses gnokii-sms. It is a stand-alone application with a daemon and it uses MySQL database as a datastore. I don't need to learn any API in order to integrate it with my application. All I need to do is to write an application that will query the gnokii-sms backend. I won't even alter the structure of the gnokii-sms database. My application will simply use gnokii for the SMS facility. No application logic will be added to gnokii-sms

This little project requires the following

1.  A Linux PC. Debian was used but I got to test it on Crunchbang as well, worked out fine. It should work fairly well on the Debian derivatives e.g. Ubuntu, Xubuntu, Mint etc
2.  A USB modem. A post paid plan was used for the project, but a USB stick on pre-paid should work just as well

# Installation

`sudo apt-get update`  
`sudo apt-get install mysql-server`  
`sudo apt-get install gnokii-smsd-mysql`

# Config

Connect the USB modem to PC and find out which port it is using

`sudo lsusb`

Another command to use could be

`sudo dmesg | grep USB`

What you are looking for is the device name for the modem. Usually, the modem is at `/dev/tty0`, but just to be sure, run either lsusb or the dmesg command as stated above. Remember the device name because you will need it when you edit `~/.config/gnokii/config` &#x2014; that is the configuration file for gnokii. 

On some Debian derivatives like Crunchbang, the gnokii config file was not created during the installation . If that is the case, just create the config file manually.

`sudo mkdir -p ~/.config/gnokii`  
`sudo touch ~/.config/gnokii/config`

Edit the **config** file. Set the port number and model to their appropriate values

    port=/dev/tty0
    model=AT

There might a default value for the model property, it could be 6510. That value corresponds to a Nokia phone. But we are not using a Nokia phone, we are using a USB modem, so set the model value to **AT**.

Once done with the configuration, just do a quick test so that we know things are working out fine. Gnokii has a command that can quickly tell us if we are doing things correctly.

`sudo gnokii --identify`

It should give us some diagnostics and a quick peek if we did something wrong on the configuration file.

# Database backend

The gnokii-smsd-msyql package contains the SQL scripts necessary to create the table structure, but the database itself still needs to be manually prepared. 

`mysql -u root -p`  
`mysql> create database smsgw;`  
`mysql> use smsgw;`  
`mysql> \. /usr/share/doc/gnokii-smsd-mysql/sms.tables.mysql.sql;`

# Sending and Receiving SMS

First, the daemon smsgw daemon process needs to run. Get another terminal window and run the daemon process from there

`sudo smsd -u root -p smsgw -c localhost -m mysql`

To send an SMS message, the command is

`echo "Test message | gnokii --sendsmsd +MobileNumber`

+MobileNumber is structured as <span class="underline">(country code) phone number</span>

If you send an SMS message to the number of the USB modem, all incoming messages are stored in the **inbox** table of the database

`mysql -u root -p`  
`mysql> use smsgw;`  
`mysql> select * from inbox;`


<div id="footnotes">
<h2 class="footnotes">Footnotes: </h2>
<div id="text-footnotes">

<div class="footdef"><sup><a id="fn.1" name="fn.1" class="footnum" href="#fnr.1">1</a></sup> There was a gnokii config file though at `/etc/xdg/gnokii/config`, this
was probably meant to be copied over to `~/.config/gnokii/config`</div>


</div>
</div>