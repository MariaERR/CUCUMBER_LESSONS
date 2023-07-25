@nonreg
Feature: Hear shout1
	Scenario: Listener1 in within range
		Given Lucy1 is located 15 metres from Sean
		When Sean1 shout "free bagels at Sean's"
		Then Lucy1 hears Sean's message
