REPORTER = dot

test:
	@npm install
	@NODE_ENV= ./node_modules/.bin/mocha \
	--reporter $(REPORTER) \
	--recursive \
	--ui bdd \
	test

test-w:
	@NODE_ENV=test ./node_modules/.bin/mocha \
	--reporter $(REPORTER) \
	--growl \
	--watch \
	test

.PHONY: test test-w