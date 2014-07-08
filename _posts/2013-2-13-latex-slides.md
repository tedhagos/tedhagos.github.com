---
layout: post

title: Presentation & Slides with Beamer class
subtitle: Ref notes for LATEX and Beamer

excerpt: My notes on using LATEX to author presentation slides. This note also contains instructions on how to use PANDOC as the main structure then use the beamer class to produce the PDF. Although, admittedly, Google Drive + Google Docs has overtaken this one. I don't use this as much now.

description: Reference notes when working with the beamer class

categories:


---



**1. BASIC STRUCTURE OF A PRESENTATION FILE**

The whole presentation is inside <code class="codeblock">\\begin{document} .. \\end{document}</code> .Each slide is enclosed in <code class="codeblock">\\begin{frame} \\end{frame}</code>.

Sample document is shown below

<pre class="codeblock">
%
% sampledoc.latex
%
\documentclass{beamer}
\begin{document}

\begin{frame}
\frametitle{First}
\framesubtitle{the subtitle}
% content
\end{frame}
 
\begin{frame}
\frametitle{Second}
\framesubtitle{another subtitle}
% content
\end{frame}

\end{document}
</pre>
 

Compile the latex source. <code class="codeblock">xelatex \<filename.tex\></code>

<hr/>

**2. TITLE PAGES**

<pre class="codeblock">
\documentclass{beamer}
 \title[Title of Presentation]{Presentation title}
 \author{Ted Hagos}
 \institute[theLogBox]{theLogBox.com \\
 \medskip {\emph{ted@thelogbox.com}}}
\date{\today}
\begin{document}

\begin{frame}
\titlepage
\end{frame}
\begin{frame}
\frametitle{First}
\framesubtitle{the subtitle}
% content
\end{frame}
 
\begin{frame}
\frametitle{Second}
\framesubtitle{another subtitle}
% content
\end{frame}

\end{document}
</pre>

1. Build the title information before <code class="codeblock">\\begin{document}</code>
2. Make the first frame as the title page by calling <code class="codeblock">\\titlepage</code> on the first frame

<hr/>

**3. INSERTING SOURCE CODES INTO SLIDES**
 

<pre class="codeblock">
\documentclass{beamer}
\setbeamercovered{transparent}
\usepackage{pxfonts}
\usepackage{listings}
\begin{document}
 
\lstset{language=java,
        numbers=left,
        numberstyle=\tiny,
        showstringspaces=false,
        frame=leftline,
        tabs=2,
        keywordstyle=\color{red}
        }
 
\begin{frame}[fragile]
\frametitle{\texttt{Hello.java}}
\begin{semiverbatim}
  
\begin{lstlisting}
class Hello {
  public static void main(String args[]) {
  
  }
}
\end{lstlisting}
\end{semiverbatim}
\end{frame}

\begin{frame}[fragile]
\frametitle{Second frame}
\begin{semiverbatim}
  
\begin{lstlisting}
class Hello {
  public static void main(String args[]) {
    System.out.println("Hello Java");
  }
}
\end{lstlisting}
\end{semiverbatim}
\end{frame}

\end{document}
</pre>

1. Use the *listings* package
2. Use the [fragile] option when defining the frame
3. Enclose the source code inside *listings* environment nested inside a *semiverbatim* environment

<hr/>

**4. HOW TO SKIP**

Use <code class="codeblock">\\bigskip</code> to produce vertical whitespace. You can also use <code class="codeblock">\\medskip</code>, it's like <code class="codeblock">\\bigskip</code>, only, well, less

<hr/>

**5. INCLUDING BIBLIOGRAPHIES AND REFERENCES**

<pre class="codeblock">
\documentclass{beamer}
\setbeamercovered{transparent}
\usepackage{pxfonts}
\usepackage{listings}
\begin{document}
\lstset{language=java,
        numbers=left,
        numberstyle=\tiny,
        showstringspaces=false,
        frame=leftline,
        tabs=8,
        keywordstyle=\color{red}
        }
 
\begin{frame}[fragile]
\frametitle{\texttt{Hello.java}}
\begin{semiverbatim}
  
\begin{lstlisting}
class Hello {
  public static void main(String args[]) {
  
  }
}
\end{lstlisting}
\end{semiverbatim}
\end{frame}

\begin{frame}[fragile]
\frametitle{A basic Java program}
\framesubtitle{class and method structure}
\bigskip

The following code is the simplest java program you can 
code and run. In the tradition of Hello World program of Kernighan 
and Ritchie, here is the Hello World in Java. 

\begin{semiverbatim}
  
\begin{lstlisting}
class Hello {
  public static void main(String args[]) {
    System.out.println("Hello Java");
  }
}
\end{lstlisting}
\end{semiverbatim}
\begin{enumerate}
  \item start with a class
  \item define methods inside a class

\end{enumerate}
\end{frame}

\begin{frame}
\frametitle{Citations}
\bigskip
If you need to cite somebody, like this \cite {cite1} or quote somebody, use 
the \\cite command, you need to define a bibliography somewhere. Also, you 
will need to compile twice (use xelatex 2x) to produce the bibtex entries  
\end{frame}

\begin{frame}
\frametitle{References}
\footnotesize{
\begin{thebibliography}{99}
 \bibitem[The Java Programming Language, 1995]{cite1} James Gosling (1995)
 \newblock The Oak Programming Language.
 \newblock \emph{Sun Micro Papers} 
\end{thebibliography}
}
\end{frame}

\end{document}
</pre>

1. The bibliography is usually the last frame
2. Remember to run <code class="codeblock">xelatex</code> twice when you use **bibitems** 

<hr/>

**HOW TO USE PANDOC WITH THE BEAMER CLASS**

You can create beamer slides also using [**Markdown**](http://daringfireball.net/projects/markdown/) and [**Pandoc**](http://johnmacfarlane.net/pandoc/). Say that the following text is written on the file *sample-markdown.md*

<pre class="codeblock">
% A simple, no-nonsense presentation
% Ted Hagos
% February 13, 2013 

# Part 1

## Title of frame 1
- One is
- followed by 2

## and frame 2
- then three
- after three is four

# In the evening

## this is frame 3
- five, and
- finally six

# Part 2

## frame 4
  - you know
  - the drill

## frame 5
</pre>

Compile the the markdown file <code class="codeblock">pandoc -t beamer sample-markdown.md -o sample-markdown.pdf </code>

<hr/>

**REFERENCES**

1. [John Mcfarlane](http://johnmacfarlane.net/pandoc/demo/example9/producing-slide-shows-with-pandoc.html) - Using pandoc with the beamer class
2. [The beamer class](http://www.tex.ac.uk/tex-archive/macros/latex/contrib/beamer/doc/beameruserguide.pdf) - PDF resources



