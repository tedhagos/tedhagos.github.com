---

title: Highlight Liquid Code

---

You cannot highlight Liquid snippet in Jekyll by simply enclosing the snippet with `pre` tag or the **&#123; % highlight% &#125; &#123; % endhighlight% &#125;** pair. Jekyll will interpret the snippet instead of displaying it.

To display Liquid snippet in Jekyll, you can enclose it between **&#123; % raw % &#125; and &#123; % endraw % &#125;**

![raw-endraw](images/raw-endraw.png)
