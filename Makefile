build:
	docker build -t any-api-as-a-service .

run:
	docker run -it -p 3000:3000 any-api-as-a-service