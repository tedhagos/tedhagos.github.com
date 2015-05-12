---

title: Org HTML Postamble
author: Ted hagos
categories: emacs

---


Org can export the postamble to HTML, the default postamble exports the author name, date of creation, creator information (which shows the Org and Emacs version) and a link to validate the XHTML document. It usually is at the foot part of generated html document. 

The default postamble can be overidden by specifying a value of postamble. Org exports certain variables which you can override and customize to your liking. The variable `org-html-postamble` is exported. 

# Inspecting the current value of the postamble

Before you monkey around the postamble value, you might want to check the original/default values of the postamble, even just reference purposes. You can inspect the current value of the postamble by issuing the command

`C h v org-html-postamble RET`

Shows the current value of the postamble. 

`C h v org-html-postamble-format RET`

Tells you a bit more information of what you can put inside the postamble. Below is excerpt from that last command

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">%a</td>
<td class="left">author's name</td>
</tr>


<tr>
<td class="left">%e</td>
<td class="left">author's email, if specified</td>
</tr>


<tr>
<td class="left">%d</td>
<td class="left">timestamp, date created</td>
</tr>


<tr>
<td class="left">%c</td>
<td class="left">creator string (Org and Emacs</td>
</tr>


<tr>
<td class="left">%v</td>
<td class="left">The link for XHTML validation</td>
</tr>


<tr>
<td class="left">%T</td>
<td class="left">The time of exporting</td>
</tr>


<tr>
<td class="left">%C</td>
<td class="left">Time of last modification</td>
</tr>
</tbody>
</table>

One way to set the postamble is to set the value of `org-html-postamble` in the init files, e.g. *~*.emacs/. You can add the following line

    (setq org-html-postamble "whatever you want, make sure its html though")

If you have more than one `org` project in your alist, this may not be ideal. You can set the value of the postamble for each invidual project, e.g.

{% highlight lisp %}
(setq org-publish-project-alist
''(
  ("project1"
   :author "Your name"
   :html-postamble "postamble for project 1"
  )
  ("project2"
   :author "Author of project 2"
   :html-postamble "postamble for project 2"
  )
))
{% endhighlight %}

You can put HTML elements in the postamble.
