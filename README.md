# k6-load-tests

Repository to practice and test different types of load tests. All of this examples were taken from website [k6 documentation](https://k6.io/docs/)

## Dependencies


you must have in your local machine

- docker engine
- docker compose

## How to run


- local
- cloud

## **Local**

Up the grafana and influxdb containers with

``` sh
docker-compose up influxdb grafana
```

After that, the containers will be setted up, and we need to run our k6 container inside the docker-compose and select the script you want to run in the last parameters of the script above.

```sh
  docker-compose run k6 run /script/script.js
```

## **Cloud**

Dependencies:

- You must create your account in k6 cloud (you have 50 load tests in the free subscription. Use this with wise)

To run in cloud, you have to do three things. First,  you need to update the docker-file and add the enviroment variable

```sh
  K6_CLOUD_TOKEN={YOUR_TOKEN}
```

then, add in options, the code with your own project id

```sh
  ext: {
    loadimpact: {
      projectID: {YOUR_PROJECT_ID},
      name: "A name for your test"
    }
}
```

And finally, run the the command in the terminal

```sh
  docker-compose run k6 run -o cloud /scripts/scriptTest.js
```

NOTE: the url inside this tests are pointing to k6 website, you must not run huge load tests for this url.
