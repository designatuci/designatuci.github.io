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
        "desc":"Learn how effectively and optimally use color and typography in all of your digital designs",
        "slides":"/files/19fm2-slides.pdf"
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
        "desc":"Learn how to create complex shapes for designs and illustrations using vector software like Figma, Adobe Illustrator, Sketch, and more.",
        "slides":"/files/19fm3-slides.pdf"
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
        "desc":"Hazel Jeon–a UCLA graduate and UX designer at Carvana–will show us her techniques for performing usability testing while designing user experiences.",
        "slides":"/files/Usability-Testing-Hazel-Jeon.pdf"
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
        "desc":"Learn how to effectively use typography in your graphic and UI/UX designs.",
        "slides":"/files/19fm8-slides.pdf"
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
        "desc":"Get advice and inspiration for creating your portfolio.",
        "slides":"/files/19fm9-slides.pdf"
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
        "desc":"Ryan Bell, a product designer, will be talking about transitioning from a student in college to a designer working in the real world.",
        "slides":"/files/20wm5-slides.pdf"
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
        "name":"Prototyping in Figma",
        "epoch":1581476400,
        "start":"6:30pm",
        "end":"8:00pm",
        "date":"Feburary 11th",
        "location":"Social Ecology 1306",
        "type":"workshop",
        "desc":"Learn how to use the prototyping feature in Figma and turn your mockups into clickable prototypes. Remember to bring your laptops to be able to participate!",
        "slides":"/files/20WM6-slides.pdf"
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
        "desc":"Hear about some tips and tricks you can use to help get through the interviewing process for design jobs.",
        "slides":"/files/W20W8.pdf"
    },
    {
        "id":"20WM9",
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
        "id":"OE-20-1",
        "name":"Online UI-UX Product Design Panel",
        "epoch":1598587200,
        "start":"August 27 5:30 PM",
        "end":"",
        "date":"",
        "location":"",
        "type":"Online Event",
        "link":"https://designatuci.com/event",
        "linkText":"Event page",
        "desc":"Learn more about UI-UX Product Design from industry professionals at top companies. The speakers will talk about their experience within UI-UX and Product Design, coming from Facebook, Twitch, Blizzard, WalletJoy and CloudSpot."
    },
    {
        "id":"OE-20-2",
        "name":"Board Game Night",
        "epoch":1600840800,
        "start":"",
        "end":"",
        "date":"September 22 8:00 PM",
        "location":"",
        "type":"Online Event",
        "link":"https://uci.zoom.us/j/92029637848",
        "linkText":"Zoom Link",
        "desc":"Join our first online social event! We will be playing a few online games together over zoom to hang out and get to know other members in the club. We hope to see you there! Come back to click on the zoom link when it starts to join us."
    },
    {
        "id":"OE-20-3",
        "name":"Introductory Workshop",
        "epoch":1602318600,
        "start":"",
        "end":"",
        "date":"October 9 5:30 PM",
        "location":"",
        "type":"Online Event",
        "link":"https://uci.zoom.us/j/5080955339",
        "linkText":"Zoom Link",
        "desc":"Come meet our club and see what we'll be up to this quarter! We will be introducing our board members, and describing our goals and plans for this quarter. We will also be answering any questions you have!",
        "slides":"/files/F20S1.pdf"
    },
    {
        "id":"OE-20-4",
        "name":"Sticker Creation Workshop",
        "epoch":1602928740,
        "start":"",
        "end":"",
        "date":"October 16 5:30 PM",
        "location":"",
        "type":"Online Event",
        "link":"https://uci.zoom.us/j/5080955339",
        "linkText":"Zoom Link",
        "desc":"Learn more about how we can create complex objects from just simple shapes like circles and squares. Also get advice on what makes great stickers!"
    },
    {
        "id":"OE-20-5",
        "name":"Portfolio Review with Andrew Ku",
        "epoch":1603533540,
        "start":"",
        "end":"",
        "date":"October 23 5:30 PM",
        "location":"",
        "type":"Online Event",
        "link":"https://uci.zoom.us/j/92836347732",
        "linkText":"Zoom Link",
        "desc":"Andrew Ku, a UX designer at Google, is coming to give us tips and advice for designing portfolios! For a chance for him to review yours, send it to us at submit@designatuci.com"
    },
    {
        "id":"OE-20-6",
        "name":"Pivoting to UX Design with Frank Lee",
        "epoch":1604134800,
        "start":"",
        "end":"",
        "date":"October 30 5:30 PM",
        "location":"",
        "type":"Online Event",
        "link":"https://uci.zoom.us/j/95309064591",
        "linkText":"Zoom Link",
        "desc":"Frank was a high school teacher for ten years, then decided to try a career change late 2018. Turned on to the idea of psychology and empathy in UX Design, he decided to give it a shot. Frank now works as a UX Designer at Microsoft, but the journey looked very different than what he imagined. He enjoys helping other aspiring UX Designers and likes to share his experiences and advice."
    },
    {
        "id":"OE-20-7",
        "name":"Notion For Designers",
        "epoch":1604739600,
        "start":"",
        "end":"",
        "date":"November 6 5:30 PM",
        "location":"",
        "type":"Online Workshop",
        "link":"https://uci.zoom.us/j/5080955339",
        "linkText":"Zoom Link",
        "desc":"Learn how to use Notion and how you can use it to create a portfolio quickly, professionally, and for free! We'll briefly cover how UX designers use Notion to organize their work in the design process for the job search."
    },
    {
        "id":"OE-20-8",
        "name":"Ask me Anything: Life as a Freelance Designer",
        "epoch":1605340800,
        "start":"",
        "end":"",
        "date":"November 13, 5:30 PM",
        "location":"",
        "type":"Industry Speakers",
        "link":"https://uci.zoom.us/j/92083744565",
        "linkText":"Zoom Link",
        "desc":"Meet a panel of several professional freelance designers. Get the opportunity to personally ask them your questions about their experience!"
    },
    {
        "id":"OE-20-9",
        "name":"Project Teams Presentations",
        "epoch":1607070600,
        "start":"",
        "end":"",
        "date":"December 3, 5:30 PM",
        "location":"",
        "type":"Project Teams",
        "link":"https://uci.zoom.us/j/99782269295",
        "linkText":"Zoom Link",
        "desc":"Watch our Project Teams present what they've created over the past few weeks, including details about what they learned and how they got there."
    },
    {
        "id":"OE-20-10",
        "name":"Video Gaming UX 101 with Jeff Zhang",
        "epoch":1607157000,
        "start":"",
        "end":"",
        "date":"December 4, 5:30 PM",
        "location":"",
        "type":"Industry Speaker",
        "link":"https://uci.zoom.us/j/94164289397",
        "linkText":"Zoom Link",
        "desc":"Are you interested in video game user experience? Design at UCI has invited a guest speaker who knows all about this great topic! Jeff Zhang is a UX and Game Designer working at Riot Games. Previously, he's worked on Teamfight Tactics and League of Legends. This meeting will be hosted through Zoom on December 4, 5:30 pm! Hope to see you this Friday!"
    },
    {
        "id":"OE-21-1",
        "name":"Logo Creation with Simple Shapes and the Golden Ratio",
        "epoch":1610179200,
        "start":"6:00pm",
        "end":"",
        "date":"January 8",
        "location":"Online Event",
        "type":"Online Workshop",
        "link":"https://uci.zoom.us/j/5080955339",
        "linkText":"Zoom Link",
        "desc":"This week, we'll be going over the golden ratio and how it's used in logo design! We'll be playing around with simple shapes and the pathfinder tool in Figma in a live demonstration, so this is a great hands on workshop for Figma beginners!"
    },
    {
        "id":"OE-21-2",
        "name":"Elements of Editorial Design",
        "epoch":1610785800,
        "start":"6:00pm",
        "end":"",
        "date":"Friday, January 15",
        "location":"Online Event",
        "type":"Online Workshop",
        "link":"https://uci.zoom.us/j/5080955339",
        "linkText":"Zoom Link",
        "desc":"This week we'll be dissecting magazine spreads and learning about the elements that go into a page design! Get to know your fellow Design at UCI members in this more chill workshop: we'll be splitting off into breakout rooms and designing pages together in Figma!"
    },
    {
        "id":"OE-21-3",
        "name":"Basic Components in Figma",
        "epoch":1611370800,
        "start":"6:00pm",
        "end":"",
        "date":"Friday, January 22",
        "location":"Online Event",
        "type":"Online Workshop",
        "link":"https://uci.zoom.us/j/5080955339",
        "linkText":"Zoom Link",
        "desc":"Components can really speed up your workflow, but are intimidating to learn. Join us this week for a follow-along demo on the basics of using components in Figma! There will also be an Escape Room social event right after this event."
    },
    {
        "id":"OE-21-4",
        "name":"Escape Room Social",
        "epoch":1611378000,
        "start":"7:00pm",
        "end":"",
        "date":"Friday, January 22",
        "location":"Online Event",
        "type":"Social Event",
        "link":"https://uci.zoom.us/j/5080955339",
        "linkText":"Zoom Link",
        "desc":"Right after our meeting, we will be hosting an Escape Room Social. Join us for the chance to hang out with the design community as we solve the mystery!"
    },
    {
        "id":"OE-21-5",
        "name":"Manifest x Design Pitch and Collaboration",
        "epoch":1611973800,
        "start":"6:00pm",
        "end":"",
        "date":"Friday, January 29",
        "location":"Online Event",
        "type":"Networking Event",
        "link":"https://uci.zoom.us/j/5080955339",
        "linkText":"Zoom Link",
        "desc":"Let’s make some new connections! Design at UCI will be collaborating with the awesome individuals from Manifest. Bringing together student start-ups, this will be a great opportunity for you to grow your portfolio as these companies will be looking for UX designers to join their new exciting projects!"
    },
    {
        "id":"OE-21-6",
        "name":"Design study hours",
        "epoch":1611976200,
        "start":"6:30pm",
        "end":"",
        "date":"Friday, January 29",
        "location":"Online Event",
        "type":"Social Event",
        "link":"https://discord.com/invite/MBVrKe9",
        "linkText":"Discord Inviation",
        "desc":"We will be having Design Study Hours through our Discord! Take this time to relax and meet some awesome people!"
    },
    {
        "id":"OE-21-7",
        "name":"We’re Not Really Strangers Virtual Card Game Social",
        "epoch":1613104200,
        "start":"7:30PM",
        "end":"",
        "date":"Thursday, Feb 11",
        "location":"Online Event",
        "type":"Social Event",
        "link":"https://uci.zoom.us/j/91616027376",
        "linkText":"Zoom Link",
        "desc":"We're playing the 'We’re Not Really Strangers' card game virtually! Card dealers will read off one question at a time, and we will go around the virtual room and one person answers one question (You can opt for a different one if you feel uncomfortable sharing). A fun game that is meant to deepen existing relationships and create new ones!"
    },
    {
        "id":"OE-21-8",
        "name":"Differences Between In-House & Agency Product Design",
        "epoch":1613185200,
        "start":"6:00PM",
        "end":"",
        "date":"Friday, Feb 12",
        "location":"Online Event",
        "type":"Industry Speaker",
        "link":"https://uci.zoom.us/j/95821890566",
        "linkText":"Zoom Link",
        "desc":"Join our two live industry guest speakers talk about the differences between in-house product design and agency product design.<br/><img src=\"/data/imgs/vinson-gotingco.png\" class=\"portrait\"><br/>Hi I’m Vinson Gotingco, an experience designer with 4 years of experience in the industry. I started off at UCI as a computer science major (when IC21 was the intro course. I’m that old.) , but coding wasn’t really for me. I was more interested in the work I was doing as a graphic designer at the bookstore. I eventually switched into informatics and the rest is history.<br/><img src=\"/data/imgs/nathaniel-valerio.png\" class=\"portrait\"><br/>Hi I’m Nathaniel Valerio, a Product Designer currently at Mixpanel. I previously worked as a designer on Firebase as well as many other different industries. I am a self taught designer, who like Vinson, at UCI, saw coding was not my cup of tea and thus took up Informatics. I was inspired to enter the creative world from my time as a dancer."
    },
    {
        "id":"OE-21-9",
        "name":"Marketing Design",
        "epoch":1613797200,
        "start":"6:00PM",
        "end":"",
        "date":"Friday, Feb 19",
        "location":"Online Event",
        "type":"Workshop",
        "link":"https://uci.zoom.us/j/5080955339",
        "linkText":"Zoom Link",
        "desc":"This week we'll be talking about the kinds of questions designers in the marketing space have to consider in their designs. We'll be covering things like landing page conversion practices, what A/B testing is, and the role marketing designers in the companies they work for."
    },
    {
        "id":"x",
        "name":"More Soon",
        "epoch":999573569000,
        "start":"",
        "end":"",
        "date":"",
        "location":"",
        "type":"Stay Tuned",
        "desc":"We are currently working on new events for our members. Join our social media pages now to get notified when we release new events and more."
    }
    // {
    //     "id":"x",
    //     "name":"More Events Coming out Soon",
    //     "epoch":99573569000,
    //     "start":"",
    //     "end":"",
    //     "date":"",
    //     "location":"",
    //     "type":"we're working on it",
    //     "desc":"We are currently working on creating useful and fun events for our members!"
    // }
]
