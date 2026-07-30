---
title: Detecting the Long Tail — Behavioral Fingerprinting of Non-Frontier AI Agents
date: 2026-07-01
description: A research study asking whether AI-agent detectors trained on frontier models generalize to non-frontier, custom-built agents — and whether agent decision latency offers a detection channel that timing-jitter defenses can't reach.
technologies: Python, scikit-learn, pandas, statistical analysis (GroupKFold, bootstrap CI, Mann-Whitney/Cliff's delta)
github: https://github.com/Sg-fit/Charweb
demo:
screenshot:
---

## Overview

Two papers published in mid-2026 showed that behavioral traces can fingerprint which frontier LLM is driving a browser agent, at 96–97% accuracy. Neither tests whether this holds for the kind of agents real-world defenders actually face: small, custom, non-frontier automation built by individual developers, not by frontier labs. This research project uses the Charweb testbed to test that gap directly, and asks a second question the published work doesn't: whether a detector's failure to generalize comes from the underlying *model* or from the automation *harness* wrapped around it — a distinction nobody has isolated before.

## Key findings so far

- A naive leave-one-out evaluation reported AUC ≈ 0.97 — but this was inflated by data leakage between train and test sets. Properly corrected (grouped by subject/architecture), the honest number is closer to AUC ≈ 0.865.
- A classifier trained on scripted bots and one class of AI agent achieves near-perfect recall on architectures it has seen before, but **0% recall** on both an unseen model family and a custom hobbyist agent I built myself — a real, measured generalization gap, not a hypothetical one.
- The custom agent's behavior is different enough that it doesn't even fit cleanly into the site's task-labeling taxonomy, which is itself evidence that "long-tail" agents may need entirely different analytical treatment, not just more training data.

## What I'm working on next

Scaling the architecture and human data, then testing whether **agent decision latency** — how long a model takes to decide on an action, as opposed to how it physically executes that action — survives as a detection signal even when an adversary randomizes motor timing to evade detection.

## What I learned

How easy it is to fool yourself with an inflated metric, and how much of real ML research is careful evaluation design rather than model selection.
