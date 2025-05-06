import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class SearchService {
  private client = new Client({ node: process.env.ELASTICSEARCH_URL });
  async search(index: string, query: any) { return this.client.search({ index, body: query }); }
}
