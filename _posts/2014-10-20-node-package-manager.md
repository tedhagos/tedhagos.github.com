---

title: Node Package Manager
author: Ted Hagos
categories: nodejs

---

The Debian and Ubuntu repos require that you pull npm separately from nodejs, maybe in the future this will change, but as far as *quantal* (Ubuntu codename), I still had to do this

`sudo apt-get install nodejs npm` 

Another way to get npm is to do

`sudo apt-get install curl`  
`curl http://npmjs.org/install.sh | sudo sh`

# OSX install

`brew update`  
`brew instal node`

npm should be part of the node formula. If the brew route fails, you can always download and install the binary package from [nodejs.org](http://nodejs.org). 

# How to use npm

`npm info <name of package>`

The info argument spits out, well, info about a package &#x2014; without installing it of course. It contains authors, versions, contributors, dependencies etc. It's in JSON format

`sudo npm install -g <name of package>`

If you don't put the *-g* (global) option, the package will be installed in the current directory. You may have to add that directory to the system path variable if you need to run the package from another directory. In global mode, the installed package will be runnable from any directory. Here are some examples of usage. 

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">`sudo npm install -g http-server`</td>
<td class="left">installs a basic http server. Perfect for web projects</td>
</tr>


<tr>
<td class="left">`sudo npm install -g express`</td>
<td class="left">a web framework for NodeJS projects</td>
</tr>
</tbody>
</table>

There are lots of other stuff npm can do. Learn them further using

`info npm`  
`npm help install`

# Registry problems

**npm** is configured to pull from known registries. But from time to time, pulling software from the registries might fail. Repointing the registry to <http://registry.npmjs.org> fixes things 

`sudo npm config set registry http://registry.npmjs.org` 

<div id="disqus_thread"></div>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_shortname = 'thagos'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
