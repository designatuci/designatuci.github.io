// See schedule.md
var EVENTS = [
    {
        "id":"19fm1",
        "name":"Introduction Workshop",
        "epoch":1569979800,
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"October 1st",
        "location":"DBH 1300",
        "type":"information",
        "desc":"Meet the members of the club and learn about what we'll be up to this quarter."
    },
    {
        "id":"19fm2",
        "name":"Color Theory",
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
        "epoch":1574188200,
        "start":"6:30pm",
        "end":"7:30pm",
        "date":"November 12th",
        "location":"DBH 1300",
        "type":"community",
        "desc":"Get to know your fellow designers through fun, design-oriented games!"
    },
    {
        "id":"19fm8",
        "name":"Typography",
        "epoch":1574217000,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"November 19th",
        "location":"DBH 1300",
        "type":"workshop",
        "desc":"Learn how to effectively use typography in your graphic and UI/UX designs."
    },
    {
        "id":"19fm9",
        "name":"Portfolios",
        "epoch":1574821800,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"November 26th",
        "location":"DBH 1300",
        "type":"workshop",
        "desc":"Get advice and inspiration for creating your portfolio."
    },
    {
        "id":"20WM1",
        "name":"Welcome Back Meeting",
        "epoch":1578450600,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"Janurary 7th",
        "location":"Social Ecology 1306",
        "type":"information",
        "desc":"Learn about what workshops, professional speakers, and other exciting things we have in store for this new quarter. We will also be having a board game social afterwards, join us if you're free!"
    },
    {
        "id":"20WM2",
        "name":"How to Land a Design Job with Nick Araujo",
        "epoch":1579055400,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"Janurary 14th",
        "location":"Social Ecology 1306",
        "type":"industry speaker",
        "desc":"Nick Araujo, a professional recruiter, is going to give a presentation about the steps you can take to get a design job."
    },
    {
        "id":"20WM3",
        "name":"Diving into Design Fundamentals",
        "epoch":1579660740,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"Janurary 21st",
        "location":"Social Ecology 1306",
        "type":"workshop",
        "desc":"An introduction to using concepts like depth and hierachy in your designs. Learn how to guide the viewer's eye to important elements and make your designs more exciting."
    },
    {
        "id":"20WM4",
        "name":"From Student to Designer with Ryan Bell",
        "epoch":1580266800,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"Janurary 28th",
        "location":"Social Ecology 1306",
        "type":"industry speaker",
        "desc":"Ryan Bell, a product designer, will be talking about transitioning from a student in college to a designer working in the real world."
    },
    {
        "id":"20WM5",
        "name":"Social social social!",
        "epoch":1580871600,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"Feburary 4th",
        "location":"Social Ecology 1306",
        "type":"industry speaker",
        "desc":"Come with us to UTC to get some boba and food, to hang out and de-stress!"
    },
    {
        "id":"20WM6",
        "name":"Prototyping in Figma ",
        "epoch":1581476400,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"Feburary 11th",
        "location":"Social Ecology 1306",
        "type":"workshop",
        "desc":"Learn how to use the prototyping feature in Figma and turn your mockups into clickable prototypes. Remember to bring your laptops to be able to participate!"
    },
    {
        "id":"20WM7",
        "name":"Animation and Micro Interactions",
        "epoch":1582038000,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"Feburary 18th",
        "location":"Social Ecology 1306",
        "type":"workshop",
        "desc":"Learn how to prototype simple animations, and how they can be used to make your designs feel more alive!"
    },
    {
        "id":"20WM8",
        "name":"Cracking the Design Interview",
        "epoch":1582048000,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"Feburary 25th",
        "location":"Social Ecology 1306",
        "type":"workshop",
        "desc":"Hear about some tips and tricks you can use to help get through the interviewing process for design jobs."
    },
    {
        "id":"20WM8",
        "name":"Game Night",
        "epoch":1583290800,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"March 3rd",
        "location":"Social Ecology 1306",
        "type":"workshop",
        "desc":"Yup, it's game night again! Come over to distress and have fun with other designers. Bring your computer to participate in our last acitivity."
    },
    // {
    //     "id":"19WM4",
    //     "name":"Ryan Bell",
    //     "epoch":1580265540,
    //     "start":"6:30pm",
    //     "end":"8:00pm",
    //     "date":"Janurary 28th",
    //     "location":"Social Ecology 1306",
    //     "type":"workshop",
    //     "desc":"???"
    // },
    {
        "id":"x",
        "name":"More Events Coming out Soon",
        "epoch":99573569000,
        "start":"",
        "end":"",
        "date":"",
        "location":"",
        "type":"we're working on it",
        "desc":"We are currently working on creating useful and fun events for our members!"
    }
]
