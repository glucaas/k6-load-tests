# k6-load-tests
Repository to practice and test different types of load tests. All of this examples were taken from website [k6 documentation](https://k6.io/docs/)

# Instalattion
you must have in your local machine
- docker engine
- docker compose 

up the grafana and influxdb containers with
```sh
docker-compose up influxdb grafana
```
after that the containers will be setted up, and we need to run our k6 container inside the docker-compose and select the script you want to run in the last parameters of the script above. 
```sh
  docker-compose run k6 run /script/script.js
```

NOTE: the url inside this tests are pointing to k6 website, you must not run huge load tests for this url.
