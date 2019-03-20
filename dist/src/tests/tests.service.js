"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const tests_mocks_1 = require("../mocks/tests.mocks");
let TestsService = class TestsService {
    constructor() {
        this.tests = tests_mocks_1.TESTS;
    }
    getTests() {
        return new Promise(resolve => {
            resolve(this.tests);
        });
    }
    getTest(testID) {
        let id = Number(testID);
        return new Promise(resolve => {
            const testData = this.tests.find(t => t.id === id);
            if (!testData) {
                throw new common_1.HttpException('Test does not exist!', 404);
            }
            resolve(testData);
        });
    }
};
TestsService = __decorate([
    common_1.Injectable()
], TestsService);
exports.TestsService = TestsService;
//# sourceMappingURL=tests.service.js.map