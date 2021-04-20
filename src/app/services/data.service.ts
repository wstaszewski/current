import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient) { }

  public loadComputerConfiguration(name: string): Observable<any> {
    if (name)
      return this.http.get(`assets/configurations/${name}.json`);

    return undefined;
  }

  public loadComputerPerformance(name: string): Observable<any> {
    if (name)
      return this.http.get(`assets/performance/${name}.json`);

    return undefined;
  }

  public loadComputerBenchmarks(name: string, config: string): Observable<any> {
    if (name)
      return this.http.get(`assets/benchmarks/${name}/${config}.json`);

    return undefined;
  }
}
