
# Design at UCI Event Data


## RULES (follow them or the website may break...)


    • Events are not automatically displayed chronologically,
    please carefully add events so they are in order. Closer
    events are at the top.


    • Include all attributes (you can copy paste the text below and change it)
        {
            "id":"unique identifier",
            "name":"event name",
            "start":"start time",
            "end":"end time",
            "date":"month, day",
            "location":"event location",
            "type":"workshop/industry speaker/live lesson",
            "desc":"description of event"
        },


    • Each id MUST be UNIQUE from every id ever created
        > [YY]-[MEET#]
        (this is the format im using. i just it made up)

        NOTE
            The id will be visible in the link of an event when
            viewing a single event
            Example: http://designatuci.com/schedule/event/?id=EVENTID
                                                               ↑ here


    • NO " (double quotations) inside of fields




