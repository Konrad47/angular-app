export class SingleTon {
  private static instance: SingleTon;

  private data!: string;
  private logs: string[] = [];
  constructor() {}
  public static getInstance() {
    if (!SingleTon.instance) {
      SingleTon.instance = new SingleTon();
    }
    return SingleTon.instance;
  }

  setData(message: string) {
    this.data = message;
    this.logs.push(message);
  }

  getData() {
    console.log('Data', this.data);
    console.log('Logs Count', this.logs.length);
    console.log('Logs', this.logs);
  }
}
