#!/bin/bash

set -e # exit with nonzero exit code if anything fails

echo "Starting to update gh-pages"

echo "Copying documentation folder content..."
cp -R documentation/* $HOME/Desktop/docs/ng-tmdb-api/
echo "Documentation folder copied!"

#go to home and setup git
cd $HOME/Desktop
echo "Removing gh-pages folder..."
rm -rf gh-pages
echo "gh-pages folder removed"

#using token clone gh-pages branch
git clone --quiet --branch=gh-pages https://github.com/igorissen/ng-tmdb-api.git gh-pages > /dev/null

#go into directory and copy data we're interested in to that directory
cd gh-pages
cp -Rf $HOME/Desktop/docs/ng-tmdb-api/* .

echo "Allow files with underscore https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/" > .nojekyll

#add, commit and push files
git add -f .
git commit -m "Update compodoc documentation"
git push -fq origin gh-pages > /dev/null

echo "Done updating gh-pages"
