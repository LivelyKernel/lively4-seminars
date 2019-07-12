# Project 2 David Rauch, Sebastian Koall - Offline First

[presentation](presentation.pdf)

## Abstract

Lively4 Offline delivers almost all functionality of Lively4, even when no internet connection is available.
Four different caching modes are supported: Caching can be deactivated completely; Only essential files are cached;
Favorites are tracked and automatically cached; Or Lively4 is fully cached. Cached files can be edited
even if the network connection is interrupted – the corresponding network requests are queued, combined, 
and processed once the user is back online. Additionally, content from connected cloud providers can be cached for offline usage.
To prevent caching of large amounts of data, it is possible to selectively cache only certain files or subdirectories.


![](figure.png)

<video controls><source src="screencast.mp4" type="video/mp4"></video>

## Project Description

Your domain: [Service Worker](https://lively-kernel.org/lively4/lively4-core/swx-loader.js)

### Tasks:

- Intercept every stat, read, write, and delete request
- Serve from cache if offline
- Write cached write requests once reconnected

### Zu beachten:

- Transparent to mounted file systems
- Later:
  - update policies
  - managing conflicts
