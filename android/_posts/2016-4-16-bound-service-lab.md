---

title:  9.2 Bound Services - LAB

---

**1. Create an empty project**

![](images/unbound-service-lab.png)

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:paddingBottom="@dimen/activity_vertical_margin"
  android:paddingLeft="@dimen/activity_horizontal_margin"
  android:paddingRight="@dimen/activity_horizontal_margin"
  android:paddingTop="@dimen/activity_vertical_margin"
  tools:context="com.example.ted.boundservice.MainActivity"
  android:orientation="vertical">

  <Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Bind"
    android:id="@+id/btnBind"/>

  <Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Unbind"
    android:id="@+id/btnUnbind"/>

  <EditText
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:id="@+id/etfirstno"
    android:layout_gravity="right"
    android:hint="enter first no"
    />

  <EditText
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:id="@+id/etsecondno"
    android:layout_row="4"
    android:layout_column="4"
    android:hint="enter second no"
    />

  <Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Get GCF"
    android:id="@+id/btnGCF"/>

  <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:id="@+id/txtResult"
    android:layout_gravity="center_horizontal"/>

</LinearLayout>

{% endhighlight %}

**2. Create the service class**

{% highlight java %}
package com.example.ted.boundservice;

import android.app.Service;
import android.content.Intent;
import android.os.Binder;
import android.os.IBinder;
import android.support.annotation.Nullable;

import java.util.ServiceConfigurationError;

public class MyService extends Service {

  private final IBinder mbinder = new MyBinder();

  @Nullable
  @Override
  public IBinder onBind(Intent intent) {
    return mbinder;
  }

  public int getGreatestCommonFactor(int a, int b) {
    int smallno, bigno, rem;

    if(a > b) {
      bigno = a; smallno = b;
    }
    else {
      bigno = b;smallno = a;
    }

    while((rem = bigno % smallno) != 0) {
      bigno = smallno;
      smallno = rem;
    }
    return smallno; // when the loop finishes, smallno is the GCF
  }

  /* inner class definition */

  public class MyBinder extends Binder {
    public MyService getService() {
      return MyService.this;
    }
  }

}
{% endhighlight %}

**3. Bind the service to the main activity**

{% highlight java %}
public class MainActivity extends AppCompatActivity {

  private static final String TAG = "BoundService";

  MyService mservice;
  boolean servicestatus = false;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Button btnBind = (Button) findViewById(R.id.btnBind);
    Button btnUnbind = (Button) findViewById(R.id.btnUnbind);
    Button btnGCF = (Button) findViewById(R.id.btnGCF);

    EditText etfno = (EditText) findViewById(R.id.etfirstno);
    EditText etsno = (EditText) findViewById(R.id.etsecondno);

    assert btnBind != null;
    btnBind.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        Intent i = new Intent(getBaseContext(), MyService.class);
        bindService(i,conn, Context.BIND_AUTO_CREATE);
        servicestatus = true;
        Log.d(TAG, "Service is already bound");
      }
    });

    assert btnUnbind != null;
    btnUnbind.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        if(servicestatus) {
          unbindService(conn);
          servicestatus = false;
          Log.d(TAG, "Service was unbound");
        }
        else {
          Log.d(TAG, "Service is already unbound, no further action taken");
        }
      }
    });

    assert btnGCF != null;
    btnGCF.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        int a = Integer.parseInt(((EditText) findViewById(R.id.etfirstno)).getText().toString());
        int b = Integer.parseInt(((EditText) findViewById(R.id.etsecondno)).getText().toString());

        int result = mservice.getGreatestCommonFactor(a,b);

        ((TextView)findViewById(R.id.txtResult)).setText(new Integer(result).toString());

      }
    });

  }

  ServiceConnection conn = new ServiceConnection() {
    @Override
    public void onServiceConnected(ComponentName name, IBinder service) {
      MyService.MyBinder binder = (MyService.MyBinder) service;
      mservice = binder.getService();
      servicestatus = true;
      Log.d(TAG, "onServiceConnected, service status is true");
    }

    @Override
    public void onServiceDisconnected(ComponentName name) {

    }
  };

}
{% endhighlight %}


**4. Update the manifest and declare the service**

{% highlight xml %}
  <application
    android:allowBackup="true"
    android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:supportsRtl="true"
    android:theme="@style/AppTheme">
    <activity android:name=".MainActivity">
      <intent-filter>
        <action android:name="android.intent.action.MAIN"/>

        <category android:name="android.intent.category.LAUNCHER"/>
      </intent-filter>
    </activity>
    <service android:name=".MyService"/>
  </application>
{% endhighlight %}
