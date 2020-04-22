import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIdanodeStatus(): Promise<string> {
    return this.appService.getIdanodeStatus();
  }

  @Post('post')
  async postRequest(@Body() request): Promise<Object> {
    if(request.endpoint !== undefined){
      return await this.appService.postRequest(request)
    }else{
      return JSON.stringify({
        error: true,
        message: "Endpoint not defined"
      })
    }
  }

  @Post('get')
  async getRequest(@Body() request): Promise<Object> {
    if(request.endpoint !== undefined){
      return await this.appService.getRequest(request)
    }else{
      return JSON.stringify({
        error: true,
        message: "Endpoint not defined"
      })
    }
  }
}
