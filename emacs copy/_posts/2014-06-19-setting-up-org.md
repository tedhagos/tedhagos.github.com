---

title: Org Note Taking
author: Ted Hagos
categories: emacs

---

# Use elpa or org-mode packages

Emacs 24.x use the GNU elpa repositories, so if you issue the command `M x list-packages`, you will see all the available (and installed) packages in Emacs. You need to be connected to the internet when you do this. Emacs will make a connection to elpa repository and grab a list of available software packages. 

Since you already know that you want to install *org*, you can take a shorter route to the installation by issuing the command `M x package install RET org RET`. Wait for a while because that package will be grabbed from elpa and will be compiled afterwards.

Exit emacs, `C x C c` and restart it. You should now have the org package. You can check which version of org has been installed using the command `M x org-version RET`. You might see something similar to 

    Org-mode version 8.2.6 (8.2.6-22-gb11b4a-elpa @ /home/thagos/.emacs.d/elpa/org-20140519/)/

# Problems with version

Sometimes you expect your version of org to be one thing, and then see another e.g., I expected my verion of org to be `8.x` but right after I grabbed org from the repos, it still showed 7.x. It appeared to be reverting back to the version of org built-in within Emacs. A telling sign that there was a problem on installation was that it showed errors during the compilation of the `org` package. It's okay to see warnings, but not compilation errors. To solve this, follow the steps below.
1.  Exit emacs
2.  Sanitize the init files *~.emacs* or *~*.emacs.d/init.el/. Make sure there isn't any reference to *org* in the startup up files
3.  Remove the *org* directories inside ~/.emacs.d/elpa/ folder.
4.  Start emacs using the sanitized init files
5.  Install the package again using `M x package-install RET org`

The compilation errors should disappear and you should have an updated version of org

# How to trigger publishing

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">`C c C e P x`</td>
<td class="left">Will prompt for the name of the project to be published.</td>
</tr>


<tr>
<td class="left">&#xa0;</td>
<td class="left">This is the same as `M x org-publish`</td>
</tr>


<tr>
<td class="left">`C c C e P p`</td>
<td class="left">It will publish the current project. Equal to `M x org-publish-current-project`</td>
</tr>


<tr>
<td class="left">`C c C e P a`</td>
<td class="left">Will publish all the defined projects in *org-project-alist*</td>
</tr>
</tbody>
</table>

Org uses timestamps to trigger publishing. That means it won't republish documents that have not changed. To override this behavior, you need to change the default behavior of Org when publishing. One way to do this is to customize the variable *org-publish-use-timestamps-flag*. This can be done within an emacs session. You can also achieve the same result by adding an entry to the the emacs init file, this could be the the ~/.emacs file. Add this entry 

    (setq org-publish-use-timestamps-flag nil)

When this variable is set to *nil*, org will republish all of the files defined inside org-publish-project-alist.
