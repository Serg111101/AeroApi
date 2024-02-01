import bCrypt from "bcryptjs";
import "dotenv/config";
// NPM Modules
import knex from "knex";
import knexConfigs from "../knex.configs";
import config from "../src/config/variables.config";

const { ADMIN_PASSWORD } = config;
const URL_IMAGES = process.env.SERVER_HOST_IMAGES;
const URL_GIF = process.env.SERVER_HOST_GIF;

const URL_VIDEOS = process.env.SERVER_HOST_VIDEOS;
const URL_SLIDES = process.env.SERVER_HOST_SLIDES;

async function seed(pg) {
  // Inserts seed entries

  await pg("header_en").insert([
    {
      title: "Main page",
      link:"",
      created_at: new Date().toISOString(),
    },
    {
      title: "About us",
      link:"",
      created_at: new Date().toISOString(),
    },
    {
      title: "Partners",
      link:"https://www.youtube.com/",
      created_at: new Date().toISOString(),
    },
    {
      title: "Contact us",
      link:"",
      created_at: new Date().toISOString(),
    },
    // {
    //   title: "Sign up",
    //   created_at: new Date().toISOString(),
    // },
  ]);
//HOME PAGE
await pg("home_page_en").insert([
  {
    information: [
      {
        logo: `${URL_IMAGES}/message-icon.png`,
        title: "Email address",
        text: "info@arenmehrabyan.com",
      },
      {
        logo: `${URL_IMAGES}/call-icon.png`,
        title: "Phone number",
        text: "+37441407148",
      },
      {
        logo: `${URL_IMAGES}/location-icon.png`,
        title: "Location",
        text: "5th Nor Nork Massiv, 15 A. Mikoyan, Yerevan, Armenia",
        link:"https://www.google.com/maps?q=40.21131005573589,44.710965156555176",
      },
    ],
    different: "contact",

    created_at: new Date().toISOString(),
  },
  {
    information: [
      {
        logo: `${URL_IMAGES}/video.png`,
        title: "Courses",
        color: "#77aad9",

      },
      {
        logo: `${URL_IMAGES}/topic.png`,
        title: "Useful materials",
        color: "#4c7397",

      },
      {
        logo: `${URL_IMAGES}/game.png`,
        title: "Satellites",
        color: "#425465",

      },
      {
        logo: `${URL_IMAGES}/cube.png`,
        title: "Satellite control",
        color: "#2b393f",

      },
    ],
    different: "lessonBox",

    created_at: new Date().toISOString(),
  },
  {
    information: [
      {
        logo: `${URL_IMAGES}/partner.jpg`,
        title: "Our partners",
        readmore:"Read more",
      },
      {
        logo: `${URL_IMAGES}/our-team.jpg`,
        title: "Our team",
        readmore:"Read more",
      },
      {
        logo: `${URL_IMAGES}/connect.png`,
        title:"Join us",
        readmore:"Read more",
      },
    ],
    different: "downBox",
    created_at: new Date().toISOString(),
  },
  // {
  //   information: [
  //     {
  //       logo: `${URL_IMAGES}/astronaut-spaceman-do-spacewalk.jpg`,
  //       title: "LET'S GO TO SPACE!",
  //     },
  //   ],
  //   different: "text",

  //   created_at: new Date().toISOString(),
  // },
  {
    information: [
      {
        logo: `${URL_IMAGES}/giphy.gif`,
        image:`${URL_IMAGES}/Tumanyan.png`,

        title:"You who gave me a gaze toward the skies To reach the higher ends, dive in the Sun, You who gave me a mind heavenly and vast To measure the measureless, its awesome gaps afar. You who tied us, took hold of my soul, Instilling in there the endless, its joy, Lit up a smile on my forehead so broad, Lit up and embellished with exuberant glow. With unwavering eye, with unfaltering soul, I read endlessly your lofty calls, I read in the mornings joyful and bright, And in the nights terrific and grand. And my soul dissolves in the height with joy, No near or apart, no high or low anymore, The entire Universe is a homeland and home, And myself – a free, an indifferent God",
        text: "Hovhannes Tumanyan",
      },
    ],
    different: "Box",

    created_at: new Date().toISOString(),
  },

  {
    information: [
      {
          logo: [`${URL_IMAGES}/sl1.jpg`,`${URL_IMAGES}/sl2.jpg`,`${URL_IMAGES}/sl3.jpg`,`${URL_IMAGES}/sl4.jpg`],
          // logo: `${URL_IMAGES}/logo.png`,
        title: "LET'S GO TO SPACE!",
      },
    ],
    different: "text",

    created_at: new Date().toISOString(),
  },
  {
    information: [
      {
        title: "Contact us",
        text: "Feel free to contact us by phone or email. Please fill out the contact form to send us a message. We strive to respond quickly to all inquiries and provide you with the information or assistance you need.",
        logo: `${URL_IMAGES}/giphy.gif`,
      },
    ],
    different: "contactUs",
    created_at: new Date().toISOString(),
  },
  {
    information: [
      {
        title: "Contact us",
        text: "If you have any questions, write to us.",
      },
      {
        title: "Email address:",
        text: "Enter your email address",
      },
      {
        title: "Name",
        text: "Write your name",
      },
      {
        title: "Comment",
        text: "Write your comment",
      },
      
      {
        title: "SEND",
      },
      {
        title: "Your Email has been sent successfully",
        text: "There is a problem with the system, please try again",
      },
     
    ],
    different: "sendMail",

    created_at: new Date().toISOString(),
  },
  {
    information: [
      {
        logo: `${URL_IMAGES}/logo.png`,
        title: "logo",
      },
    ],
    different: "logo",

    created_at: new Date().toISOString(),
  },

]);

//O U R    T E A M

await pg("our_team_en").insert([
  {
    name: "Mher Mehrabyan",
    image: `${URL_IMAGES}/IMAGE2023-05-30152946.jpg`,
    text: "Head - founder",
    created_at: new Date().toISOString(),
  },
  {
    name: "Vigen Mehrabyan",
    image: `${URL_IMAGES}/Screenshot2023-06-01at12.39.22.png`,
    text: "Structural engineer",
    created_at: new Date().toISOString(),
  },
  {
    name: "Vahe Sakeyan",
    image: `${URL_IMAGES}/IMAGE2023-05-30152509.jpg`,
    text: "System engineer",
    created_at: new Date().toISOString(),
  },
  {
    name: "Nellie Papazian",
    image: `${URL_IMAGES}/IMAGE2023-05-30160438.jpg`,
    text: "Aerospace engineer",
    created_at: new Date().toISOString(),
  },
  {
    name: "Karen Karapetyan",
    image: `${URL_IMAGES}/Screenshot2023-06-01at12.45.02.png`,
    text: "Software engineer",
    created_at: new Date().toISOString(),
  },
  {
    name: "Hrach Yaralyan",
    image: `${URL_IMAGES}/IMAGE2023-05-30153344.jpg`,
    text: "Programmer",
    created_at: new Date().toISOString(),
  },
  {
    name: "Hovhannes Sardaryan",
    image: `${URL_IMAGES}/HovSar.png`,
    text: "Electrical engineer",
    created_at: new Date().toISOString(),
  },
  {
    name: "Serob Khachatryan",
    image: `${URL_IMAGES}/IMAGE2023-05-30154252.jpg`,
    text: "Microwave engineer",
    created_at: new Date().toISOString(),
  },
  {
    name: "Zohrab Mirzoyan",
    image: `${URL_IMAGES}/IMAGE2023-05-30154806.jpg`,
    text: "3D animator",
    created_at: new Date().toISOString(),
  },
  {
    name: "Vazgen Mamyan",
    image: `${URL_IMAGES}/IMAGE2023-05-31140824.jpg`,
    text: "Marketer",
    created_at: new Date().toISOString(),
  },
]);
// A B O U T

await pg('about_en').insert([
  {
    title: "About us",
    image: `${URL_IMAGES}/mission-top-image.png`,
    created_at: new Date().toISOString(),
  },
  {
    title: "Our team",
    image: `${URL_IMAGES}/icon1.png`,
    text: "At Space Minds, we pride ourselves on our exceptional team of dedicated professionals who are the best at what they do. Allow me to introduce you to key members of our team.",
    more: "More",
    created_at: new Date().toISOString(),
  },
  {
    title: "Our goal",
    image: `${URL_IMAGES}/icon2.png`,
    text: "Our product will provide the way that children can to study a lot about space engineering and innovations and they could create own engineering component.",
    more: "More",
    created_at: new Date().toISOString(),
  },
  {
    image: `${URL_IMAGES}/vv.png`,
    created_at: new Date().toISOString(),
  },
  {
    image: `${URL_IMAGES}/cubesat.png`,
    created_at: new Date().toISOString(),
  },
]);

//F O O T E R

await pg("footer_en").insert([
  {
    title: "footer",
    text: "© All rights reserved",
    logo: `${URL_IMAGES}/logo.png`,
    created_at: new Date().toISOString(),
  },
  {
    title: "facebook",
    logo: `${URL_IMAGES}/facebook.png`,
    text:"https://www.facebook.com/arenmehrabyanfoundation1/",
    created_at: new Date().toISOString(),
  },
  {
    title: "twitter",
    logo: `${URL_IMAGES}/twitter.png`,
    text:"https://twitter.com/",
    created_at: new Date().toISOString(),
  },
  {
    title: "instagram",
    logo: `${URL_IMAGES}/instagram.png`,
    text:"https://www.instagram.com/",
    created_at: new Date().toISOString(),
  },
  {
    title: "linkdn",
    logo: `${URL_IMAGES}/linkediN.png`,
    text:"https://www.linkedin.com/",
    created_at: new Date().toISOString(),
  },
]);

// L E S S O N S
await pg("lessons_en").insert([
  {
    icon: `${URL_IMAGES}/Les1.png`,
    background: `${URL_IMAGES}/giphy.gif`,
    ikonka: `${URL_IMAGES}/propeller.jpg`,
    lesson: "Lesson 1. Introduction to Space Exploration",
    color: "#adcce9",
    button:"Go back",
    lectures: JSON.stringify([
      {
        color: "#adcce9",
        text: " Historical overview of space exploration milestones",
      },
      {
        color: "#77aad9",
        text: " The Space Race and its impact",
      },
      {
        color: "#4c7397",
        text: " Current trends and future prospects in space exploration",
      },
      {
        color: "#4c7397",
        text: " Space agencies and their missions",
      },
      {
        color: "#425465",
        text: "Questions",
      },
    ]),
    created_at: new Date().toISOString(),
  },
  {
    icon: `${URL_IMAGES}/Les2.png`,
    ikonka: `${URL_IMAGES}/propeller.jpg`,
    background: `${URL_IMAGES}/giphy.gif`,
    lesson: "Lesson 2. Our Solar System and Beyond",
    color: "#adcce9",
    button:"Go back",
    lectures: JSON.stringify([
      {
        color: "#adcce9",
        text: " Overview of the planets, their moons, and key features",
      },
      {
        color: "#77aad9",
        text: " Dwarf planets, asteroids, and comets",
      },
      {
        color: "#4c7397",
        text: " Exoplanets and the search for habitable worlds",
      },
      {
        color: "#4c7397",
        text: " Recent discoveries and missions in our solar system",
      },
      {
        color: "#425465",
        text: "Questions",
      },
    ]),
    created_at: new Date().toISOString(),
  },
  {
    icon: `${URL_IMAGES}/Les3.png`,
    ikonka: `${URL_IMAGES}/propeller.jpg`,
    background: `${URL_IMAGES}/giphy.gif`,
    lesson: "Lesson 3. Rockets and Propulsion Systems",
    color: "#adcce9",
    // lectures:["Հրթիռային շարժման սկզբունքները","Հրթիռային շարժիչների տեսակները և դրանց կիրառությունները","Հրթիռների նախագծում և օպտիմալացում","Հրթիռային տեխնոլոգիայի ապագա զարգացումները","Հարցաշար"],
    button:"Go back",
    lectures: JSON.stringify([
      {
        color: "#adcce9",
        text: " Principles of rocket propulsion",
      },
      {
        color: "#77aad9",
        text: " Types of rocket engines and their applications",
      },
      {
        color: "#4c7397",
        text: " Rocket design and optimization",
      },
      {
        color: "#4c7397",
        text: " Future developments in rocket technology",
      },
      {
        color: "#425465",
        text: "Questions",
      },
    ]),
    created_at: new Date().toISOString(),
  },
  {
    icon: `${URL_IMAGES}/Les4.png`,
    ikonka: `${URL_IMAGES}/propeller.jpg`,
    background: `${URL_IMAGES}/giphy.gif`,
    lesson: "Lesson 4. Spacecraft and Missions",
    color: "#adcce9",
    
    button:"Go back",// lectures:["Տիեզերանավերի տեսակները և դրանց գործառույթները","Ուղեծրային մեխանիկա և հետագծի հաշվարկներ","Միջմոլորակային առաքելություններ և տիեզերական զոնդեր","Առաքելության ուսումնասիրություն. Մարսագնացները և նրանց գիտական բացահայտումները","Հարցաշար"],
    lectures: JSON.stringify([
      {
        color: "#adcce9",
        text: " Types of spacecraft and their functions",
      },
      {
        color: "#77aad9",
        text: " Orbital mechanics and trajectory calculations",
      },
      {
        color: "#4c7397",
        text: " Interplanetary missions and space probes",
      },
      {
        color: "#4c7397",
        text: " Case study: Mars rovers and their scientific findings",
      },
      {
        color: "#425465",
        text: "Questions",
      },
    ]),
    created_at: new Date().toISOString(),
  },
  // {
  //   icon: `${URL_IMAGES}/Les5.png`,
  //   ikonka: `${URL_IMAGES}/propeller.jpg`,
  //   background: `${URL_IMAGES}/giphy.gif`,
  //   title: "Դաս 5. Ապրել և աշխատել տիեզերքում",
  //   color: "#adcce9",
  //   // lectures:["Մարդկային տիեզերական թռիչքներ՝ անցյալ, ներկա և ապագա","Երկարատև տիեզերական ճանապարհորդության մարտահրավերները","Կենսապահովման համակարգեր և տիեզերագնացների բարեկեցություն","Տիեզերական բնակավայրեր և գաղութացման հայեցակարգեր","Հարցաշար"],
  //   lectures: JSON.stringify([
  //     {
  //       color: "#adcce9",
  //       text: "Մարդկային տիեզերական թռիչքներ՝ անցյալ, ներկա և ապագա",
  //     },
  //     {
  //       color: "#77aad9",
  //       text: "Երկարատև տիեզերական ճանապարհորդության մարտահրավերները",
  //     },
  //     {
  //       color: "#4c7397",
  //       text: "Կենսապահովման համակարգեր և տիեզերագնացների բարեկեցություն",
  //     },
  //     {
  //       color: "#4c7397",
  //       text: "Տիեզերական բնակավայրեր և գաղութացման հայեցակարգեր",
  //     },
  //     {
  //       color: "#425465",
  //       text: "Հարցաշար",
  //     },
  //   ]),
  //   created_at: new Date().toISOString(),
  // },
  // {
  //   icon: `${URL_IMAGES}/Les6.png`,
  //   ikonka: `${URL_IMAGES}/propeller.jpg`,
  //   background: `${URL_IMAGES}/giphy.gif`,
  //   title: "Դաս 6. Տիեզերական տեխնոլոգիաներ և հետազոտություններ",
  //   color: "#adcce9",
  //   // lectures:["Արբանյակային համակարգեր և հավելվածներ","Հեռավոր զոնդավորում և Երկրի դիտարկում","Տիեզերական աստղադիտակներ և աստղագիտական հայտնագործություններ","Տիեզերքի հետազոտության առաջադեմ տեխնոլոգիաներ","Հարցաշար"],
  //   lectures: JSON.stringify([
  //     {
  //       color: "#adcce9",
  //       text: "Արբանյակային համակարգեր և հավելվածներ",
  //     },
  //     {
  //       color: "#77aad9",
  //       text: "Հեռավոր զոնդավորում և Երկրի դիտարկում",
  //     },
  //     {
  //       color: "#4c7397",
  //       text: "Տիեզերական աստղադիտակներ և աստղագիտական հայտնագործություններ",
  //     },
  //     {
  //       color: "#4c7397",
  //       text: "Տիեզերքի հետազոտության առաջադեմ տեխնոլոգիաներ",
  //     },
  //     {
  //       color: "#425465",
  //       text: "Հարցաշար",
  //     },
  //   ]),
  //   created_at: new Date().toISOString(),
  // },
  // {
  //   icon: `${URL_IMAGES}/Les7.png`,
  //   ikonka: `${URL_IMAGES}/propeller.jpg`,
  //   background: `${URL_IMAGES}/giphy.gif`,

  //   title: "Դաս 7. Տիեզերագիտություն և աստղագիտություն",
  //   color: "#77aad9",
  //   // lectures:["Աստղային էվոլյուցիան և աստղերի կյանքի ցիկլը","Գալակտիկաներ, սև խոռոչներ և տիեզերագիտություն","Գրավիտացիոն ալիքներ և մութ նյութի որոնում","Քաղաքացիական գիտական նախագծեր աստղագիտության մեջ","Հարցաշար"],
  //   lectures: JSON.stringify([
  //     {
  //       color: "#adcce9",
  //       text: "Աստղային էվոլյուցիան և աստղերի կյանքի ցիկլը",
  //     },
  //     {
  //       color: "#77aad9",
  //       text: "Գալակտիկաներ, սև խոռոչներ և տիեզերագիտություն",
  //     },
  //     {
  //       color: "#4c7397",
  //       text: "Գրավիտացիոն ալիքներ և մութ նյութի որոնում",
  //     },
  //     {
  //       color: "#4c7397",
  //       text: "Քաղաքացիական գիտական նախագծեր աստղագիտության մեջ",
  //     },
  //     {
  //       color: "#425465",
  //       text: "Հարցաշար",
  //     },
  //   ]),
  //   created_at: new Date().toISOString(),
  // },
  // {
  //   icon: `${URL_IMAGES}/Les8.png`,
  //   ikonka: `${URL_IMAGES}/propeller.jpg`,
  //   background: `${URL_IMAGES}/giphy.gif`,
  //   title: "Դաս 8. Կարիերա տիեզերական արդյունաբերության մեջ",
  //   color: "#adcce9",
  //   // lectures:["Կարիերա տիեզերքին առնչվող ոլորտներում","Ինժեներություն, աստղաֆիզիկա և մոլորակագիտություն","Տիեզերական արդյունաբերության ստարտափներ և ձեռներեցություն","Ցանցի և մենթորության հնարավորություններ","Հարցաշար"],
  //   lectures: JSON.stringify([
  //     {
  //       color: "#adcce9",
  //       text: "Կարիերա տիեզերքին առնչվող ոլորտներում",
  //     },
  //     {
  //       color: "#77aad9",
  //       text: "Ինժեներություն, աստղաֆիզիկա և մոլորակագիտություն",
  //     },
  //     {
  //       color: "#4c7397",
  //       text: "Տիեզերական արդյունաբերության ստարտափներ և ձեռներեցություն",
  //     },
  //     {
  //       color: "#4c7397",
  //       text: "Ցանցի և մենթորության հնարավորություններ",
  //     },
  //     {
  //       color: "#425465",
  //       text: "Հարցաշար",
  //     },
  //   ]),
  //   created_at: new Date().toISOString(),
  // },
]);

  // TPOICS
   // TPOICS
    // TPOICS
     // TPOICS
     await pg("topics_en").insert([

      // LESSON 1
      {
        lesson: "Lesson 1. Introduction to Space Exploration",
        lectures: `Historical overview of space exploration milestones`,
        text1: `Provide a comprehensive historical overview of significant milestones in space exploration, from
        the first satellite to the moon landing and beyond.`,
        image: `${URL_IMAGES}/lesson1_1.jpg`,
        text_arr: [`October 4, 1957: Sputnik 1 - The Soviet Union launches the first artificial satellite, Sputnik 1, into
        space. It marks the beginning of the Space Age and triggers the Space Race between the
        United States and the Soviet Union.`,
        `April 12, 1961: Yuri Gagarin's Spaceflight - Yuri Gagarin becomes the first human to orbit the
        Earth aboard Vostok 1, a Soviet spacecraft. This historic milestone demonstrates the feasibility
        of human space travel.`,
        `May 5, 1961: Alan Shepard's Suborbital Flight - Alan Shepard becomes the first American to
        travel to space aboard Freedom 7. Although it was a suborbital flight, it paved the way for future
        crewed missions.`,
        `February 20, 1962: John Glenn's Orbital Flight - John Glenn becomes the first American to orbit
        the Earth aboard Friendship 7. His flight lasts nearly five hours, further advancing human space
        exploration.July 20, 1969: Apollo 11 Moon Landing - Neil Armstrong and Buzz Aldrin become the first
        humans to set foot on the moon during the Apollo 11 mission. Armstrong's famous words,
        "That's one small step for man, one giant leap for mankind," mark a significant milestone in
        human achievement.`,
        `November 17, 1970: Luna 17 and Lunokhod 1 - The Soviet Union successfully lands Luna 17
        on the moon, carrying the robotic rover Lunokhod 1. It becomes the first successful deployment
        of a rover on another celestial body.
        April 12, 1981: Space Shuttle Columbia - The United States launches the first operational space
        shuttle, Columbia. The Space Shuttle program revolutionizes space travel with reusable
        spacecraft.`,
        `November 20, 1998: International Space Station (ISS) - The first component of the ISS, Zarya,
        is launched into space. Over the years, multiple countries collaborated to assemble the ISS,
        providing a long-term habitable space environment for research and international cooperation.
        January 14, 2005: Huygens Probe on Titan - The European Space Agency's Huygens probe
        successfully lands on Saturn's moon, Titan, providing valuable data about its atmosphere and
        surface.`,
       ` August 6, 2012: Curiosity Rover on Mars - NASA's Curiosity rover lands on Mars, embarking on
        a mission to explore the planet's geology and search for signs of past or present microbial life.
        February 18, 2021: Mars Perseverance Rover - NASA's Perseverance rover lands on Mars,
        equipped with advanced instruments to study the planet's geology, search for signs of ancient
        life, and prepare for future human exploration.`],
        slides: [
          `${URL_SLIDES}/slide_les1_1.jpg`,
          `${URL_SLIDES}/slide_les1_2.jpg`,
          `${URL_SLIDES}/slide_les1_3.jpg`,
          `${URL_SLIDES}/slide_les1_4.jpg`,
          `${URL_SLIDES}/slide_les1_5.jpg`,
          `${URL_SLIDES}/slide_les1_6.jpg`,
          `${URL_SLIDES}/slide_les1_7.jpg`,
          `${URL_SLIDES}/slide_les1_8.jpg`,
          `${URL_SLIDES}/slide_les1_9.jpg`,
          `${URL_SLIDES}/slide_les1_10.jpg`,
          `${URL_SLIDES}/slide_les1_11.jpg`,
          `${URL_SLIDES}/slide_les1_12.jpg`
        ],
  
        button: ['Back', 'Next', 'Back to the questionnaire'],
        created_at: new Date().toISOString(),
      },
      {
        lesson: `Lesson 1. Introduction to Space Exploration`,
        lectures: `The Space Race and its impact`,
        text1: `Explore the Space Race between the United States and the Soviet Union and discuss its impact
        on space exploration.`,
        image: `${URL_IMAGES}/lesson2_2.png`,
        text2: `The Space Race refers to the competition between the United States and the Soviet Union
        during the Cold War era to achieve significant milestones in space exploration. It had a profound
        impact on technology, politics, and society. Here are some key aspects of the Space Race and
        its impact:`,
        text_arr_margin:[`1. Technological Advancements: The intense competition between the United States and
        the Soviet Union accelerated advancements in rocketry, spacecraft, and other space
        technologies. Both nations made significant progress in developing more powerful
        rockets, improving navigation systems, and creating advanced spacecraft. This
        technological push led to innovations that have had far-reaching applications in various
        industries, including telecommunications, satellite technology, and materials science.`,
        `2. Moon Landings: The Moon became the primary focus of the Space Race. The United
        States achieved a major victory when Apollo 11 successfully landed astronauts Neil
        Armstrong and Buzz Aldrin on the lunar surface in 1969. This landmark achievement
        showcased the United States' technological capabilities and led to subsequent Apollo
        missions, including additional moon landings and scientific exploration.`,
        `3. National Pride and Prestige: The Space Race was fueled by a sense of national pride
        and the desire for global dominance. Both the United States and the Soviet Union saw
        space exploration as a way to demonstrate their technological and ideological
        superiority. Each successful mission was seen as a symbol of national prestige, leading
        to public celebrations and bolstering national morale.`,`4. Political Implications: The Space Race had significant political implications, as it was
        intertwined with the larger Cold War rivalry between the United States and the Soviet
        Union. The competition for space dominance reflected the broader ideological and
        geopolitical tensions of the time. The United States viewed space exploration as a way
        to demonstrate the superiority of capitalism and democracy, while the Soviet Union saw
        it as a showcase of the strength of socialism and communism.`,
        `5. Scientific Discoveries: The missions undertaken during the Space Race resulted in
        significant scientific discoveries. Lunar missions provided valuable data about the
        moon's geology, while robotic missions to other planets expanded our understanding of
        the solar system. The research conducted during this period laid the foundation for
        subsequent scientific exploration and deepened our knowledge of space and celestial
        bodies.`,
        `6. Peaceful Cooperation: While the Space Race was marked by intense competition, it also
        fostered some instances of international cooperation. The Apollo-Soyuz Test Project in
        1975, for example, saw the United States and the Soviet Union collaborate on a joint
        space mission. This marked the first time American and Soviet spacecraft docked in
        space, symbolizing a thawing of tensions and opening avenues for future international
        space collaborations.`,
        `7. Educational and Cultural Impact: The Space Race captured the imagination of people
        around the world, inspiring a generation of scientists, engineers, and astronauts. It
        sparked an increased interest in science and technology, leading to advancements in
        STEM education and research. The Space Race also influenced popular culture, with
        space-themed movies, books, and television shows captivating audiences and shaping
        the collective imagination.`],
        button: ['Back', 'Next', 'Back to the questionnaire'],
        created_at: new Date().toISOString(),
      },
      {
        lesson: `Lesson 1. Introduction to Space Exploration`,
        lectures: `Current trends and future prospects in space exploration`,
        text1: `Discuss current trends and future prospects in space exploration, including upcoming missions
        and ambitious projects like lunar bases and Mars colonization.
        Current trends and future prospects in space exploration are exciting and hold great potential for
        further advancements. Here are some key trends and prospects in the field:`,
        image: `${URL_IMAGES}/lesson3_3.jpg`,
        text_arr_margin:[`1. Commercial Space Industry: One prominent trend is the rapid growth of the commercial
        space industry. Private companies like SpaceX, Blue Origin, and Virgin Galactic are
        making significant strides in developing reusable rockets, satellite deployment, and
        space tourism. The involvement of the private sector is driving innovation, lowering
        costs, and increasing access to space.`,`2. Lunar Exploration: There is renewed interest in exploring the Moon, with various space
        agencies and private companies planning missions to return humans to the lunar
        surface. NASA's Artemis program aims to establish a sustainable presence on the Moon
        by 2024, focusing on scientific research, resource utilization, and preparation for future
        crewed missions to Mars.`,
        `3. Mars Exploration: Mars remains a major target for exploration. Multiple missions have
        been launched to study the Martian surface, search for signs of past or present life, and
        prepare for future human missions. NASA's Perseverance rover, for instance, is studying
        Mars' geology and collecting samples for potential return to Earth. Future missions aim
        to test technologies needed for human colonization and assess the planet's habitability.`,
        `4. International Collaboration: Space exploration increasingly involves international
        collaboration. The International Space Station (ISS) serves as a prime example of global
        cooperation, with various nations contributing resources, conducting research, and
        sharing scientific knowledge. Future missions, such as the Lunar Gateway, aim to foster
        international partnerships for lunar exploration.`,
        `5. Interplanetary Missions: Beyond the Moon and Mars, there is growing interest in
        exploring other destinations in our solar system. Missions are being planned to study
        asteroids, Jupiter's moon Europa (which may harbor an ocean beneath its icy surface),
        Saturn's moon Enceladus (with its potential subsurface water), and even farther
        destinations like Pluto and the outer reaches of our solar system.`,
         `6. Space Telescopes and Astronomy: Advancements in space-based telescopes continue
        to revolutionize our understanding of the universe. Projects like the James Webb Space
        Telescope (JWST), set to launch in 2021, promise to provide unprecedented views of
        distant galaxies, planetary systems, and the early universe. These telescopes enable
        groundbreaking discoveries in astrophysics and cosmology.`,
        `7. Space Resources and Sustainability: The concept of utilizing space resources for
        sustainability and long-duration space missions is gaining traction. Water ice on the
        Moon and asteroids can potentially be used for life support, fuel production, and
        manufacturing in space. The development of in-situ resource utilization (ISRU)
        technologies is crucial for enabling sustainable space exploration and reducing reliance
        on Earth-based supplies.`,
        `8. Space Tourism: The prospect of space tourism is becoming a reality. Companies like
        Virgin Galactic and Blue Origin are working towards offering suborbital space flights to
        private individuals. This emerging industry aims to provide civilians with the opportunity
        to experience space travel and promote public engagement in space exploration.`],
        button: ['Back', 'Next', 'Back to the questionnaire'],
        created_at: new Date().toISOString(),
      },
      {
        lesson: `Lesson 1. Introduction to Space Exploration`,
        lectures: `Space agencies and their missions`,
        text1: `Introduce various space agencies around the world and their contributions to space exploration.`,
        image: `${URL_IMAGES}/lesson4_4.png`,
        text2:`Several space agencies around the world are actively involved in space exploration and
        scientific missions. Here are some prominent space agencies and their notable missions:`,
        text_arr_margin:[`
        1. National Aeronautics and Space Administration (NASA):
         Mars Exploration Program: NASA has sent several rovers to Mars, including the
        successful missions of the Spirit, Opportunity, Curiosity, and Perseverance rovers, which
        have explored the Martian surface, studied its geology, and searched for signs of past or
        present life.
         Hubble Space Telescope: NASA launched the Hubble Space Telescope in 1990,
        revolutionizing our understanding of the universe and providing breathtaking images of
        distant galaxies, nebulae, and other celestial objects.
         Artemis Program: NASA's Artemis program aims to return humans to the Moon by 2024.
        It focuses on sustainable lunar exploration, establishing a lunar Gateway, and preparing
        for crewed missions to Mars.
         Voyager Program: The Voyager 1 and Voyager 2 spacecraft, launched in 1977, explored
        the outer planets of our solar system and continued their journey into interstellar space,
        providing valuable data about these distant regions.`,
        `2. Russian Space Agency (Roscosmos):
         International Space Station (ISS): Roscosmos has played a key role in the construction
        and operation of the ISS, a multinational research laboratory in space that has been
        continuously occupied since 2000.
         Luna Program: Roscosmos conducted a series of missions to the Moon under the Luna
        program, including the successful landing of robotic rovers and the collection of lunar soil
        samples.`,
        `3. European Space Agency (ESA):
         Rosetta Mission: ESA's Rosetta mission successfully placed a lander called Philae on
        the surface of Comet 67P/Churyumov-Gerasimenko, providing valuable data about
        comets and their composition.
         ExoMars Program: ESA, in collaboration with Roscosmos, launched the ExoMars
        missions to study the Martian environment, search for signs of life, and understand the
        planet's geology and atmosphere.`,
        `4. China National Space Administration (CNSA):
         Chang'e Program: CNSA has conducted a series of missions under the Chang'e
        program, including lunar orbiters, landers, and rovers. Chang'e 4 became the first
        mission to land on the far side of the Moon, while Chang'e 5 successfully returned lunar
        samples to Earth.
         Tianzhou Missions: CNSA's Tianzhou missions focus on cargo resupply to the Chinese
        space station, demonstrating their capabilities in logistics and space station operations.`,
        `5. Indian Space Research Organisation (ISRO):
         Chandrayaan Program: ISRO's Chandrayaan missions include lunar orbiters and
        landers. Chandrayaan-1 discovered water molecules on the Moon's surface, while
        Chandrayaan-2 attempted a soft landing on the lunar surface.
         Mars Orbiter Mission: ISRO's Mars Orbiter Mission, also known as Mangalyaan,
        successfully placed a spacecraft in orbit around Mars, making India the first Asian
        country to achieve this milestone.`],
        button: ['Back', 'Next', 'Back to the questionnaire'],
        created_at: new Date().toISOString(),
      },
   // LESSON 2
   {
    lesson: `Lesson 2. Our Solar System and Beyond`,
    lectures: `Overview of the planets, their moons, and key features`,
    text1: `The fascinating features and characteristics of each planet in our solar system, along with their
    atmospheres, moons, and notable missions:`,
    image: `${URL_IMAGES}/img2_1.jpg`,
    text_arr:[
      `● Mercury:
    - Features: Mercury is the closest planet to the Sun and has a rocky, heavily
    cratered surface. It has a thin atmosphere called an exosphere, which consists of
    atoms blasted off its surface by solar wind. It experiences extreme temperature
    variations, ranging from extremely hot during the day to extremely cold at night.
    - Moons: Mercury does not have any moons.
    - Notable Missions: NASA's Mariner 10 mission (1974-1975) provided the first
    close-up images of Mercury. The MESSENGER mission (2004-2015) studied
    Mercury in detail, providing valuable insights into its geology, magnetic field, and
    surface composition.`,
    `${URL_GIF}/gif2_1.gif`,
    `● Venus:
    - Features: Venus is often called Earth's "sister planet" due to its similar size and
    composition. It has a thick atmosphere primarily composed of carbon dioxide,
    with clouds of sulfuric acid. The intense greenhouse effect results in extremely
    high surface temperatures, making Venus the hottest planet in our solar system.
    - Moons: Venus does not have any moons.
    - Notable Missions: Numerous missions have explored Venus, including NASA's
    Mariner 2 (1962), Venera program by the Soviet Union (1961-1984), and more
    recently, the European Space Agency's Venus Express (2005-2014). These
    missions have provided valuable data on Venus' atmosphere, surface, and
    geology.`,
    `${URL_GIF}/gif2_2.gif`,
    `● Earth:
    - Features: Earth is the third planet from the Sun and is the only known planet to
    support a diverse range of life forms. It has a nitrogen-oxygen-rich atmosphere
    that is vital for sustaining life. Earth's surface is 71% covered by oceans, and it
    has a dynamic geology with tectonic plate movements, mountains, and various
    landforms.
    - Moon: Earth has one moon, simply called the Moon. It is the fifth-largest moon in
    the solar system and has a significant influence on Earth's tides.
    - Notable Missions: There have been several missions to study Earth, but notable
    ones include satellite missions like NASA's Terra, Aqua, and Earth Observing
    System (EOS) satellites, which provide valuable data on Earth's atmosphere,
    climate, and ecosystems.`,
    `${URL_GIF}/gif2_3.gif`,
    `● Mars:
    - Features: Mars, often referred to as the "Red Planet," has a thin atmosphere
    primarily composed of carbon dioxide. It has a reddish appearance due to iron
    oxide (rust) on its surface. Mars has polar ice caps, evidence of past liquid water,
    volcanoes, valleys, and canyons, including the largest volcano in the solar
    system, Olympus Mons.
    - Moons: Mars has two small moons called Phobos and Deimos. They are
    irregularly shaped and are thought to be captured asteroids.
    - Notable Missions: Numerous missions have explored Mars, including NASA's
    Viking program (1975-1982), Mars rovers like Sojourner, Spirit, Opportunity, and
    Curiosity, and more recently, the Perseverance rover (2020-present). These
    missions have provided detailed data on Mars' geology, climate, and the search
    for signs of past or present life.`,
    `${URL_GIF}/gif2_4.gif`,
    `● Jupiter:
    - Features: Jupiter is the largest planet in our solar system, primarily composed of
    hydrogen and helium. It has a distinctive banded appearance, which is a result of
    its powerful atmospheric storms and jet streams. Jupiter is known for its Great
    Red Spot, a massive storm that has been observed for centuries.
    - Moons: Jupiter has over 79 known moons, with the four largest known as the
    Galilean moons: Io, Europa, Ganymede, and Callisto. They are notable for their
    diverse geology, including active volcanoes on Io and a possible subsurface
    ocean on Europa.
    - Notable Missions: NASA's Galileo mission (1989-2003) provided detailed
    observations of Jupiter and its moons. The Juno mission (2011-present) is
    currently studying Jupiter's atmosphere, magnetic field, and interior structure.`,
    `${URL_GIF}/gif2_5.gif`,
    `● Saturn:
    - Features: Saturn is famous for its stunning ring system, composed of countless
    icy particles. It is the second-largest planet and is primarily made up of hydrogen
    and helium. Saturn has a prominent hexagonal storm at its north pole, known as
    the Saturnian hexagon.
    - Moons: Saturn has over 82 known moons. Titan, its largest moon, is of particular
    interest due to its thick atmosphere, lakes of liquid methane, and the possibility of
    organic chemistry necessary for life.
    - Notable Missions: NASA's Cassini mission (1997-2017) provided a wealth of data
    on Saturn, its rings, and moons. The Huygens probe, a part of the Cassini
    mission, successfully landed on Titan's surface in 2005, providing the first images
    and data from the moon.`,
    `${URL_GIF}/gif2_6.gif`,
    `● Uranus:
    - Features: Uranus is the seventh planet from the Sun and is unique in that it is
    tilted on its side, with its axis of rotation almost parallel to its orbit. It has a
    predominantly hydrogen and helium atmosphere, with traces of methane that
    give it a bluish-green appearance.
    - Moons: Uranus has 27 known moons, including Titania, Oberon, Umbriel, Ariel,
    and Miranda. They vary in size and have diverse surface features.-
    - Notable Missions: Uranus has not been visited by a dedicated mission yet.
    However, NASA's Voyager 2 spacecraft flew by Uranus in 1986, providing
    valuable data and close-up images of the planet and its moons.`,
    `${URL_GIF}/gif2_7.gif`,
    `● Neptune:
    - Features: Neptune is the eighth planet from the Sun and is similar in composition
    to Uranus. It has a dense atmosphere primarily composed of hydrogen, helium,
    and traces of methane, which gives it a deep blue color.
    - Moons: Neptune has 14 known moons, including Triton, which is the
    seventh-largest moon in the solar system. Triton is notable for its retrograde orbit
    and active geysers.
    - Notable Missions: Like Uranus, Neptune has not been visited by a dedicated
    mission. However, NASA's Voyager 2 spacecraft also flew by Neptune in 1989,
    providing close-up observations and images of the planet, its rings, and moons.`,
    `${URL_GIF}/gif2_8.gif`,
    ],
    slides: [
      `${URL_SLIDES}/slide_les2_1.jpg`,
      `${URL_SLIDES}/slide_les2_2.jpg`,
      `${URL_SLIDES}/slide_les2_3.jpg`,
      `${URL_SLIDES}/slide_les2_4.jpg`,
      `${URL_SLIDES}/slide_les2_5.jpg`,
      `${URL_SLIDES}/slide_les2_6.jpg`,
      `${URL_SLIDES}/slide_les2_7.jpg`,
    ],
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  {
    lesson: `Lesson 2. Our Solar System and Beyond`,
    lectures: `Dwarf planets, asteroids, and comets`,
    text1: `Dwarf planets, asteroids, and comets are three types of celestial objects that can be found in
    our solar system. While they share some similarities, they also have distinct characteristics that
    set them apart from one another.`,
    image: `${URL_IMAGES}/Eng_img2_2.webp`,
    text_arr:[
    `● Dwarf Planets:
    Dwarf planets are similar to planets in terms of their shape and composition, but they are
    smaller in size. They are spherical in shape and orbit the Sun directly. The International
    Astronomical Union (IAU) currently recognizes five dwarf planets in our solar system:
    Pluto, Eris, Haumea, Makemake, and Ceres. These objects are located beyond the orbit
    of Neptune in a region called the Kuiper Belt (Pluto, Eris, Haumea, and Makemake) or in
    the asteroid belt between Mars and Jupiter (Ceres).`,
    `${URL_GIF}/gif2_9.gif`,
    `● Asteroids:
    Asteroids are rocky and metallic objects that orbit the Sun. They are remnants from the
    early formation of the solar system and are primarily found in the asteroid belt, a region
    located between the orbits of Mars and Jupiter. Asteroids come in various sizes, ranging
    from small rocks to large bodies several hundred kilometers in diameter. The largest
    asteroid in the solar system is Ceres, which is also classified as a dwarf planet.`,
    `${URL_GIF}/gif2_10.gif`,
    `● Comets:
    Comets are icy bodies composed of dust, rock, and frozen gasses such as water, carbon
    dioxide, methane, and ammonia. They have highly elliptical orbits that can take them
    from the outer reaches of the solar system to closer regions near the Sun. As a comet
    approaches the Sun, the heat causes the ice to vaporize, creating a glowing coma (a
    cloud of gas and dust) around the nucleus and often forming a tail that points away from
    the Sun. Comets originate from two main regions: the Kuiper Belt and the Oort Cloud,
    which are located far beyond the orbit of Neptune.`,
    `${URL_GIF}/gif2_11.webp`
    ],
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  {
    lesson: `Lesson 2. Our Solar System and Beyond`,
    lectures: `Exoplanets and the search for habitable worlds`,
    text1: `Exoplanets, also known as extrasolar planets, are planets that orbit stars other than our Sun.
    The discovery and study of exoplanets have revolutionized our understanding of the universe
    and the potential for habitable worlds beyond our solar system. Here's some information about
    exoplanets and the search for habitable worlds:`,
    text_arr:[
     `${URL_GIF}/gif2_12.gif`,
    `Detection of Exoplanets:`,
    `1. Exoplanets are detected using various methods, including:`,
    `a. Radial Velocity Method: This method detects exoplanets by measuring the tiny wobbles
    induced in a star's motion due to the gravitational pull of an orbiting planet.`,
    `b. Transit Method: The transit method detects exoplanets by observing the periodic
    dimming of a star's brightness as a planet passes in front of it, blocking a fraction of the
    star's light.`,
    `c. Direct Imaging: This method involves directly capturing the light from an exoplanet. It is
    challenging due to the vast distances involved and the brightness of the host star.`,
    `d. Gravitational Microlensing: This method detects exoplanets by observing the slight
    bending of light from a background star caused by the gravitational influence of a planet
    and its host star.`,
    `e. Astrometry: Astrometry measures the tiny wobbles in a star's position caused by the
    gravitational tug of an orbiting planet.`,
    `2. Habitable Worlds:`,
    `The search for habitable worlds focuses on identifying exoplanets that could potentially support
    life as we know it. Habitable worlds are often defined as those within the "habitable zone" of a
    star, also known as the "Goldilocks zone." It is the region around a star where conditions are just
    right for liquid water to exist on the planet's surface, a crucial ingredient for life as we know it.`,
    `3. Kepler Mission:`,
    `The Kepler space telescope, launched by NASA in 2009, played a pivotal role in the discovery
    of thousands of exoplanets. Its primary goal was to determine the frequency of Earth-sized
    exoplanets in or near the habitable zone of stars. Kepler's observations led to the discovery of
    numerous potentially habitable exoplanets and provided valuable data for further exploration.`,
    `4. Exoplanet Characterization:`,
    `Scientists use various methods to characterize exoplanets, including analyzing their
    atmospheres through spectroscopy. By studying the composition of exoplanet atmospheres,
    scientists can look for signs of life-supporting gases, such as oxygen, methane, and water
    vapor.`,
    `5. Future Missions:`,
    `Numerous space missions are planned or underway to advance the study of exoplanets. These
    include the James Webb Space Telescope (JWST), set to launch in 2021, which will providedetailed observations of exoplanet atmospheres.
    Additionally, the Transiting Exoplanet Survey
    Satellite (TESS) mission, launched in 2018, continues to discover new exoplanets, including
    those within the habitable zones of their host stars.`],
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  {
    lesson: `Lesson 2. Our Solar System and Beyond`,
    lectures: `Recent discoveries and missions in our solar system`,
    text1: `There have been several notable discoveries and missions in our solar system in recent years.
    Here are some of the significant ones:`,
    text_arr: [
    `1. Mars Perseverance Rover (2020):`,
    `NASA's Perseverance rover landed on Mars in February 2021. Its primary mission is to
    search for signs of ancient microbial life, collect rock samples for future return to Earth,
    and demonstrate technologies for future human exploration of Mars. The rover is
    equipped with advanced instruments, including cameras, spectrometers, and a drill to
    gather samples.`,
    `${URL_GIF}/gif2_13.gif`,
    `2. OSIRIS-REx (2018-2021):`,
    `The OSIRIS-REx (Origins, Spectral Interpretation, Resource Identification, Security,
    Regolith Explorer) mission by NASA successfully reached the near-Earth asteroid Bennu
    in 2018. It spent several years studying Bennu's composition, shape, and orbit before
    collecting a sample in October 2020. The sample will be returned to Earth in 2023,
    providing valuable insights into the early solar system and the origins of life.`,
    `${URL_GIF}/gif2_14.gif`,
    `3. New Horizons (2015):`,
    `NASA's New Horizons spacecraft conducted a historic flyby of Pluto in July 2015,
    providing the first detailed images and data of this distant dwarf planet. The mission
    revealed stunning geological features, such as mountains, plains, and a thin
    atmosphere. New Horizons is now continuing its journey deeper into the Kuiper Belt to
    study another Kuiper Belt Object (KBO) named Arrokoth.`,
    `${URL_GIF}/gif2_15.gif`,
    `4. Juno (2016):`,
    `Launched by NASA in 2011, the Juno spacecraft arrived at Jupiter in July 2016. Juno's
    primary objective is to study Jupiter's composition, gravity, magnetic field, and polarmagnetosphere. It has provided unprecedented insights into Jupiter's atmosphere,
    revealing its storms, auroras, and complex cloud patterns. Juno is also studying Jupiter's
    deep interior to understand its formation and evolution.`,
    `${URL_GIF}/gif2_16.gif`,
    `5. Cassini (1997-2017):`,
    `Although the Cassini mission ended in 2017, its discoveries continue to have a profound
    impact. Cassini, a joint mission between NASA, ESA, and the Italian Space Agency,
    spent 13 years studying Saturn and its moons. It provided breathtaking images of
    Saturn's rings, discovered new moons, explored the hydrocarbon lakes on Saturn's
    moon Titan, and observed plumes erupting from the moon Enceladus, suggesting a
    subsurface ocean`,
    `${URL_GIF}/gif2_17.gif`,
    ],
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  
  // LESSON 3
  {
    lesson: `Lesson 3. Rockets and Propulsion Systems`,
    lectures: `Principles of rocket propulsion`,
    text1: `Provide an in-depth understanding of rocket propulsion principles, including Newton's
    laws of motion and the conservation of momentum.`,
    image: `${URL_IMAGES}/Eng_img3_1.png`,
    text2:`Rocket propulsion is the principle by which rockets generate thrust to propel themselves through
    space. It relies on Newton's third law of motion, which states that for every action, there is an
    equal and opposite reaction. The basic principles of rocket propulsion are as follows:`,
    text_arr_margin: [
    `1. Newton's Third Law: As mentioned above, rocket propulsion is based on Newton's Third
    Law, which states that when a rocket expels high-speed exhaust gasses in one direction,
    an equal and opposite force is exerted on the rocket in the opposite direction, propelling
    it forward.`,
    `2. Conservation of Momentum: Rocket propulsion is also governed by the principle of
    conservation of momentum. The total momentum of a system remains constant unless
    acted upon by an external force. When a rocket expels mass at high velocity, it
    experiences an equal and opposite change in momentum, resulting in the forward
    acceleration of the rocket.`,
    `3. Thrust: Thrust is the force that propels a rocket forward. It is generated by the expulsion
    of high-speed exhaust gasses from the rocket's engines. The magnitude of the thrust
    depends on the mass flow rate of the exhaust gasses and the velocity at which they are
    expelled.,`,
   ` 4. Combustion: Rocket engines operate through the process of combustion. The propellant
    is ignited in the combustion chamber, where it undergoes a chemical reaction, releasing
    a large amount of energy in the form of hot, expanding gasses. This process generates
    high pressures and temperatures, which are directed through a nozzle to accelerate the
    gasses and create thrust.`,
    `5. Propellant: Rockets require propellant, which is a combination of fuel and oxidizer. The
    fuel provides the energy, while the oxidizer supplies the oxygen needed for combustion.
    The propellant is stored in the rocket's tanks and is expelled through the engine nozzle
    during combustion.`,
   ` 6. Nozzle Design: The shape and design of the rocket nozzle play a crucial role in rocket
    propulsion. Nozzles are typically conical or bell-shaped. They are designed to expand
    the exhaust gasses to supersonic speeds, increasing the velocity and momentum of the
    expelled gasses and maximizing thrust.`,
   ` 7. Specific Impulse: Specific impulse (Isp) is a measure of the efficiency of a rocket engine.
    It represents the amount of thrust produced per unit of propellant consumed. Higher
    specific impulse engines are more efficient and can provide greater thrust for a given
    amount of propellant.`],
    text_arr: [
    `These principles form the foundation of rocket propulsion and are utilized in various rocket
    systems, including those used for space exploration, satellite launches, and interplanetary
    missions.`,
   ` Also important, Tsiolkovsky's rocket formula, also known as Tchaikovsky's formula, is a
    mathematical formula that relates the change in rocket velocity (Δv) to the ratio of the effective
    exhaust velocity (Ve) of its propulsion system to the initial mass (m0) to the final mass of the
    rocket. (mf).`,
    `The formula is expressed as follows.`,
    `Δv = Ve * ln(m0/mf).`,
    `The speed of the system cannot exceed the speed of the projectile.`,
    `Tchaikovsky's formula is of great importance in the field of rocket and space research. It
    provides important insights into the fundamental physics and limitations of rocket propulsion
    systems (we have a rocket engine limitation). Using the formula, engineers and scientists can
    analyze the performance characteristics of a rocket, determine the amount of propellant
    required for a desired change in velocity, and optimize the design and performance of rocket
    engines.`,
    `Rocket limitations include payload capacity, fuel limitations, cost, safety considerations, limited
    reusability, environmental impact, technical complexities, and distance/travel.`
  ],
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  {
    lesson: `Lesson 3. Rockets and Propulsion Systems`,
    lectures: `Types of rocket engines and their applications`,
    text1: `Explain different types of rocket engines, such as solid rocket motors and liquid engines,
    and their applications in space travel.
    There are several types of rocket engines used in various applications. Here are some of the
    common types and their applications:`,
    text_arr: [
    `1. Solid Rocket Engines:
    ● Description: Solid rocket engines use a solid propellant, which is a mixture of fuel
    and oxidizer. The propellant is in a solid state and burns in a controlled manner.
    ● Applications: Solid rocket engines are commonly used as boosters in space
    launch vehicles, military missiles, fireworks, and model rockets. They provide
    high thrust and simplicity of design but lack throttle control and reusability.`,
    `2. Liquid Rocket Engines:
    ● Description: Liquid rocket engines use liquid propellants, typically liquid fuel and
    liquid oxidizer. The propellants are stored separately and are combined and
    ignited in the combustion chamber.
    ● Applications: Liquid rocket engines are used in various space launch vehicles,
    such as the SpaceX Falcon 9 and the Atlas V. They offer good thrust control, can
    be throttled or shut down, and are suitable for reusable systems.`,
    `3. Hybrid Rocket Engines:
    ● Description: Hybrid rocket engines combine features of both solid and liquid
    rocket engines. They use a solid fuel and a liquid or gaseous oxidizer, typically
    stored in separate phases.
    ● Applications: Hybrid rocket engines have potential applications in space tourism,
    small satellite launches, and experimental rocketry. They offer some of the
    advantages of both solid and liquid systems, such as simplicity and safety.
    4. Bipropellant Rocket Engines:
    ● Description: Bipropellant rocket engines use two separate liquid propellants: one
    for fuel and one for oxidizer. They are usually fed into the combustion chamber in
    a controlled manner.
    ● Applications: Bipropellant engines are widely used in spacecraft propulsion
    systems, including satellite thrusters, space probes, and interplanetary missions.
    They offer good performance and controllability.`,
    `5. Monopropellant Rocket Engines:
    ● Description: Monopropellant rocket engines use a single liquid propellant,
    typically a highly reactive chemical compound, such as hydrazine. The propellant
    decomposes or reacts with a catalyst to produce thrust.
    ● Applications: Monopropellant engines are commonly used in attitude control
    systems for satellites, space probes, and maneuvering thrusters on spacecraft.
    They offer simplicity, compactness, and ease of use.`,
    `6. Electric Rocket Engines:
    ● Description: Electric rocket engines, also known as ion thrusters or electric propulsion
    systems, use electric fields or electromagnetic forces to accelerate and expel ions or
    other charged particles.
    ● Applications: Electric rocket engines are utilized in long-duration space missions, such
    as deep space probes and satellite station-keeping. They provide high specific impulse
    but lower thrust compared to chemical rockets.`],
    slides: [
      `${URL_SLIDES}/slide_les3_1.jpg`,
      `${URL_SLIDES}/slide_les3_2.jpg`,
      `${URL_SLIDES}/slide_les3_3.jpg`,
      `${URL_SLIDES}/slide_les3_4.jpg`,
      `${URL_SLIDES}/slide_les3_5.jpg`,
      `${URL_SLIDES}/slide_les3_6.jpg`,
      `${URL_SLIDES}/slide_les3_7.jpg`,
      `${URL_SLIDES}/slide_les3_8.jpg`
    ],
    text2: `These are just a few examples of rocket engine types, and there are other variations and niche
    designs used for specific applications. Each type of engine has its advantages and trade-offs,
    and their selection depends on factors such as mission requirements, cost, reliability, and
    desired performance characteristics.`,
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  {
    lesson: `Lesson 3. Rockets and Propulsion Systems`,
    lectures: `Rocket design and optimization`,
    text1: `Discuss the design and optimization of rockets, including aspects like fuel efficiency,
    staging, and payload capacity.Rocket design and optimization involve a multidisciplinary approach that combines engineering,
    physics, and mathematics to create efficient and high-performance rocket systems.`,
    image: `${URL_IMAGES}/das3_2.jpg`,
    text2:`Here are some key aspects of rocket design and optimization:`,
    text_arr_margin: [
    `1. Mission Requirements: The first step in designing a rocket is to clearly define the mission
    requirements. This includes payload capacity, desired orbit, range, and other
    mission-specific factors. Understanding these requirements is crucial for determining the
    size, performance, and capabilities of the rocket.`,
    `2. Performance Parameters: Several performance parameters need to be considered
    during the design process. These include specific impulse (Isp), thrust-to-weight ratio,
    payload fraction, and delta-v (velocity change) requirements. Optimizing these
    parameters ensures efficient propulsion and maximizes the rocket's capabilities.`,
    `3. Structural Design: Rocket structures need to be designed to withstand the extreme
    forces experienced during launch and flight. This involves selecting appropriate
    materials, designing load-bearing structures, and considering factors such as weight,
    structural integrity, and aerodynamic stability.`,
    `4. Aerodynamics: Aerodynamic design plays a critical role in reducing drag and optimizing
    the rocket's flight performance. The shape of the rocket, including the nose cone and
    fins, must be carefully designed to minimize air resistance and improve stability.
    Computational fluid dynamics (CFD) simulations are often employed to optimize
    aerodynamic characteristics.`,
    `When designing a rocket shape for optimal aerodynamic performance, key factors to
    consider include nose cone shape, body diameter, and fin design. A flat nose cone
    reduces drag, while a consistent body diameter and fins help maintain stability in flight.`,
    `5. Propulsion System: The choice of propulsion system, whether solid, liquid, hybrid, or
    electric, greatly influences rocket design. Factors such as thrust, specific impulse, fuel
    efficiency, and operational flexibility need to be considered. The engine configuration,
    combustion chamber design, nozzle shape, and propellant selection all contribute to
    optimizing the propulsion system.`,
    `6. Mass Optimization: Minimizing the overall mass of the rocket is crucial for achieving
    higher performance and efficiency. This involves optimizing the design of structural
    components, using lightweight materials, and implementing efficient manufacturing
    techniques. Reducing mass improves the payload fraction and allows for greater
    maneuverability.`,
    `7. Thermal Management: Rockets generate significant heat during operation, particularly in
    the combustion chamber and nozzle. Effective thermal management is vital to prevent
    overheating and structural damage. Cooling systems, insulation, and thermal protection
    materials are employed to optimize heat transfer and maintain structural integrity.`,
    `8. Control and Guidance Systems: Rockets require precise control and guidance to achieve
    the desired trajectory and mission objectives. Designing and integrating control systems,
    including thrust vector control, reaction control systems, and guidance algorithms, are
    essential for achieving accurate and stable flight.`,
    `9. Safety and Reliability: Rocket design must prioritize safety and reliability. This involves
    rigorous testing, failure analysis, redundancy in critical systems, and adherence to strict
    engineering standards. Reliability is particularly important in manned missions and
    commercial launch services.`,
    `10. Iterative Optimization: Rocket design is an iterative process that involves continuous
    refinement and optimization based on testing, simulations, and data analysis. Various
    design parameters are adjusted and evaluated to improve performance and meet
    mission requirements.`],
    text3:`Advanced computational modeling, simulations, and optimization techniques are extensively
    used to analyze and refine rocket designs. These tools enable engineers to evaluate numerousdesign iterations, identify trade-offs, and optimize performance and efficiency before physical
    prototypes are built.`,
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  {
    lesson: `Lesson 3. Rockets and Propulsion Systems`,
    lectures: `Future developments in rocket technology`,
    text1: `Explore futuristic concepts in rocket technology, such as reusable rockets and electric
    propulsion systems.`,
    image: `${URL_IMAGES}/das3_3.jpg`,
    text2:`The field of rocket technology is continuously evolving, and several future developments are
    expected to shape the future of space exploration and commercial spaceflight. Here are some
    areas of ongoing research and potential advancements in rocket technology:`,
    text_arr_margin: [
    `1. Reusable Rockets: Reusability is a significant focus in rocket technology. SpaceX's
    Falcon 9 and Falcon Heavy have demonstrated successful reusable rocket stages,
    significantly reducing launch costs. Further advancements in reusable rocket technology,
    such as rapid turnaround times and increased reliability, are expected to drive down
    costs and enable more frequent space missions.`,
    `2. Advanced Propulsion Systems: Research is being conducted on advanced propulsion
    systems that can offer higher efficiency and faster travel times. Examples include ion
    propulsion, nuclear propulsion, and solar sails. These technologies could enable faster
    interplanetary travel and reduce mission durations.`,
    `3. Green Propellants: Traditional rocket propellants often contain hazardous and toxic
    materials. The development of green propellants aims to replace these with more
    environmentally friendly alternatives. Green propellants offer benefits such as increased
    safety, reduced toxicity, and improved handling.`,
    `4. Electric Propulsion: Electric propulsion systems, such as ion thrusters and Hall effect
    thrusters, are gaining attention for long-duration space missions. These systems provide
    high specific impulse and are ideal for applications like deep space probes and satellite
    station-keeping.`,
    `5. Additive Manufacturing: Additive manufacturing, or 3D printing, is revolutionizing rocket
    manufacturing. It allows for complex and optimized designs, reduces manufacturing
    costs, and enables rapid prototyping. Continued advancements in additive
    manufacturing techniques and materials will lead to further innovation in rocket design
    and production.`,
    `6. In-Situ Resource Utilization (ISRU): ISRU involves using resources found on celestial
    bodies, such as the Moon or Mars, for rocket propellant production. This reduces the
    need for Earth-based propellant resupply and opens up possibilities for sustained human
    presence in space.`,
    `7. Advanced Materials: The development of lightweight and high-strength materials is
    crucial for improving rocket performance. Carbon composites, ceramics, and other
    advanced materials are being researched to reduce weight, increase structural integrity,
    and withstand extreme temperatures.`,
    `8. Advanced Guidance and Navigation Systems: Advancements in guidance, navigation,
    and control systems will enhance the precision and autonomy of rockets. This includes
    improved trajectory optimization, autonomous landing systems, and enhanced situational
    awareness.`,
    `9. Small Satellite Launch Systems: The demand for launching small satellites is growing
    rapidly. Dedicated small satellite launch systems, such as small-scale reusable rockets
    or air-launched systems, are being developed to provide cost-effective and flexible
    access to space for small payloads.`,
    `10. Lunar and Mars Exploration: Future developments in rocket technology will be driven by
    the goal of establishing a sustained human presence on the Moon and Mars. Thisincludes developing crewed spacecraft, long-duration life support systems, and
    transportation architectures to support interplanetary missions.`],
    text3: `These are just a few areas of ongoing research and development in rocket technology. As the
    industry advances, we can expect further breakthroughs, innovations, and new applications that
    will shape the future of space exploration and commercial spaceflight.`,
    button: ['Back', 'Next', 'Back to the questionnaire'],
  
    created_at: new Date().toISOString(),
  },
  
  // LESSON 4

  {
    lesson: `Lesson 4. Spacecraft and Missions`,
    lectures:`Types of spacecraft and their functions`,
    text1: `Here are some different types of spacecraft, including satellites, space shuttles, and crewed
    capsules, along with their functions and capabilities.`,
    text2:`Satellites are spacecraft that orbit around celestial bodies like the Earth, providing various
    services such as communication, weather monitoring, navigation, scientific research, and more.`,
    text_arr_margin: [
      `1. Satellites:`,
      `Introduce different types of spacecraft, including satellites, space shuttles, and crewed
    capsules, and discuss their specific functions and capabilities.`,
      `${URL_GIF}/gif4_1.gif`,
      `They can be categorized into several types:`,
      `● Communication Satellites: These satellites relay signals for telephone, television,
      internet, and other communication purposes.`,
      `${URL_IMAGES}/Eng_img4_1.jpg`,
      `Here are some key features and functions of communication satellites:`,
      `1. Orbit and Coverage: Communication satellites are placed in geostationary orbit (GEO) or
      medium Earth orbit (MEO) to ensure continuous coverage of specific regions or the
      entire Earth. GEO satellites orbit at an altitude of approximately 36,000 kilometers,
      remaining fixed relative to the Earth's surface, providing continuous coverage over a
      specific geographic area. MEO satellites are placed at a lower altitude, enabling them to
      cover larger areas of the Earth's surface.`,
      `2. Signal Relay: Communication satellites receive signals from ground-based transmitters
      and relay them to other ground-based receivers. These signals can carry various types
      of communication, including voice, data, video, and internet services. The satellite acts
      as a bridge between the sender and receiver, allowing communication across long
      distances, such as international calls or global internet connectivity.`,
      `3. Multiple Transponders: Communication satellites are equipped with multiple
      transponders, which are essentially radio transceivers that receive signals from one
      frequency band, amplify them, and then retransmit them back to Earth on a different
      frequency band. Each transponder operates on a specific frequency band, allowing
      multiple communication channels to coexist simultaneously.`,
      `4. Beamforming: Many modern communication satellites utilize advanced antenna systems
      and beamforming techniques. By focusing the satellite's signal into specific regions on
      the Earth's surface, beamforming enables more efficient use of satellite resources and
      provides higher signal strength and better quality for users within the coverage area.`,
      `5. Service Diversity: Communication satellites support a wide range of services, including
      television broadcasting, internet connectivity, telephone communications, video
      conferencing, and data transmission for businesses and governments. They enable
      global connectivity, connecting people in remote locations and facilitating international
      communication.`,
      `6. Inter-Satellite Links: Some advanced communication satellite systems employ
      inter-satellite links (ISLs) to establish direct communication between satellites. ISLs
      enable the transfer of data between satellites, allowing for faster and more efficient
      communication, as well as network redundancy and improved system resilience.`,
      `${URL_IMAGES}/img4_2.jpg`,
      `● Weather Satellites: They monitor weather patterns, collect atmospheric data, and
      provide images used for weather forecasting.`,
      `Here are some key features and functions of weather satellites:`,
      `1. Remote Sensing: Weather satellites use various remote sensing instruments to observe
      the Earth's atmosphere from space. These instruments include visible, infrared, and
      microwave sensors that measure different aspects of the atmosphere, such as cloud
      cover, temperature, humidity, precipitation, wind patterns, and atmospheric composition.`,
      `2. Imagery and Data Collection: Weather satellites capture high-resolution images and data
      of the Earth's surface, clouds, and weather systems. These images provide
      meteorologists with valuable information to track storms, monitor weather conditions,
      and make accurate weather forecasts. Satellites continuously capture images and data,
      allowing for near-real-time monitoring of weather phenomena.`,
      `3. Global Coverage: Weather satellites are placed in geostationary or polar orbits to
      achieve global coverage. Geostationary weather satellites, positioned at an altitude of
      approximately 36,000 kilometers above the equator, provide continuous monitoring of a
      specific region, such as a continent or an ocean. Polar-orbiting satellites orbit the Earthfrom pole to pole, providing global coverage by capturing images and data of the entire
      planet during each orbit.`,
      `4. Weather Forecasting and Analysis: The data collected by weather satellites, along with
      other ground-based and airborne observations, are used to develop weather models and
      forecast future weather conditions. Meteorologists analyze satellite imagery and data to
      track the movement of weather systems, identify atmospheric patterns, and predict the
      development of storms, hurricanes, cyclones, and other weather events.`,
      `5. Severe Weather Monitoring: Weather satellites play a crucial role in monitoring and
      tracking severe weather phenomena, such as tropical storms, hurricanes, tornadoes,
      and thunderstorms. By providing real-time images and data, satellites assist in early
      detection, tracking, and prediction of these hazardous weather conditions, enabling
      timely warnings and evacuation measures to be implemented.`,
      `6. Climate Studies: Long-term observations from weather satellites contribute to climate
      studies and research. By collecting data on temperature trends, sea ice extent, cloud
      cover changes, and other climate-related parameters, satellites help scientists
      understand and monitor climate patterns, identify climate change indicators, and assess
      the impact of human activities on the Earth's climate system.`,
      `Weather satellites have significantly improved our ability to understand and predict weather
      patterns, enhancing our preparedness for severe weather events and enabling more accurate
      weather forecasts.`,
      `● Navigation Satellites: Examples include the Global Positioning System (GPS) satellites
      that enable precise positioning and navigation on Earth.`,
      `${URL_GIF}/gif4_2.gif`,
      `The Global Navigation Satellite System (GNSS) is a global network of navigation satellites that
      enable precise positioning and navigation on Earth. The most well-known GNSS is the Global
      Positioning System (GPS). Here are some key features and functions of navigation satellites:`,
      `1. Satellite Constellations: Navigation satellites operate in constellations, which consist of
      multiple satellites positioned in specific orbits around the Earth. The satellites in a
      constellation work together to provide continuous coverage and ensure that multiple
      satellites are visible from any point on the Earth's surface at any given time.`,
      `2. Precise Positioning: Navigation satellites use highly accurate atomic clocks and transmit
      signals that receivers on Earth can use to calculate their precise position. By receiving
      signals from multiple satellites, the receiver can determine its latitude, longitude, altitude,and velocity through a process called trilateration. This allows users to accurately
      determine their position anywhere on the Earth's surface.`,
      `3. Navigation and Wayfinding: Navigation satellites enable users to determine their
      direction and navigate to specific destinations. With accurate position information,
      navigation systems can provide turn-by-turn directions, suggest optimal routes, and
      calculate estimated arrival times. Navigation systems are widely used in various sectors,
      including aviation, maritime, automotive, surveying, and outdoor recreational activities.`,
      `4. Timing and Synchronization: Navigation satellites provide highly precise time signals that
      can be used for synchronization purposes. Accurate timekeeping is crucial for
      applications such as telecommunications, financial transactions, power grid
      synchronization, scientific experiments, and network synchronization for various
      industries.`,
      `5. Multi-GNSS Compatibility: In addition to GPS, there are other global navigation satellite
      systems, including Russia's GLONASS, China's BeiDou, and the European Union's
      Galileo. Many receivers are designed to be compatible with multiple GNSS systems,
      allowing users to access signals from multiple constellations simultaneously. This
      improves positioning accuracy, availability, and reliability, especially in areas with limited
      visibility to specific satellites.`,
      `6. Augmentation Systems: Navigation satellites can be augmented by ground-based
      systems to enhance their accuracy and reliability. Augmentation systems use additional
      ground stations to monitor satellite signals, correct any errors or distortions, and
      broadcast these corrections to users. Examples include the Wide Area Augmentation
      System (WAAS) used in the United States and the European Geostationary Navigation
      Overlay Service (EGNOS) used in Europe.`,
      `Navigation satellites have revolutionized the way we navigate and position ourselves on Earth.
      They provide accurate, real-time positioning information that has become indispensable in
      numerous sectors, enabling safer and more efficient transportation, precise surveying and
      mapping, seamless communication and synchronization, and a wide range of location-based
      services.`,
      `● Scientific Satellites: These spacecraft are equipped with scientific instruments to study
      different aspects of the universe, such as space telescopes like Hubble or the upcoming
      James Webb Space Telescope.`,
      `Here are some key features and functions of scientific satellites:`,
      `1. Remote Sensing and Imaging: Scientific satellites capture high-resolution images and
      data using various sensors, including cameras, spectrometers, and radar systems.
      These sensors help study Earth's land, atmosphere, oceans, ice caps, and vegetation,providing valuable insights into climate change, environmental monitoring, and natural
      resource management.`,
      `2. Space Telescopes: Space telescopes are scientific satellites equipped with powerful
      telescopic systems that observe celestial objects from beyond the Earth's atmosphere.
      They enable astronomers to study distant galaxies, stars, planets, and other celestial
      phenomena with unprecedented clarity and sensitivity. Examples include the Hubble
      Space Telescope, the Chandra X-ray Observatory, and the upcoming James Webb
      Space Telescope.`,
      `3. Astronomical Research: Scientific satellites dedicated to astronomical research observe
      various wavelengths of light, including visible, ultraviolet, X-ray, and gamma-ray
      radiation. By studying these different wavelengths, astronomers can investigate the
      properties of stars, galaxies, black holes, supernovae, and other cosmic phenomena,
      helping to unravel the mysteries of the universe.`,
      `4. Earth System Science: Scientific satellites play a crucial role in Earth system science,
      which studies the interactions between different components of our planet, including the
      atmosphere, hydrosphere, biosphere, and geosphere. These satellites provide data on
      climate patterns, weather forecasting, ocean currents, ice cover, atmospheric
      composition, and other Earth system parameters, aiding in understanding Earth's
      processes and changes.`,
      `5. Planetary Exploration: Satellites designed for planetary exploration are sent to explore
      other celestial bodies in our solar system, such as planets, moons, asteroids, and
      comets. These missions involve orbiters, landers, rovers, and flyby spacecraft that
      capture images, analyze surface composition, study geological features, and search for
      signs of past or present life. Examples include the Mars rovers, Voyager missions, and
      the Cassini-Huygens mission to Saturn.`,
      `6. Particle and Radiation Detectors: Scientific satellites carry particle detectors and
      radiation sensors to measure cosmic rays, solar particles, and other forms of radiation in
      space. These measurements help scientists understand the effects of space weather on
      Earth, study particle physics, and investigate the space environment for potential
      hazards to astronauts and spacecraft.`],
      text3: `Scientific satellites are essential tools for advancing our knowledge of the universe, Earth, and
      the processes that shape them. They provide invaluable data that contributes to scientific
      research, helps monitor the environment, and expands our understanding of the cosmos.`,
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  {
    lesson: `Lesson 4. Spacecraft and Missions`,
    lectures: `2. Space Shuttles:`,
    text1: `Space shuttles are reusable spacecraft designed for carrying crew members and payloads into
    space and then returning them to Earth. The primary function of space shuttles, such as theretired NASA Space Shuttle program, was to transport astronauts, satellites, and other cargo to
    and from low Earth orbit (LEO). They played a crucial role in the construction of the International
    Space Station (ISS) and were used for scientific experiments, satellite deployment, and repairs.`,
    text_arr_margin:[
    `${URL_GIF}/gif4_3.gif`,
    `Space shuttles were a type of spacecraft that were used by NASA, the United States' space
    agency, for human spaceflight missions from 1981 to 2011. Here are some key features and
    functions of space shuttles:`,
    `1. Reusability: One of the defining features of space shuttles was their reusability. Unlike
    traditional rockets that are discarded after launch, space shuttles were designed to be
    reusable, with the capability of flying multiple missions. After completing a mission, the
    shuttles would re-enter Earth's atmosphere, glide to a landing, and undergo
    refurbishment for subsequent flights.`,
    `2. Crew and Cargo: Space shuttles were capable of carrying a crew of astronauts, typically
    ranging from five to seven members. In addition to the crew, shuttles could transport a
    significant amount of cargo to space, including satellites, scientific instruments,
    equipment, and supplies. They played a vital role in the deployment of satellites and the
    construction and resupply of the International Space Station (ISS).`,
    `3. Orbit and Maneuverability: Space shuttles operated in low Earth orbit (LEO), typically at
    an altitude of about 300 to 400 kilometers. They were equipped with maneuvering
    engines and thrusters that allowed them to change their orbit, rendezvous with other
    spacecraft, and perform various orbital maneuvers. This maneuverability was crucial for
    satellite deployment, space station rendezvous, and other mission objectives.`,
    `4. Payload Bay: The space shuttle's payload bay was located at the rear of the orbiter and
    could accommodate large payloads, such as satellites or modules for the ISS. The bay
    had a size of about 18 meters in length, 4.6 meters in width, and 18 meters in volume. It
    provided a pressurized and controlled environment for payloads during launch, orbit, and
    reentry.`,
    `5. Laboratory and Experimentation: Space shuttles had a crew cabin that provided living
    quarters for astronauts during their missions. The crew cabin also served as a laboratory
    for conducting experiments in microgravity, studying the effects of space on various
    materials, biological samples, and human physiology. This capability contributed to
    scientific research and advancements in multiple fields.`,
    `6. Return to Earth: After completing their missions in space, space shuttles would re enter
    Earth's atmosphere. They would experience high temperatures and extreme forces due
    to atmospheric friction, and then deploy parachutes to slow their descent. Finally, theywould glide to a landing on a runway, like an airplane, allowing for easy retrieval,
    refurbishment, and preparation for subsequent missions.`],
    image: `${URL_IMAGES}/img4_3.jpg`,
    text2:`Space shuttles were instrumental in advancing human spaceflight and supporting various
    scientific, technological, and engineering achievements. They played a significant role in the
    construction and servicing of the ISS, conducted research in microgravity, deployed satellites,
    and contributed to the development of technologies for future space exploration endeavors.`,
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  {
    lesson: `Lesson 4. Spacecraft and Missions`,
    lectures: `3. Crewed Capsules:`,
    text1:`Crewed capsules are spacecraft specifically designed to transport astronauts safely to and from
    space. These capsules are usually launched atop a rocket and are capable of reentry and
    landing. Examples of crewed capsules include:`,
    image:`${URL_IMAGES}/Eng_img4_4.png`,
    text_arr_margin:[`● Soyuz: The Soyuz spacecraft, developed by Russia, has been in service since the 1960s
    and is used to transport crews to and from the ISS.`,
    `● Crew Dragon: Developed by SpaceX for NASA's Commercial Crew Program, Crew
    Dragon is a crewed capsule that can carry astronauts to the ISS and return them safely
    to Earth.`,
    `● Starliner: Boeing's Starliner spacecraft is another crewed capsule designed for
    transporting astronauts to and from the ISS.`,
    `${URL_GIF}/gif4_4.gif`,
  ],
    text2:`Crewed capsules are essential for crewed missions, allowing astronauts to travel to space and
    return safely, facilitating space exploration, scientific research, and the maintenance of space
    stations.`,
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  {
    lesson: `Lesson 4. Spacecraft and Missions`,
    lectures: `Orbital mechanics and trajectory calculations`,
    text1: `Explain orbital mechanics and the calculations involved in planning and executing space
    missions, including launch windows, transfer orbits, and rendezvous.`,
    image: `${URL_IMAGES}/Eng_img_orbit.jpg`,
    text2:`Orbital mechanics is the branch of aerospace engineering that deals with the motion of objects
    in space under the influence of gravitational forces. Understanding orbital mechanics is crucial
    for planning and executing space missions, including determining launch windows, designing
    transfer orbits, and achieving rendezvous between spacecraft.`,
    text_arr_margin:[
    `${URL_GIF}/gif4_5.gif`,
    `Here are some key concepts and calculations involved in orbital mechanics for space missions:`,
    `1. Kepler's Laws of Planetary Motion: Johannes Kepler formulated three laws that describe
    the motion of planets and other objects in orbit around the Sun. These laws are essential
    for understanding the geometry and dynamics of orbits. They include the law of ellipses
    (orbit shapes), the law of equal areas (speed and position along the orbit), and the law of
    harmonies (relationship between the period and distance of an orbit).`,
    `2. Launch Windows: A launch window refers to a specific time period during which a
    spacecraft can be launched to reach its intended destination with minimal energy
    requirements. Launch windows are determined by considering the relative positions and
    velocities of the launch site, the target destination (e.g., a planet or a space station), and
    the orbital mechanics involved in the transfer.`,
    `3. Transfer Orbits: Transfer orbits are used to move a spacecraft from one orbit to another
    or to transfer it between celestial bodies, such as Earth and Mars. The most common
    transfer orbits are Hohmann transfers, which are efficient and require the least amount of
    energy. Calculations involved in determining transfer orbits include determining the
    required delta-v (change in velocity) and calculating the timing and positioning of the
    burn maneuvers.
    It is also important to know about the Hohmann transfer orbit. A Hohmann transfer orbit
    is a fuel-efficient method used to transfer spacecraft between two circular orbits in
    space. A transfer orbit is an elliptical path that intersects both the initial and target orbits.`,
    `To perform a Hohmann transfer, the spacecraft first burns its engines along the initial
    circular orbit to raise its apoapsis (the highest point of the elliptical orbit). This transfer
    burn boosts the spacecraft's energy and moves it into transfer orbit.`,
    `When the spacecraft reaches the apoapsis of the transfer orbit, it performs another
    engine burn, known as a circular burn. This burn is performed at apoapsis to transform
    an elliptical orbit into a circular orbit, but now at a higher altitude. The circular orbit
    becomes the target orbit.`,
    `By carefully timing this propellant burn, the spacecraft can efficiently achieve the desired
    transfer between initial and target orbits. The Hohmann transmission minimizes fuel
    consumption by taking advantage of the natural dynamics of the celestial bodies.`,
    `Overall, the Hohmann transfer orbit provides a practical and fuel-efficient technique for
    transferring spacecraft between circular orbits.`,
    `${URL_IMAGES}/Eng_img4_5.jpg`,
    `4. Delta-V Calculations: Delta-v is the change in velocity required to achieve a specific
    orbital change or transfer. It is a crucial parameter in orbital mechanics calculations as it
    determines the energy required for various maneuvers. Calculating delta-v involves
    considering factors such as the gravitational forces of celestial bodies, the desired
    change in orbit, and the characteristics of the spacecraft's propulsion system.`,
    `The first cosmic velocity, also known as the orbital velocity, is the minimum velocity
    required for an object to reach a stable orbit around a celestial body. It is significant in
    space exploration because it enables spacecraft to maintain a stable and continuous
    presence in space.`,
    `The first cosmic velocity from Earth is approximately 11.2 kilometers per second (or
    about 25,020 mph). This means that if an object such as a spacecraft reaches or
    exceeds this speed, it can overcome Earth's gravitational pull and enter space.`,
    `It is important to note that spacecraft speeds can vary depending on the mission and
    trajectory. Once a spacecraft reaches its first space velocity, it can continue to accelerate
    through additional propulsion or gravity assist maneuvers to reach higher speeds, such
    as those required for interplanetary travel or deep space exploration.`,
    `${URL_IMAGES}/Eng_img4_6.jpg`,
    `5. Rendezvous and Docking: Rendezvous involves bringing two spacecrafts together in
    space, while docking refers to the physical connection between them. Achieving
    rendezvous and docking requires precise calculations to match the orbits, relative
    velocities, and timing of the spacecraft. Various techniques, including phasing orbits,
    coelliptic rendezvous, and Hohmann transfers, are used to plan and execute rendezvous
    and docking maneuvers.`,
    `6. Orbital Transfers and Plane Changes: Orbital transfers involve changing the inclination
    or plane of an orbit. This is often necessary to match the plane of a target destination or
    to achieve specific mission objectives. Calculations for orbital transfers and plane
    changes involve determining the required delta-v and timing the maneuvers
    appropriately.`,
    `7. Gravitational Assists: Gravitational assists, also known as gravity slingshots or planetary
    flybys, utilize the gravitational pull of a celestial body to alter the trajectory and speed of
    a spacecraft. This technique is commonly used to gain or lose velocity and adjust the
    trajectory of interplanetary missions. Calculations for gravitational assists involve precisecalculations of the spacecraft's trajectory and the gravitational influence of the target
    body.`,
    `Orbits can be classified based on their shape and distance from Earth. Here are the main types
    of orbits:`,
    `${URL_IMAGES}/Eng_img4_7.png`,
    `● Low Earth Orbit (LEO). These orbits are relatively close to Earth's surface, typically
    ranging from about 160 kilometers (100 mi) to 2,000 kilometers (1,200 mi) above Earth.
    LEO is commonly used for satellite communications, Earth observation, and space
    missions such as the International Space Station (ISS).`,
    `● Middle Earth Orbit (MEO). MEO is an intermediate orbit with altitudes ranging from about
    2,000 km (1,200 mi) to 35,786 kilometers (22,236 mi). Global Navigation Satellite
    Systems (GNSS) such as GPS and GLONASS use MEO for positioning and timing
    services.`,
    `● Geostationary Orbit (GEO). GEO is a high Earth orbit approximately 35,786 kilometers
    (22,236 miles) above the equator. GEO orbiting satellites appear stationary relative to an
    observer on Earth because they follow the Earth's rotation. They are commonly used for
    communication, weather monitoring and broadcasting.`,
    `● High Elliptical Orbit (HEO). HEOs have very elongated elliptical paths, with the satellite's
    altitude changing significantly during its orbit. These orbits are used for special purposes,
    to receive communication with polar order.●Sun Synchronous Orbit (SSO). SSO is a subpolar orbit that maintains a fixed angle
    between the satellite's orbital plane and the Sun. This orbit is often used by Earth
    observation satellites to image and monitor consistent illumination conditions.`,
    `● Molniya orbit. A Molniya orbit is a type of highly elliptical orbit with a high inclination. It is
    primarily used by Russian communications satellites to cover high latitude regions, such
    as northern parts of Russia, where other orbits have limited coverage.`,
    `${URL_IMAGES}/img4_8.png`,
    ],
    text3:`These calculations and concepts of orbital mechanics are crucial for mission planning,
    spacecraft trajectory design, and executing complex space missions. They enable scientists and
    engineers to optimize fuel consumption, achieve mission objectives, and ensure the safe and
    efficient operation of space missions.`,
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  {
    lesson: `Lesson 4. Spacecraft and Missions`,
    lectures: `Interplanetary missions and space probes`,
    text_arr_margin: [
    `Explore notable interplanetary missions and space probes, such as Voyager, Cassini, or
    the recent Perseverance rover on Mars.`,
    `Here are some notable interplanetary missions and space probes that have contributed to our
    understanding of the solar system:`,
    `1. Voyager: The Voyager spacecraft, specifically Voyager 1 and Voyager 2, were launched
    in 1977 with the primary mission of exploring the outer planets of our solar system.
    These twin probes provided detailed observations and data about Jupiter, Saturn,
    Uranus, and Neptune. Voyager 1 became the first human-made object to reach
    interstellar space in 2012. The Voyager missions have provided invaluable information
    about the planets, their moons, and the outer regions of the solar system.`,
    `${URL_IMAGES}/img4_9.jpg`,
    `2. Cassini-Huygens: The Cassini-Huygens mission was a collaboration between NASA, the
    European Space Agency (ESA), and the Italian Space Agency (ASI). The spacecraft,
    named Cassini, was launched in 1997 and arrived at Saturn in 2004. It conducted a
    comprehensive study of Saturn, its rings, and its moons. The Huygens probe, developed
    by ESA, successfully landed on Saturn's moon Titan in 2005, providing valuable insights
    into its atmosphere and surface. The Cassini mission concluded in 2017 with a
    deliberate plunge into Saturn's atmosphere.`,
    `${URL_IMAGES}/img4_10.jpg`,
    `3. Mars Rovers (e.g., Perseverance, Curiosity): The Mars rovers have been instrumental in
    studying the red planet's geology, atmosphere, and potential habitability. NASA's
    Perseverance rover, launched in 2020, is the latest addition to the Mars exploration fleet.
    It is equipped with advanced scientific instruments, including cameras, spectrometers,
    and a drill, to search for signs of past microbial life, collect samples for future return to
    Earth, and test technologies for future human missions.`,
     `${URL_IMAGES}/img4_11.jpg`,
    `4. New Horizons: Launched in 2006, the New Horizons spacecraft completed a historic
    flyby of Pluto and its moons in 2015, providing the first close-up images and data of this
    distant dwarf planet. Following the Pluto encounter, New Horizons continued its journey
    into the Kuiper Belt, where it flew by a small Kuiper Belt object called Arrokoth in 2019.
    The mission has provided valuable insights into the composition and characteristics of
    these icy, distant worlds.`,
    `${URL_IMAGES}/img4_12.jpg`,
    `5. Rosetta: The European Space Agency's Rosetta mission was launched in 2004 with the
    goal of studying the comet 67P/Churyumov-Gerasimenko. In 2014, the mission achieved
    a historic milestone by successfully deploying the Philae lander onto the comet's
    surface. The mission provided detailed data about the comet's composition, structure,
    and activity, shedding light on the origin and evolution of comets and the early solar
    system.
    6. Mariner and Pioneer Missions: The Mariner and Pioneer missions, conducted by NASA
    in the 1960s and 1970s, were pioneering ventures in interplanetary exploration. Mariner
    2 became the first spacecraft to fly by another planet (Venus) in 1962, and Mariner 4
    successfully conducted the first flyby of Mars in 1965, sending back close-up images of
    the planet's surface. The Pioneer missions explored various aspects of the solar system,
    including studying asteroids, the Moon, and Jupiter.`,
    `${URL_IMAGES}/img4_13.jpg`
    ],
    text1:`These missions, among many others, have significantly expanded our knowledge of the solar
    system, providing detailed observations, measurements, and imagery of celestial bodies and
    helping us understand their geological features, atmospheres, and potential for life. They have
    paved the way for future missions and continue to inspire new discoveries and scientific
    advancements.`,
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
  {
    lesson: `Lesson 4. Spacecraft and Missions`,
    lectures: `Case study: Mars rovers and their scientific findings`,
    text1: `Conduct a detailed case study on Mars rovers, examining their scientific instruments,
    discoveries, and the challenges of exploring the red planet.`,
    text2: `Mars rovers have been key players in the exploration of the red planet, providing valuable
    scientific data and expanding our understanding of Mars. Let's examine the scientific
    instruments carried by Mars rovers, highlight some of their significant discoveries, and explore
    the challenges associated with exploring Mars.`,
    text_arr_margin: [
    `Scientific Instruments:`,
    `1. Cameras: Mars rovers are equipped with various types of cameras, including panoramic
    cameras, navigation cameras, and microscopic imagers. These instruments capture
    high-resolution images of the Martian surface, allowing scientists to study the geology,
    morphology, and composition of rocks, soil, and features.`,
    `2. Spectrometers: Rovers carry spectrometers to analyze the chemical composition of
    Martian rocks and soil. The instruments employ different techniques, such as X-ray
    spectroscopy, alpha particle X-ray spectrometry, and laser-induced breakdown
    spectroscopy, to determine the elemental composition and mineralogy of samples.`,
    `3. Drill and Sample Collection: Mars rovers, such as Curiosity and Perseverance, feature a
    drill system to collect rock and soil samples. These samples are then analyzed by
    various onboard instruments, including spectrometers and microscopic imagers, to
    provide detailed information about the planet's geology, potential for past habitability, and
    clues about the planet's history.`,
    `4. Environmental Sensors: Rovers are equipped with environmental sensors to monitor the
    Martian atmosphere, including temperature, pressure, humidity, and wind speed. These
    measurements contribute to our understanding of Martian weather patterns, atmospheric
    dynamics, and the potential for supporting human exploration in the future.`,
    `Discoveries:`,
    `1. Evidence of Past Water: Mars rovers have uncovered compelling evidence of past water
    on the planet's surface. Spirit and Opportunity, part of NASA's Mars Exploration Rover
    mission, discovered ancient rock formations, sedimentary structures, and mineral
    deposits that indicate the presence of liquid water in Mars' past. Curiosity rover's findings
    in Gale Crater also suggest that the area once contained a lake.`,
    `2. Organic Compounds: Both Curiosity and Perseverance have detected organic
    molecules, including complex carbon compounds, in Martian rocks. These discoveries
    provide tantalizing clues about the potential for past or present life on Mars, although the
    exact origin of these organic molecules is still under investigation.`,
    `3. Methane Variations: The presence of methane in the Martian atmosphere has been a
    topic of significant interest. Curiosity has detected methane fluctuations, and the
    measurements from both orbiters and rovers have shown seasonal and localized
    variations in methane levels. These findings have sparked further investigations into the
    sources and processes involved in methane production on Mars.`,
    `4. Ancient Habitability: The rovers have provided evidence that Mars was once a potentially
    habitable environment. Discoveries of minerals indicative of past water, the identificationof organic molecules, and the detection of essential elements for life have collectively
    contributed to our understanding of the planet's past habitability.`,
    `Challenges:`,
    `1. Distance and Communication: Mars is an average distance of about 225 million
    kilometers from Earth. The significant time delay in communication, ranging from a few
    minutes to several hours, poses challenges for real-time control of rovers and data
    transmission. Mission planning and execution must take into account these
    communication constraints.`,
    `2. Extreme Martian Environment: Mars presents harsh conditions for rovers, including
    extreme temperatures, high radiation levels, and the presence of abrasive dust.
    Engineers must design rovers to withstand these conditions and ensure the longevity of
    the mission.`,
    `3. Mobility and Terrain: Mars has diverse terrains, including rocky surfaces, steep slopes,
    and sandy regions. Rovers need to be able to navigate and traverse these challenging
    terrains while avoiding obstacles. The design of rovers' wheels and mobility systems
    plays a critical role in their ability to navigate effectively.`,
    `4. Limited Lifespan and Power: Mars rovers rely on solar panels for power generation,
    which poses challenges during dust storms or when the panels get covered in dust over
    time. Additionally, the lifespan of the rovers is limited by factors such as wear and tear,
    aging of components, and the accumulation of dust on vital instruments.`
    ],
    text3: `Despite these challenges, Mars rovers have made remarkable scientific contributions and
    continue to provide valuable data about the red planet. They have revolutionized our
    understanding of Mars' past habitability, water history, and potential for life, paving the way for
    future missions, including sample return and human exploration.`,
    button: ['Back', 'Next', 'Back to the questionnaire'],
    created_at: new Date().toISOString(),
  },
])
  
  await pg('questions_en').insert([

    // Lesson 1
    {
      lesson:'Lesson 1. Introduction to Space Exploration',
      question:'What was the first artificial satellite launched into space and which country launched it?',
      incorrectAnswer:['The first artificial satellite launched into space was called Starship and it was launched by India.','The first artificial satellite launched into space was called "Cosmic Hermes" and it was launched by the country of Atlantis.','The first artificial satellite launched into space was called Sputnik Apollo and it was launched by America.'],
      correctAnswer:'The first artificial satellite launched into space was called Sputnik 1, and it waslaunched by the Soviet Union.',
      background:`${URL_IMAGES}/quiz.gif`,
      button: [ "You collected", "Courses","Next","Go Back"],
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 1. Introduction to Space Exploration',
      question:'Who was the first person to travel into space and orbit the Earth?',
      incorrectAnswer:['The first person to travel into space and orbit the Earth was Captain Kirk from Star Trek.','The first person to travel into space and orbit the Earth was the famous astronaut Amelia Earhart.','The first person to travel into space and orbit the Earth was female cosmonaut Valentina Tereshkova.'],
      correctAnswer:'The first person to travel into space and orbit the Earth was Soviet cosmonaut Yuri Gagarin.',
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 1. Introduction to Space Exploration',
      question:'Which mission was the first human landing on the moon, and who were the astronauts involved?',
      incorrectAnswer:['The mission that marked the first human landing on the Moon was Apollo 13. The astronauts involved were Tom Hanks, Kevin Bacon and Bill Paxton.','The mission that marked the first human landing on the Moon was called Moonwalkers United. The astronauts involved were Neil Armstrong, John Lennon, Van der Waals.','The mission that marked the first landing of humans on the Moon was called "Full Moon". The astronauts involved were James Baghyan, Harutyun Kiviryan and Albert Tserents.'],
      correctAnswer:'The mission that marked the first time humans landed on the Moon was Apollo 11. The astronauts involved were Neil Armstrong, Buzz Aldrin and Michael Collins.',
      background:`${URL_IMAGES}/quiz.gif`,
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 1. Introduction to Space Exploration',
      question:`Which mission was the first human landing on the moon, and who were the astronauts
      involved?`,
      incorrectAnswer:[`The mission that marked the first human landing on the Moon was Apollo 13. The
      astronauts involved were Tom Hanks, Kevin Bacon and Bill Paxton.`,
      `The mission that marked the first human landing on the Moon was called
      Moonwalkers United. The astronauts involved were Neil Armstrong, John
      Lennon, Van der Waals.`,
      `The mission that marked the first landing of humans on the Moon was called "Full
      Moon". The astronauts involved were James Baghyan, Harutyun Kiviryan and
      Albert Tserents.`],
      correctAnswer:`The mission that marked the first time humans landed on the Moon was Apollo
      11. The astronauts involved were Neil Armstrong, Buzz Aldrin and Michael
      Collins.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 1. Introduction to Space Exploration',
      question:`How did the space race between the US and the Soviet Union affect technological
      progress on Earth?`,
      incorrectAnswer:[`The space race between the US and the Soviet Union had no effect on
      technological progress on Earth. It was all a made up story created by
      Hollywood.`,
      `The space race between the US and the Soviet Union had no effect on
      technological progress on Earth. It was just a friendly competition.`,
      `The space race between the US and the Soviet Union led to a change in Earth's
      orbit.`],
      correctAnswer:`The Space Race between the United States and the Soviet Union had a major
      impact on technological advancements on Earth, particularly in aerospace
      engineering, computer technology, and telecommunications.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 1. Introduction to Space Exploration',
      question:`What was the purpose of the Apollo program and what were its main achievements?`,
      incorrectAnswer:[`The main goal of the Apollo program was to find and collect moon rocks that
      could be used as building materials on Earth.`,
      `The main goal of the Apollo program is to repopulate Mars.`,
      `The main goal of the Apollo program was to study the crust of Mars.`],
      correctAnswer:`The main goal of the Apollo program was to land humans on the Moon and return
      them safely to Earth. His major achievements include the Apollo 11 lunar landing
      and subsequent missions that expanded our knowledge of lunar geology.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 1. Introduction to Space Exploration',
      question:`What was the result of the launch of Sputnik in 1957 and how did it affect international
      relations?`,
      incorrectAnswer:[`The result of Sputnik's launch in 1957 was that it sparked an international frenzy
      of people trying to launch their own satellites from their backyards.`],
      correctAnswer:`The Soviet Union's launch of Sputnik in 1957 was a major milestone in space
      exploration. It sparked concern in the United States about Soviet technological
      advances and led to a strong emphasis on science and technology education, as
      well as the creation of NASA.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 1. Introduction to Space Exploration',
      question:`What role did the space shuttle program play in space exploration, and what were some
      of its notable missions?`,
      incorrectAnswer:[`The main purpose of the space shuttle program was to supply astronauts with
      food.`,
      `The main goal of the space shuttle program was to study distant stars.`,
      `The main goal of the space shuttle program was intergalactic exploration.`],
      correctAnswer:`The space shuttle program played a crucial role in space exploration because it
      provided a reusable spacecraft for a variety of missions. Notable missions
      include the deployment of satellites, maintenance of the Hubble Space
      Telescope, and construction of the International Space Station.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 1. Introduction to Space Exploration',
      question:`What are the current trends in space exploration and how do they contribute to our
      understanding of the universe?`,
      incorrectAnswer:[`Current trends in space exploration include the search for extraterrestrial
      civilizations through intergalactic communication.`,
      `Current trends in space exploration include transporting minerals and materials
      from space to Earth.`,
      `Current trends in space exploration include searching for space treasure maps to
      discover hidden caches of space gold.`],
      correctAnswer:`Current trends in space exploration include the exploration of Mars, the study of
      exoplanets, the development of reusable rockets, and the increasing involvement
      of private companies in space missions. These trends contribute to our
      understanding of space science and the search for extraterrestrial life.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 1. Introduction to Space Exploration',
      question:`What are the future prospects and goals for space exploration, particularly crewed
      missions and colonization?`,
      incorrectAnswer:[`Future prospects for space exploration include hosting the Space Olympics on
      the Moon.`,
      `Future prospects for space exploration include the elimination of Black Holes.`,
      `Future prospects for space exploration include the collection of space debris on
      the planet Mercury.`],
      correctAnswer:`Future prospects for space exploration include manned missions to Mars, the
      establishment of permanent human settlements on other celestial bodies such as
      the Moon or Mars, and continued exploration of the outer reaches of our solar
      system. The goal is to expand human presence beyond Earth and further unravel
      the mysteries of the universe.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },

    // Lesson 2
    {
      
      lesson:'Lesson 2. Our Solar System and Beyond',
      question:`Which planet in our solar system has the most moons and how many are there?`,
      incorrectAnswer:[`Saturn has the most moons in our solar system with a total of 82 known moons.`,
      `Uranus has the most moons in our Solar System, with a total of 150 known`,
      `Mars has the most moons in our solar system with a total of 20 known moons.`],
      correctAnswer:`Jupiter has the most moons in our solar system with a total of 79 known moons.`,
      background:`${URL_IMAGES}/quiz.gif`,
      button: [ "You collected", "Courses","Next",],
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 2. Our Solar System and Beyond',
      question:`What is the main feature of Saturn's rings and how are they formed?`,
      incorrectAnswer:[`Saturn's rings are made of solid gold particles deposited by ancient alien
      civilizations.`,
      `Saturn's rings are made of ice balls that gradually melt.`,
      `Saturn's rings are made up of debris from ancient alien spacecraft that crashed
      into the planet.`],
      correctAnswer:`Saturn's rings are made up of countless tiny particles of ice and rock that orbit
      the planet. They are believed to be the remains of comets, asteroids, or shattered
      satellites.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 2. Our Solar System and Beyond',
      question:`Which planet has the largest volcano in the solar system and what is its name?`,
      incorrectAnswer:[`Venus has the largest volcano in the solar system called Mount Olympus. It is
      also the tallest volcano, reaching a height of about 16 miles (26 kilometers).`,
      `Venus has the largest volcano in the solar system called Vesuvius. It is also the
      tallest volcano, reaching a height of about 20 miles (32 kilometers).`,
      `Earth has the largest volcano in the solar system called Mount Everest. It is also
      the tallest volcano, reaching a height of about 29,029 feet (8,848 meters).`],
      correctAnswer:`Mars has the largest volcano in the solar system called Olympus Mons. It is also
      the tallest volcano, reaching a height of about 13.6 miles (22 kilometers).`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 2. Our Solar System and Beyond',
      question:`What is the definition of a dwarf planet, and how many are officially recognized by the
      International Astronomical Union (IAU)?`,
      incorrectAnswer:[`A dwarf planet is a celestial body that orbits the Sun, has an irregular shape, and
      has cleared its orbit of other debris. There are currently 8 known dwarf planets.`,
      `A dwarf planet is a celestial body that orbits the Sun, has an irregular shape, and
      is inhabited by extraterrestrial beings.`,
      `A dwarf planet is a celestial body that orbits the moon, has an irregular shape,
      and has a translucent outer shell. There are currently 15 known dwarf planets.`],
      correctAnswer:`A dwarf planet is a celestial body that orbits the Sun and has a spherical shape.
      There are currently 5 known dwarf planets: Pluto, Eris, Haumea, Makemake and
      Ceres.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 2. Our Solar System and Beyond',
      question:`What is the difference between an asteroid and a comet?`,
      incorrectAnswer:[`Asteroids are made of frozen gasses, and comets are made of solid rock and
      metal.`,
      `Asteroids are giant cosmic diamonds, and comets are interstellar spherical
      bodies.`,
      `Asteroids are giant cone-shaped bodies that float in space, while comets are
      made of golden rocks and are irregularly distributed in space.`],
      correctAnswer:`Asteroids are rocky and metallic bodies that orbit the Sun, mostly found in the
      asteroid belt between Mars and Jupiter, while comets are icy bodies that originate
      in the outer regions of the Solar System.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 2. Our Solar System and Beyond',
      question:`Which spacecraft visited the dwarf planet Pluto in 2015, and what were the significant
      discoveries made during the mission?`,
      incorrectAnswer:[`The spacecraft that visited Pluto in 2015 was the European Space Agency's
      Rosetta mission. It discovered that Pluto has a thick atmosphere and is suitable
      for human colonization.`,
      `The spacecraft that visited Pluto in 2015 was a time-traveling robot named Buzz.
      Was able to study the terrain and send some pictures.`,
      `The spacecraft that visited Pluto in 2015 was the Pluto spacecraft that failed its
      mission.`],
      correctAnswer:`The spacecraft that visited Pluto in 2015 was NASA's New Horizons mission. It
      revealed that Pluto has a complex geology, including mountains, valleys, and a
      thin atmosphere.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 2. Our Solar System and Beyond',
      question:`What is an exoplanet and how are they discovered by astronomers?`,
      incorrectAnswer:[`An exoplanet is a planet that orbits a star in our solar system. They are
      discovered by capturing images of distant stars and identifying planets based on
      their color.`],
      correctAnswer:`An exoplanet is a planet that orbits a star outside our solar system. They are
      detected using various methods, such as the transit method (detecting the
      dimming of a star's light when a planet passes in front of it) and the radial velocity
      method (measuring the wobbles of the star caused by the gravitational pull of an
      orbiting planet).`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 2. Our Solar System and Beyond',
      question:`What are the characteristics that make a planet potentially habitable?`,
      incorrectAnswer:[`The main characteristic that makes a planet habitable is its proximity to the star,
      and closer planets are more suitable for life.`,
      `The main characteristic that makes the planet habitable is the presence of
      special crystal balls that can indicate life.`,
      `The main characteristic that makes a planet habitable is the presence of
      single-celled organisms, as the first examples of life.`],
      correctAnswer:`Characteristics that make a planet potentially habitable include being in its star's
      "habitable zone" (where conditions for liquid water are possible), having a stable
      atmosphere, and having a solid surface.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 2. Our Solar System and Beyond',
      question:`What is the closest exoplanet to our solar system, and what do we know about its
      possible habitability?`,
      incorrectAnswer:[`The closest exoplanet to our solar system is Proxima Centauri A, which is
      approximately 2 light-years from Earth. It has a breathable atmosphere and has
      already been explored by human missions.`,
      `The closest exoplanet to our solar system is Proxima Centauri B, which is known
      to be inhabited by intelligent space penguins.`,
      `The closest exoplanet to our solar system is Proxima Centauri, which has already
      been colonized by humanity.`],
      correctAnswer:`The closest exoplanet to our solar system is Proxima Centauri B, which orbits the
      star Proxima Centauri. It is located approximately 4.24 light years from Earth. Its
      potential habitability is still being studied, but it is located in the habitable zone of
      its star.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 2. Our Solar System and Beyond',
      question:`Which mission will successfully land a Mars rover named Persistence in 2021 and what
      is its primary goal?`,
      incorrectAnswer:[`The mission that successfully landed a rover named Perseverance on Mars in
      2021 was SpaceX's Starship mission. Its primary goal is to establish a human
      colony on Mars.`,
      `The mission, which successfully landed a rover named Persistence on Mars in
      2021, was a collaboration between NASA and a team of intergalactic treasure
      hunters. Its main purpose is to find ancient alien artifacts.`,
      `The mission, which successfully landed a rover named Perseverance on Mars in
      2021, was led by a team of Martian superheroes. Its main purpose is to protect
      the galaxy from alien invasions.`],
      correctAnswer:`The mission that successfully landed the Perseverance rover on Mars in 2021
      was NASA's Mars 2020 mission. Its main purpose is to search for signs of
      ancient microbial life, to study the geology of the planet.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
   
  
    // Lesson 3
    // Lesson 3. Rockets and Propulsion Systems
    {
      lesson:'Lesson 3. Rockets and Propulsion Systems',
      question:`What is Newton's third law of motion and how does it relate to the motion of rockets?`,
      incorrectAnswer:[`Newton's third law of motion states that for every action there is an equal and
      opposite reaction. In the context of rocket propulsion, this means that as the
      rocket expels gasses at high speed in one direction (propulsion), it pulls in the
      same direction (reaction), propelling the rocket forward.`,
      `Newton's third law of motion states that for every action there is an equal and
      opposite reaction. In the context of rocket propulsion, this means that as the
      rocket expels gasses at high speed in one direction (propulsion), it receives a
      gravitational force in the opposite direction (reaction), propelling the rocket
      forward.`,
      `Newton's third law is not true for rocket motion.`],
      correctAnswer:`Newton's third law of motion states that for every action there is an equal and
      opposite reaction. In the context of rocket propulsion, this means that as the
      rocket expels gasses at high speed in one direction (propulsion), it receives
      thrust in the opposite direction (reaction), propelling the rocket forward.`,
      background:`${URL_IMAGES}/quiz.gif`,
      button: [ "You collected", "Courses","Next",],
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 3. Rockets and Propulsion Systems',
      question:'What are the two main types of rocket propulsion systems and how do they differ?',
      incorrectAnswer:[`The two main types of rocket propulsion systems are solid rocket engines and
      liquid rocket engines. Solid rocket engines use a single liquid propellant, such as
      liquid hydrogen, while liquid rocket engines use separate solid propellants, such
      as a mixture of fuel and oxidizer.`,
     `The two main types of rocket propulsion systems are solid rocket engines and
      liquid rocket engines. Solid rocket engines use a gaseous propellant such as
      compressed air, while liquid rocket engines use a combination of liquid fuel and a
      magnetic field for propulsion.`,
      `The two main types of rocket propulsion systems are solid rocket engines and
      gas rocket engines. Solid rocket engines use a single solid propellant, such as a
      mixture of fuel and oxidizer, while gas rocket engines use a gaseous propellant,
      such as compressed air.`],
      correctAnswer:`The two main types of rocket propulsion systems are solid rocket engines and
      liquid rocket engines. Solid rocket engines use a single solid propellant, such as
      a mixture of fuel and oxidizer, while liquid rocket engines use separate liquid
      propellants, such as liquid oxygen and liquid hydrogen or kerosene.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 3. Rockets and Propulsion Systems',
      question:'What is the fundamental difference between solid rocket engines and liquid rocket engines?',
      incorrectAnswer:[`The fundamental difference between solid rocket engines and liquid rocket
      engines lies in their propellant composition. Solid rocket engines use multiple
      liquid propellants, while liquid rocket engines use a single solid propellant.`],
      correctAnswer:`The fundamental difference between solid rocket engines and liquid rocket
      engines lies in their propellant composition. Solid rocket motors have a fixed
      propellant mixture that cannot fail or disengage after ignition, while liquid rocket
      motors allow precise control of thrust by adjusting the flow rate of the liquid
      propellants.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 3. Rockets and Propulsion Systems',
      question:'What is the Tsiolkovsky rocket formula and what does it represent?',
      incorrectAnswer:[`The Tchaikovsky formula for rockets is a mathematical equation that describes
      the relationship between the color of a rocket's exterior paint and its propulsion
      efficiency. It states that the higher the saturation and brightness of the paint color,
      the greater the thrust generated by the rocket.`,
      `The Tchaikovsky formula for rockets is a mathematical equation that calculates
      the total amount of fuel that can be fired from a rocket. It takes into account the
      length of the rocket, the number of combustion tubes, and the explosive power of
      each combustion to determine the maximum power of the rocket.`,
      `Tchaikovsky's Rocket Formula is a piece of music composed by the famous
      composer Pyotr Ilyich Tchaikovsky. It has nothing to do with rockets or space
      exploration.`],
      correctAnswer:`The Tsiolkovsky rocket equation, also known as the Tchaikovsky formula, is a
      mathematical formula that relates the change in rocket velocity (Δv) to the ratio of
      the effective exhaust velocity (Ve) of its propulsion system to the initial mass (m0)
      to the final mass (mf) of the rocket. : The formula is expressed as follows.
      Δv = Ve * ln(m0/mf).The speed of the system cannot exceed the speed of the
      projectile.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 3. Rockets and Propulsion Systems',
      question:`What is the significance and applications of Tsiolkovsky's formula in rocketry?`,
      incorrectAnswer:[`Tchaikovsky's formula, also known as Tsiolkovsky's rocket equation, is mainly
      used in the field of classical music composition. It provides a mathematical
      representation of the relationship between musical notes and the propulsive force
      generated by rockets. By assigning specific musical tones to different phases of a
      rocket's flight, composers can create symphonies that mimic the dynamic
      movement and energy of space exploration.`],
      correctAnswer:`Tchaikovsky's formula is of great importance in the field of rocket and space
      research. It provides important insights into the fundamental physics and
      limitations of rocket propulsion systems (we have a rocket engine limitation).
      Using the formula, engineers and scientists can analyze the performance
      characteristics of a rocket, determine the amount of propellant required for a
      desired change in velocity, and optimize the design and performance of rocket
      engines.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 3. Rockets and Propulsion Systems',
      question:`What are the major limitations or challenges associated with rocket propulsion systems?`,
      incorrectAnswer:[`Rocket propulsion systems have no limitations and can carry unlimited payloads
      effortlessly. Rockets can run on any type of fuel and are not limited by specific
      fuel requirements.`],
      correctAnswer:`Rocket limitations include payload capacity, fuel limitations, cost, safety
      considerations, limited reusability, environmental impact, technical complexities,
      and distance/travel.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 3. Rockets and Propulsion Systems',
      question:'What are the main factors to consider when designing a rocket shape for optimal aerodynamic performance?',
      incorrectAnswer:[`When designing a rocket shape for optimal aerodynamic performance, the main
      factors to consider include the number of fins and how many of them as possible.`,
      `When designing a rocket shape for optimal aerodynamic performance, key
      factors to consider include the size and shape of the rocket windows. Larger
      windows provide better aerodynamic stability.`,
      `Air resistance and center of gravity can be ignored for optimal aerodynamic
      calculations.`],
      correctAnswer:`When designing a rocket shape for optimal aerodynamic performance, key
      factors to consider include nose cone shape, body diameter, and fin design. A flat
      nose cone reduces drag, while the appropriate body diameter and fins help
      maintain stability in flight.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 3. Rockets and Propulsion Systems',
      question:'How can the center of mass and center of pressure be optimized to ensure stable flight during ascent of a rocket?',
      incorrectAnswer:[`To ensure stable flight, the center of mass (CoM) must be located behind the
      center of pressure (CoP). This arrangement helps the rocket maintain a
      forward-leaning attitude and stabilize.`,
      `To ensure stable flight, the center of mass (CoM) must be located above the
      center of pressure (CoP). This arrangement helps the rocket maintain an upright
      position and stabilize.`,
      `To ensure a stable flight, it is enough to accurately calculate the center of
      pressure, the center of masses can be ignored.`],
      correctAnswer:`To ensure stable flight, the center of mass (CoM) must be located ahead of the
      center of pressure (CoP). This arrangement prevents the rocket from turning in
      the air. Optimization of the CoM and CoP positions can be achieved by adjusting
      the mass distribution along the length of the missile.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 3. Rockets and Propulsion Systems',
      question:'What are the emerging technologies or concepts being explored to improve missile reusability?',
      incorrectAnswer:[`Emerging technologies to improve missile reusability include the use of
      whole-missile parachute recovery systems instead of vertical landing systems.`],
      correctAnswer:`Emerging technologies to improve rocket reusability include advances in vertical
      landing systems, such as SpaceX's Falcon 9 rocket, which can autonomously
      land and be reused. In addition, continuous efforts are being made to create new
      reusable engines and provide a scientific explanation.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 3. Rockets and Propulsion Systems',
      question:'How might advances in materials science affect the design and performance of future rockets?',
      incorrectAnswer:[`Advances in materials science could lead to heavier and more durable materials
      for future missiles, which could increase their cost and increase their
      effectiveness.`,
      `Advances in materials science could lead to heavier and less heat-resistant
      materials for future missiles, which could have positive implications for their
      performance and safety.`,
      `Materials science is not essential to missile design and performance.`],
      correctAnswer:`Advances in materials science may lead to the development of lightweight yet
      strong materials such as carbon nanotubes or advanced composites. These
      materials could improve the performance of future rockets by reducing their
      weight, enabling greater payloads and increasing overall durability.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    
  
    // Lesson 4
    
    {
      lesson:'Lesson 4. Spacecraft and Missions',
      question:`What is the main function of a communication satellite?`,
      incorrectAnswer:[`Communication satellites are primarily designed for weather monitoring and
      forecasting.`,
      `Communication satellites are primarily designed to carry out scientific research in
      space.`,
      `Communications satellites are primarily designed for military surveillance.`],
      correctAnswer:`The primary function of a communications satellite is to transmit signals between
      different locations on Earth, facilitating various forms of communication such as
      television broadcasts, telephone calls, and Internet data.`,
      background:`${URL_IMAGES}/quiz.gif`,
      button: [ "You collected", "Courses","Next",],
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 4. Spacecraft and Missions',
      question:'How do weather satellites contribute to meteorological studies?',
      incorrectAnswer:[`Weather satellites contribute to forecasting and monitoring by tracking bird
      migration patterns and studying their behavior.`,
      `Weather satellites contribute to forecasting and monitoring by predicting the
      outcome of popular sporting events and providing real-time updates on game
      results.`,
      `Weather satellites contribute to weather forecasting and monitoring by monitoring
      the weather, allowing people to order their preferred climates.`],
      correctAnswer:`Weather satellites contribute to forecasting and monitoring by capturing images
      and data about the Earth's atmosphere, clouds, weather patterns, and other
      meteorological phenomena.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 4. Spacecraft and Missions',
      question:'How does gravity maneuvering work and how is it used in interplanetary missions?',
      incorrectAnswer:[`The gravity assist maneuver involves powerful thrusters to propel a spacecraft
      forward and increase its speed.`],
      correctAnswer:`A gravity-assist maneuver involves using the gravity of a celestial body to change
      the spacecraft's trajectory and increase or decrease its speed. This technique is
      used to save fuel and adjust the spacecraft's path during interplanetary missions.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 4. Spacecraft and Missions',
      question:'What is an orbit and how many types of orbits are there?',
      incorrectAnswer:[`An orbit is the path taken by an object as it revolves around another object due to
      gravitational pull. There are 8 main types of orbits: Low Earth Orbit (LEO),
      Medium Earth Orbit (MEO), Geological Orbit (GEO), High Elliptical Orbit (HEO),
      Sun-Synchronous Orbit (SSO) and Molniya Orbit, Semson Orbit and
      Intergalactic. The distances between these orbits vary, ranging from a few
      hundred kilometers to tens of thousands of kilometers.`,
      `An orbit is a shape caused by the arrangement of the stars in a constellation.
      There are 8 main types: Low Earth Orbit (LEO), Medium Earth Orbit (MEO),
      Geological Orbit (GEO), High Elliptical Orbit (HEO), Sun-Synchronous Orbit
      (SSO) and Molniya Orbit, Semson Orbit and Intergalactic.`,
      `There is no such thing as an orbit, there is an endless universe without any
      boundaries and the moons rotate irregularly.`],
      correctAnswer:`An orbit is the path taken by an object as it revolves around another object due to
      gravitational pull. There are 6 main types of orbits: Low Earth Orbit (LEO),
      Medium Earth Orbit (MEO), Geological Orbit (GEO), High Elliptical Orbit (HEO),
      Sun-Synchronous Orbit (SSO) and Molniya Orbit. The distances between these
      orbits vary, ranging from a few hundred kilometers to tens of thousands of
      kilometers.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 4. Spacecraft and Missions',
      question:`What factors affect the orbital period of a satellite?`,
      incorrectAnswer:[`Factors affecting a satellite's orbital period are the length of its orbit and the mass
      of the central body it orbits.`,
      `The color of a satellite has a direct effect on its orbital period. The orbital period is
      determined by visual appearance.`,
      `The number of solar panels on a satellite affects its orbital period. The solar
      panels are used to power the satellite and have no direct effect on its orbital
      characteristics.`],
      correctAnswer:`Factors affecting a satellite's orbital period are its orbital altitude and the mass of
      the central body it orbits.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 4. Spacecraft and Missions',
      question:`How is a Hohmann transfer orbiter used to transfer a spacecraft between two circular orbits?`,
      incorrectAnswer:[`A Hohmann transfer orbit acquires the spacecraft's thrusters in the opposite
      direction of the desired transfer, causing it to slow down and gradually enter the
      target orbit.`,
      `The spacecraft performs a series of rapid maneuvers and orbital reversals to
      transition from one circular orbit to another.`,
      `A Hohmann transfer orbit involves the spacecraft moving in a straight line
      between the initial and target orbits without the need for an engine burn.`],
      correctAnswer:`A Hohmann transfer orbiter is used to transfer a spacecraft between two circular
      orbits by raising the spacecraft into orbit with the firing of one engine and then
      rotating it to the desired location with the firing of another engine.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 4. Spacecraft and Missions',
      question:'What is the first space velocity and its significance in space exploration?',
      incorrectAnswer:[`The first space velocity is the maximum speed at which a spacecraft can travel in
      Earth orbit without entering deep space. It is significant in space exploration
      because it enables spacecraft to maintain a stable and continuous presence in
      space.`,
      `The first space velocity refers to the speed at which a spacecraft would have to
      travel to achieve weightlessness in space, allowing for experiments in
      microgravity environments.`,
      `First space velocity is the speed at which a spacecraft can achieve levitation,
      allowing it to float effortlessly through Earth's atmosphere.`],
      correctAnswer:`The first cosmic velocity (escape velocity), also known as the orbital velocity, is
      the minimum velocity required for an object to reach a stable orbit around a
      celestial body. It is significant in space exploration because it enables spacecraft
      to maintain a stable and continuous presence in space.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 4. Spacecraft and Missions',
      question:`Which space probe successfully landed on Saturn's moon Titan and what important discoveries did it make?`,
      incorrectAnswer:[`The Voyager probe successfully landed on Saturn's moon Titan and discovered
      methane lakes and rains, various surface features, complex organic molecules
      and provided valuable data on Titan's climate and weather patterns.`,
      `The Galileo probe successfully landed on Saturn's moon Titan and found new
      forms of ancient life.`,
      `The Spirit rover successfully landed on Saturn's moon and discovered a vast
      underground ocean.`],
      correctAnswer:`The Huygens probe has successfully landed on Saturn's moon Titan. It
      discovered a dense nitrogen-rich atmosphere, methane lakes and rains, various
      surface features, complex organic molecules and provided valuable data on
      Titan's climate and weather patterns.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 4. Spacecraft and Missions',
      question:'What are the main objectives of the Voyager spacecraft missions?',
      incorrectAnswer:[`The main goal of the Voyager spacecraft missions was to find ancient life forms
      on one of Saturn's moons.`,
      `The main goals of the Voyager spacecraft missions were to search for the lost
      city of Atlantis on Neptune.`,
      `The main goal of the Voyager spacecraft missions was to discover a secret
      intergalactic portal hidden in the rings of Saturn.`],
      correctAnswer:`The main goals of the Voyager spacecraft missions were to study the outer
      planets of our solar system and their moons.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },
    {
      lesson:'Lesson 4. Spacecraft and Missions',
      question:'What were the main goals of the Curiosity rover on Mars?',
      incorrectAnswer:[`The main purpose of the Curiosity rover on Mars was to search for alien life
      forms and establish contact.`,
      `Curiosity's main goal on Mars is to search for and discover Martian relics.`,
      `Curiosity's main goal on Mars was to search for and find the flag left by the Mars
      rover.`],
      correctAnswer:`The main goals of the Curiosity rover on Mars were to assess the planet's past or
      present habitability, study its geology, study the role of water, and identify
      potential living systems.`,
      background:`${URL_IMAGES}/quiz.gif`,
  
      created_at: new Date().toISOString(),
    },

  ])

  await pg('satelite_en').insert([
    {
      title: '1U satellite',
      background:`${URL_IMAGES}/giphy.gif`,

      text1: [
        `A 1U satellite is a type of nanosatellite that has a cube shape. The "1U" designation indicates
        that the satellite is 1 unit in size, with each unit measuring 10 cm x 10 cm x 10 cm (or 4 inches)`,

        `CubeSats, including 1U satellites, are characterized by their small size, lightweight structure,
        and low cost. And have gained quite a bit of recognition in recent years due to their availability,
        rapid development cycle, and wide range of applications in space exploration, scientific
        research, technology demonstration, and education.`,

        `The 1U satellite serves as the basic unit within the CubeSat standard, allowing for easy
        integration and compatibility with other CubeSat sizes such as 2U (double the size of 1U), 3U,
        6U, and even larger sizes. Each CubeSat size offers different features and capabilities
        depending on the number of units used.`

      ],
      animationCubeSat1: `${URL_VIDEOS}/Space_Minds_1.mp4`,

      text2: [
        `1U satellites can be equipped with various subsystems such as data processing subsystem,
        power subsystem, attitude determination and control subsystem, communication subsystem,
        sensors and payloads. These subsystems allow the satellite to perform specific functions, such
        as Earth observation, data collection, technology testing, or communications experiments.`,

        `It is important to note that the internal structure of a 1U CubeSat may vary depending on
        mission requirements and the specific components selected. Here are some components
        commonly found in a 1U satellite:`
      ],

      margin_text1: [
        `● Structure: The outer structure of a 1U CubeSat is typically made of aluminum or other
       lightweight materials. It provides structural integrity and protection to the internal
       components.`,

        `● Command and data handling subsystem. A data handling subsystem is an integral part
       of a satellite or spacecraft that is responsible for processing and processing data
       collected by the satellite's sensors, instruments, or payload. It plays a vital role in
       converting raw data into usable information and conveying it to the appropriate
       destination.
       The onboard computer serves as the central processing unit of the 1U satellite. It
       manages the data processing tasks, controls the various subsystems, executes software
       commands, and handles communication with other systems. The computer may consist
       of a microcontroller or a small embedded system capable of running the necessary
       software algorithms.`,

        `● Power subsystem: A 1U satellite incorporates a power supply system to generate and
       distribute electrical power. It usually includes solar panels for power generation, which
       are mounted on the external surfaces of the CubeSat, and rechargeable batteries for energy storage. Power distribution circuits ensure that the various subsystems receive
       the required power.`,

        `● Attitude determination and control subsystem: It is a crucial subsystem of a satellite or
       spacecraft that is responsible for determining and maintaining the desired orientation, or
       attitude, of the spacecraft in space. The ADCS system ensures that the satellite is
       properly oriented, pointing in the desired direction, and maintaining stability during its
       mission.`,

        `● Communication System: The communication system of a 1U CubeSat enables it to
       establish links with ground stations or other satellites. It typically includes an antenna for
       transmitting and receiving radio signals, a transceiver for modulation and demodulation
       of signals, and protocols for communication. The communication system allows the
       CubeSat to send data to the ground, receive commands, and potentially engage in data
       relay with other satellites.`,

        `● Sensors and Payload: A 1U CubeSat can carry various sensors to collect data about its
        environment or perform specific measurements. These sensors can include cameras for
        imaging, spectrometers for analyzing light, magnetometers for measuring magnetic
        fields, or environmental sensors for monitoring temperature, pressure, or radiation levels.
        Additionally, the CubeSat may host a payload, which represents the primary objective of
        the mission. The payload can include scientific instruments, technology demonstrations,
        or experiments.`

      ],
      animationCubeSat2: `${URL_VIDEOS}/Space_Minds_2.mp4`,
      text3: [
        `Launching into space.`,
        `As soon as the 1U small satellites are ready, after passing all the tests,
        they are preparing to go into orbit with a rocket.
        Once the CubeSat is ready, in the dispenser and everything is in order (including weather
        conditions and other accidents) the flight countdown starts, the rocket starts the flight with the
        countdown, after rising a few meters after the launch, the rocket takes the opposite angle to go
        into orbit. Usually, before reaching the orbit, the rocket is divided into two stages. After the
        separation, reaching the corresponding altitude of the orbit at an angle corresponding to the
        payload, the Payload sends an electrical signal to the dispenser, then the door is opened and
        the CubeSat is released into the orbit.`,

        `CubeSats, including 1U satellites, are commonly launched as secondary payloads on larger
        rockets. The primary payload is usually a larger satellite or a scientific instrument, and the
        CubeSats are accommodated within a deployer system or dispenser.`,

        'Here are some details regarding the launch process:'
      ],

      margin_text2: [
        `● Integration: Before launch, the 1U CubeSat is integrated into a deployer or dispenser
        system. The deployer is designed to hold multiple CubeSats securely and release them
        into space at the appropriate time.`,

        `● Deployment: The primary payload is launched into space aboard a rocket, and once it
        reaches the desired orbit, the deployer system releases the CubeSats. This can be
        achieved through various mechanisms, such as spring-loaded deployment, pneumatic
        ejection, or mechanical separation systems. CubeSats can be deployed simultaneously
        or sequentially, depending on the mission requirements.`,

        `● Launch Options: CubeSats can be deployed from various launch vehicles, including
        orbital rockets or resupply spacecraft bound for the International Space Station (ISS).
        Launch opportunities for CubeSats have increased in recent years, with dedicated
        CubeSat launchers and rideshare services becoming available.`
      ],

      text4: [
        `Communicating with the Space Station:`,
        `Communication between a 1U satellite and a space
        station, such as the International Space Station (ISS), is achieved through radio frequency links.
        Here are some additional details about the communication process:`
      ],

      margin_text3: [
        `● Frequency Bands: CubeSats use designated frequency bands for communication, such
        as the UHF (Ultra High Frequency) or VHF (Very High Frequency) bands. These
        frequency bands are allocated for space communication and have specific regulations.`,

        `● Ground Stations: CubeSats in LEO communicate with ground stations on Earth. Ground
        stations are equipped with large antennas, radio receivers, and transmitters to establish
        communication links with the CubeSats. These ground stations can be operated by
        educational institutions, private companies, or space agencies.`,

        `● ISS Communication: CubeSats can establish communication links with the ISS through
        the Amateur Radio Service. This service allows licensed amateur radio operators to
        communicate with the ISS and CubeSats using specific frequencies and protocols.
        CubeSats deployed from the ISS can take advantage of the station's infrastructure,
        including its antennas and communication equipment.`,

        `● Data Downlink: CubeSats transmit the data they collect or generate to the ground
        stations or the space station. The received data is then processed and analyzed for
        scientific or operational purposes. CubeSats usually transmit data in packets, which are
        received and reassembled by ground stations to reconstruct the original information.`
      ],

      animationCubeSat3: `${URL_VIDEOS}/Space_Minds_3.mp4`,

      text5: [
        `Satellite in orbit.`,
        `A 1U satellite typically operates in low Earth orbit (LEO), these orbits are
        relatively close to the Earth's surface, typically ranging from about 160 kilometers (100 mile) to
        2,000 kilometers (1200 mile) above Earth. LEO is commonly used for satellite communications,
        Earth observation, and space missions such as the International Space Station (ISS).`
      ],
      animationCubeSat4: `${URL_VIDEOS}/Space_Minds_4.mp4`,

      margin_text4: [
        `● Duration of the mission. The duration of a 1U satellite's mission may vary depending on
        factors such as its design, power supply, and intended purpose. In general, 1U satellites
        can remain in orbit for months to several years.`
      ]
    
    }
  ])


  await pg('satellite_questions_en').insert([
    {
      lesson: `1U quiz`,
      background:`${URL_IMAGES}/quiz.gif`,
      question: `What does "1U" refer to in the context of satellites?`,
      incorrectAnswer: [`"1U" refers to the standard unit of measurement for CubeSats, which represents
      a volume of 10 mm x 10 mm x 10 mm.`,
      `"1U" stands for "One Universe," implying that the satellite has the ability to
      traverse multiple dimensions and explore parallel universes.`,
      `"1U" stands for "One Universe", which implies that the satellite has distinct
      dimensions (10 cm x 10 cm x 10 cm) and the ability to explore parallel universes.`],
      correctAnswer: `"1U" refers to the standard unit of measurement for CubeSats, which represents
      a volume of 10 cm x 10 cm x 10 cm.`,
     
      button: [ "You collected", "Satellite","Next","Go Back"],
      created_at: new Date().toISOString(),
    },
    {
      lesson: `1U quiz`,
      question: `What materials are commonly used in the construction of 1U satellite structures?`,
      incorrectAnswer: [`Titanium and other lightweight, durable materials are commonly used in the
      construction of 1U satellite structures.`,
      `Iron and other heavy duty materials are commonly used in the construction of 1U
      satellite structures.`,
      `Tin and other heavy-duty materials are commonly used in the construction of 1U
      satellite structures.`],
      correctAnswer: `Aluminum and other lightweight, durable materials are commonly used in the
      construction of 1U satellite structures.`,
      background:`${URL_IMAGES}/giphy.gif`,
      button: [ "You collected", "Satellite","Next","Go Back"],
      created_at: new Date().toISOString(),
    },
    {
      lesson: `1U quiz`,
      question: `Which components are typically housed within the structure of a 1U satellite?`,
      incorrectAnswer: [`The structure of a 1U satellite typically houses only the power subsystem,
      communication subsystem and payloads.`,
      `The structure of a 1U satellite typically houses only the power subsystem,
      attitude determination and control system and payloads.`,
      `The structure of a 1U satellite typically houses data processing subsystems,
      communication subsystems, sensors and payloads.`],
      correctAnswer: `The structure of a 1U satellite typically houses data processing subsystems,
      power subsystem, attitude determination and control system, communication
      subsystem, sensors and payloads.`,
      background:`${URL_IMAGES}/giphy.gif`,
      button: [ "You collected", "Satellite","Next","Go Back"],
      created_at: new Date().toISOString(),
    },
    {
      lesson: `1U quiz`,
      question: `What is the payload in a 1U Cubesat?`,
      incorrectAnswer: [`The payload in a 1U Cubesat is the power source for the satellite.`,
      `The payload in a 1U Cubesat is the external structure or casing of the satellite.`,
      `The payload in a 1U Cubesat is the propulsion system for maneuvering the
      satellite.`],
      correctAnswer: `The payload in a 1U Cubesat refers to the primary mission equipment or
      experiment carried by the satellite. It can vary depending on the specific mission
      objectives, such as cameras for imaging, sensors for data collection, or
      communication equipment for transmitting signals.`,
      background:`${URL_IMAGES}/giphy.gif`,
      button: [ "You collected", "Satellite","Next","Go Back"],
      created_at: new Date().toISOString(),
    },
    {
      lesson: `1U quiz`,
      question: `How many stages of separation does a rocket go through before reaching orbit?`,
      incorrectAnswer: [`A rocket typically goes through three stages of separation before reaching orbit.`,
      `A rocket typically goes through four stages of separation before reaching orbit.`,
      `A rocket typically goes through one stage of separation before reaching orbit.`],
      correctAnswer: `A rocket typically goes through two stages of separation before reaching orbit.`,
      background:`${URL_IMAGES}/giphy.gif`,
      button: [ "You collected", "Satellite","Next","Go Back"],
      created_at: new Date().toISOString(),
    },
    {
      lesson: `1U quiz`,
      question: `What is the advantage of deploying 1U satellites from the International Space Station
      (ISS)?`,
      incorrectAnswer: [`Deploying 1U satellites from the ISS allows for faster communication with Earth.`,
      `Deploying 1U satellites from the ISS increases the satellites' storage capacity.`,
      `Deploying 1U satellites from the ISS allows for longer mission durations.`],
      correctAnswer: `The advantage of deploying 1U satellites from the International Space Station
      (ISS) is the opportunity to utilize the ISS's established infrastructure and
      resources, such as the robotic arm, to safely and precisely release the satellites
      into space.`,
      background:`${URL_IMAGES}/giphy.gif`,
      button: [ "You collected", "Satellite","Next","Go Back"],
      created_at: new Date().toISOString(),
    },
    {
      lesson: `1U quiz`,
      question: `How do 1U satellites establish communication links with the International Space Station
      (ISS)?`,
      incorrectAnswer: [`1U satellites establish communication links with the ISS using optical laser
      communication systems.`,
      `1U satellites establish communication links with the ISS through physical wired
      connections.`,
      `1U satellites establish communication links with the ISS using satellite phone
      networks.`],
      correctAnswer: `1U satellites establish communication links with the International Space Station
      (ISS) using radio frequency (RF) communication systems. They utilize specific
      frequencies and protocols to establish two-way communication with the ISS or
      ground-based stations.`,
      background:`${URL_IMAGES}/giphy.gif`,
      button: [ "You collected", "Satellite","Next","Go Back"],
      created_at: new Date().toISOString(),
    },
    {
      lesson: `1U quiz`,
      question: `In which orbit are the 1U satellites?`,
      incorrectAnswer: [`1U satellites are typically deployed into medium Earth orbit (MEO).`,
      `1U satellites are typically deployed into geostationary orbit (GEO).`,
      `1U satellites are typically deployed into polar orbit.`],
      correctAnswer: `1U satellites are typically deployed into low Earth orbit (LEO).`,
      background:`${URL_IMAGES}/giphy.gif`,
      button: [ "You collected", "Satellite","Next","Go Back"],
      created_at: new Date().toISOString(),
    },
    {
      lesson: `1U quiz`,
      question: `How long does a 1U satellite mission last?`,
      incorrectAnswer: [`The duration of a 1U satellite mission typically lasts a few days`,
      `The duration of a 1U satellite mission typically lasts a few hours.`,
      `The duration of a 1U satellite mission typically lasts indefinitely.`],
      correctAnswer: `The duration of a 1U satellite mission can vary, but it typically lasts between a
      few months to a couple of years.`,
      background:`${URL_IMAGES}/giphy.gif`,
      button: [ "You collected", "Satellite","Next","Go Back"],
      created_at: new Date().toISOString(),
    },
    {
      lesson: `1U quiz`,
      question: `For what purpose are 1U satellites used?`,
      incorrectAnswer: [`1U satellites are nano spacecraft used for interplanetary colonization.`,
      `1U satellites are used exclusively for intergalactic travel.`,
      `1U satellites are used for time travel experiments.`],
      correctAnswer: `1U satellites are typically used for various purposes such as Earth observation,
      technology demonstration, scientific research, communications, and educational
      missions.`,
      background:`${URL_IMAGES}/giphy.gif`,
      button: [ "You collected", "Satellite","Next","Go Back"],
      created_at: new Date().toISOString(),
    },


  ]);


  

}

async function init() {
  try {
    const options =
      process.env.NODE_ENV === "production"
        ? knexConfigs.production
        : knexConfigs.development;
    const pg = knex(options);
    await seed(pg);
    console.log("Successfully inserted all data ... ");
    process.kill(process.pid);
  } catch (error) {
    console.error(error.message);
  }
}


init();
