describe('React Tech Quiz', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'mockQuestions.json' }).as('getQuestions')
        cy.visit('/');
    });

    it('should display a start quiz button', () => {
        cy.get('[data-cy="start-btn"]').contains('Start Quiz');
    });

    it('should start the quiz and display the first question', () => {
        cy.get('[data-cy="start-btn"]').contains('Start Quiz').click();
        cy.get('[data-cy="question-header"]').should('be.visible');
        cy.get('[data-cy="answer-btn"]').should('have.length.greaterThan', 1);
    });

    it('should advance to the next question when an answer is selected', () => {
        cy.get('[data-cy="start-btn"]').contains('Start Quiz').click();
        cy.get('[data-cy="question-header"]').invoke('text').then((initialQuestion) => {
            cy.get('[data-cy="answer-btn"]').first().click();
            cy.get('[data-cy="answer-btn"]').should('not.have.text', initialQuestion);
        });
    });

    it('should display the quiz completion screen when all questions are answered', () => {
        cy.get('[data-cy="start-btn"]').contains('Start Quiz').click();
        cy.fixture('mockQuestions.json').then((questions) => {
        const questionCount = questions.length;
        for (let i = 0; i < questionCount; i++) {
            cy.get('[data-cy="answer-btn"]').first().click();
        }
            cy.get('[data-cy="quiz-complete"]').contains('Quiz Completed').should('be.visible');
            cy.get('[data-cy="quiz-complete"]').contains('Your score:').should('be.visible');
        });
    });

    it('should start a new quiz when the "Take New Quiz" button is clicked', () => {
        cy.get('[data-cy="start-btn"]').contains('Start Quiz').click();
        cy.fixture('mockQuestions.json').then((questions) => {
            const questionCount = questions.length;
            for (let i = 0; i < questionCount; i++) {
                cy.get('[data-cy="answer-btn"]').first().click();
            }
        });
        cy.get('[data-cy="quiz-complete"]').contains('Take New Quiz').click();
        cy.get('[data-cy="question-header"]').should('be.visible');
    });
});