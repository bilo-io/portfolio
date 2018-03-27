#!/bin/bash

gitBase="https://github.com/bilo-io/"

repos=(
  "bilo-bio"
  "bilo-ui"
  "bilo-cli"
)

function printRepos {
for index in ${!repos[*]}
do
echo $gitBase${repos[$index]}
done
}

function delGitBranch {
  currentRepo=$(basename `git rev-parse --show-toplevel`)
  currentBranch=$(git rev-parse --abbrev-ref HEAD)  
  
  git checkout master
  git branch -D $currentBranch
  git push -d origin $currentBranch
}
function newGitBranch {
  currentRepo=$(basename `git rev-parse --show-toplevel`)
  currentBranch=$(git rev-parse --abbrev-ref HEAD)

  branchName=$1
  echo $currentRepo
  echo "\\"
  echo " +-+-+>> $currentBranch"
  git stash
  git checkout master
  git pull
  git checkout -b $branchName
  # git add -A
  # git commit -m "created branch: $branchName"
  git push origin $branchName
  git checkout $currentBranch
  git stash pop
}
echo -n -e "create branch: "
read customBranchName

printRepos
# newGitBranch $customBranchName
delGitBranch "yoyo"