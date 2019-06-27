IMAGE ?= accounting-api-client

run:
	ng serve

build:
	docker build . -t ${IMAGE}

container-run:
	docker run -d -p 8000:80 --name=${IMAGE}-container ${IMAGE}

container-stop:
	docker stop ${IMAGE}-container

