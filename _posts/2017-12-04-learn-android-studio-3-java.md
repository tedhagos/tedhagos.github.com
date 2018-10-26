---
title: Learn Android Studio 3
layout: post
categories: android, java
permalink: /posts/learn-android-studio3/
comments: false
image: /images/las3cover.jpg
date:   2017-12-04 
description: Learn Android programming fundamentals using Android Studio 3
---
 

Learn Android Studio 3 is out. You can get it in print or electronic download  from  the [Apress website](https://www.apress.com/gp/book/9781484231555) or from [Amazon](https://www.amazon.com/Learn-Android-Studio-Efficient-Development-ebook/dp/B079N58V2H/ref=sr_1_1?ie=UTF8&qid=1539173743&sr=8-1&keywords=learn+android+studio+3).

## What's inside

It's a beginner's book, it's for you if you are;

* new to Android programming
* new to Android Studio
* If you're also new to Java, I've included a really really short introduction to the Java language (it's in the Appendix). The book doesn't assume you're a Java expert, but  it would be great if you've done some Java programming before.

The following sections shows some highlights of what you can learn from the book.

### What makes up an application

 An Android app isn't the same as a monolithic desktop app with a single executable file. You'll learn tthe

```java
public class MainActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main); // (1)
    // your code here
  }
}
```

**(1)** Android prefers to use XML to define the UI. This statement is glue-ing the Activity class to a UI layout defined in XML.  This relationship and other concepts  such as "inflating" are explained in the book

### Intents and Event handling

Android apps are made up of loosely coupled _"components"_. They're not just a bunch of objects you can activate by instantation.  Android has a mechanism for component activation; and _Intents_ are smacked right in the middle of it. This component activation is deeply ingrained in Android's architecture. You'll work with detailed project demos touching on this topic

```java
public class MainActivity extends AppCompatActivity {
    public static final String EXTRA_MESSAGE = "com.example.myfirstapp.MESSAGE";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    /** Called when the user taps the Send button */
    public void sendMessage(View view) {
        Intent intent = new Intent(this, DisplayMessageActivity.class);
        EditText editText = (EditText) findViewById(R.id.editText);
        String message = editText.getText().toString();
        intent.putExtra(EXTRA_MESSAGE, message);
        startActivity(intent);
    }
}
```

### Implicit Intents

Intents aren't good only for activating other Activities. There are also _implicit Intents_. This is one of the gems of the Android platform, implicit intents lets your code use other people's codes.  In the book, you'll work wih project demos that use implicit Intents.

```java
 switch(v.getId()) {
    case R.id.btnwebaddress:
      uri = Uri.parse("http://www.apress.com");
      intent = new Intent(Intent.ACTION_VIEW,uri);
      startActivity(intent);
      break;
    case R.id.btnmap:
      uri = Uri.parse("geo:40.7113399,-74.0263469");
      intent = new Intent(Intent.ACTION_VIEW, uri);
      startActivity(intent);
      break;
    case R.id.btnphonenumber:
      uri = Uri.parse("tel:639285083333");
      intent = new Intent(Intent.ACTION_DIAL, uri);
      startActivity(intent);
      break;
    default:
      Log.i(getClass().getName(), "Cannot resolve button click");
  }
```

### Using the AppBar

Learn how to add menus to your application, and also how to handle the events

```java
@Override
  public boolean onCreateOptionsMenu(Menu menu) {

  MenuInflater inflater = getMenuInflater(); 
  inflater.inflate(R.menu.main_menu, menu); 
  return true;
}

@Override
public boolean onOptionsItemSelected(MenuItem item) {

  switch(item.getItemId()){ 
    case R.id.menuFile:
      showMessage("File");
      break;
    case R.id.menuEdit:
      showMessage("Edit");
      break;
    case R.id.menuHelp:
      showMessage("Help");
      break;
    case R.id.menuExit:
      showMessage("Exit");
      break;
    default:
      showMessage("Default");
  }
  return true;
}
```

### Run in the background

By the default all codes run on the UI thread (main thread). There will be times when you need to run some codes in the background thread. 

![ asynctask](/images/ls3java-asynctask.png)

```java
import android.os.AsyncTask;
public class Worker extends AsyncTask<TextView, String, Boolean> {  // (1)
  @Override
  protected Boolean doInBackground(TextView... textViews) { ... }  // (2)
  @Override
  protected void onProgressUpdate(String... values) { ... }  // (3)
}
```

**(1)** The AsyncTask is parameterized, it’s a generic type so we need to pass arguments to it. These parameters are <Params,Progress, Result>

**(2)** This is the only method we are obliged to override. Inside this is where we should put the program logic which may take some time to complete

**(3)** Use this method to communicate progress to the user

## About the author

Ted has been in software development for 20+ years. He's a developer by trade, at the moment he's the CTO and DPO of RenditionDigital International, a software development company based out of Dublin. He wrote a couple of books for Apress.



![](/images/las3.png)

You can get it from the <a class="inline-button" href="https://www.apress.com/gp/book/9781484231555" target="_blank">Apress website</a> or from <a class="inline-button" href="https://www.amazon.com/Learn-Android-Studio-Efficient-Development-ebook/dp/B079N58V2H/ref=sr_1_1?ie=UTF8&qid=1539173743&sr=8-1&keywords=learn+android+studio+3" target="_blank" >Amazon</a>. Don't forget to leave a review. Thanks!

