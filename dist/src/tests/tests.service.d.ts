export declare class TestsService {
    tests: {
        id: number;
        title: string;
        description: string;
        author: string;
    }[];
    getTests(): Promise<any>;
    getTest(testID: any): Promise<any>;
}
