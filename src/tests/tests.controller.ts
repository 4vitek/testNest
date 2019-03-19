import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { TestsService } from './tests.service';
//import { CreateTestDTO } from './dto/create-test.dto';

@Controller('tests')
export class TestsController {
    constructor(private testtsService: TestsService) { }
    @Get()
    async getBooks() {
        const tests = await this.testtsService.getTests();
        return tests;
    }
}
