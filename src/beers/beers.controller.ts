import { Controller, Get } from '@nestjs/common';
import { BeersService } from './beers.service';

@Controller('beers')
export class BeersController {

    constructor(private readonly BeersService: BeersService) {}
    
    @Get('hello')
    getHello(): string {
        return this. BeersService.getHello();
  }

}
