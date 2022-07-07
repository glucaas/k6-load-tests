import http from 'k6/http';
import { sleep } from 'k6';

//TESTE DE CARGA
export const options = {
  stages: [
    { duration: '10s', target: 10 }, // simulate ramp-up of traffic from 1 to 60 users over 5 minutes.
    { duration: '10s', target: 10 }, // stay at 60 users for 10 minutes
    { duration: '10s', target: 20 }, // ramp-up to 100 users over 3 minutes (peak hour starts)
    { duration: '10s', target: 20 }, // stay at 100 users for short amount of time (peak hour)
    { duration: '10s', target: 0 }, // ramp-down to 60 users over 3 minutes (peak hour ends)
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s,
  },
};


export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}
