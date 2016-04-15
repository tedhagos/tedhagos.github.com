---

title: 6.3.2 CursorAdapters and ListView - LAB

---

## Introduction


**Source files** available at the github page [github.com/tedhagos](https://github.com/tedhagos/TODODbView) or;

## Objectives
- Learn to extend CursorAdapters and how to bind cursor columns to 

## Display database contents in a ListView


**1. Plan the database structure**
 
 Our small todo list application will only need to keep a few data points, a description of a task, its status and the date it was created. The data dictionary for our app is as follows:
 
{% highlight bash %}
/*
* SCHEMA OF todo table in todo.db
* 
* _id       : INTEGER PRIMARY KEY AUTOINCREMENT
* status    : INTEGER
* task      : VARCHAR
* timestamp : DATETIME DEFAULT CURRENT_TIMESTAMP
*
* */
{% endhighlight %}

**2. Create a project with an empty activity**.

There are 3 view objects on the layout. The editext will facilitate data input, this is where the user can type up tasks. When the button is clicked, the contents of  

![](images/todolistview.png)

**3. Create a new XML layout file** 

The root of the layout is a relativelayout. There are 3 view objects inside which we will use to display the task record. We will display the status, task and timestamp columns in our database.  You can create this xml file using the **File** menu, then go to **New**->XML-Layout, name the new layout file "todoitems.xml"

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              android:orientation="vertical">

  <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:textAppearance="?android:attr/textAppearanceMedium"
    android:text="tvStatus"
    android:id="@+id/txtStatus"
    android:layout_gravity="center_horizontal"/>

  <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:textAppearance="?android:attr/textAppearanceMedium"
    android:text="tvTodo"
    android:id="@+id/txtTask"
    android:gravity="left"
    android:layout_alignParentTop="true"
    android:layout_toEndOf="@+id/txtStatus"
    android:layout_marginStart="28dp"/>

  <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:textAppearance="?android:attr/textAppearanceMedium"
    android:text="tvDate"
    android:id="@+id/txtDate"
    android:gravity="left"
    android:layout_alignParentTop="true"
    android:layout_toEndOf="@+id/txtTask"
    android:layout_marginStart="60dp"/>

</RelativeLayout>
{% endhighlight %}

**4. Implement the onCreate method on the main activity java file**

The DBNAME constant is defined as a top level class member because we will need access to this constant in few places in the code.

{% highlight java %}
public class MainActivity extends AppCompatActivity {

  private final static String DBNAME = "todo.db";

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Button btnAdd = (Button) findViewById(R.id.btnAdd);
    final EditText txtTodo = (EditText) findViewById(R.id.editText);

    assert btnAdd != null;
    btnAdd.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        assert txtTodo != null;
        addRecord(txtTodo.getText().toString());
        txtTodo.setText("");
      }
    });

  }
{% endhighlight %}

The click action of the button will simply call the addRecord method and pass the contents of the edittext to it.

**6. Create the cursor adapter class**

To create an the adapter class for a cursor, we extend the CursorAdapter, it is a class from the android.widget package. The CursorAdapter is an abstract class, hence we need to provide method implementations for some of its methods.   Save the TodoAdapter class on the same package as the main activity.

{% highlight java %}
public class TodoAdapter extends CursorAdapter {
  public TodoAdapter(Context context, Cursor c, boolean autoRequery) {
    super(context, c, autoRequery);
  }

  @Override
  public View newView(Context context, Cursor cursor, ViewGroup parent) {
    return LayoutInflater.from(context).inflate(R.layout.todo_items, parent, false);
  }

  @Override
  public void bindView(View view, Context context, Cursor cursor) {

    TextView tvstatus = (TextView) view.findViewById(R.id.txtStatus);
    TextView tvtask = (TextView) view.findViewById(R.id.txtTask);
    TextView tvdate = (TextView) view.findViewById(R.id.txtDate);

    tvstatus.setText(cursor.getString(1));
    tvtask.setText(cursor.getString(2));
    tvdate.setText(cursor.getString(3));

  }
}
{% endhighlight %}


**7. Implement the code for adding records**

{% highlight java %}
  public void addRecord(String todo) {
    SQLiteDatabase sqldb = openOrCreateDatabase(DBNAME, MODE_PRIVATE, null);

    String sql = String.format("INSERT INTO todo (status, task) VALUES (0, '%s');", todo);
    sqldb.execSQL(sql);
    fetchRecords(sqldb);
    sqldb.close();

  }
{% endhighlight %}

**8. Implement the code for fetching records**

{% highlight java %}
  private void fetchRecords(SQLiteDatabase sqldb) {

    String sqlquery = "SELECT _id,status, task, strftime('%m.%d.%Y') FROM todo ORDER BY timestamp DESC;";
    Cursor cur = sqldb.rawQuery(sqlquery, null);

    TodoAdapter adapter = new TodoAdapter(this, cur, false);

    ListView listview = (ListView) findViewById(R.id.listView);
    listview.setAdapter(adapter);
  }
{% endhighlight %}

**9. Implement the code for handling clicks on each item**

The event method implementation for handling item clicks inside the list is situated inside the onCreate method of the main activity class.

{% highlight java %}
   ListView listview = (ListView) findViewById(R.id.listView);
    assert listview != null;
    listview.setOnItemClickListener(new AdapterView.OnItemClickListener() {
      @Override
      public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        TextView task  = ((TextView) view.findViewById(R.id.txtTask));
        String tasktext = task.getText().toString();
        String message = String.format("Position: %d, Text: %s", position, tasktext );
        Toast.makeText(getBaseContext(), message, Toast.LENGTH_LONG).show();
      }
    });
{% endhighlight %}

## Exercises

1. Provide validation for task edittext
2. Linkify the edittext
3. Implement the Delete and Edit operation




