import { ElementArrayFinder, ElementFinder, by } from "protractor";
import { AppPage } from "./app.po";

describe("User List App",()=>{
    const page = new AppPage();

    beforeEach(async ()=>{
        await page.getDashboard();

    });
    it("should have aaaa header", async()=>{
        const text = await page.getHeaderText();
        expect(text).toBe("Active Users");
    });
    it("should have 16 users on page load", async()=>{
        const users = page.getListItems();
        expect(await users.count()).toBe(16);

    });

    describe("filter Input", ()=>{
        let input: ElementFinder;
        let items: ElementArrayFinder;

        beforeEach(async()=>{
            input = page.getInput();
            items = page.getListItems();
            await input.sendKeys("davis");
        });

        it("should filter the list on the user search", async()=>{
            expect(await items.count()).toBe(2);
        });
        it("should highlight filter text", async()=>{
            (await items).forEach(item =>{
                const span = item.element(by.css("span"));
                expect(span.getAttribute("class")).toBe("highlight-text");
            });
        });
    });

});