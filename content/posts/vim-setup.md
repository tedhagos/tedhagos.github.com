---
title: "Vim Setup"
date: 2017-12-30T18:21:10+08:00
categories: [vim]
---

**Get Vundle**

```
git clone https://github.com/VundleVim/Vundle.vim.git
```

**Create .vimrc in your home folder** (~/.vimrc) and add the following entries to it

```bash
set rtp+=~/.vim/bundle/vundle/Vundle.vim
call vundle#begin()

Plugin 'gmarik/Vundle.vim'
Plugin 'MarcWeber/vim-addon-mw-utils'
Plugin 'Valloric/YouCompleteMe'
Plugin 'tomtom/tlib_vim'
Bundle 'snipmate-snippets'
Plugin 'honza/vim-snippets'
Plugin 'garbas/vim-snipmate'
Plugin 'tpope/vim-rails.git'
Plugin 'tpope/vim-fugitive'
Plugin 'tpope/vim-surround'
Plugin 'tpope/vim-sleuth'
Plugin 'tpope/vim-markdown.git'
Plugin 'ricardovaleriano/vim-github-theme.git'

call vundle#end()
```

**Save the .vimrc file**. Close it and execute the following command on a terminal window

```
vim +PluginInstall +qall
```



