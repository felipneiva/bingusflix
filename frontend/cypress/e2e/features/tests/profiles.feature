Feature: Profiles
As a usuário
I want to criar vários perfis
So that eu possa dividir minha conta com amigos

Scenario: criação bem sucedida de um profile
    Given o usuário de id "1" está logado
    And o usuário está na página "add_profile"
    When o usuário preenche o campo de "nome" com "fred"
    And o usuário preenche o campo de "idade" com "20"
    And o usuário preenche o campo de "lingua" com "pt-br"
    And clica na opção "Criar"
    Then o usuário é direcionado para a "home-page"

Scenario: remoção bem sucedida de um profile
    Given o usuário de id "1" está logado
    And o usuário está na página "manage_profile"
    When clica na opção "Remover"
    Then o usuário é direcionado para a "profiles"

Scenario: edição bem sucedida de um profile
    Given o usuário de id "1" está logado
    And o usuário está na página "manage_profile"
    When o usuário preenche o campo de "nome" com "neiva"
    And o usuário preenche o campo de "idade" com "20"
    And o usuário preenche o campo de "lingua" com "pt-br"
    And clica na opção "Atualizar"
    Then o usuário é direcionado para a "profiles"