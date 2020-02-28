.DEFAULT_GOAL=ts.build
ts.build: deps
	rm -rf typescript/dist/
	node node_modules/.bin/rollup -c

rm.deps:
	-rm -rf node_modules/
	make deps
deps:
	@npm --version $s && cat node_modules/.bin/tsc $s || npm install
s = 2>&1 >/dev/null