//Stress TEST
/*
You typically want to stress test an API or website to determine:

-How your system will behave under extreme conditions.
-What the maximum capacity of your system is in terms of users or throughput.
-The breaking point of your system and its failure mode.
-If your system will recover without manual intervention after the stress test is over.

When stress testing, you configure the test to include more concurrent users or generate higher throughput than:

Your application typically sees.
You think your application can handle.
Note that a stress test doesn't overwhelm the system immediately — that's a spike test, which we'll cover soon.

A stress test should be configured in many gradual steps, each step increasing the concurrent load of the system.
*/
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
      { duration: '2m', target: 100 }, // below normal load
      { duration: '5m', target: 100 },
      { duration: '2m', target: 200 }, // normal load
      { duration: '5m', target: 200 },
      { duration: '2m', target: 300 }, // around the breaking point
      { duration: '5m', target: 300 },
      { duration: '2m', target: 400 }, // beyond the breaking point
      { duration: '5m', target: 400 },
      { duration: '10m', target: 0 }, // scale down. Recovery stage.
    ],
  };



export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}