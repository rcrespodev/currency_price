#run_api_gateway:
#	npm install apiGateway/
#	node apiGateway/main.js

run: stop_app up_app_d

stop_app:
	docker-compose -f docker-compose.yaml stop

up_app_d:
	docker-compose -f docker-compose.yaml up -d --build