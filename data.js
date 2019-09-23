/*

Design at UCI Event Data


RULES (follow them or the website may break...)


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


*/

var EVENTS = [
    {
        "id":"19fm1",
        "name":"Introduction Workshop",
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"October 1st",
        "location":"Kay Lab, ICS 2 Room 110",
        "type":"workshop",
        "desc":"Meet the members of the club and learn about what we'll be up to this quarter."
    },
    {
        "id":"19fm2",
        "name":"Color & Typography",
        "start":"6:00pm",
        "end":"7:15pm",
        "date":"October 8th",
        "location":"Kay Lab, ICS 2 Room 110",
        "type":"workshop",
        "desc":"Learn how we"
    },
    {
        "id":"19fm3",
        "name":"Pen & Shapes",
        "start":"6:00pm",
        "end":"7:15pm",
        "date":"October 15th",
        "location":"Kay Lab, ICS 2 Room 110",
        "type":"workshop",
        "desc":"Practice creating shapes with vector editing tools."
    },
    {
        "id":"19fm4",
        "name":"Intro to Usability Testing Workshop with UX Designer Hazel Jeon",
        "start":"6:00pm",
        "end":"7:15pm",
        "date":"October 22nd",
        "location":"Kay Lab, ICS 2 Room 110",
        "type":"industry speaker",
        "desc":"Participate in a UX workshop lead by Hazel, a UCLA graduate working as a UX designer at Carvana."
    },
    {
        "id":"19fm5",
        "name":"User Interaction Design",
        "start":"6:00pm",
        "end":"7:15pm",
        "date":"October 29th",
        "location":"Kay Lab, ICS 2 Room 110",
        "type":"workshop",
        "desc":"Learn how to make good interfaces for websites, apps, and more."
    },
    {
        "id":"19fm6",
        "name":"Voice Design with Amazon UX Designer Jordan Sinclair",
        "start":"6:00pm",
        "end":"7:15pm",
        "date":"November 5th",
        "location":"Kay Lab, ICS 2 Room 110",
        "type":"industry speaker",
        "desc":"Listen to Jordan talk about his job and methods as a UX designer at Amazon."
    }
]