export interface ContentPlugin {
  category: string;
  fetch(): Promise<Partial<any>[]>;
}
