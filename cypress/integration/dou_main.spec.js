import MainPage from './pages/main_page';
import main_page_data from './test_data/main_page_data';
import main_page_test_data from './test_data/main_page_data';

const mainpage = new MainPage();
describe('Open page', ()=>{
     beforeEach(()=>{
         cy.visit('https://dou.ua/');
     })

    it.skip('Check header', () =>{
        cy.visit('https://dou.ua/');
        cy.get('header>ul>li:nth-child(2)>a').should('be.visible');
        cy.get('header>ul>li:nth-child(3)>a').should('be.visible');
        cy.get('header>ul>li:nth-child(4)>a').should('be.visible');
        cy.get('header>ul>li:nth-child(5)>a').should('be.visible');
        cy.get('header>ul>li:nth-child(6)>a').should('be.visible');
        cy.get('header>ul>li:nth-child(7)>a').should('be.visible');
        cy.get('header>ul>li:nth-child(8)>a').should('be.visible');
    })

    it.skip('click', ()=>{
        cy.get('header>ul>li:nth-child(8)>a').should('be.visible').click();
        cy.url().should('contain', 'forums/')
    })

    it('check search', ()=>{
        mainpage.searchInputField().type(main_page_data.javascript_text).type('{enter}');
        cy.url().should('contain', 'search/?q=javascript');


    })
})