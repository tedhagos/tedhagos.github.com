---
title: 05.2.2 Custom Broadcast - LAB
---

## Introduction



## Objectives



## Receiving Custom Broadcast Messages

**1. Create a new project**.


**2. Create a BroadcastReceiver class** on the same package as the main activity. A broadcast receiver class must extend the `android.content.BroadcastReceiver` class. 

{% highlight java %}
public class MyReceiver extends BroadcastReceiver {

  @Override
  public void onReceive(Context context, Intent intent) {
    Log.d("MyReceiver", "I got it");
    Toast.makeText(context, "I got it", Toast.LENGTH_LONG).show();
  }
}
{% endhighlight %}

**3. Register the receiver** using a static definition of an intent filter in the android manifest file. 

{% highlight javascript %}
<receiver android:name=".MyReceiver">
  <intent-filter>
    <action android:name="com.thelogbox.DOSOMETHING"/>
  </intent-filter>>
</receiver>
{% endhighlight %}

**4. Run the application**. The application does not need to be visible for it to receive the broadcast

**5. Send a broadcast message.** There are two ways to send a broadcast, programmatically and via the adb shell. To send the message using adb, use the command

{% highlight bash %}
adb shell am broadcast -a com.thelogbox.DOSOMETHING
{% endhighlight %} 





## Exercises