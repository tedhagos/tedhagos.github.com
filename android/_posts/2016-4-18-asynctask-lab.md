---

title: 8.2 AsyncTask - LAB

---

## Introduction

## Objectives

## Implementing an AsyncTask

**1. Create a project with an empty activity**

![](images/asynctask-lab.png)

**2. Create a class that extends AsyncTask**

{% highlight java%}
class DownloadTask extends AsyncTask {
  Context context;
  TextView tv;
  ProgressDialog progressDialog;
  Button btnStart;

  public DownloadTask(Context context,
                      Button btnStart,
                      TextView tv) {
    super();

    this.context = context;
    this.btnStart = btnStart;
    this.tv = tv;
  }
}
{% endhighlight %}



**4. Implement the hook methods of the asynctask**

{% highlight java %}

  @Override
  protected void onProgressUpdate(Integer... values) {
    progressDialog.setProgress(values[0]);
  }

  @Override
  protected void onPreExecute() {

    progressDialog = new ProgressDialog(context);
    progressDialog.setMax(10);
    progressDialog.setTitle("Downloading...");
    progressDialog.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
    progressDialog.show();
  }

  @Override
  protected void onPostExecute(String s) {
    tv.setText(s);
  }

  @Override
  protected String doInBackground(Void... params) {

    int counter = 0;
    synchronized (this){
      while(counter++ < 10) {
        try {
          wait(2000);
          publishProgress(counter);
        }
        catch(InterruptedException ioe) {
          ioe.printStackTrace();
        }
      }
    }

    return "Download complete";
  }
{% endhighlight %}

**5. Use the asynctask from within the activity**

{% highlight java %}
public class MainActivity extends AppCompatActivity {

  TextView tv;
  Button btnStart;
  ProgressDialog progressDialog;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    tv = (TextView) findViewById(R.id.textView);
    btnStart = (Button) findViewById(R.id.btnStart);

    assert btnStart != null;
    btnStart.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        DownloadTask downloadtask = new DownloadTask(MainActivity.this, btnStart, tv);
        downloadtask.execute();
      }
    });
  }
}
{% endhighlight %}



