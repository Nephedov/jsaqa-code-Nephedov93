Feature: Ticket boocking
  Scenario: The single ticket booking
    Given user is on poster page
    When user selects available session
    When user reserves one free seat
    Then user sees qr code

  Scenario: Booking two tickets
    Given user is on poster page
    When user selects available session
    When user reserves two free seat
    Then user sees qr code

  Scenario: Attempt to book an occupied seat
    Given user is on poster page
    When user selects available session
    When user selects the occupied seat
    Then button "Забронировать" is disabled