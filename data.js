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

// ^ A ditionary with names of the people who attended

var EVENTS = [
    {
        "id":"19fm1",
        "name":"Introduction Workshop",
        "epoch":1569979800,
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"October 1st",
        "location":"DBH 1300",
        "type":"workshop",
        "desc":"Meet the members of the club and learn about what we'll be up to this quarter."
    },
    {
        "id":"19fm2",
        "name":"Color & Typography",
        "epoch":1570584600,
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"October 8th",
        "location":"DBH 1300",
        "type":"workshop",
        "desc":"Learn how effectively and optimally use color and typography in all of your digital designs"
    },
    {
        "id":"19fm3",
        "name":"Pen & Shapes",
        "epoch":1571189400,
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"October 15th",
        "location":"DBH 1300",
        "type":"workshop",
        "desc":"Learn how to create complex shapes for designs and illustrations using vector software like Figma, Adobe Illustrator, Sketch, and more."
    },
    {
        "id":"19fm4",
        "name":"Intro to Usability Testing Workshop with UX Designer Hazel Jeon",
        "epoch":1571794200,
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"October 22nd",
        "location":"DBH 1300",
        "type":"industry speaker",
        "desc":"Hazel Jeon–a UCLA graduate and UX designer at Carvana–will show us her techniques for performing usability testing while designing user experiences."
    },
    {
        "id":"19fm6",
        "name":"Voice Design with Amazon UX Designer Jordan Sinclair",
        "epoch":1573007400,
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"November 5th",
        "location":"DBH 1300",
        "type":"industry speaker",
        "desc":"Listen to Jordan–a UX designer at Amazon–talk about his techniques and work as a UX designer in an open presentation."
    },
    {
        "id":"19fm7",
        "name":"Game Night",
        "epoch":1573569000,
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"November 12th",
        "location":"DBH 1300",
        "type":"community",
        "desc":"Get to know your fellow designers through fun, design-oriented games!"
    },
    {
        "id":"19fm7",
        "name":"Typography",
        "epoch":1574130600,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"November 18th",
        "location":"DBH 1300",
        "type":"community",
        "desc":"Learn how to effectively use typography in your graphic and UI/UX designs."
    },
    {
        "id":"19fm7",
        "name":"Portfolios",
        "epoch":1574735400,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"November 25th",
        "location":"DBH 1300",
        "type":"community",
        "desc":"Get advice and inspiration for creating your portfolio."
    },
    {
        "id":"a",
        "name":"More Soon",
        "epoch":99573569000,
        "start":"",
        "end":"",
        "date":"",
        "location":"",
        "type":"TBA",
        "desc":"We are always working on creating useful and fun events for our members!"
    }
]
