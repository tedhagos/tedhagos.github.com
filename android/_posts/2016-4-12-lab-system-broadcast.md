---
title: 05.2.1 System Broadcast - LAB
---

## Introduction


## Objectives

- Create a project that receives or listens to a system broadcast
- Register and unregister a broadcast receiver

## Responding to System Broadcast

**1. Create a new Project with an empty Activity**

**2. Create a new Java class on the same package**, named "TimeReceiver.java"

{% highlight java %}
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

/**
 * Created by ted on 4/12/2016.
 */
public class TimeReceiver extends BroadcastReceiver {

  private int counter = 0;

  @Override
  public void onReceive(Context context, Intent intent) {
    Toast.makeText(context, "Time "+counter++, Toast.LENGTH_LONG).show();
  }
}
{% endhighlight %}

We won't do anything fancy inside the onReceive method, we simpy want to make Toast message visible whenever our receiver gets the broadcast.

**3. Create the intent filter programmatically** and create an instance of the TimeReceiver class.

{% highlight java %}
public class MainActivity extends AppCompatActivity {

  IntentFilter filter = new IntentFilter(Intent.ACTION_TIME_TICK);
  TimeReceiver receiver = new TimeReceiver();

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
  }
{% endhighlight %}

The ACTION_TIME_TICK is a protected intent which can only be sent by the system. It is sent every 60 seconds. You will not be able to receive this broadcast if you declare the receivers inside the android manifest. This is the reason why the receiver was registered programmatically.

**4. Register the broadcast receiver**. We will register our broadcast receiver inside the onResume hook method of the main activity class. 

{% highlight java %}
  @Override
  public void onResume() {
    this.registerReceiver(receiver,filter);
    super.onResume();
  }
{% endhighlight %}


**5. Unregister the receiver inside the onPause method**. We are not interested in receiving broadcast messages when our application is paused.

{% highlight java %}
  @Override
  public void onPause() {
    this.unregisterReceiver(receiver);
    super.onPause();
  }
{% endhighlight %}

## References

1. Android Developer [Intent API Documentation](http://developer.android.com/reference/android/content/Intent.html#ACTION_TIME_TICK). Retrieved 12 April 2016

## Exercises



