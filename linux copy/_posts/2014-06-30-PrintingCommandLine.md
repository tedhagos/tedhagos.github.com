---

title: CLI Printing
author: Ted hagos
categories: linux

---

## General commands

-   **lpstat -d:** Find out if there is default printer configured
-   **lpstat -p:** See all the printers configured
-   **lpstat -p -d:** See all of the printers and the default printer
-   **lpr \<filename\>:** Send file to the default printer
-   **cat \<filename\> \| lpr:** does the same thing as `lpr \<filename\>`
-   **lpadmin:** CLI command to configure cups printers, but it is really much easier to use the web interface. Use the browser and go to `http://localhost:631`. You can pretty much do everything there and without memorizing all the command line flags needed by lpadmin. If you have no choice but to do the admin on the command line, the **lpadmin** command is well documented in [CUPS page for lpadmin](http://www.cups.org/documentation.php/man-lpadmin.html)
-   **lpoptions -d printername:** Set a default printer
-   **lpq:** See what print jobs are in progress and if there are ones on the queue
-   **lprm \<job id\>:** Cancel a print job. You need to know the job id, that is why you need to `lpq` first
-   **lpoptions -p \<printerName\> -l:** Show the settings of the printer

## TODO Printing Options

-   [ ] Why is OSX using the Manual feed always? Try out the 1102w on Linux

Either the `lpr` and `lp` command will send contents of a file to the configured printer. But before you can print, you need a properly configured printer. Use either `lpadmin` for that, or configure the printer via the web gui admin at *<http://printserverNameOrIpAddress:631>* 

The most basic usage is to send the contents of a file to the configured printer

`lpr filename.ext`

Some options to use

-   **lpr -o landscape <filename>:** Print in landscape mode
-   **lpr -o fit-to-page <filename>:** Fit everything in 1 page
-   **lpr -o media=A4 <filename>:** Use A4 as paper
-   **lpr -o media=Letter <filename >:** Use letter size
-   **lpr -n 2 <filename>:** Print 2 copies
-   **lpr -n 2 Collate=True:** Print 2 copies and collate

## References

1.  CUPS.org, "Command Line Printing and options", <http://www.cups.org/documentation.php/options.html>, June 30, 2014
2.  CUPS.org, "lpadmin(8)", <http://www.cups.org/documentation.php/man-lpadmin.html>
