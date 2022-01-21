import { browser, element, by} from 'protractor';

describe('User List App',()=>{
    beforeEach(async ()=>{
        await browser.get('/dashboard');

    });
    it('should have aaaa header', async()=>{
        const header = by.css('h2');
        const text = await element(header).getText();
        expect(text).toBe('Active Users');
    })

});