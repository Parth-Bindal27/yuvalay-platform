import { useMemo, useState } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import "./faqAccordion.css";

const faqs = [

/* ===========================================================
   GENERAL
=========================================================== */

{
    id:1,
    category:"General",
    popular:true,
    keywords:["about","makerspace"],
    question:"What is Yuvalay Makerspace?",
    answer:"Yuvalay Makerspace is an innovation hub where students, educators, startups and innovators collaborate to build projects, learn emerging technologies and solve real-world challenges."
},

{
    id:2,
    category:"General",
    popular:true,
    keywords:["mission"],
    question:"What is the mission of Yuvalay?",
    answer:"Yuvalay aims to empower innovators through technology, creativity, entrepreneurship and hands-on learning."
},

{
    id:3,
    category:"General",
    keywords:["vision"],
    question:"What is the vision of Yuvalay?",
    answer:"Our vision is to create an innovation ecosystem where every learner can transform ideas into impactful solutions."
},

{
    id:4,
    category:"General",
    keywords:["who","join"],
    question:"Who can join Yuvalay?",
    answer:"School students, college students, educators, startups, professionals and innovators are welcome."
},

{
    id:5,
    category:"General",
    keywords:["location"],
    question:"Where is Yuvalay Makerspace located?",
    answer:"Yuvalay Makerspace is located in Vadodara, Gujarat."
},

{
    id:6,
    category:"General",
    keywords:["membership"],
    question:"Is membership required?",
    answer:"Some facilities require registration while many events are open to everyone."
},

{
    id:7,
    category:"General",
    keywords:["register"],
    question:"How do I register?",
    answer:"You can register directly from the website by completing the online registration form."
},

{
    id:8,
    category:"General",
    keywords:["age"],
    question:"Is there any age limit?",
    answer:"Age requirements vary depending on the workshop or program."
},

{
    id:9,
    category:"General",
    keywords:["visit"],
    question:"Can I visit the makerspace?",
    answer:"Yes. Visitors can schedule a visit through the Contact page."
},

{
    id:10,
    category:"General",
    keywords:["contact"],
    question:"How do I contact Yuvalay?",
    answer:"Use our Contact page or email us directly."
},

/* ===========================================================
   PROGRAMS
=========================================================== */

{
    id:11,
    category:"Programs",
    popular:true,
    keywords:["program"],
    question:"Who can join Yuvalay programs?",
    answer:"Programs are open to students, teachers, innovators and professionals depending on eligibility."
},

{
    id:12,
    category:"Programs",
    keywords:["fee","price"],
    question:"Are programs free?",
    answer:"Many programs are free while some advanced courses may have a registration fee."
},

{
    id:13,
    category:"Programs",
    keywords:["certificate"],
    question:"Will I receive a certificate?",
    answer:"Yes, certificates are provided after successful completion of eligible programs."
},

{
    id:14,
    category:"Programs",
    keywords:["duration"],
    question:"How long are the programs?",
    answer:"Programs can range from a single day to several weeks."
},

{
    id:15,
    category:"Programs",
    keywords:["multiple"],
    question:"Can I join multiple programs?",
    answer:"Yes, as long as schedules don't overlap."
},

{
    id:16,
    category:"Programs",
    keywords:["attendance"],
    question:"Is attendance compulsory?",
    answer:"Attendance requirements depend on the specific program."
},

{
    id:17,
    category:"Programs",
    keywords:["beginner"],
    question:"Can beginners participate?",
    answer:"Absolutely. Many programs are designed specifically for beginners."
},

{
    id:18,
    category:"Programs",
    keywords:["offline","online"],
    question:"Are programs online or offline?",
    answer:"Yuvalay offers both online and offline learning opportunities."
},

{
    id:19,
    category:"Programs",
    keywords:["batch"],
    question:"How often are new batches announced?",
    answer:"New batches are announced throughout the year."
},

{
    id:20,
    category:"Programs",
    keywords:["eligibility"],
    question:"How do I know if I'm eligible?",
    answer:"Eligibility details are mentioned on every program page."
},

/* ===========================================================
   WORKSHOPS
=========================================================== */

{
    id:21,
    category:"Workshops",
    popular:true,
    keywords:["experience"],
    question:"Do I need prior experience?",
    answer:"No. Most workshops are beginner-friendly."
},

{
    id:22,
    category:"Workshops",
    keywords:["material"],
    question:"Are workshop materials provided?",
    answer:"Yes. Necessary kits and materials are usually provided."
},

{
    id:23,
    category:"Workshops",
    keywords:["hands on"],
    question:"Are workshops practical?",
    answer:"Yes. Workshops focus heavily on hands-on learning."
},

{
    id:24,
    category:"Workshops",
    keywords:["bring"],
    question:"What should I bring?",
    answer:"Generally only a laptop and enthusiasm are required."
},

{
    id:25,
    category:"Workshops",
    keywords:["online"],
    question:"Can workshops be attended online?",
    answer:"Selected workshops are available online."
},

{
    id:26,
    category:"Workshops",
    keywords:["group"],
    question:"Can schools book workshops?",
    answer:"Yes. Schools and colleges can request customized workshops."
},

{
    id:27,
    category:"Workshops",
    keywords:["certificate"],
    question:"Do workshops provide certificates?",
    answer:"Yes, most workshops provide participation certificates."
},

{
    id:28,
    category:"Workshops",
    keywords:["duration"],
    question:"How long does a workshop last?",
    answer:"Duration ranges from a few hours to multiple days."
},

{
    id:29,
    category:"Workshops",
    keywords:["equipment"],
    question:"Is equipment provided?",
    answer:"Required tools and equipment are available during workshops."
},

{
    id:30,
    category:"Workshops",
    keywords:["recording"],
    question:"Will recordings be available?",
    answer:"Some online workshops provide recordings after completion."
},

/* ===========================================================
   EVENTS
=========================================================== */

{
    id:31,
    category:"Events",
    popular:true,
    keywords:["event","register"],
    question:"How do I register for an event?",
    answer:"Visit the Events page, select your preferred event and complete the registration form."
},

{
    id:32,
    category:"Events",
    keywords:["fee"],
    question:"Are events free to attend?",
    answer:"Many events are free while premium events may require a registration fee."
},

{
    id:33,
    category:"Events",
    keywords:["certificate"],
    question:"Do event participants receive certificates?",
    answer:"Eligible participants receive digital or printed certificates depending on the event."
},

{
    id:34,
    category:"Events",
    keywords:["cancel"],
    question:"Can I cancel my event registration?",
    answer:"Yes. Cancellation policies vary for each event."
},

{
    id:35,
    category:"Events",
    keywords:["friend"],
    question:"Can I bring my friends?",
    answer:"Yes, provided they also register if registration is required."
},

{
    id:36,
    category:"Events",
    keywords:["schedule"],
    question:"Where can I see upcoming events?",
    answer:"All upcoming events are listed on the Events page."
},

{
    id:37,
    category:"Events",
    keywords:["volunteer"],
    question:"Can I volunteer during events?",
    answer:"Yes. Volunteers are always welcome and receive guidance from our team."
},

{
    id:38,
    category:"Events",
    keywords:["offline"],
    question:"Are events conducted offline?",
    answer:"Yes. Yuvalay hosts both offline and online events."
},

{
    id:39,
    category:"Events",
    keywords:["team"],
    question:"Can I participate as a team?",
    answer:"Certain hackathons and competitions allow team participation."
},

{
    id:40,
    category:"Events",
    keywords:["competition"],
    question:"Are innovation competitions organized?",
    answer:"Yes. Yuvalay regularly organizes innovation challenges and competitions."
},

/* ===========================================================
   ROBOTICS
=========================================================== */

{
    id:41,
    category:"Robotics",
    popular:true,
    keywords:["robot"],
    question:"Can beginners learn robotics?",
    answer:"Yes. Robotics sessions start from fundamentals and gradually move to advanced concepts."
},

{
    id:42,
    category:"Robotics",
    keywords:["arduino"],
    question:"Do you teach Arduino?",
    answer:"Yes. Arduino is one of the most widely used development boards in our robotics sessions."
},

{
    id:43,
    category:"Robotics",
    keywords:["raspberry"],
    question:"Do you teach Raspberry Pi?",
    answer:"Yes. Raspberry Pi is used for advanced robotics and IoT projects."
},

{
    id:44,
    category:"Robotics",
    keywords:["competition"],
    question:"Are robotics competitions conducted?",
    answer:"Yes. Students can participate in robotics competitions throughout the year."
},

{
    id:45,
    category:"Robotics",
    keywords:["project"],
    question:"Can I build my own robot?",
    answer:"Absolutely. Mentors guide students through complete robotics projects."
},

{
    id:46,
    category:"Robotics",
    keywords:["kit"],
    question:"Are robotics kits available?",
    answer:"Yes. Various educational robotics kits are available in the makerspace."
},

{
    id:47,
    category:"Robotics",
    keywords:["mentor"],
    question:"Will mentors help with robotics projects?",
    answer:"Yes. Dedicated mentors provide technical guidance throughout your project."
},

{
    id:48,
    category:"Robotics",
    keywords:["school"],
    question:"Can school students join robotics sessions?",
    answer:"Yes. Dedicated beginner programs are available for school students."
},

{
    id:49,
    category:"Robotics",
    keywords:["hardware"],
    question:"Will I work with real hardware?",
    answer:"Yes. Practical learning with actual hardware is a major focus."
},

{
    id:50,
    category:"Robotics",
    keywords:["career"],
    question:"Will robotics help my career?",
    answer:"Robotics develops practical engineering, programming and problem-solving skills valuable for higher education and industry."
},

/* ===========================================================
   ARTIFICIAL INTELLIGENCE
=========================================================== */

{
    id:51,
    category:"Artificial Intelligence",
    popular:true,
    keywords:["ai","artificial intelligence"],
    question:"Do you teach Artificial Intelligence?",
    answer:"Yes. Yuvalay offers beginner to advanced AI learning programs."
},

{
    id:52,
    category:"Artificial Intelligence",
    keywords:["python"],
    question:"Is Python required for AI?",
    answer:"Python is recommended because it is the most widely used language for AI."
},

{
    id:53,
    category:"Artificial Intelligence",
    keywords:["machine learning"],
    question:"Do you teach Machine Learning?",
    answer:"Yes. Machine Learning is covered through practical examples and projects."
},

{
    id:54,
    category:"Artificial Intelligence",
    keywords:["deep learning"],
    question:"Do you cover Deep Learning?",
    answer:"Advanced AI sessions include Deep Learning fundamentals."
},

{
    id:55,
    category:"Artificial Intelligence",
    keywords:["project"],
    question:"Will I build AI projects?",
    answer:"Yes. Every participant gets an opportunity to build real AI-based projects."
},

{
    id:56,
    category:"Artificial Intelligence",
    keywords:["gen ai","generative ai"],
    question:"Do you teach Generative AI?",
    answer:"Yes. We introduce participants to modern Generative AI tools and applications."
},

{
    id:57,
    category:"Artificial Intelligence",
    keywords:["certificate"],
    question:"Is certification available for AI programs?",
    answer:"Eligible participants receive completion certificates."
},

{
    id:58,
    category:"Artificial Intelligence",
    keywords:["career"],
    question:"Can AI help me prepare for future careers?",
    answer:"Yes. AI skills are among the most in-demand across industries."
},

{
    id:59,
    category:"Artificial Intelligence",
    keywords:["beginner"],
    question:"Can beginners learn AI?",
    answer:"Yes. Beginner-friendly learning paths are available."
},

{
    id:60,
    category:"Artificial Intelligence",
    keywords:["mentor"],
    question:"Will mentors guide AI projects?",
    answer:"Yes. Industry mentors help students throughout the learning journey."
},

/* ===========================================================
   INTERNET OF THINGS (IoT)
=========================================================== */

{
    id:61,
    category:"IoT",
    popular:true,
    keywords:["iot","internet of things"],
    question:"What is the Internet of Things (IoT)?",
    answer:"IoT connects physical devices to the internet, enabling them to collect, exchange and analyze data in real time."
},

{
    id:62,
    category:"IoT",
    keywords:["esp32","esp8266"],
    question:"Do you teach ESP32 and ESP8266?",
    answer:"Yes. Participants learn to build smart IoT applications using ESP32 and ESP8266 development boards."
},

{
    id:63,
    category:"IoT",
    keywords:["sensor"],
    question:"Will I work with sensors?",
    answer:"Yes. You'll use temperature, humidity, motion, gas and various other sensors in practical projects."
},

{
    id:64,
    category:"IoT",
    keywords:["smart home"],
    question:"Can I build Smart Home projects?",
    answer:"Absolutely. Smart lighting, security systems and automation projects are part of the curriculum."
},

{
    id:65,
    category:"IoT",
    keywords:["cloud"],
    question:"Will I learn cloud connectivity?",
    answer:"Yes. Projects include connecting IoT devices to cloud platforms for monitoring and control."
},

{
    id:66,
    category:"IoT",
    keywords:["project"],
    question:"Do IoT sessions include real projects?",
    answer:"Yes. Every learner builds practical IoT projects using real hardware."
},

{
    id:67,
    category:"IoT",
    keywords:["wifi"],
    question:"Will I learn Wi-Fi based IoT communication?",
    answer:"Yes. Wireless communication using Wi-Fi is covered extensively."
},

{
    id:68,
    category:"IoT",
    keywords:["beginner"],
    question:"Can beginners join IoT sessions?",
    answer:"Yes. Beginner-friendly learning paths are available before moving to advanced concepts."
},

{
    id:69,
    category:"IoT",
    keywords:["hardware"],
    question:"Is IoT hardware available in the makerspace?",
    answer:"Yes. Participants can access development boards, sensors and electronic components."
},

{
    id:70,
    category:"IoT",
    keywords:["certificate"],
    question:"Will IoT workshops provide certificates?",
    answer:"Yes. Eligible participants receive certificates after successful completion."
},

/* ===========================================================
   ELECTRONICS
=========================================================== */

{
    id:71,
    category:"Electronics",
    popular:true,
    keywords:["electronics"],
    question:"Do I need electronics knowledge before joining?",
    answer:"No. Beginners can start from the basics."
},

{
    id:72,
    category:"Electronics",
    keywords:["breadboard"],
    question:"Will I learn circuit design?",
    answer:"Yes. You'll build and test circuits on breadboards before designing PCBs."
},

{
    id:73,
    category:"Electronics",
    keywords:["pcb"],
    question:"Do you teach PCB design?",
    answer:"Yes. PCB design fundamentals are introduced in advanced electronics sessions."
},

{
    id:74,
    category:"Electronics",
    keywords:["components"],
    question:"Are electronic components provided?",
    answer:"Yes. Components required for learning activities are available."
},

{
    id:75,
    category:"Electronics",
    keywords:["multimeter"],
    question:"Will I learn to use measuring instruments?",
    answer:"Yes. Students use multimeters and other lab equipment during practical sessions."
},

{
    id:76,
    category:"Electronics",
    keywords:["soldering"],
    question:"Do you teach soldering?",
    answer:"Yes. Safe soldering techniques are covered whenever required."
},

{
    id:77,
    category:"Electronics",
    keywords:["project"],
    question:"Can I create my own electronics project?",
    answer:"Yes. Mentors guide learners from idea to final prototype."
},

{
    id:78,
    category:"Electronics",
    keywords:["lab"],
    question:"Does Yuvalay have an electronics lab?",
    answer:"Yes. The makerspace includes electronics equipment and prototyping tools."
},

/* ===========================================================
   3D PRINTING
=========================================================== */

{
    id:79,
    category:"3D Printing",
    popular:true,
    keywords:["3d printer"],
    question:"Is 3D printing available at Yuvalay?",
    answer:"Yes. Students can learn and use 3D printers for prototyping."
},

{
    id:80,
    category:"3D Printing",
    keywords:["cad"],
    question:"Will I learn 3D designing?",
    answer:"Yes. CAD software is introduced before printing models."
},

{
    id:81,
    category:"3D Printing",
    keywords:["print"],
    question:"Can I print my own models?",
    answer:"Yes. Participants can print their own designs after mentor approval."
},

{
    id:82,
    category:"3D Printing",
    keywords:["material"],
    question:"Which printing materials are used?",
    answer:"Common materials like PLA are used for educational projects."
},

{
    id:83,
    category:"3D Printing",
    keywords:["fee"],
    question:"Is there any printing charge?",
    answer:"Printing policies depend on the project size and material consumption."
},

{
    id:84,
    category:"3D Printing",
    keywords:["prototype"],
    question:"Can startups create prototypes?",
    answer:"Yes. Startups can use the makerspace for rapid prototyping."
},

{
    id:85,
    category:"3D Printing",
    keywords:["design"],
    question:"Do beginners learn product design?",
    answer:"Yes. Basic product modeling is taught before moving to advanced designs."
},

{
    id:86,
    category:"3D Printing",
    keywords:["mentor"],
    question:"Will mentors help with 3D printing?",
    answer:"Yes. Mentors assist with designing, slicing and printing models."
},

/* ===========================================================
   INNOVATION
=========================================================== */

{
    id:87,
    category:"Innovation",
    popular:true,
    keywords:["innovation"],
    question:"How does Yuvalay promote innovation?",
    answer:"Through project-based learning, mentorship, competitions and collaborative problem solving."
},

{
    id:88,
    category:"Innovation",
    keywords:["idea"],
    question:"Can I work on my own idea?",
    answer:"Yes. Students are encouraged to convert ideas into real prototypes."
},

{
    id:89,
    category:"Innovation",
    keywords:["mentor"],
    question:"Will mentors review my ideas?",
    answer:"Yes. Mentors regularly review and improve student projects."
},

{
    id:90,
    category:"Innovation",
    keywords:["hackathon"],
    question:"Does Yuvalay organize hackathons?",
    answer:"Yes. Innovation challenges and hackathons are conducted throughout the year."
},

/* ===========================================================
   STARTUPS
=========================================================== */

{
    id:91,
    category:"Startups",
    popular:true,
    keywords:["startup","business"],
    question:"Does Yuvalay support startups?",
    answer:"Yes. Yuvalay helps startups through mentorship, innovation support, networking opportunities and access to makerspace facilities."
},

{
    id:92,
    category:"Startups",
    keywords:["incubation"],
    question:"Does Yuvalay provide incubation support?",
    answer:"Selected startups can receive incubation guidance, mentoring and ecosystem support depending on their stage."
},

{
    id:93,
    category:"Startups",
    keywords:["mentor"],
    question:"Can startup founders get mentorship?",
    answer:"Yes. Experienced mentors help founders validate ideas, improve products and prepare for growth."
},

{
    id:94,
    category:"Startups",
    keywords:["pitch"],
    question:"Can I pitch my startup idea?",
    answer:"Yes. Innovation showcases and pitching opportunities are organized periodically."
},

{
    id:95,
    category:"Startups",
    keywords:["prototype"],
    question:"Can I build prototypes here?",
    answer:"Absolutely. Startups can utilize makerspace resources for rapid prototyping."
},

{
    id:96,
    category:"Startups",
    keywords:["funding"],
    question:"Does Yuvalay provide funding?",
    answer:"Yuvalay itself does not guarantee funding but may connect promising startups with investors and ecosystem partners."
},

{
    id:97,
    category:"Startups",
    keywords:["network"],
    question:"Can startups network with industry experts?",
    answer:"Yes. Various networking sessions and industry interactions are organized throughout the year."
},

{
    id:98,
    category:"Startups",
    keywords:["student startup"],
    question:"Can students start their own startup through Yuvalay?",
    answer:"Yes. Students receive guidance to convert innovative ideas into startups."
},

/* ===========================================================
   STUDENTS
=========================================================== */

{
    id:99,
    category:"Students",
    popular:true,
    keywords:["student"],
    question:"Is Yuvalay only for engineering students?",
    answer:"No. Students from every stream are welcome to participate."
},

{
    id:100,
    category:"Students",
    keywords:["school"],
    question:"Can school students join?",
    answer:"Yes. Dedicated programs are available for school students."
},

{
    id:101,
    category:"Students",
    keywords:["college"],
    question:"Can college students join?",
    answer:"Yes. College students are one of our primary participant groups."
},

{
    id:102,
    category:"Students",
    keywords:["project"],
    question:"Can I complete my academic project here?",
    answer:"Yes. Students can receive mentorship and technical guidance for projects."
},

{
    id:103,
    category:"Students",
    keywords:["competition"],
    question:"Can students participate in competitions?",
    answer:"Yes. Students are encouraged to participate in innovation challenges and hackathons."
},

{
    id:104,
    category:"Students",
    keywords:["portfolio"],
    question:"Will projects improve my portfolio?",
    answer:"Yes. Practical projects significantly strengthen academic and professional portfolios."
},

{
    id:105,
    category:"Students",
    keywords:["resume"],
    question:"Will participation improve my resume?",
    answer:"Hands-on projects, workshops and certifications help strengthen resumes."
},

{
    id:106,
    category:"Students",
    keywords:["career"],
    question:"Will Yuvalay help my career?",
    answer:"Yes. Practical learning and mentorship improve employability and technical skills."
},

/* ===========================================================
   SCHOOLS & COLLEGES
=========================================================== */

{
    id:107,
    category:"Schools",
    popular:true,
    keywords:["school partnership"],
    question:"Can schools collaborate with Yuvalay?",
    answer:"Yes. Schools can organize workshops, innovation programs and educational visits."
},

{
    id:108,
    category:"Schools",
    keywords:["teacher"],
    question:"Are teacher training programs available?",
    answer:"Yes. Faculty development and teacher training sessions are conducted regularly."
},

{
    id:109,
    category:"Schools",
    keywords:["visit"],
    question:"Can schools schedule makerspace visits?",
    answer:"Yes. Educational visits can be scheduled in advance."
},

{
    id:110,
    category:"Schools",
    keywords:["innovation club"],
    question:"Can Yuvalay help establish innovation clubs?",
    answer:"Yes. Schools receive guidance to establish innovation ecosystems."
},

{
    id:111,
    category:"Schools",
    keywords:["college"],
    question:"Can colleges partner with Yuvalay?",
    answer:"Yes. Colleges frequently collaborate for workshops, hackathons and innovation programs."
},

{
    id:112,
    category:"Schools",
    keywords:["mou"],
    question:"Can institutions sign MoUs with Yuvalay?",
    answer:"Yes. Long-term collaborations can be established through formal partnerships."
},

/* ===========================================================
   INTERNSHIPS
=========================================================== */

{
    id:113,
    category:"Internships",
    popular:true,
    keywords:["internship"],
    question:"Does Yuvalay offer internships?",
    answer:"Yes. Internship opportunities are announced based on ongoing projects and organizational requirements."
},

{
    id:114,
    category:"Internships",
    keywords:["apply"],
    question:"How can I apply for an internship?",
    answer:"Applications can be submitted through the official website whenever internship positions are open."
},

{
    id:115,
    category:"Internships",
    keywords:["certificate"],
    question:"Will interns receive certificates?",
    answer:"Yes. Eligible interns receive internship completion certificates."
},

{
    id:116,
    category:"Internships",
    keywords:["remote"],
    question:"Are remote internships available?",
    answer:"Some internships may be offered remotely depending on project requirements."
},

{
    id:117,
    category:"Internships",
    keywords:["stipend"],
    question:"Are internships paid?",
    answer:"Stipend availability depends on the internship and project."
},

{
    id:118,
    category:"Internships",
    keywords:["technology"],
    question:"Which technologies are covered during internships?",
    answer:"Internships may include AI, IoT, Robotics, Web Development, Electronics and Innovation projects."
},

{
    id:119,
    category:"Internships",
    keywords:["mentor"],
    question:"Will interns receive mentorship?",
    answer:"Yes. Every intern works under experienced mentors."
},

{
    id:120,
    category:"Internships",
    keywords:["experience"],
    question:"Do I need prior experience?",
    answer:"No. Many internships are designed for beginners willing to learn."
},

/* ===========================================================
   MENTORSHIP
=========================================================== */

{
    id:121,
    category:"Mentorship",
    popular:true,
    keywords:["mentor","guidance"],
    question:"Can I get mentorship for my project?",
    answer:"Yes. Students, innovators and startups can receive mentorship from experienced professionals throughout their project journey."
},

{
    id:122,
    category:"Mentorship",
    keywords:["expert"],
    question:"Who are the mentors at Yuvalay?",
    answer:"Mentors include educators, industry experts, entrepreneurs and technology professionals."
},

{
    id:123,
    category:"Mentorship",
    keywords:["startup"],
    question:"Can startups receive mentorship?",
    answer:"Yes. Startup founders can receive business, technology and product development guidance."
},

{
    id:124,
    category:"Mentorship",
    keywords:["career"],
    question:"Can mentors guide career decisions?",
    answer:"Yes. Mentors provide guidance on higher education, careers and technical skill development."
},

{
    id:125,
    category:"Mentorship",
    keywords:["appointment"],
    question:"How can I book a mentoring session?",
    answer:"Mentoring sessions can be requested through the website or during specific innovation programs."
},

{
    id:126,
    category:"Mentorship",
    keywords:["online"],
    question:"Are mentoring sessions conducted online?",
    answer:"Depending on mentor availability, sessions may be conducted both online and offline."
},

/* ===========================================================
   VOLUNTEERING
=========================================================== */

{
    id:127,
    category:"Volunteering",
    popular:true,
    keywords:["volunteer"],
    question:"How can I become a volunteer?",
    answer:"Complete the volunteer application form available on the Contact page or during recruitment drives."
},

{
    id:128,
    category:"Volunteering",
    keywords:["eligibility"],
    question:"Who can volunteer?",
    answer:"Students, professionals and community members passionate about education and innovation can volunteer."
},

{
    id:129,
    category:"Volunteering",
    keywords:["certificate"],
    question:"Do volunteers receive certificates?",
    answer:"Yes. Active volunteers receive appreciation and participation certificates."
},

{
    id:130,
    category:"Volunteering",
    keywords:["event"],
    question:"Can volunteers help during events?",
    answer:"Yes. Volunteers play an important role in organizing and managing events."
},

{
    id:131,
    category:"Volunteering",
    keywords:["hours"],
    question:"Is there a minimum volunteering commitment?",
    answer:"Commitment depends on the activity and project requirements."
},

{
    id:132,
    category:"Volunteering",
    keywords:["mentor"],
    question:"Can volunteers become mentors later?",
    answer:"Experienced volunteers may be invited to mentor future participants."
},

/* ===========================================================
   PARTNERSHIPS & CSR
=========================================================== */

{
    id:133,
    category:"Partnerships",
    popular:true,
    keywords:["partner"],
    question:"Can organizations partner with Yuvalay?",
    answer:"Yes. Educational institutions, NGOs, startups and industries can collaborate with Yuvalay."
},

{
    id:134,
    category:"Partnerships",
    keywords:["csr"],
    question:"Do you support CSR initiatives?",
    answer:"Yes. Organizations can collaborate through CSR programs that promote innovation and education."
},

{
    id:135,
    category:"Partnerships",
    keywords:["industry"],
    question:"Can industries conduct workshops with Yuvalay?",
    answer:"Yes. Industry experts regularly collaborate on workshops and training sessions."
},

{
    id:136,
    category:"Partnerships",
    keywords:["ngo"],
    question:"Can NGOs collaborate with Yuvalay?",
    answer:"Yes. NGOs can partner on social innovation, education and community development initiatives."
},

{
    id:137,
    category:"Partnerships",
    keywords:["sponsor"],
    question:"Can companies sponsor events?",
    answer:"Yes. Sponsorship opportunities are available for selected events and programs."
},

{
    id:138,
    category:"Partnerships",
    keywords:["contact"],
    question:"How can organizations start a partnership?",
    answer:"Organizations can contact the Yuvalay team through the Contact page to discuss collaboration opportunities."
},

/* ===========================================================
   DONATIONS
=========================================================== */

{
    id:139,
    category:"Donations",
    popular:true,
    keywords:["donate"],
    question:"How can I support Yuvalay?",
    answer:"You can support Yuvalay through donations, sponsorships, volunteering or mentorship."
},

{
    id:140,
    category:"Donations",
    keywords:["fund"],
    question:"Where are donations utilized?",
    answer:"Donations help expand innovation programs, purchase equipment and support student initiatives."
},

{
    id:141,
    category:"Donations",
    keywords:["equipment"],
    question:"Can I donate equipment?",
    answer:"Yes. Educational and technology equipment donations are welcome."
},

{
    id:142,
    category:"Donations",
    keywords:["student"],
    question:"Can I sponsor a student's learning journey?",
    answer:"Yes. Sponsors can support educational and innovation initiatives for deserving students."
},

/* ===========================================================
   CERTIFICATES
=========================================================== */

{
    id:143,
    category:"Certificates",
    keywords:["certificate"],
    question:"How will I receive my certificate?",
    answer:"Certificates are shared digitally or physically depending on the event or program."
},

{
    id:144,
    category:"Certificates",
    keywords:["download"],
    question:"Can I download my certificate later?",
    answer:"Yes. Eligible participants can access certificates through the provided instructions."
},

{
    id:145,
    category:"Certificates",
    keywords:["verification"],
    question:"Are certificates verifiable?",
    answer:"Selected certificates include verification details for authenticity."
},

/* ===========================================================
   REGISTRATION
=========================================================== */

{
    id:146,
    category:"Registration",
    keywords:["payment"],
    question:"How do I register for programs?",
    answer:"Visit the respective program page, complete the form and submit the required information."
},

{
    id:147,
    category:"Registration",
    keywords:["payment"],
    question:"Which payment methods are accepted?",
    answer:"Available payment options are displayed during the registration process."
},

{
    id:148,
    category:"Registration",
    keywords:["refund"],
    question:"Can I request a refund?",
    answer:"Refund policies vary depending on the specific event or program."
},

/* ===========================================================
   CONTACT
=========================================================== */

{
    id:149,
    category:"Contact",
    popular:true,
    keywords:["email"],
    question:"How can I contact the Yuvalay team?",
    answer:"You can contact us through the Contact page, email or our official social media platforms."
},

{
    id:150,
    category:"Contact",
    keywords:["visit"],
    question:"Can I visit Yuvalay before joining?",
    answer:"Yes. Visitors are welcome during working hours or by scheduling an appointment."
},

{
    id:151,
    category:"Contact",
    keywords:["hours"],
    question:"What are the working hours?",
    answer:"Working hours are available on the Contact page and may vary during events."
},

{
    id:152,
    category:"Contact",
    keywords:["support"],
    question:"How quickly will I receive a response?",
    answer:"Our team typically responds within 1–2 business days."
}

];

