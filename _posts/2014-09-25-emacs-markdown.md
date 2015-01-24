---

title: Markdown Documents
author: Ted Hagos
categories: emacs

---



Get markdown-mode from elpa or whatever it is that you are using. You can enter markdown mode using the command **M x markdown-mode**. But in order to automaticaly enter markdown mode when a markdown document is in the buffer, you need to the add the following to .init.el or .emacs file

{% highlight lisp %}
(autoload 'markdown-mode "markdown-mode" "Major mode for editing Markdown files" t) 
(add-to-list 'auto-mode-alist '("\\.text\\'" . markdown-mode)) 
(add-to-list 'auto-mode-alist '("\\.markdown\\'" . markdown-mode)) 
(add-to-list 'auto-mode-alist '("\\.md\\'" . markdown-mode))
{% endhighlight %}