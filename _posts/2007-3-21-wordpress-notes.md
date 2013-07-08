---
layout: post
title: Wordpress notes
description: my notes on how to build wordpress sites. use it as a cms. how to build themes. what skills you need for wordpress applications
categories:
- php
- wordpress
- cms
---

<h1 class="chapter">PRE-REQUISITE SKILLS</h1>

The WordPress platform itself is built using PHP, so the more knowledge you have of PHP, the better. You also need knowledge on HTML. You need not be an expert on PHP and/or HTML  to build a basic WordPress site, you can get started with basic PHP and HTML knowledge, but in order to build a non-trivial application,   you will to more skills other than HTML and PHP. 

PHP and HTML are really the bare essentials of building a WordPress site. Unless you are going for a retro-look, circa 1992, you would probably want to include CSS (Cascading Style Sheet) to the list of bare essentials. 

There's the trifecta, PHP, HTML & CSS. Once you've got these three covered, you can start building WordPress sites. 

I've listed a couple more technologies and skill sets below. You will need them once you get out in the wild doing some consulting gigs for WordPress apps. 

**JAVASCRIPT**. Some interactions with the user could occur after the HTML page has been completely rendered by the browser.  Such interactions can be facilitated by JavaScript

**AJAX**. if you will use some widgets like calendars or accordion controls etc, AJAX libraries can help you out with that. AJAX can do so much more than just widgets, it is actually a technology that was meant to facilitate asynchronous data transfers between a client and a server &mdash; but that is beyond the scope of the current discussion

**JQUERY**. This is a rich JavaScript library which can aid in adding smooth and nice-looking transformations on a web page. 

**SITE ADMINISTRATION KNOWLEDGE**. At some point, you will need to deploy your WordPress theme. Most likely it will be a remote server, most likely again, it will be a UNIX/Linux machine. A passing knowledge of UNIX and some TCP/IP Applications like SSH, HTTP and FTP can't hurt you, in fact, it will go a long way. 

**SQL**. On the rare occasions when you need to see the naked structure of MySQL behind the WordPress site, you might need some working experience on SQL &mdash; If you are a PHP programmer, this should be part of your skill set anyway
 
<hr class="chapterbreak"/>

<h1 class="chapter">GETTING STARTED</h1>

## INSTALLATION 

WordPress uses PHP and MySQL, as such, you will need these software installed prior to installing WordPress. There are many  ways to get PHP and MySQL, each method with varying degree of difficulty and complexity.

 If you are so inclined, you can manually install Apache, PHP and MySQL separately and configure them for WordPress use &mdash; if not, you can install the full stack using one-click installers; WAMP (Windows Apache MySQL PHP) or MAMP (Mac Apache MySQL PHP). If you are working on a Linux machine, surely you already know how to get LAMP working (Linux Apache MySQL PHP).  

***

### MAC OSX (MAMP)

