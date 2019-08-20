.PHONY: help test

PROJECT_NAME = petms

help: ## Help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build the container
	@echo "Building Container"
	@docker build -t $(PROJECT_NAME) .

start: ## Start the container (run make build to get new changes)
	@echo "Starting Container"
	@docker run -p 3000:3000 -d --name $(PROJECT_NAME) $(PROJECT_NAME)

stop: ## Bring Down the container
	@echo "Stopping Container"
	@docker stop $(PROJECT_NAME)

clean: ## Remove the container with volume
	@echo "Removing Container"
	@docker rm $(PROJECT_NAME)

test: ## Run E2E Tests
	@echo "Running E2E Tests"
	@npm test

init: ## Reset Database
	@echo "Resetting Database"
	@cp sample-json/* JSON/

dockertest: ## Run E2E Tests in Docker
	@echo "Running E2E Tests in Docker"
	@docker run --rm $(PROJECT_NAME) npm test

unit-test: ## Running Unit Tests"
	@echo "Running Unit Tests"
	@npm run unit

dockerunittest: ## Running Unit Tests in Docker
	@echo "Running Unit Tests in Docker"
	@docker run --rm $(PROJECT_NAME) npm run unit

check-health: ## Check Health
	@curl localhost:3000/api/health