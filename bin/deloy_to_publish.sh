#!usr/bin/env bash
rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m deloy
git remote add origin https://github.com/Lu9709/mangosteen-font-react-web.git
git push -f origin master:master
cd -
