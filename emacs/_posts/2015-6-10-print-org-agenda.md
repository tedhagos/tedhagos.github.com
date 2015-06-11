---

title: Print Org Agenda List
tags:
- org

---


From an open buffer in emacs, you can always `M x print buffer` and send the contents of the current buffer to currently defined line printer. 

Another way to print an org-agenda list is to extract the contexts and dump it to a text file. The following command will do that

{% highlight bash %}
emacs -batch -l ~/.emacs -eval '(org-batch-agenda "t")' > todo.txt 
emacs -batch -l ~/.emacs -eval '(org-batch-agenda "t")' | lpr
{% endhighlight %}

The first command sends the todo list to a text file. The second command sends it to the line printer

## Using PERL

{% highlight perl %}
  #!/usr/bin/perl
  #filename: print-org.pl

     # define the Emacs command to run
     $cmd = "emacs -batch -l ~/.emacs -eval '(org-batch-agenda-csv \"t\")'";
     
     # run it and capture the output
     $agenda = qx{$cmd 2>/dev/null};
     
     # loop over all lines
     foreach $line (split(/\n/,$agenda)) {
       # get the individual values
       ($category,$head,$type,$todo,$tags,$date,$time,$extra,
        $priority_l,$priority_n,$deadline) = split(/,/,$line);
       # process and print
       print "[ ] $category \t $head\n";
     }
{% endhighlight %}

You can then run this from the terminal with `perl print-org.pl`. Redirect the output to the a text file or the `lpr` as you need.

## References

1. OrgMode online manual - [orgmode.org/manual/printing](http://orgmode.org/manual/Extracting-agenda-information.html)


