 @Nonreg
 Feature: Hear shout
 Scenario: Listener in within range
		Given Lucy is located 15 metres from Sean
		When Sean shout "free bagels at Sean's"
		Then Lucy hears Sean's message
