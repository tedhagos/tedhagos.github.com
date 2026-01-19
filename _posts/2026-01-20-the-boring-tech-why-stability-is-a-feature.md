---
layout: post
title: "The Case for Boring Tech: Why Stability is a Feature"
date: 2026-01-20
author: Ted Hagos
categories: [Engineering, Strategy]
tags: [Software Engineering, System Architecture, Web Development, DevOps, Postgres, Java, Career Advice, Scalability, Risk Management]
---

We have a persistent problem in software engineering: we frequently confuse "novelty" with "value." Every six months, a new framework arrives that promises to solve all the problems of the previous framework—which was itself considered the "solution" just a year ago. It is tempting to think that staying on the cutting edge is the only way to remain relevant in this industry.

However, if you are building a product that needs to function reliably three years from now, "interesting" technology is a liability. In this context, **"boring" technology is a significant competitive advantage.**

## The Innovation Token System

Think of your project as having a strictly limited budget of **three Innovation Tokens.** This isn't just a metaphor; it is a mental model for managing the total amount of complexity your team can handle before the system becomes unmanageable.



Every time you choose a database that is only two years old, or a programming language that has not yet reached a stable version 1.0, you spend a token. If you spend all three tokens on your infrastructure—the foundation of your app—you have zero tokens left to spend on the actual problem you are trying to solve for your users.

Boring technology consists of things like Postgres, Java, or Linux. These are "solved" problems. They do not require innovation tokens because their behavior is well-documented, and their "surprises" have already been discovered by someone else. When you use Postgres, you aren't innovating on how data is stored; you are using a tool that has survived thirty years of edge cases. This leaves your tokens available for the things that actually matter: your unique business logic and your user experience.

## The Mathematics of the Bus Factor

In engineering, we use a risk metric called the **Bus Factor.** This is the minimum number of team members who would have to be hit by a bus (or suddenly quit) before a project stalls because nobody else knows how the system works.



When you use a niche, experimental functional language or a brand-new "serverless" framework that only two people on Earth truly understand, your Bus Factor is effectively one. If that person leaves, the project enters a state of "archaeological maintenance," where the remaining team spends more time deciphering the intent of the code than actually shipping features.

### Knowledge Distribution vs. Syntax Specialization

When you choose a "boring" stack, you are choosing a massive, global talent pool. Skills like SQL or REST are "commodity knowledge." You can hire a replacement on a Tuesday, and they can be making meaningful contributions by Thursday because the patterns are universal.

Experimental tech requires "bespoke knowledge." You must first find the rare candidate who knows the tech, then wait months as they learn your specific implementation of its unpolished quirks. High novelty tech creates high friction for hiring; boring tech creates a low-friction environment where new people can become productive almost immediately.

## The Unholy Hour Test

Everything breaks eventually. The primary advantage of boring technology is that we have a very good idea of exactly *how* it breaks. We understand its memory leaks, its scaling limits, and its specific quirks.

### 1. The Search Engine Advantage
When boring tech breaks during "unholy hours"—those inconvenient times in the middle of the night—someone else has almost certainly already found the fix and posted it online. If your database stops responding at 3:00 AM, you want to find a Stack Overflow thread from 2014 that explains exactly which configuration flag to flip.

### 2. Researcher vs. Developer
When "cutting-edge" technology breaks, you are no longer just a developer; you are a primary researcher. You aren't just fixing a bug; you are discovering a new property of an unstable system. Discovery is great for science, but it is terrible for a production environment that needs to be online 24/7. In production, "discovery" is just a fancy word for "unplanned downtime."

### 3. Predictable Failure
A mature system like the Linux kernel or the Java Virtual Machine (JVM) has been tested by millions of users across billions of hours of runtime. Its failure modes are documented. A new framework, however, might fail in a way the creators never even imagined. In software, "unpredictable" is a synonym for "expensive."

## The Hype Cycle Trap

Most new technologies follow what we call the **Hype Cycle.** There is a "Peak of Inflated Expectations," followed by a "Trough of Disillusionment" when developers realize the new tool doesn't actually solve everything.


Boring tech has already made it through this cycle. It has reached the "Plateau of Productivity." When you choose a tool at the peak of its hype, you are essentially gambling that the tool will mature faster than your project needs to scale. This is rarely a winning bet. Boring tech optimizes for the "staying in business" phase rather than the "getting started" phase.

## Choosing Your Battles

Choosing boring technology does not mean being a "dinosaur" or refusing to learn. It means being strategic with your energy. Your users do not care if you used a revolutionary, experimental graph database. They care that the checkout page works every single time they click the button. 

As a Senior Engineer, your primary job is to **manage risk.** The greatest risk to a project is often the "exciting" technology you chose at the very beginning when you were feeling optimistic. If you want to innovate, innovate on your product. Keep the foundation boring.

## Build Something That Lasts

I spent a long time in software development watching frameworks come and go. The systems we built ten years ago that are still running today all have one thing in common: they were built on boring foundations. They don't require weekly babysitting or constant rewrites to stay compatible with the latest "hot" library. They just work.

Build for the long haul. Spend your innovation tokens on your customers, not on your database. Keep your foundation boring, so your results can be extraordinary.
