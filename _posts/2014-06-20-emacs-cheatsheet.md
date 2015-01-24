---

title: Emacs Cheatsheet
author: Ted Hagos
categories: emacs

---


Capital **C** means press the CTRL key. Capital **M** means meta key, it depends how you configured your meta key, typically this is *ALT* key or the *ESC* key. 

So when you see this &#x2014; `C x C c` &#x2014; it means press the CTRL key then x, after that, press the CTRL key again then c.  

When you see this &#x2014; `C x b`, press the CTRL key then x then b. 

When you see this &#x2014; `M x package-install RET org RET`, it means press the meta key (ALT or ESC), then x then type the command `package-install`, press RETURN key then type *org* then press the RETURN key again. 

-   **C x C f:** Open a file. You can also open a file during start up e.g. *emacs filename.ext*
-   **C x k:** Close a file
-   **C k:** Delete the current line, starting from cursor position
-   **C x C s:** Save current buffer to a file
-   **C s:** Lets you type a search string. The cursor position is immediately taken to the first occurence of the search string. This one seaches forward only. It means from the current cursor position up to the end of the document. If the cursor position is at the end of the document and the string you are looking for is somewhere at the top, this search technique won't find the string. For that, you need to search backwards
-   **C r:** How to search backwards. See C s
-   **C x C c:** Exit emacs
-   **C v:** Page down
-   **M v:** Page up
-   **M % <string> RET <new string>:** Search and replace <string> with <new string>
-   **C x b:** Select a different buffer
-   **C x 1:** Kill the help window
-   **M x RET visual-line-mode:** Line wraps at the end of the window. The default setting of emacs is to just keep on typing horizontally. It will shoot through the edge of window. There are no line wraps. This command helps to keep your sanity a little bit when typing docs. If you want this setting to always be turned on, put this line in the emacs init file `(global-visual-line-mode 1)`. 1 means on, 0 means off

-   **M x RET adaptive-wrap-prefix-mode:** Nice looking smart wrap, useful when working with lists.
