//Load TEST
/*
You should run a Load Test to:

-Assess the current performance of your system under typical and peak load.
-Make sure you continue to meet the performance standards as you make changes to your system (code and infrastructure).
-You probably have some understanding about the amount of traffic your system is seeing 
  on average and during peak hours. This information will be useful when deciding what your performance goals should be, in other words, how to configure the performance thresholds.
*/
//Make sure you don't go over your normal number of VUs - that's not load testing, but stress testing.
/*
Things u should have in mind
  99% of requests should finish within 5 seconds.
  95% of requests should finish within 1 second.
  99% users should be able to login successfully on the first try.
*/
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5m', target: 60 }, // simulate ramp-up of traffic from 1 to 60 users over 5 minutes.
    { duration: '10m', target: 60 }, // stay at 60 users for 10 minutes
    { duration: '3m', target: 100 }, // ramp-up to 100 users over 3 minutes (peak hour starts)
    { duration: '2m', target: 100 }, // stay at 100 users for short amount of time (peak hour)
    { duration: '3m', target: 60 }, // ramp-down to 60 users over 3 minutes (peak hour ends)
    { duration: '10m', target: 60 }, // continue at 60 for additional 10 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};


export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}
