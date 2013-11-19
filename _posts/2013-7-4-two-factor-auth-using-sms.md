---
layout: post

title: Two Factor Authentication
subtitle: A poor man's approach for web applications

excerpt: One way to achieve a two factor authentication is to couple a simple website login with an SMS  One Time PIN. The username/password (what the user know) is the first layer of security challenge. The web application generates a random number which is valid only for current browser session, sends the generated random number via a third party SMS gateway and asks the user to input the OTP (One Time Pin) in order to satisfy the security challenge.  

description: Two factor authentication using the cheap SMS mechanism. If you are looking for a poor-man's two factor auth, this might be your solution.

lastupdated: 2013-07-4 

author: Ted Hagos

categories:
- SMS

tags:
- solution
- project
- security
- web_app

---


One way to achieve a two factor authentication is to couple a simple website login with an SMS  One Time PIN. The username/password (what the user know) is the first layer of security challenge. The web application generates a random number which is valid only for current browser session, sends the generated random number via a third party SMS gateway and asks the user to input the OTP (One Time Pin) in order to satisfy the security challenge.  The OTP will serve as the “what you have” part for our 2 factor authentication. 

This is a poor man's approach to Two Factor authentication. If you are strapped for cash and cannot afford the fancy gadgets that has random number generators (the one that changes every five minutes), then this solution might be good enough in the meantime.

<img src="/img/2factor-auth-sms.png" />
<div id="cap">
  Fig 1: Sequence/Workflow of Two Factor Auth
</div>
  
It is best (and recommended) to seek third party integration to handle the SMS messaging aspect. A fully functioning SMS gateway is non-trivial to build and develop from scratch. There are lots of SMS gateway providers {TODO: Compile some options for third party SMS gateway providers}

***

**THINGS TO CONSIDER**

**Session Management** will not be very simple. You will need to account the coupling of a randomly generated number (a one time pin, like what most banking sites use). Associate it with the current browser session. The basic idea is to expire that PIN after the browser session has ended. You will need to carefully think about simpistic state management now.

**A Messaging component** will have to be written. Surely you won't write the SMS-specific codes intermingled with your primary business logic? would you? Depending on what SMS gateway solution you will choose, this messaging component maybe as simple as making a RESTful call or integrating a complicated client-side library. You must consider complexity of integration when choosing a third party solution for th SMS gateway.

**Cost** of sending or receiving 1 SMS message. Some services are free, most are not. You need to do some cost analysis here.

***

**HOME GROWN SMS SOLUTION**

If you are quite handy on Linux, you can build an SMS gateway of your own. You can try to use [kannel](http://kannel.org) or concoct your own using [gnokii, smsd and a USB modem](http://thelogbox.com/send-receive-sms-messages-usb-modem-linux/).

For the hardcore, if you can still remember your RS-232 programming and you can lay your hands on an old copy of the Hayes AT&T GSM modem commands, you can go down that route too. 

***

**ANOTHER SOLUTION FOR 2 FACTOR AUTH**

Use the MAC address of the device. That will satisfy the “what you have” requirement. The device itself is the security token. This is simpler and more transparent to the user because of the reduced steps on the workflow.

This cannot be easily or eleagantly done if the user is on a Desktop machine and accessing the application via a browser. There is no way (yet) to get the MAC address of the machine without resorting to trickeries like ActiveX. The MAC information is not on the TCP packet, it is on the Ether. The Ether information does not make it to the HTTP headers (which is what you have on the server side of the web app)

And so, the MAC solution might be a better fit for mobile devices. I would suspect that a standard API exists for extracting MAC on IOS or Android.  


