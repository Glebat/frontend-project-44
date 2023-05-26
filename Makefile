install:
		npm ci

brain-games:
		node bin/brain-games.js

lint:
		npx eslint .

fix:
		npx eslint . --fix

brain-even:
		node bin/brain-even.js