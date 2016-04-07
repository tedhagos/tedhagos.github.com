---

title: Android Studio Installation on Linux

---

## My Linux Configuration

* Lubuntu 15
* AMD 64, 8GB RAM

## Prep

I ran into some problems when using Android Studio on Linux. The following sections details the problems I encountered when I tried to install AS, created the most basic project, created an AVD and tried to run a project on an emulator

### Missing Libraries 

Linux could be missing some library files. If you run the installer at this point, it may crash and throw out the error message **cannot run mksdkcard tool**. A solution that worked was to add the **libstdc++6** to Linux

{% highlight bash %}
sudo apt-get update
sudo apt-get install lib32stdc++6
{% endhighlight %}

## Gradle build tool

The gradle build tool maybe stuck in **building** for a long time. 64 bit Linux installations may have to install additional libraries for gradle to function properly

{% highlight bash %}
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install libncurses5:i386 libstdc++6:i386 zlib1g:i386
{% endhighlight %}

## Hardware Acceleration

Android emulation is notoriously slow, that is why Google and Intel came up with a solution to speed up the startup and execution time of android emulation. To speed up android emulation, you will need to install HAXM. That is short for hardware accelerated execution manager). If your hardware is quite recent, say purchased after 2012 and is an Intel platform, chances are your hardware can run HAXM. For Mac and Windows users, using the HAXM simply involves getting the software via the SDK manager (or direct downloads, that will work too) and running the installer. Intel has done a decent job of documenting how to get HAXM running on these platforms, the link to that document is on the references section below.

Linux users cannot use HAXM. Instead, Intel suggest to use KVM. Again, the details of installation can be found on the Intel documentation, however, they are excerpted here for easy reference.

Check first if your hardware can run virtualization

```bash
egrep –c ‘(vmx|svm)’ /proc/cpuinfo
```

If you see a number more than zero, that means you can run virtualization. You can proceed to install KVM. Virtualization support is not automatically enabled on the BIOS level. You may have to check if hardware virtualization is enabled on your BIOS, enable it as appropriate.

Next step is to install the KVM and a few other packages. Then add your username to the KVM group

```bash
sudo apt-get install qemu-kvm libvirt-bin ubuntu-vm-builder bridge-utils
sudo adduser your_user_name kvm
sudo adduser your_user_name libvirtd
```

Reboot. After that, KVM should be available for your use.

## Installation proper

The basic steps to get install Android Studio on a Linux machine is as follows

Download the installer from [http://developer.android.com/sdk/index.html](developer.android.com/sdk/). Decompress or unzip the downloaded file and place it somewhere in your disk. Preferably, put it in a place where you have read, write and execute permissions. Your home folder would be a good location

```bash
cd ~
cp ~/Downloads/xzvf android-sdk-versionnumberhere.tgz .
tar -xzvf android-sdk-versionnumberhere.tgz
```

Switch to the folder where you decompressed the installer and run the android studio shell script. Assuming the installer decompressed the downloaded files into a folder named **android-studio** inside your home folder, run the following command

```bash
cd ~/android-studio/bin
./android-studio.sh
```

## Adding SDK libraries

Launch Android Studio. From the command line, cd to `/path/to/android-studio/bin` and then run `./android-studio.sh`. Click "Configure"

Choose the SDK Manager. Launch the stand alone SDK Manager, so you can cherry pick only the packages and tools that are absolutely necessary


## References

1. **Stackoverflow** - http://stackoverflow.com/questions/28847151/unable-to-install-android-studio-in-ubuntu
2. **Intel** - https://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture#_Toc358213273