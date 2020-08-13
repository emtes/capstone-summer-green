# Capstone Project Proposal

## Research Area(s)

- Parallelism
- Performant deployment

## Problem Statement

Node.js handles many clients using very few threads, meaning one busy request will delay the response to subsequent ones. To maintain a performant server, we have to think critically about fair scheduling, or ensuring any callback does not take too much time. We can manage complex work by partitioning, that is, executing work that regularly yields or returns, giving time for other events to be executed. When the work does not adapt to partitioning, we can offload the work to a worker pool, which essentially creates another process that can be scheduled on another logical core. Managing workers is challenging, for they too can be blocked by other time-consuming work.

## Proposed Solution

I propose building a tool that can take an existing Node.js application and run in a manageable cluster that incorporates simple usage of shared storage and load balancing. This tool should be able to kill and add more processes to maximize overall performance. Additional ambitions include docker support and system insights on resource usage.

## Anticipated Technical Challenges

- Management of child processes whose benefits are not consumed by overhead
- Graceful and efficient restarts
- Incorporating load balancer and shared key-value store

## Supporting Research

- Node.js Guides: [Don't Block the Event Loop (or the Worker Pool)](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

## Keys

- Load balancing
- Best way to fork and access process
- Easy way to dockerize app
- Extra credit? Best AWS service to use?

## Questions

- EDA (to keep load balancer knowledgable?) or reqs?
-
