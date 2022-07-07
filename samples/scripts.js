import http from "k6/http";
import { sleep } from "k6";
//TESTE DE FUMACA
export default function() {
  http.get("http://test.k6.io");
  sleep(1);
};

