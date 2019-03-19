import { Injectable, HttpException } from '@nestjs/common';
import { TESTS } from '../mocks/tests.mocks';

@Injectable()
export class TestsService {
    tests = TESTS;

    getTests(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.tests);
        });
    }
    getTest(testID): Promise<any> {
        let id = Number(testID);
        return new Promise(resolve => {
            const testData = this.tests.find(t => t.id === id);
            if (!testData) {
                throw new HttpException('Test does not exist!', 404);
            }
            resolve(testData);
        });
    }

}
