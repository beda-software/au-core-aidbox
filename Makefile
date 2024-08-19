restart_production:
	docker compose --profile production pull -q
	docker compose --profile production stop
	docker compose --profile production build
	docker compose --profile production up -d