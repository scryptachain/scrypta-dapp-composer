import { Injectable } from '@nestjs/common';
const ScryptaCore = require('@scrypta/core')

@Injectable()
export class AppService {
  async getIdanodeStatus(): Promise<string> {
    const scrypta = new ScryptaCore
    let status = await scrypta.get('/wallet/getinfo')
    return status;
  }

  async postRequest(request): Promise<string> {
    const scrypta = new ScryptaCore
    let response = await scrypta.post(request.endpoint, request.params)
    return response;
  }

  async getRequest(request): Promise<string> {
    const scrypta = new ScryptaCore
    let response = await scrypta.get(request.endpoint)
    return response;
  }
}
