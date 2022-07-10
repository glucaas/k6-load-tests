//Smoke Local Test
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  noConnectionReuse: false,
  insecureSkipTLSVerify: true,
  stages: [
    { duration: '20s', target: 10 },
    { duration: '30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
  // vu: 10,
  // iterations: 100,
  //thresholds: { http_req_duration: ['avg<100', 'p(95)<200'] },
};

export default function () {
  //coloca o ip do wsl para poder pingar
  //172.18.160.1 ip do WSL
  http.get('http://10.0.0.135:5163/WeatherForecast');
  sleep(1);
}
