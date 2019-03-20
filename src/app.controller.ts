import { Controller, Get,Res } from '@nestjs/common';
import { AppService } from './app.service';
const path = require('path');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res) {
    res.sendFile("index.html");
  }

}