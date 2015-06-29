---

title: Mixed up messages on email thread
tags:
- mail

---

When people's mail to you are bundled up and hooked up to the wrong email thread, that may be a sign that y0u need to rebuild the indexes of mail.app. The first thing is to rebuild the mailbox using mail.app's menu

1. Open Mail.App
2. Go the **Mailbox** menu
3. click **Rebuild**

Sometimes this does the trick and your email is healthy again. Other times, it won't and the problem still persist.

The second thing to try is to delete the index files of mail.app which effectively forces it to rebuild the index from scratch.

Before you try this second method, make sure that you are in a high speed internet connection because mail.app will try to synchronize your local mail storage with your email server. If you  have years and years of email messages on the machine, this process make take quite a bit of time. Also, this method requires that you work on a terminal window. This method is destructive because if you screw up the typing and accidentally delete files you don't intend to delete, there is no coming back from it. The only way to reverse whatever damage you might cause is via a time machine restoration. If you are still interested in trying this method, here it goes.

Quit Mail.app completely then launch a terminal window. You can use Terminal.app or iTerm for this. Go to the MailData folder

~~~
cd ~/Library/Mail/V2/MailData
ls | grep Envelope
~~~

You should see at least 3 files that has the word 'Envelope' in them. These are `Envelope Index, Envelope Index-shm` and `Envelope Index-wal`. You need to delete all three

~~~
rm Envelope\ Index
rm Envelope\ Index-shm
rm Envelope\ Index-wal
~~~

When mail.app opens the next time, it will look for these three files. When it doesn't find these files, mail.app will recreate it and rebuild your email indexes. This is the process that will take some time depending on how large your mailbox is.
