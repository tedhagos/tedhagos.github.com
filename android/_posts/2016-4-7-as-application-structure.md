---

title: Application Structure
chapterhead: yes
lastupdated: 07 April 2016

---

An android application is built from an android project. This project is a collection of loosely related files and resources e.g. Java programs, audio, video, graphics and XML source files which are tied together by configuration files and build scripts.  

## How to create an application 

An application is simple to create. It involves nothing more than choosing a name for the project, the name of the activity and clicking a couple of buttons on the IDE. 

<div class="video-container">
<iframe width="420" height="315" src="https://www.youtube.com/embed/Y6FbaC1Og1Q" frameborder="0" allowfullscreen></iframe>
</div>

The activity creation wizard needs only the following information

application name
: what you want to call the application. This is known also as the project name. It will become not only the name of the top level folder which contains all the project files in your disk, but also, the application name becomes a part of your application's identity should you release it in Google Play

company domain
: this is your organization or company's domain name in reverse dns notation

package name
: this is the company domain plus the application name. This will uniquely identify your application should you choose to release it in Google Play. You will not input this field, this is automatically constructed from the application name and company domain

project location
: a place in your disk drive where the project files will be kept. It is almost similar to the workspace idea of Eclipse, if you have used that. Unlike Eclipse though, the project location is simply that, a location for your project files. It does not contain settings information like in Eclipse

minimum sdk
: what you put here will determine what is the lowest or oldest version of Android your application will run on. If you put something like API level 8, that means your application should be able to run on Froyo. If you API level 23 in this field, your application can run only on Marshmallow or later versions

After you have supplied the above information, the wizard will ask you to choose  from a variety of activity types. The simplest of all is the blank activity, which is what I used in the example. The other activities are quite specialized, we will get to them in due time. For now, choosing a blank activity will suffice.  The last pieces of information that the creation wizard will require are the following

activity name
: This will become the name of a Java class that will be associated with the activity. This class will contain the program logic of your user interface. Most applications will have a user interface, that is why the wizard is asking you to provide a name for one

layout name
: This will become the name of an XML file which will be associated with the activity. This XML file will contain the definition of your user interface. View objects (you might know them as widgets) such as Buttons, Textviews etc are the stuff that makes up the UI portion of the app. UI elements are defined in an XML resource file

title
: This becomes the visible title of the activity

menu resource name
: like the layout name, this becomes the title of an XML file that will contain the definition of the application's menu 

For our purposes, I simply accepted the default values for all four items above.  After you click the finish button,  Android Studio kicks into high gear creating and assembling our project.  

## Parts of the application 

Activity

AndroidManifest





