.PHONY: clean
clean:
	-rm -fr src/

.PHONY: publish
publish:
	mkdir src
	docker compose -f docker-compose-base.yaml run --rm base

.PHONY: install
install:
	docker compose -f docker-compose-base.yaml run --rm installer

.PHONY: init
init: clean publish install

.PHONY: dev
dev:
	docker compose up