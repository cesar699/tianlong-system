
import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class NcmService {
  constructor(private readonly http: HttpService) {}

  async login(phone: string, password: string) {
    const res = await this.http.post('http://localhost:3001/login/cellphone', null, { params: { phone, password } }).toPromise();
    return res.data;
  }

  async getUserPlaylists(uid: number) {
    const res = await this.http.get('http://localhost:3001/user/playlist', { params: { uid } }).toPromise();
    return res.data;
  }
}
