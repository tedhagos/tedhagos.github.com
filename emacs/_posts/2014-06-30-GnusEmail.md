---

title: Gnus Email
author: Ted Hagos
categories: emacs

---



# Goal

1.  Get a local copy of Gmail on a notebook/workstation, **offlineimap** seems like a good choice
2.  Use Gnus in Emacs to read the mail
3.  Search the email using **notmuch**

# Config

Make sure that IMAP is enabled in your Gmail account. Verify your settings in Gmail first, then come back here to continue the config.

`touch ~/.gnus`

Put this entry in the .gnus file, replace **emailaddress@gmail.com** with the real email address

{% highlight lisp %}
(setq gnus-select-method
  '(nnmaildir "GmailDiary"
     (directory "~/.GMailDiary")
     (directory-files nnheader-directory-files-safe)
     (get-new-mail nil)))

(setq message-send-mail-function 'smtpmail-send-it 
      smtpmail-starttls-credentials '(("smtp.gmail.com" 587 nil nil)) 
      smtpmail-auth-credentials '(("smtp.gmail.com" 587 "somebody@gmail.com" nil)) 
      smtpmail-default-smtp-server "smtp.gmail.com" smtpmail-smtp-server 
      "smtp.gmail.com" smtpmail-smtp-service 587 
      gnus-ignored-newsgroups "^to\\.\\|^[0-9. ]+\\( \\|$\\)\\|^[\"]\"[#'()]")

(setq gnus-secondary-select-methods '((nnml "")))
(setq user-mail-address "diaryofted@gmail.com")
{% endhighlight %}

`touch ~/.authinfo`

Contents of .authinfo is 

    machine imap.gmail.com login somebody@gmail.com password secretpassword  port 993 
    machine smtp.gmail.com login somebody@gmail.com password secretpassword  port 587

Replace **secretpassword** with the real password

## DONE OffLineImap

-   [X] Clean this up
-   [X] Remove specific usernames and password

Now for OffLineImap

    [general]
    accounts = PHMail
    accounts = MyGmailAccount
    
    [Account PHMail]
    localrepository = Local
    remoterepository = Remote
    autorefresh = 5
    quick = 10
    
    [Repository Local]
    type = Maildir
    localfolders = ~/MailPH
    
    [Repository Remote]
    type = IMAP
    remotehost = TheHostName
    remoteuser = someone@somedomain.com
    keepalive = 60
    holdconnectionopen = yes
    
    [mbnames]
    enabled = yes
    filename = ~/.mutt/mailboxes
    header = "mailboxes "
    peritem = "+%(accountname)s/%(foldername)s"
    sep = " "
    footer = "\n"
    
    [Account MyGmailAccount]
    localrepository = MyGMailLocal
    remoterepository = MyGmailRemote
    
    [Repository MyGMailLocal]
    type = Maildir
    remotehost = localhost
    remoteuser = linuxUserName
    localfolders=~/.MyGMail
    
    [Repository MyGMailRemote]
    type = IMAP
    remotehost = imap.gmail.com
    remoteuser = someone@gmail.com
    remotepass = secret
    ssl = yes
    sslcacertfile = /etc/ssl/certs/ca-certificates.crt
    maxconnections = 1
    realdelete = no
    folderfilter = lambda foldername: foldername in ['INBOX']
    holdconnectionopen = true
    keepalive = 60

# Reading email

`M x gnus`

It will take a while to pull all the emails, so be patient. It looks like ncurses, so basically just navigate to the folders using up and down arrow keys, then press enter on either the INBOX, All Mail etc. 

To go up the previous screen, press **p**
