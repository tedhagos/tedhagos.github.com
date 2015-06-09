---

title: Composer on OSX
tags:
- packagemanager
- phptool
- osx

---

The following commands will install `composer` on a mac.

{% highlight bash %}
brew install curl
curl -s https://getcomposer.org/installer | php -d detect_unicode=Off
sudo mv composer.phar /usr/local/bin/composer
{% endhighlight %}

Composer is now installed. Try it out by running the `composer` command.

The steps above installs `composer` globally. The [getcomposer.org](https://getcomposer.org/doc/00-intro.md) website contains details on how to install composer local to a project folder, in case you prefer not to sully your development environment. The website also has instructions on how to install `composer` on a Linux and Windows system. It has the links the to the precompiled Windows installers.

# In case you used sudo to install

If you used the sudo command to install curl, like this 

~~~
curl -s https://getcomposer.org/installer | php -d detect_unicode=Off
~~~

`composer.phar` would have been installed `/private/etc`, which means, you should move it from there

~~~
cd /private/etc
sudo mv composer.phar /usr/local/bin/composer
~~~


