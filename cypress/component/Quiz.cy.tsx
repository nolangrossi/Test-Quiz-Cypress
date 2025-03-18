import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('should render the Quiz component', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  });

  it('should render the start quiz button', () => {
    cy.mount(<Quiz />)
    cy.get('[data-cy="start-btn"]').should('have.text', 'Start Quiz')
  });

  it('should display a question when the start button is clicked', () => {
    cy.mount(<Quiz />)
    cy.get('[data-cy="start-btn"]').contains('Start Quiz').click()

    cy.get('[data-cy="question-header"]').should('be.visible');
  });

  it('should display another questions when an answer is selected', () => {
    cy.mount(<Quiz />)
    cy.get('[data-cy="start-btn"]').contains('Start Quiz').click()

    cy.get('[data-cy="question-header"]').invoke('text').then((initialQuestion) => {
      cy.get('[data-cy="answer-btn"]').first().click();

      cy.get('[data-cy="question-header"]').should('be.visible').invoke('text').should('not.eq', initialQuestion);
    })
  });

  it('should display quiz completed when all questions are answered', () => {
    cy.mount(<Quiz />)
    cy.intercept('GET', '/api/questions/random', { fixture: 'mockQuestions.json' }).as('getQuestions')
    cy.get('[data-cy="start-btn"]').contains('Start Quiz').click()

    cy.fixture('mockQuestions.json').then((questions) => {
      const questionCount = questions.length;
      for (let i = 0; i < questionCount; i++) {
        cy.get('[data-cy="answer-btn"]').first().click();
      }
      cy.get('[data-cy="quiz-complete"]').contains('Quiz Completed').should('be.visible');
    })
  });

  it('should display the score when the quiz is completed', () => {
    cy.mount(<Quiz />)
    cy.intercept('GET', '/api/questions/random', { fixture: 'mockQuestions.json' }).as('getQuestions')
    cy.get('[data-cy="start-btn"]').contains('Start Quiz').click()

    cy.fixture('mockQuestions.json').then((questions) => {
      const questionCount = questions.length;
      for (let i = 0; i < questionCount; i++) {
        cy.get('[data-cy="answer-btn"]').first().click();
      }
      cy.get('[data-cy="quiz-complete"]').contains('Your score:').should('be.visible');
    })
  });

  it('should display a button to take a new quiz after the quiz is completed', () => {
    cy.mount(<Quiz />)
    cy.intercept('GET', '/api/questions/random', { fixture: 'mockQuestions.json' }).as('getQuestions')
    cy.get('[data-cy="start-btn"]').contains('Start Quiz').click()

    cy.fixture('mockQuestions.json').then((questions) => {
      console.log(questions)
      const questionCount = questions.length;
      for (let i = 0; i < questionCount; i++) {
        cy.get('[data-cy="answer-btn"]').first().click();
      }
      cy.get('[data-cy="quiz-complete"]').contains('Take New Quiz').should('be.visible');
    })
  });
});