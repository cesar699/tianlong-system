
import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  getWeatherByCity(city: string) {
    // 模拟天气数据
    const weatherData = {
      city,
      temperature: 22 + Math.floor(Math.random() * 10),
      condition: ['晴', '多云', '小雨', '雷阵雨'][Math.floor(Math.random() * 4)],
      humidity: Math.floor(Math.random() * 50) + 30,
      wind: Math.floor(Math.random() * 10) + ' km/h',
      updateTime: new Date().toISOString()
    };
    return weatherData;
  }

  analyzeWeather(data: any) {
    const advice = data.condition.includes('雨') ? '建议带伞' : '适合出行';
    return {
      ...data,
      advice
    };
  }
}
