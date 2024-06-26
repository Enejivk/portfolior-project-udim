import someGrate from '../assets/someGrate.jpg';
import thoseInNeed from '../assets/thoseInNeed.jpg';
import graduation from '../assets/graduation.jpg'

/* IMPORT OF ICONS */
import { FaPeopleGroup } from "react-icons/fa6";
import { MdLocalAtm } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { RiMessage2Line } from "react-icons/ri";

export const aboutData = [
    {
        heading: 'Problem',
        number: '01',
        paragraph: 'Managing group finances can be a headache. Spreadsheets are prone to errors and lack transparency, making it difficult to track progress and hold everyone accountable.'
    },

    {
        heading: 'Mission',
        number: '02',
        paragraph: 'At Udim, we empower groups to achieve their financial dreams together. We offer a user-friendly platform that eliminates the confusion and human error of traditional methods.'
    },

    {
        heading: 'Vision',
        number: '03',
        paragraph: 'We envision a world where managing group finances is simple and transparent. We want to build stronger communities by fostering accountability and support within groups.'
    },
    {
        heading: 'Join the movement',
        number: '04',
        paragraph: 'We invite you to become part of a growing movement of groups taking control of their finances together. Sign up for free today and experience the power of collective support!'
    }
];

export const benefitData = [
    {
        id: 'need',
        heading: 'Help Those in Need',
        paragraph: ' Life throws unexpected curve balls. With our platform, you can be there for your group members facing financial challenges. Offer a helping hand during emergencies or unexpected situations',
        image: thoseInNeed
    },
    {
        id: 'milestones',
        heading: "Share Life's Joys & Victories",
        paragraph: "Graduation, a new baby, a dream vacation - life's milestones are even sweeter when celebrated together. Contribute to group savings for these special occasions and offer support during important life events.",
        image: graduation
    },
    {
        id: 'goal',
        heading: 'Achieve Shared Dreams, Faster',
        paragraph: "Do you and your friends or family have a common financial goal? Whether it's a dream vacation, a down payment on a house, or a new car, our platform simplifies saving together. Work as a group towards shared objectives and achieve them faster through collective effort",
        image: someGrate
    },
]

export const featureData = [
    {
        id: 'secure',
        heading: "Secure Donations",
        paragraph: "Contribute to group savings pools using secure payment methods. Track your individual contribution history and view real-time transaction records for complete transparency. Everyone in the group can see progress and feel confident about their contributions.",
        icon: MdLocalAtm
    },

    {
        id: 'effortless',
        heading: 'Effortless Group Management',
        paragraph: 'Create or join groups for various saving objectives (dream vacations, emergency funds, down payments, etc.). Set clear contribution schedules and invite friends and family to participate. Our platform simplifies group coordination, keeping everyone on track.',
        icon: FaPeopleGroup
    },
    {
        id: 'goal',
        heading: "Goal Tracking & Visualization",
        paragraph: "Monitor group saving progress towards shared goals with a user-friendly dashboard. Visualize progress with charts or progress bars, keeping everyone motivated and engaged as you inch closer to your goals. Celebrate milestones together and enjoy the satisfaction of achieving something remarkable as a group.",
        icon: BsGraphUp
    },
    {
        id: 'Communication',
        heading: "Communication & Collaboration",
        paragraph: " Foster a supportive community through in-group chats or comments. Discuss saving strategies, share updates, and celebrate each other's successes. Our platform goes beyond just saving money - it allows you to connect with others who share your financial goals, building a network of support and encouragement.",
        icon: RiMessage2Line,
    },
]