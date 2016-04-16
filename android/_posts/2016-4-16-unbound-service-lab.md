---

title: 9.1 Unbound Service - LAB

---

## Introduction

## Objectives

## Creating an unbound service

**1. Create an empty project with an empty activity**


![](images/simple-service-lab.png)

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    tools:context="com.example.ted.simpleservice.MainActivity">

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Start"
        android:id="@+id/startButton"
        android:layout_alignParentTop="true"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true" />

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Stop"
        android:id="@+id/stopButton"
        android:layout_below="@+id/startButton"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true" />
</RelativeLayout>
{% endhighlight %}

**2. Create a class that extends Service**

{% highlight java %}
public class MyService extends Service {
  private static String TAG = "MyService";

  public MyService() {
  }
}
{% endhighlight %}

**3. Implement the onBind method of the service class**

{% highlight java %}
  @Override
  public IBinder onBind(Intent intent) {
    // TODO: Return the communication channel to the service.
    // throw new UnsupportedOperationException("Not yet implemented");
    return null;
  }
{% endhighlight %}

**4. Implement the onStartCommand of the service class**

{% highlight java %}
  @Override
  public int onStartCommand(Intent intent, int flags, int startId) {
    // return super.onStartCommand(intent, flags, startId);
    Toast.makeText(this,"Starting the service", Toast.LENGTH_LONG).show();
    Log.d("MyService", "onStart hook method");
    //return START_STICKY;
    stopSelf();
    return super.onStartCommand(intent, flags, startId);
  }
{% endhighlight %}

**5. Declare the service in the android manifest file**

{% highlight xml %}
  <application
    android:allowBackup="true"
    android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:supportsRtl="true"
    android:theme="@style/AppTheme">
    <activity android:name=".MainActivity">
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />

        <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
    </activity>

    <service android:name=".MyService"/>
  </application>
{% endhighlight %}


