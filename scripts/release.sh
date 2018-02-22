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

function pkgDetails() {
  PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

  PACKAGE_NAME=$(cat package.json \
  | grep name \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
  echoColor 'cyan-l' "
  $PACKAGE_NAME v$PACKAGE_VERSION
  "
}
timestamp=$(date +%Y-%m-%d)
git diff-index --quiet HEAD -- || unsavedWarning
echoColor 'red' "[-] docs"
rm -rf "./docs"
echoColor 'cyan-l' "[.] building ..."
npm run build:demo
echoColor 'green-l' "[+] ./docs"
echoColor 'green-l' "[+] => git"
git add -A
echo -n "release message: "
read commitMsg
pkgDetails
msg="-> Release: ($timestamp) => '$commitMsg'"
echoColor 'cyan-l' "$msg
"
git commit -m "$msg"
git push origin master || echoColor 'yellow' "failed release" && exit;
echoColor '[+]'
