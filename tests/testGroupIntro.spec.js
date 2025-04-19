import {test} from "@playwright/test";

//test.describe("",()=>{}); // describe method takes 2 arguments, first argument is the description in string, and second argument is async call back function.
//   ("description",() => {test groups} // inside of the curly braces which is the body. Test groups mean test cases and hooks.
/*test.describe("",()=>{

        
    test("Test Case 1", async () => {});
    test("Test Case 2", async () => {});
    test("Test Case 3", async () => {});

});
*/
test.describe("User story",()=>{
    test.beforeAll(async() => { //executed 1 time, and very first execution
        console.log("Before all test cases");
    });
    test.afterAll(async() => { //executed 1 time,  and very last execution
        console.log("After all test cases");
    });
    test.beforeEach(async() => { //executed before every test cases
        console.log("Before each test cases");
    });

    test.afterEach(async()=>{   //executed after every test cases
        console.log("After each test cases");
    });
        
    test("Test Case 1", async () => {
        console.log("Test Case 1 is executed.")
    });
    test("Test Case 2", async () => {
        console.log("Test Case 2 is executed.")});
    test("Test Case 3", async () => {
        console.log("Test Case 3 is executed.")
    });

});