import axios from 'axios';
import { ContentPlugin } from './content.plugin';

export class WeatherPlugin implements ContentPlugin {
  category = 'weather';
  async fetch(): Promise<any[]> {
    const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: { q: 'Beijing', appid: process.env.OPENWEATHER_KEY }
    });
    return [{
      title: `天气: ${resp.data.weather[0].description}`,
      summary: `温度: ${resp.data.main.temp}K`,
      url: '',
      source: 'OpenWeather',
      category: this.category,
      publishDate: new Date(),
      tags: ['weather'],
    }];
  }
}
