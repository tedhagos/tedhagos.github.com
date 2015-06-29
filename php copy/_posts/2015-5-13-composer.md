---

title: Composer on OSX
tags:
- packagemanager
- phptool
- osx

---

1. `brew install curl`
2. `sudo curl -s https://getcomposer.org/installer | sudo php -d detect_unicode=Off`
3. `cd /private/etc`
4. `sudo mv composer.phar /usr/local/bin/composer`

Composer is now installed. Try it out by running the `composer` command. 

The steps above installs `composer` globally. The [getcomposer.org](https://getcomposer.org/doc/00-intro.md) website contains details on how to install composer local to folder, in case you prefer not to sully your development environment. The website also has instructions on how to install `composer` on a Linux and Windows system. It has the links the to the precompiled Windows installers.







