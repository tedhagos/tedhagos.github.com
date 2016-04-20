---

title: 05.1.2 Implicit Intents - LAB

---

## Introduction



## Objectives

## Implicit Intents

**1. Start an emulator**, then push some images to the sdcard. You can do this using the android device monitor. Navigate to the file browser, select /mnt/sdcard by pointing and clicking to it using your mouse. You can drag and drop images onto that folder

![android device monitor](images/android-device-monitor.png)

On some situations, some emulators may have a read-only filesystem. You won't be be able to push files to it until you have reconfigured the permissions of the /mnt/sdcard folder. To grant write permissions to the sdcard emulator, use the command

{% highlight bash %}
adb shell
su
mount -o rw,remount rootfs /
chmod 777 /mnt/sdcard
exit
{% endhighlight %}

**2. Launch the gallery (picture gallery)** application on the emulator. The pictures you just uploaded may not be visible immediately on the gallery. You can shutdown the emulator and restart it or alternatively, you can send a broadcast message to the emulator in order to rescan the sdcard for new content. You can use the adb shell to do that.

{% highlight bash %}
adb shell am broadcast -a android.intent.action.MEDIA_MOUNTED -d file:///sdcard
{% endhighlight %}


**3. Create a new project with an empty activity**. On the View pallette, get an ImageView control and place it on the main activity screen.

**4. Handle the incoming intent** inside the onCreate hook method. 

{% highlight java %}
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    ImageView imageView = (ImageView) findViewById(R.id.imageView);

    Bundle b = getIntent().getExtras();
    if(b != null) {
      Uri uri = (Uri) b.get(Intent.EXTRA_STREAM);
      imageView.setImageURI(uri);
    }
  }
{% endhighlight %}

**5. Declare the intent in the android manifest file**.

{% highlight xml %}
<intent-filter>
  <action android:name="android.intent.action.SEND"/>
  <category android:name="android.intent.category.DEFAULT"/>
  <data android:mimeType="image/*" />
</intent-filter>
{% endhighlight %}



## Exercises