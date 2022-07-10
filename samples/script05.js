//Soak TEST
/*
You typically run this test to:

-Verify that your system doesn't suffer from bugs or memory leaks, which result in a crash or restart after several hours of operation.
-Verify that expected application restarts don't lose requests.
-Find bugs related to race-conditions that appear sporadically.
-Make sure your database doesn't exhaust the allotted storage space and stops.
-Make sure your logs don't exhaust the allotted disk storage.
-Make sure the external services you depend on don't stop working after a certain amount of requests are executed.

You may discover that the performance of your application was much better at the beginning of 
the test in comparison to the end. This typically happens if your database is not properly tuned.
 Adding indexes or assigning additional memory may help.
*/

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 400 }, // ramp up to 400 users
    { duration: '3h56m', target: 400 }, // stay at 400 for ~4 hours
    { duration: '2m', target: 0 }, // scale down. (optional)
  ],
};

const API_BASE_URL = 'https://test-api.k6.io';

export default function () {
  http.batch([
    ['GET', `${API_BASE_URL}/public/crocodiles/1/`],
    ['GET', `${API_BASE_URL}/public/crocodiles/2/`],
    ['GET', `${API_BASE_URL}/public/crocodiles/3/`],
    ['GET', `${API_BASE_URL}/public/crocodiles/4/`],
  ]);

  sleep(1);
}
