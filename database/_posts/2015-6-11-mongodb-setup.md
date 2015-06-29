---

title: MongoDB installation

tags:
- mongodb

---

MongoDB is available for OSX, Linux, Solaris and Windows. There are a couple of ways to install it on each individual platform but the most obvious way is to use the pre-compiled binaries which can be obtained from the [download page of mongodb.org](http://www.mongodb.org). Once you are in the download page, choose the proper binary for your platform and click the download links.

## Mac

The pre-compiled binary for Mac is a gzipped tar archive. There are only a couple of things to do to install MongoDB on a Mac system, the steps are

1. Extract the contents of the gzipped archive to a folder location of your choice
2. Include the the **bin** folder of the mongodb installation (the one you extracted) into your system path
3. Create a the folder `/data/db` and change it's owner to your userid

The following commands will do exactly the


{% highlight bash %}

cd ~
tar -xzvf mongodb-osx-xxx.tgz
echo "PATH=$PATH:~/mongodb-osx-xxx/bin:." >> ~/.bash_profile
source ~/.bash_profile
sudo /data/db
sudo chown -R `id -u` /data/db

{% endhighlight %}

## Linux

The installation steps for Linux will be very similar to the steps on how to install mongodb on a Mac system. The download page on the mongodb page will ask you though for the specific flavor of your Linux system. Once you have navigated to the proper link, start the download process and proceed as follows

{% highlight bash %}

cd ~
tar -xzvf mongodb-osx-xxx.tgz
echo "PATH=$PATH:~/mongodb-osx-xxx/bin:." >> ~/.bashrc
source ~/.bashrc
sudo /data/db
sudo chown -R `id -u` /data/db

{% endhighlight %}


## Windows

The binary installer for Windows is an `msi` file. 
