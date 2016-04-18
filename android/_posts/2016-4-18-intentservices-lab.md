---

title: 9.3 IntentServices - LAB

---

## Introduction

## Objectives

## Implementing IntentService

**1. Create a project with an empty activity**

![](images/intentservice-lab.png)

**2. Create the service class**

{% highlight java %}
public class MyService extends IntentService {

  private final static String TAG = "MyService";

  public MyService() {
    super("MyService Thread:Worker");
  }

  @Override
  public void onDestroy() {
    super.onDestroy();
    Log.d(TAG, "onDestroy of IntentService");
  }

  @Override
  public int onStartCommand(Intent intent, int flags, int startId) {
    Log.d(TAG, "onStartCommand of IntentService");
    return super.onStartCommand(intent, flags, startId);
  }

  @Override
  protected void onHandleIntent(Intent intent) {
    synchronized (this) {
      int counter = 0;
      try {
        while(counter++ < 10) {
          wait(1000);
          Log.d(TAG, String.format("Counter inside onHandleIntent is %d", counter));
        }
        // Notify the activity which started this intentservice
        // that you are done processing
        Log.d(TAG, "Just exited the while loop inside service");

        Intent broadcastintent = new Intent();
        broadcastintent.setAction(MyReceiver.BROADCASTMSG);
        broadcastintent.addCategory(Intent.CATEGORY_DEFAULT);
        sendBroadcast(intent);
        // adb shell am broadcast -a ""
      }
      catch(InterruptedException ie) {
        ie.printStackTrace();
      }
    }
  }
}
{% endhighlight %}

**3. Call the service from main activity**

{% highlight java %}
public class MainActivity extends AppCompatActivity {

  private final static String TAG = "MyService";

  IntentFilter filter = new IntentFilter(MyReceiver.BROADCASTMSG);
  MyReceiver receiver = new MyReceiver();

  @Override
  protected void onStart() {
    //Toast.makeText(this, "onStart", Toast.LENGTH_SHORT).show();
    Log.d(TAG, "onStart of Activity");
    super.onStart();
  }

  @Override
  public void onResume() {
    Toast.makeText(this, "onResume", Toast.LENGTH_SHORT).show();
    filter.addCategory(Intent.CATEGORY_DEFAULT);
    registerReceiver(receiver, filter);
    super.onResume();
  }

  @Override
  protected void onPause() {
    unregisterReceiver(receiver);
    super.onPause();
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    registerEvents();
  }


  private void registerEvents() {

    Button btnstart = (Button) findViewById(R.id.btnStart);
    Button btnstop = (Button) findViewById(R.id.btnStop);
    EditText et = (EditText) findViewById(R.id.et);

    final Intent intent = new Intent(this, MyService.class);

    assert btnstart != null;
    btnstart.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        startService(intent);
      }
    });

    assert btnstop != null;
    btnstop.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        stopService(intent);
      }
    });
  }
}
{% endhighlight %}

**3. Create the receiver class**

{% highlight java %}
public class MyReceiver extends BroadcastReceiver {

  public static final String BROADCASTMSG = "com.example.ted.intentserviceexample.IAMDONE";

  @Override
  public void onReceive(Context context, Intent intent) {
    // What you do you want to do when you receive the broadcast
    Log.d("MyReceiver", "I got the broadcast");
    Toast.makeText(context, "The worker thread has finished", Toast.LENGTH_LONG).show();
  }
}
{% endhighlight %}

**4. Declare the service class in the android manifest**

{% highlight xml %}
    <activity android:name=".MainActivity">
      <intent-filter>
        <action android:name="android.intent.action.MAIN"/>

        <category android:name="android.intent.category.LAUNCHER"/>
      </intent-filter>
    </activity>
    <service
      android:name=".MyService">
    </service>
  </application>
{% endhighlight %}