1. Download the installer from [http://www.mamp.info][mamp], you don't need the PRO, the free MAMP will suffice for your purpose
2. Install the dmg file (double click to launch the installer)
3. Launch MAMP. It should be on your "Applications" folder &mdash; or just press cmd+spacebar for spotlight and type "MAMP"
4. Click *Preferences* on the MAMP admin dialog screen
5. Go to *Apache*, specify the folder where you would like your DocumentRoot to be
6. Go to *Ports*, the default HTTP port for MAMP is *8888*. You can change it here to the standard port which is *80* but I wouldn't advise that because the built Apache server of OSX might interfere with your MAMP, just leave it be 
7. Click *OK*

Test your installation by launching a browser session, go to *http://localhost:8888*

### WINDOWS (WAMP)

1. Download the installer from [wampserver.com][wamp]
2. Launch the installer (double click). The installer is straightforward and intuitive, it will be mostly automatic
3. The installer must have created a **www** folder, usually in **C:\WAMP\www**, this is the DocumentRoot &mdash; unless you tweaked the location of the DocumentRoot during install, in which I would assume that you know what you are doing and you should be able to find your customised DocumentRoot

Test your installation by launching a browser session, go to *http://localhost*

## LINUX, SPECIFICALLY DEBIAN AND DERIVATIVES

You can install the LAMP stack in one bundle

<pre>
$ sudo apt-get update
$ sudo apt-get tasksel
$ sudo tasksel lamp-server
</pre>

Or you can install the individual software stack

<pre>
$ sudo apt-get update
$ sudo apt-get mysql-server mysql-client
$ sudo apt-get apache2
$ sudo apt-get install php5 libapache2-mod-php5
</pre>

The DocumentRoot is usually at **/var/www**, if you want to customise the location of the DocumentRoot, you need to configure **/etc/apache2/sites-available/default** and then use the **a2ensite** command in Debian; you may also have to do additional configuration on Apache configuration files to allow remote HTTP access to the Linux box &mdash; unfortunately, configuring Apache2 on Debian Linux is beyond the scope of this document. 

Test your installation by launching a browser session, go to *http://\<ip address of your linux box\>*

***

## GET THE INSTALLER 

WordPress can be downloaded from [http://wordpress.org/download](http://wordpress.org/download/). It will usually be a zipped file or targz'd  file. You will need to extract this to a DocumentRoot directory of your web server. A DocumentRoot is designated folder where the web server will start looking for files to serve as web pages &mdash; more on this later.

You need to unzip the content of the WordPress files to your DocumentRoot. Assuming that your DocumentRoot is a folder named *www* somewhere in your filesystem, the file and folder structure should look something like the dir below
.
<pre class="codeblock">
├── www
│   ├── index.php
│   ├── license.txt
│   ├── readme.html
│   ├── wp-activate.php
│   ├── wp-admin
│   ├── wp-app.php
│   ├── wp-blog-header.php
│   ├── wp-comments-post.php
│   ├── wp-config-sample.php
│   ├── wp-config.php
│   ├── wp-content
│   ├── wp-cron.php
│   ├── wp-includes
│   ├── wp-links-opml.php
│   ├── wp-load.php
│   ├── wp-login.php
│   ├── wp-mail.php
│   ├── wp-settings.php
│   ├── wp-signup.php
│   ├── wp-trackback.php
│   └── xmlrpc.php
</pre>


***

## CONFIGURATION

You need to setup a database for WordPress, this is the reason why MySQL was part of the software stack requirement. There are lots of ways to talk to a MySQL database, some of you might use the CLI (Command Line Interface) mysql client, some might use the MySQL WorkBench GUI client, SQLYog or the **PHPMyAdmin** included in both MAMP and WAMP. 

If you were to use MAMP (assuming it is running on port 888);

1. Launch a browser session and type *http://localhost:888/MAMP/*
2. You should see the *PHPMyAdmin* link, go there. 
3. Click the **SQL** tab

Now you are ready to issue some SQL commands to create the WordPress database and grant access to a user of that database.

<pre>

CREATE DATABASE wordpress;
GRANT ALL PRIVILEGES ON wordpress.* TO
	yourame@'localhost' IDENTIFIED BY 'yourpassword';
FLUSH PRIVILEGES;

</pre>

Click the **Go** button on the SQL screen to execute your commands. 

**NOTE**: if you use another method to connect to the mysql-server, say the default **mysql** client, you will need to know the hostname, the username and the password of the root user of mysql &mdash; you would remember these things if you were the one who installed mysql. On the other hand, if you are accessing a shared MySQL server somewhere on a development server, you will need to ask the guy in-charge of the administration of that MySQL database to give you access. 

## wp-config.php

The WordPress installer includes a file called *wp-config-sample.php*, copy that file and name the copy *wp-config.php*. You will need to edit some configuration entries

<pre>

define('DB_NAME', 'wordpress');
define('DB_USER', 'yourname');
define('DB_PASSWORD', 'yourpassword');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

</pre>
<div id="cap">wp-config.php</div>

*yourname* and *yourpassword* are the username and password that you used when you created the database file (Refer to the SQL script you used in the earlier sections)

## THE 5 MINUTE INSTALLATION

Test your installation by launching a browser session, go to *http://localhost* or *http://localhost:8888* if you used port 8888 (or substitute whatever port number you did use). There is a series of questions that WordPress installer will ask you, just fill them up, this is the easy part now.

[mamp]: http://www.mamp.info/en/downloads/index.html "MAMP website"
[wamp]: http://www.mamp.info/en/downloads/index.html "WAMP website

<hr class="chapterbreak"/>

<h1 class="chapter">TEMPLATE FILES</h1>

Wordpress comes complete with all plumbing that is needed to create a post, read a post, delete it and modify it.  Over the years, it has become a very modular CMS system. 

The system files (a bunch of PHP files) are separated cleanly from the presentation files. The presentation files are the stuff you need modify in order to create your own look, feel and behavior of a Wordpress site. The presentation files are also called "TEMPLATE FILES".

When building a WordPress system, you will not need to  deal with SQL, linking and other system level programming routines &mdash; you will deal with a little bit of PHP though. WordPress exposes the functionalities of the CMS via PHP functions, these functions are higher level abstractions of a CMS system, you will call these PHP functions on one or more of your template files.

***

## THE TEMPLATE FILES

1. *index.php* - This is the main blog template. This file contains the main *loop* which iterates over all the blog entries on the database and displays it for the user
2. *single.php* - The single post template. If a user clicks on a link for a blog post, the contents of the queried post is displayed using this template
3. *page.php* - When a page is requested e.g. about-page or any other page that you defined in *wp-admin*, this template will be used
4. *comments.php* - for the comments
5. *archive.php* - when a category, date or author is queried this will be used to display the results. If on the other hand, you did write author.php, category.php and date.php, then those templates will be used instead
6. *search.php* - when a search is performed, this template is used to display the results, if this template is not present, index.php is used instead
7. *tag.php* - used when a specific tag is queried. If this template is not present, index.php is used instead
8. *category.php* - used when a specific category is queried. If this is not present, index.php is used instead
9. *header.php*
10. *footer.php*
11. *style.css*
12. *home.php*
13. *author.php*
14. *404.php* - during those times when WordPress cannot find a post, this will be template file used to display a 404 error

There are other template files but these, I think are the most common in theme development. For a more complete list, refer to codex.wordpress.org (given on the References section).

You do not need all these files to build WordPress site, you can use only a couple of them, depending on what functionality you want to achieve on your development. WordPress is pretty robust, it doesn't fail miserably when it needs a template file and does not find one; e.g. if you forgot to build *search.php*, WordPress will simply use *index.php*  as the template to use to display search results. Same is true if if you did not provide a *tag.php* file, when a tag link is activated, it will simply use *index.php* to present the result of the tag selection.

You can get started by building only *index.php* in your theme, but unless your site is very spartan and barebones, you might want to use the other template files. 

<hr class="chapterbreak"/>

<h1 class="chapter">INDEX TEMPLATE</h1>

The *index.php* is absolutely mandatory when you build a custom theme in WordPress. You can do without the other template files, but this one is a must. If you don't build this template file, you are not going to see much; in fact, you won't see anything at all. This template file usually contains **the loop** which goes through all *post* entries on WordPress database, specifically from the *wp_post* table. 

You should start with a very spartan index template, like this

{% highlight php %}
<html>
<body>
<?php if(have_posts()) : ?>
	<?php while (have_posts()) : the_post();?>
		
 	<a href='<?php the_permalink();?>'><h1><?php the_title(); ?></h1></a>
  <?php the_excerpt();?>

	<?php endwhile;?>
  
	<?php else :?>
		<h1>Yikes!</h1>
    No post!
<?php endif;?>	

</body>
</html>
{% endhighlight %}

The outermost control structure is an *if* construct. The *have_post()* function queries if there are any post in the *wp_post* table, if at least one is found, we can proceed to loop, otherwise, the "Yikes" message will be seen the user.

Inside the *if* construct is *the loop*. The *have_post()* function checks the *wp_post* table if there is any post to query or iterate at, if not it exits the loop. The *the_post* function is actually the one that fetches the post entry from the database. It does one more thing, it looks ahead database cursor query if there is another post to fetch. If there is a next post, it returns true, other wise it returns false and *the loop* terminates. 

Once you are inside the loop, you can now start displaying some important parts of the blog post, namely, the link to the post, the name of the post and the post itself. All these three things are accessible and exposed by WordPress via functions.

- *the_title* - retrieves the title of the blog post from the database
- *the_except* - retrieves the excerpts of the blog post from the database, if there is one. If it does not find an excerpt entry it will extract the first few words of the post
- *the_permalink* - displays the URL for the permalink to the post which is currently being processed in the loop. This is not fetched from the database. This data item is constructed at runtime. The reason is because permalinks are configurable, they are not static data which can be stored directly in the database

The 3 functions discussed above are almost always, exclusively used from within **the loop**, there are setup routines that are happening before these data items can be made available, and the loop performs that setup.

If you want to know more about the nitty-gritty implementations of these WordPress functions, they are in *wp-includes/query.php, wp-includes/link-template.php, wp-includes/post-template.php*

***

## HEADERS AND FOOTERS

Web pages typically includes headers and footers. They can be used to display copyrights, navigations and other information important to the design of the site. It is a good idea to separate their syntactical structure and content from the main content. WordPress templating makes this exercise easier and maintainable by exposing the *get_header* and *get_footer* functions.

If you create the files *header.php* and *footer.php* in your theme template files, their content will be pulled when you invoke the *get_header* and *get_footer* functions. Let's revise the *index.php* template we coded earlier

{% highlight php %}
<html>
<body>
<?php get_header(); ?>
<?php if(have_posts()) : ?>
	<?php while (have_posts()) : the_post();?>
		
 	<a href='<?php the_permalink();?>'><h1><?php the_title(); ?></h1></a>
  <?php the_excerpt();?>

	<?php endwhile;?>
  
	<?php else :?>
		<h1>Yikes!</h1>
    No post!
<?php endif;?>	
<?php get_footer(); ?>
</body>
</html>
{% endhighlight %}

Create the files *header.php* and *footer.php* on your theme folder. Start simple so it's easier to troubleshoot, put some basic content first.

### header.php

{% highlight php %}
<!-- HEADER.php -->
Home  | email | about
{% endhighlight %}

A basic navigation, but without the hyperlinks yet

### footer.php

{% highlight php %}
<!-- FOOTER.php -->
<hr/>
Copyright &copy; 2013, theLogBox
{% endhighlight %}

A basic copyright notice

***

## Styling

Lastly, apply some styling to your index page. We could inline the styles and code it directly into the HTML portions of index.php, but that will clutter our codes and can get out of hand (quickly) as add more elements to the index page. Instead, we will put all the styling instructions into CSS (Cascading Style Sheets). 

We will revise the *index.php* again, this time, we will separate the regions of our resulting HTML files so that we can select each region and apply the appropriate styling instructions on them.


{% highlight php %}
<html>
<body>
<header>
	<?php get_header(); ?>
</header>

<content>
<?php if(have_posts()) : ?>
	<?php while (have_posts()) : the_post();?>
		
 	<a href='<?php the_permalink();?>'><h1><?php the_title(); ?></h1></a>
  <?php the_excerpt();?>

	<?php endwhile;?>
  
	<?php else :?>
		<h1>Yikes!</h1>
    No post!
<?php endif;?>	
</content>
<footer>
	<?php get_footer(); ?>
</footer>

</body>
</html>
{% endhighlight %}

**GOOD TO KNOW**: the *header* tag in our index.php is not referring to the **head** tag of our resulting HTML. This header tag is inside (a child of) of the HTML *body* tag, this is the header that is visible when displayed by the browser. 

Create a *style.css* file inside the template folder, we are creating this file because we will externalise all the styling instructions to separate it from the HTML content. 

<pre>
/* STYLE.CSS */

header, footer {padding: 1em; border: 1px solid gray;}
h1, h2, h3 {
	font-family: 'arial', 'helvetica', sans-serif;
}
h1 {font-size: 150%;}
h2 {font-size: 120%;}
h1 {font-size: 110%;}

</pre>

We need to tell our HTML (our resulting HTML) to use the instructions inside the file **style.css** for style instructions. We need to add a **link** tag to our index.php

{% highlight php %}
<html>

<head>
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" />
</head>

<body>
<header>
	<?php get_header(); ?>
</header>

<content>
<?php if(have_posts()) : ?>
	<?php while (have_posts()) : the_post();?>
		
 	<a href='<?php the_permalink();?>'><h1><?php the_title(); ?></h1></a>
  <?php the_content();?>

	<?php endwhile;?>
  
	<?php else :?>
		<h1>Yikes!</h1>
    No post!
<?php endif;?>	
</content>
<footer>
	<?php get_footer(); ?>
</footer>

</body>
</html>
{% endhighlight%}

**NOTE**: The filename *style.css* is known to WordPress, if you name your stylesheet file differently e.g. stylesheet.css or custom.css or ie.css, you need a different *link* instructions on the head tag. 

For example, if you named your stylesheet custom.css, the link tag on the head needs to read like

{% highlight html %}
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/custom.css" />
{% endhighlight %}

<hr class="chapterbreak"/>

<h1 class="chapter">SINGLE POST TEMPLATE</h1>






# BIBLIOGRAPHY

1. [CODEX.WordPress](http://codex.wordpress.org/Theme_Development) 
1. [CODEX/WordPress](http://codex.wordpress.org/Function_Reference/) - WordPress Function Reference