const categories = [
    "All",
    ...new Set(faqs.map((faq) => faq.category))
];

export default function FAQAccordion() {

    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFAQ, setActiveFAQ] = useState(null);

    const filteredFAQs = useMemo(() => {

        return faqs.filter((faq) => {

            const categoryMatch =
                activeCategory === "All" ||
                faq.category === activeCategory;

            const search = searchQuery.toLowerCase();

            const searchMatch =
                faq.question.toLowerCase().includes(search) ||
                faq.answer.toLowerCase().includes(search) ||
                faq.category.toLowerCase().includes(search) ||
                faq.keywords.some(keyword =>
                    keyword.toLowerCase().includes(search)
                );

            return categoryMatch && searchMatch;

        });

    }, [activeCategory, searchQuery]);

    const toggleFAQ = (id) => {
        setActiveFAQ(activeFAQ === id ? null : id);
    };

    return (

        <section className="faqAccordionSection">

            <div className="faqAccordionContainer">

                {/* =========================
                    HEADER
                ========================= */}

                <div className="faqAccordionHeader">

                    <span className="faqSubtitle">

                        Help Center

                    </span>

                    <h2>

                        Frequently Asked Questions

                    </h2>

                    <p>

                        Everything you need to know about Yuvalay
                        Makerspace, Programs, Workshops, AI,
                        Robotics, Innovation and more.

                    </p>

                </div>

                {/* =========================
                    SEARCH
                ========================= */}

                <div className="faqAccordionSearch">

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search your question..."
                        value={searchQuery}
                        onChange={(e) => {

                            setSearchQuery(e.target.value);
                            setActiveFAQ(null);

                        }}
                    />

                </div>

                {/* =========================
                    FILTERS
                ========================= */}

                <div className="faqAccordionFilters">

                    {categories.map(category => (

                        <button
                            key={category}
                            className={`faqFilter ${
                                activeCategory === category ? "active" : ""
                            }`}
                            onClick={() => {

                                setActiveCategory(category);
                                setActiveFAQ(null);

                            }}
                        >

                            {category}

                        </button>

                    ))}

                </div>

                {/* =========================
                    RESULT COUNT
                ========================= */}

                <div className="faqResultCount">

                    Showing

                    <strong>

                        {" "}
                        {filteredFAQs.length}
                        {" "}

                    </strong>

                    Questions

                </div>

                {/* =========================
                    FAQ LIST
                ========================= */}

                <div className="faqList">

                    {

                        filteredFAQs.length > 0 ?

                        filteredFAQs.map((faq) => (

                            <div
                                key={faq.id}
                                className={`faqAccordionCard ${
                                    activeFAQ === faq.id ? "active" : ""
                                }`}
                            >

                                <button
                                    className="faqAccordionQuestion"
                                    onClick={() => toggleFAQ(faq.id)}
                                >

                                    <div className="faqAccordionQuestionLeft">

                                        <div className="faqBadges">

                                            <span className="faqCategory">

                                                {faq.category}

                                            </span>

                                            {

                                                faq.popular && (

                                                    <span className="faqPopular">

                                                        Popular

                                                    </span>

                                                )

                                            }

                                        </div>

                                        <h3>

                                            {faq.question}

                                        </h3>

                                    </div>

                                    <FiPlus className="faqIcon"/>

                                </button>

                                <div
                                    className={`faqAccordionAnswer ${
                                        activeFAQ === faq.id ? "show" : ""
                                    }`}
                                >

                                    <p>

                                        {faq.answer}

                                    </p>

                                </div>

                            </div>

                        ))

                        :

                        (

                            <div className="faqEmpty">

                                <h3>

                                    No FAQs Found

                                </h3>

                                <p>

                                    We couldn't find any FAQs matching
                                    your search.

                                </p>

                                <button
                                    onClick={() => {

                                        setSearchQuery("");
                                        setActiveCategory("All");

                                    }}
                                >

                                    View All FAQs

                                </button>

                            </div>

                        )

                    }

                </div>

                {/* =========================
                    CONTACT CTA
                ========================= */}

                <div className="faqAccordionCTAButton">

                    <div>

                        <h2>

                            Still have a question?

                        </h2>

                        <p>

                            Can't find what you're looking for?
                            Reach out to our team and we'll be
                            happy to help.

                        </p>

                    </div>

                    <a
                        href="/contact"
                        className="faqAccordionCTAButtonButton"
                    >

                        Contact Us

                    </a>

                </div>

            </div>

        </section>

    );

}