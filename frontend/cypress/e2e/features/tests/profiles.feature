Feature: Profiles
As a usuário
I want to criar vários perfis
So that eu possa dividir minha conta com amigos

Scenario: criação bem sucedida de um profile
    Given o usuário de id "1" está logado
    And o usuário está na página "add_profiles"
    When o usuário preenche o campo de "nome" com "fred"
    And o usuário preenche o campo de "idade" com "20"
    And o usuário preenche o campo de "lingua" com "pt-br"
    And clica na opção "Entrar"
    Then o usuário é direcionado para a "home-page"