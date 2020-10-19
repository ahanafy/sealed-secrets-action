save:
	git add -A
	git commit -m "new update"
build:
	ncc build index.js --license licenses.txt
push:
	git tag -d v1
	git push --delete origin v1
	git tag -a -m "release" v1	
	git push --follow-tags	