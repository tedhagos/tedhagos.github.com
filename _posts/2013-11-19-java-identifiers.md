---
layout: java

title: Identifiers

description: There are fundamental rules to observe when naming classes, methods, variables, parameters and packages.

excerpt: 

author: Ted Hagos

lastupdate: November 19, 2013

tags:
- reserved
- keywords
- identifiers

categories:
- java

---


An identifier is any part of your program that you must define for yourself. These include *classes, interfaces, methods, variables, parameters* and *packages*. 

You must observe the following rules when creating identifiers. It must:

1. consist of alphanumeric characters. You can use the characters a-z, A-Z and 0-9 
2. not start with a number but it can start with an underscore or a dollar sign 
3. not have any special characters inside it, e.g. #, &, @ or *
4. not be same as java keyword or literal 

## Keywords

There are 50+ keywords in the Java language but not all of them are in use. The *const* and *goto* keywords are not in use. The keywords for Java has undergone some subtle changes over the years. There could also be some confusions regarding which keywords are treated as reserved words and which ones are simply literals for the language. 

In the past, the words *true, false* and *null* appeared as keywords . Sometime in the past, *null, true* and *false* have stopped being keywords and became known as literal values (From the Java Lang Spec). These are semantics and are probably of interest only to the language lawyers of Java. If your pursuits are more of the practical nature, I suggest not to bother with the semantic difference. The point is you cannot use keywords and literals as variable names or identifiers in your own code lest you will have a problem during compilation. This is the most important reason why you need to be familiar with them.

It is always best to consult the most recent version of the Java Language Specification when it comes to these things because they are a matter of specification. The keywords are printed here only for ease of reference.

<pre class="codeblock">
  abstract	continue	for			    new			  switch
  assert		default		goto		    package		synchronized
  boolean		do			  if			    private		this
  break		  double		implements	protected	throw
  byte		  else		  import		  public		throws
  case		  enum		  instanceof	return		transient
  catch		  extends		int	short	  try
  char		  final		  interface	  static		void
  class		  finally		long		    strictfp	volatile
  const		  float		  native		  super		  while
</pre>

You do not need to memorize all the keywords now, but I think in time you will know them by heart as your practice grows.

***

Can you tell which ones are valid identifiers? Why? Why not?

small number

bignumber

this-is-a-very-long-identifier_is-it-legal

IsThisLegal?

_IsThisLegal

class_name

import-no1

transient

volatile

careful-this-is-volatile
