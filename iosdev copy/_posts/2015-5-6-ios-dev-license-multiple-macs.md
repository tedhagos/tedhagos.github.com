---

title: ios dev license on 2 macs
tags:
- yosemite
- ios
- development

---

The ios developer license is not tied to the machine, it is tied to the user, an apple id. So you can use it on another mac. The steps required are the following.

# Export the P12 file

Get the private key, a P12 file, from the mac which you used to join the ios developer program, we will call this **first mac**. You would have been asked to generate certificate signing request (CSR) and have downloaded a development certificate when you joined the ios dev program. You cannot simply redownload the  development certificate on your other mac because the private key that used to create this cert is unique to the first mac. That is why we need to export the private key that was used to generate the developer certificate. 

To export a P12 file, you need to do it on **Keychain Access**. From `Finder` go to `Applications > Utilities > Keychain Access`. Alternatively on the keyboard, `CMD + SPACE` then type Keychain Access. On the `Category` panel, click `Keys`. You should be able to find the private key that that was installed when you double clicked the .CER file which was downloaded from iOS Dev Center portal.  

![iphone dev cert keychain](images/iphone-dev-certificate.png)

Right click on certificate then choose `export ...`

![iphone dev cert export](images/iphone-dev-certificate-2.png)

Save the `Certificates.p12` file. You will be asked for a password when you do the export. It doesn't have to be your mac login password, but go right ahead if you want to use that. Copy the P12 file over to your second mac then double click to install it. You will be asked for a password when you install the key, it will be the password you used during the export process earlier.

# Setup XCode

Open XCode on the second mac, go to `Preferences > Accounts` click the `+` sign below the panel to add the ios dev account. Fill in your apple id and password for the iOS Dev Center. Click `View Details` then click the `Refresh` button below. 

At this point, you should be able to sign codes and upload to iTunesConnect using your second mac.

 