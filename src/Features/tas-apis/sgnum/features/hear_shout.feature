
 Feature: Hear shout
 @nonreg
 Scenario: Listener in within range
		Given Lucy is located 15 metres from Sean
		When Sean shout "free bagels at Sean's"
		Then Lucy hears Sean's message

  @nonreg
 Scenario: Listener3 in within range3
		Given Lucy3 is located 15 metres from Sean
		When Sean3 shout "free bagels at Sean's"
		Then Lucy3 hears Sean's message
