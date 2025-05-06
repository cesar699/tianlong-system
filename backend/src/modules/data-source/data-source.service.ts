import { Injectable } from '@nestjs/common';
@Injectable()
export class DataSourceService {
  async fetchWeather(location: string) {/* implement */}
  async fetchIPInfo(ip: string) {/* implement */}
}
