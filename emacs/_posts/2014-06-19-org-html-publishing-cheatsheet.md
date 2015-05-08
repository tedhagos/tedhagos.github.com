---

title: Org HTML Publishing Cheatsheet
author: Ted Hagos
categories: emacs

---

# Inclusion of table of contents

Two ways of doing this. First one is in the *org-publish-project-alist* declaration. Actually, you don't have to do anything in there. TOC is included by default, if the *:with-toc* directive is not *nil* the exported HTML will always contain a table of contents unless otherwise overidden by *OPTIONS* variable in the org document itself.

    (setq org-publish-alist
    '((
      "mynotes"
      :with-toc nil
      :base-directory "/somedir/"
    ))
    )

The above example will supress the generation of TOC on every exported document. If you want to generated the TOC, remove the *:with-toc nil* statement

The second way of generating TOC is to put statement in the export options of each org document e.g. if you have a document named *somedocument.org*, it might look like this

    #+TITLE: My awesome document
    #+TOC: headlines 1
    
    Lorem ipsum dolor sit amet /consectitur/ alet *si do*

Example document above will contain a table a TOC when exported. The value *1* means heading 1 will be exported. If you use the value *2* for headlines, TOC will contain until second level headings etc. The export options written on the org document itself will override whatever setting you have on the *project-alist* 

# Document navigation

The *UP | HOME* navigation links can be exported on each document if you use the :html\_link\_up and :html\_link\_home settings on *project-alist* e.g.

    (setq org-publish-alist
    '((
      "mynotes"
      :with-toc nil
      :base-directory "/somedir/"
      :html_link_up "index.html"
      :html_link_home "../index.html"
    ))
    )

If you put the link up/home directives in the alist, all exported HTML documents will contain a link to both home and up. This can be overriden on each org document using the OPTIONS template, e.g.

    #+TITLE: My awesome document
    #+TOC: headlines 1
    
    #+HTML_LINK_UP: index.html
    #+HTML_LINK_HOME: somepage.html 
    
    Lorem ipsum dolor sit amet /consectitur/ alet *si do*

# Embed an iframe

Use `#+begin_html .. #+end_html` to embed the iframe. Make sure that in the document, you have turned off the subscript/superscript setting. In the org doc itself, just add the options line to turn off the subscript action, then you can use the begin..end blocks to insert HTML codes

    #+options: ^:nil
    
    ...
    
    #+begin_html
    <iframe> 
    
    </iframe>
    #+end_html
