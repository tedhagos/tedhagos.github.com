---

title: 8.1 Threads and Handlers - LAB

---

## Introduction

Source code is over at [github.com/tedhagos](https://github.com/tedhagos/Threads)

## Objectives

## Spawning new threads

**1. Create a project with an empty activity**

![activity xml](images/activity-with-thread.png)

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:paddingBottom="@dimen/activity_vertical_margin"
  android:paddingLeft="@dimen/activity_horizontal_margin"
  android:paddingRight="@dimen/activity_horizontal_margin"
  android:paddingTop="@dimen/activity_vertical_margin"
  tools:context="com.example.ted.threads.NoThread">

  <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:textAppearance="?android:attr/textAppearanceLarge"
    android:text="Large Text"
    android:id="@+id/textView"
    android:layout_marginTop="57dp"
    android:layout_alignParentTop="true"
    android:layout_centerHorizontal="true"/>

  <Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Try me"
    android:id="@+id/button"
    android:layout_marginTop="84dp"
    android:layout_below="@+id/textView"
    android:layout_centerHorizontal="true"/>
</RelativeLayout>
{% endhighlight %}

**2. Implement the onCreate of the main activity**

{% highlight java %}
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_with_thread);

    Button btn = (Button) findViewById(R.id.button);
    assert btn != null;
    btn.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        new Thread(new Backgrounder()).start();
      }
    });

  }
{% endhighlight %}

**3. Create a Runnable class and a handler class inside the main activity class**

Code for the Runnable class is below.

{% highlight java %}
  // BACKGROUNDER CLASS
  class Backgrounder implements Runnable {
    public void run() {
      // time consuming task
      long future_time = System.currentTimeMillis() + 5000;
      while(System.currentTimeMillis() < future_time) {
        synchronized(this) {
          try {
            wait(future_time - System.currentTimeMillis());
          }
          catch(InterruptedException ie){
            Log.e(TAG, String.format("Yikes! %s", ie.toString()));
          }
        }
      }
      // end time consuming task
      handler.sendEmptyMessage(0);
    }
  }
{% endhighlight %}

Code for the Handler object is below

{% highlight java %}
  // HANDLER CLASS

  Handler handler = new Handler() {
    @Override
    public void handleMessage(Message msg) {
      TextView tv = (TextView) findViewById(R.id.textView);
      tv.setText("Hello World");
    }
  };
{% endhighlight %}






