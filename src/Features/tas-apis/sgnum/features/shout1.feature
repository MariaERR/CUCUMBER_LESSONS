 Feature: Hear2 shout2
 Scenario: Listener2 in within range
		Given Lucy2 is located 15 metres from Sean
		When Sean2 shout "free bagels at Sean's"
		Then Lucy2 hears Sean's message
