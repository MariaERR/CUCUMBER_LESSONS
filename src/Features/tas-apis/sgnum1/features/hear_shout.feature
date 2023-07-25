 Feature: Hear shout
 @nonreg
 Scenario: Listener in within range
		Given Lucy5 is located 15 metres from Sean
		When Sean5 shout "free bagels at Sean's"
		Then Lucy5 hears Sean's message

  @nonreg
 Scenario: Listener3 in within range3
		Given Lucy6 is located 15 metres from Sean
		When Sean6 shout "free bagels at Sean's"
		Then Lucy6 hears Sean's message