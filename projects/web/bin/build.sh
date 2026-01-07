#!/usr/bin/env bash

# Site
(
  vite build --mode "$1" --config projects/web/module/site/vite.config.ts
) &

wait