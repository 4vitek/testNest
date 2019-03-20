import { TestsService } from './tests.service';
export declare class TestsController {
    private testtsService;
    constructor(testtsService: TestsService);
    getBooks(): Promise<any>;
}
