
import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class QlService {
  constructor(private readonly http: HttpService) {}

  private baseUrl = process.env.QL_API_BASE; // e.g. http://localhost:5700

  async getTasks(): Promise<any> {
    const url = `${this.baseUrl}/open/crons`;
    const res: AxiosResponse = await this.http.get(url).toPromise();
    return res.data;
  }

  async createTask(command: string, schedule: string, name: string): Promise<any> {
    const url = `${this.baseUrl}/open/crons`;
    const body = { command, schedule, name };
    const res: AxiosResponse = await this.http.post(url, body).toPromise();
    return res.data;
  }

  async updateTask(id: number, data: any): Promise<any> {
    const url = `${this.baseUrl}/open/crons/${id}`;
    const res: AxiosResponse = await this.http.put(url, data).toPromise();
    return res.data;
  }

  async deleteTask(id: number): Promise<any> {
    const url = `${this.baseUrl}/open/crons/${id}`;
    const res: AxiosResponse = await this.http.delete(url).toPromise();
    return res.data;
  }

  async runTask(id: number): Promise<any> {
    const url = `${this.baseUrl}/open/crons/${id}/run`;
    const res: AxiosResponse = await this.http.put(url).toPromise();
    return res.data;
  }
}
