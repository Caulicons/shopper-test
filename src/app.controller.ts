import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
@Controller()
export class AppController {
  constructor() {}

  @ApiExcludeEndpoint()
  @Get()
  redirect(@Res() response: any): string {
    return response.redirect('api');
  }
}
