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
    // ARCHIVED
    // {
    //     "id":"19fm1",
    //     "name":"Introduction Workshop",
    //     "start":"6:30pm",
    //     "end":"7:30pm",
    //     "date":"October 1st",
    //     "location":"DBH 1300",
    //     "type":"workshop",
    //     "desc":"Meet the members of the club and learn about what we'll be up to this quarter."
    // },
    // ARCHIVED
    // {
    //     "id":"19fm2",
    //     "name":"Color & Typography",
    //     "start":"6:30pm",
    //     "end":"7:30pm",
    //     "date":"October 8th",
    //     "location":"DBH 1300",
    //     "type":"workshop",
    //     "desc":"Learn how effectively and optimally use color and typography in all of your digital designs"
    // },
    // END OF ARCHIVES
    {
        "id":"19fm3",
        "name":"Pen & Shapes",
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
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"October 22nd",
        "location":"DBH 1300",
        "type":"industry speaker",
        "desc":"Hazel–a UCLA graduate working as a UX designer at Carvana–will show us her techniques for performing usability testing while creating designing user experiences for websites and apps."
    },
    {
        "id":"19fm5",
        "name":"User Interaction Design",
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"October 29th",
        "location":"DBH 1300",
        "type":"workshop",
        "desc":"Learn the basics of making great interfaces for websites, apps, and other digital products."
    },
    {
        "id":"19fm6",
        "name":"Voice Design with Amazon UX Designer Jordan Sinclair",
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"November 5th",
        "location":"DBH 1300",
        "type":"industry speaker",
        "desc":"Listen to Jordan–a UX designer at Amazon–talk about his techniques and work as a UX designer in an open presentation."
    }
]