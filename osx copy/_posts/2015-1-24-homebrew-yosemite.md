---

title: Yosemite upgrade and Homebrew

---

Homebrew uses Ruby 1.8 and Yosemite uses Ruby 2.0. This is why Homebrew doesn't work with OSX 10.10. This would have been easily fixed if you did a brew update and brew upgrade before going up to Yosemite. Just in case you did upgrade to Yosemite without upgrading Homebrew, the fix is this

Edit the file `/usr/local/Library/brew.rb`

The first line on the file is

~~~
#!/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/ruby -W0
~~~

Replace the hard coded reference to the Ruby version number. The edited line should read

~~~
#!/System/Library/Frameworks/Ruby.framework/Versions/Current/usr/bin/ruby -W0
~~~

You have to commit the changes you made on brew.rb before you can brew upgrade, otherwise, you will be back to square one.

~~~
$ cd $(brew --repository)
$ git commit -a -m "changed brew rb to point to Ruby 2
$ brew update
$ brew upgrade
~~~

If the cd $(brew –repository) command gives you problem, just cd to usr/local/Library then do the commit while in that directory.

## References

1. [Hans Van Gent, Fixing Homebrew](http://jcvangent.com/fixing-homebrew-os-x-10-10-yosemite/)
