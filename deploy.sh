#!/bin/bash
echo "adding all files"
git add -Av
echo "Enter commit messge:"
read commit_message
echo "committing..."
git commit -m "$commit_message"
echo "Enter Remote: "
read remote
if [ -z "$remote"  ]
	then
	remote="origin"
fi
echo "Enter Branch: "
read branch
git push $remote $branch