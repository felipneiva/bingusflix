Feature: Em Alta
    As a usuário
    I want to ver seções para os filmes e séries em alta na home-page
    So that eu consigo ver quais filmes e séries estão em alta

Scenario: Ver os Filmes em alta
    Given o usuário de id "1" está logado
    And o usuário está na página "home-page"
    Then o usuário vê a seção "Filmes em alta"

