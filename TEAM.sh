#!/bin/bash

gitBase="bilo-io/"

repos=(
  "bilo-bio"
  "bilo-ui"
  "bilo-cli"
)

for index in ${!repos[*]}
do
echo $gitBase${repos[$index]}
done
