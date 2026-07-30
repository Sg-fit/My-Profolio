---
title: Charweb — AI Agent Defense System
date: 2026-06-01
description: A live behavioral biometrics pipeline that distinguishes human users from AI browsing agents on a real, fully-instrumented social web app.
technologies: Flask, Flask-SocketIO, Gunicorn, Cloudflare Tunnel, SQLite/SQLAlchemy, scikit-learn, Python, JavaScript
github: https://github.com/Sg-fit/Charweb
demo: https://charweb.net
screenshot:
---

## Overview

Charweb is a small, fully-instrumented social web application — feed, forms, real-time chat, a dungeon RPG, daily rewards — that I built and deployed as a testbed for detecting AI web agents from real human users. Every click, keystroke, scroll, and mouse movement is logged client-side with real timestamps, then fed into a behavioral-feature engineering and classification pipeline.

## Features

- Full-stack Flask app with real-time chat (Flask-SocketIO), a scrollable social feed, and a small RPG/daily-rewards system to generate varied, realistic interaction data
- Client-side event tracking (`track.js`) capturing mouse dynamics, keystroke timing, scroll patterns, and click precision
- A task-type auto-labeling engine that segments raw event logs into task-typed episodes
- A RandomForest / LogisticRegression classification pipeline trained on engineered behavioral features (timing coefficient of variation, mouse path curvature, click precision, and more)
- Deployed with Gunicorn behind a Cloudflare Tunnel

## What I learned

Building and deploying a real production Flask app — from database migrations to process supervision to tunneling a home server safely onto the public internet — taught me as much about systems and ops as the detection model itself did about machine learning. I also learned the hard way how easy it is to leak information between train and test sets in small behavioral datasets, which shaped how I evaluate the classifier (see the research project for more on that).

## Challenges

Getting believable, varied behavioral data out of AI agents required building multiple agent architectures myself — scripted Playwright bots at different sophistication tiers, an LLM-driven agent, and a custom autonomous agent — since off-the-shelf bots don't produce realistic browsing behavior to detect against.
