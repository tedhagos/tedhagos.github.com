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
sudo curl -s https://getcomposer.org/installer | sudo php -d detect_unicode=Off
cd /private/etc
sudo mv composer.phar /usr/local/bin/composer
{% endhighlight %}

Composer is now installed. Try it out by running the `composer` command.

The steps above installs `composer` globally. The [getcomposer.org](https://getcomposer.org/doc/00-intro.md) website contains details on how to install composer local to a project folder, in case you prefer not to sully your development environment. The website also has instructions on how to install `composer` on a Linux and Windows system. It has the links the to the precompiled Windows installers.
