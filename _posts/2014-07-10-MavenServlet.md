---

title: Simple Servlet Using Maven
author: Ted Hagos
categories: java

---



Maven can automate some of the tasks involved in setting up a development environment for a Java web project. While you could use some established archetypes of Maven, it can also be managed by using a very simple Maven project structure.

A Java web application requires a servlet container. There are many, but Apache Tomcat is probably the most common. A close second choice would probably Jetty, which is what we will use. Jetty is very lightweight, much lighter than Tomcat. 

In this sample project, we won't even have to download Jetty manually. We simply need to add it as a dependency on the POM file and Maven will do the rest. It will pull the Jetty files from the repositories and get it installed. We don't even have to worry of updating our system path.

# web app directory structure

and why do we have to structure our maven project like this

Directory Structure

    ├── pom.xml
    ├── src
    │   └── main
    │       ├── java
    │       │   └── HelloWeb.java
    │       └── webapp
    │           └── WEB-INF
    │               └── web.xml
    └── target
        ├── classes
        │   └── HelloWeb.class
        └── tmp
            └── jsp

Create the toplevel dir
`mkdir -p src/main/java`  
`mkdir -p src/main/webapp/WEB-INF`  

Take the sample of 
Get the sample pom sample of 
web.xml

    <?xml version="1.0" encoding="UTF8"?>
    <web-app>
      <servlet>
        <servlet-name>Hello</servlet-name>
        <servlet-class>HelloWeb</servlet-class>
      </servlet>
      <servlet-mapping>
        <servlet-name>Hello</servlet-name>
        <url-pattern>/hello/*</url-pattern>
      </servlet-mapping>
    </web-app>

pom.xml

    <project>
      <modelVersion>4.0.0</modelVersion>
      <groupId>com.hagos</groupId>
      <artifactId>CookieSample</artifactId>
      <version>1.0-SNAPSHOT</version>
      <packaging>jar</packaging>
      
      <properties>
        <jettyVersion>9.1.2.v20140210</jettyVersion>
      </properties>
      
      <dependencies>
        <dependency>
          <groupId>org.eclipse.jetty</groupId>
          <artifactId>jetty-server</artifactId>
          <version>${jettyVersion}</version>
        </dependency>
      </dependencies>
      
      <build>
        <plugins>
          <plugin>
            <groupId>org.eclipse.jetty</groupId>
            <artifactId>jetty-maven-plugin</artifactId>
            <version>${jettyVersion}</version>
    
            <configuration>
              <mainClass>CookieSample</mainClass>
              <scanTarget>src/main/java/</scanTarget>
              <scanIntervalSeconds>1</scanIntervalSeconds>
            </configuration>
          </plugin>
          
          <plugin>
            <groupId>org.codehaus.mojo</groupId>
            <artifactId>exec-maven-plugin</artifactId>
            <version>1.2.1</version>
          </plugin>
    
        </plugins>
      </build>
    
    </project>

You still have to mvn compile, to see the changes on the servlet
