import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CaptchaService {
  async recognize(imageBase64: string) {
    // call OCR API like 超级鹰
  }
}
