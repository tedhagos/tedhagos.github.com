---

title: 6.3.1 Basic SQLite Programming - LAB

---

**1. Create a project with an empty activity**, named "databasesample". Add two buttons, a scrollview and a textview. The textview should be nested inside the scrollview. 

![](images/basic-sqlite-lab.png)

The definition of activity_main.xml is found below.

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
  tools:context="com.example.ted.databasesample.MainActivity">

  <Button
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:text="Insert Records"
    android:id="@+id/insertButton"
    android:layout_centerHorizontal="true"
    android:layout_marginTop="49dp"/>

  <Button
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:text="Read Records"
    android:id="@+id/readButton"
    android:layout_below="@+id/insertButton"
    android:layout_centerHorizontal="true"
    android:layout_marginTop="31dp"/>

  <ScrollView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:id="@+id/scrollView"
    android:layout_centerVertical="true"
    android:layout_alignParentStart="true">

    <TextView
      android:layout_width="match_parent"
      android:layout_height="wrap_content"
      android:id="@+id/textView"
      android:layout_below="@+id/scrollView"
      android:layout_toEndOf="@+id/textView"
      android:layout_marginTop="44dp"/>

    </ScrollView>

</RelativeLayout>
{% endhighlight %}


**2. Create some private members** of the main activity class

{% highlight  java %}
public class MainActivity extends AppCompatActivity {

  String DB = "mydb";
  SQLiteDatabase db = null;
  TextView tv = null;

  String stmt1 = "CREATE TABLE IF NOT EXISTS MyTable (lastname VARCHAR, firstname VARCHAR, email VARCHAR)";
  String stmt2 = "INSERT INTO MyTable VALUES ('Doe', 'John', 'jdoe@gmail.com')";
  String stmt3 = "INSERT INTO MyTable VALUES ('Gosling', 'James', 'jgosling@sun.com')";
  String stmt4 = "INSERT INTO MyTable VALUES ('Ritchie', 'Dennis', 'dmr@belllabs.com')";
{% endhighlight %}

The variables "mydb", "db" and "tv" will be accessed later by the methods createRecords and readRecords, that is the reason why they needed to be defined as top level class members.


**3. Implement the onCreate** method of the main activity. Add event listeners for the buttons "Read records" and "Insert records". 

{% highlight java %}

    Button btnCreate = (Button) findViewById(R.id.insertButton);
    Button btnRead = (Button) findViewById(R.id.readButton);
    tv = (TextView) findViewById(R.id.textView);

    assert btnCreate != null;
    btnCreate.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        createRecords();
      }
    });

    assert btnRead != null;
    btnRead.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        readRecords();
      }
    });
{% endhighlight %}

**4. Implement the createRecord method**

{% highlight java %}
  private void createRecords() {
    db = openOrCreateDatabase(DB, MODE_PRIVATE, null);
    db.execSQL(stmt1);
    db.execSQL(stmt2);
    db.execSQL(stmt3);
    db.execSQL(stmt4);
    db.close();
  }
{% endhighlight %}

**5. Verify creation of the database** using the android device monitor 

![](images/android-device-monitor-db.png)

**6. Inspect contents of the database** using the adb shell

{% highlight bash %}
adb shell
# sqlite3 /data/data/com.example.ted.databasesample/databases/mydb
sqlite> .databases
sqlite> .tables
sqlite> .schema MyTable
sqlite> SELECT * FROM MyTable;
sqlite> .quit
{% endhighlight %}






