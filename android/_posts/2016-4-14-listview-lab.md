---
title: 4.2.1 ListView - LAB
---

# Introduction

**Source files**:

- github page [github.com/tedhagos](git@github.com:tedhagos/BroadcastReceiverManifest.git) or;
- `git clone git@github.com:tedhagos/BroadcastReceiverManifest.git` or;
- ` git clone https://github.com/tedhagos/BroadcastReceiverManifest.git`


## Objectives

- Know the basic step needed to display an array into a listview
- Create a new layout to be used by the listview
- Use an Adapter to connect an array of values to the listview

**1. Create a project with an empty activity**. 

Name the project ListViewSample. Add a ListView to the main activity layout

![](images/listview-lab.png)

**2.  Create a new layout**. 

You can do this in Android Studio via File-> New-> XML-> Layout XML File. You will be asked for the layout file name and the root tag. Use the following values

- Layout File Name : myitem
- Root Tag: TextView

We created this new layout because this will effectively be  a single row in our listview. We are displaying only one item of data per row, hence, a simple textview

**3. Implement the onCreate** method of the main activity.

{% highlight java %}
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    populateList();
    handleEvents();

  }
{% endhighlight %}

**4. Implement the populateList method**

{% highlight java %}
  private void populateList() {

    // The Array
    String[] numbers = {"One", "Two", "Three", "Four"};

    // The Adapter
    ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,R.layout.myitem, numbers);

    // The ListView
    ListView listview = (ListView) findViewById(R.id.listView);
    listview.setAdapter(adapter);
  }
{% endhighlight %}

**5. Implement the handleEvents method**

{% highlight java %}
  private void handleEvents() {
    ListView listview = (ListView) findViewById(R.id.listView);
    assert listview != null;

    listview.setOnItemClickListener(new AdapterView.OnItemClickListener() {
      @Override
      public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        String item_name = ((TextView) view).getText().toString();
        String message = String.format("You clicked %s : %s", position, item_name);
        Toast.makeText(getBaseContext(), message, Toast.LENGTH_LONG).show();
      }
    });
  }
{% endhighlight %}

