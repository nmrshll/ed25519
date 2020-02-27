.DEFAULT_GOAL=ts.build
ts.build: deps
	node node_modules/.bin/tsc

deps:
	@npm --version $s && cat node_modules/.bin/tsc $s || npm install
s = 2>&1 >/dev/null