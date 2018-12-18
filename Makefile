.PHONY: publish
publish: 
	@npm publish

.PHONY: help
.DEFAULT_GOAL := help
help: ## Print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
