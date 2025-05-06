
import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('city')
  getByCity(@Query('name') city: string) {
    const weather = this.weatherService.getWeatherByCity(city);
    return this.weatherService.analyzeWeather(weather);
  }
}
