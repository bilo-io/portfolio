#!/bin/bash
# . /usr/local/bin/.shell/sh/utils/colors.sh
. ./scripts/colors.sh
function unsavedWarning() {
git status
echoColor 'yellow' "
add untracked files to release? (y/n): "
read ans
case "$ans" in
  "y") ;;
  "n") echoColor 'yellow' ' -> aborting release';exit 0;;
  *) echoColor 'yellow' " -> unknown command: $ans"; exit 0;;
esac
}
timestamp=$(date +%Y-%m-%d)
echoColor 'red' "[-] docs"
rm -rf "./docs"
echoColor 'cyan-l' "[.] building ..."
npm run build:demo
echoColor 'green-l' "[+] ./docs"
echoColor 'green-l' "[+] => git"
git diff-index --quiet HEAD -- || unsavedWarning
git add -A
echo -n "release message: "
read commitMsg
msg="-> Release: ($timestamp) => '$commitMsg'"
echo $msg
git commit -m "$msg"
git push origin master
