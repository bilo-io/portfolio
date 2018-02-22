#!/bin/bash
# . /usr/local/bin/.shell/sh/utils/colors.sh
. ./scripts/colors.sh
timestamp=$(date +%Y-%m-%d)
echoColor 'red' "[-] docs"
rm -rf "./docs"
echoColor 'cyan-l' "[.] building ..."
# npm run build:demo
echoColor 'green-l' "[+] ./docs"
echoColor 'green-l' "[+] => git"
git diff-index --quiet HEAD -- || git status && echoColor 'yellow' "
 warning: commit your changes before releasing!
" && exit 0;
git add -A
echo -n "release message: "
read commitMsg
msg="-> Release: ($timestamp) => '$commitMsg'"
echo $msg
# git commit -m "$msg"
# git push origin master
