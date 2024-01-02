import React from 'react';
import { FaWhatsapp, FaYoutube, FaLink, FaBook, FaUserGraduate } from 'react-icons/fa';

const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#25d366',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    icon: {
      marginRight: '5px',
    },
    link: {
        color: '#fff', // Set the text color to white
        textDecoration: 'none', // Remove underlines from links
        display: 'block', // Ensure each link is on a new line
        marginBottom: '5px', // Add some space between links
    },
  };

const ChatWithUsComponent = () => {
    return (
        <div>
            <a href='https://api.whatsapp.com/send?phone=7570020363' target="_blank" rel="noopener noreferrer" style={styles.link}>
                <FaWhatsapp style={styles.icon} /> Chat with us
            </a>
        </div>
    );
};

const ExploreCourseComponent = ({ courseName, description, youtubeLink, blogLink, bookUrl, alumniUrl }) => {
    return (
        <div style={{ borderRadius: '10px' }}>
            <h3>{courseName}</h3>
            <p>{description}</p>
            <div>
                {youtubeLink && (
                <a href={youtubeLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
                    <FaYoutube style={styles.icon} /> Watch on YouTube
                </a>
                )}
                {blogLink && (
                <a href={blogLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
                    <FaLink style={styles.icon} /> Read our Blog
                </a>
                )}
                {bookUrl && (
                    <a href={bookUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>
                        <FaBook style={styles.icon} /> Book a session
                    </a>
                )}
                {alumniUrl && (
                    <a href={alumniUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>
                        <FaUserGraduate style={styles.icon} /> Alumni Portal
                    </a>
                )}
            </div>
        </div>
    );
};

const steps = [
    {
      id: '1',
      message: 'Hi there! Welcome to SciAstra. How can I assist you today?',
      trigger: '2',
    },
    {
      id: '2',
      message: 'What specific information are you looking for?',
      trigger: 'main',
    },
    {
        id: 'main',
        options: [
          { value: 'about', label: 'More about of SciAstra', trigger: 'about' },
          { value: 'exploreCourse', label: 'Explore Course', trigger: 'course' },
          { value: 'contactNumber', label: 'Looking for a Contact Number', trigger: 'contact' },
          { value: 'alumni', label: 'Are You an Alumnus?', trigger: 'alumni' },
        ],
    },
    {
        id: 'about',
        message: "We, at SciAstra, believe that education should not just be about cracking competitive exams. It should not be a race; rather, it should be like music. We are helping students to think differently instead of just memorizing the concepts to qualify for competitive exams. We are guiding students to think like a scientist! Entrance Exams are not everything; how you think matters!",
        trigger: 'about_options',
    },
    {
        id: 'about_options',
        options: [
          { value: 'achievements', label: 'SciAstra Acheivements', trigger: 'acheive' },
          { value: 'contactNumber', label: 'Looking for a Contact Number', trigger: 'contact' },
          { value: 'main', label: 'Go back to main menu', trigger: 'main' },
        ],
    },
    {
        id: 'acheive',
        component: (
          <div style={{ borderRadius: '10px' }}>
            <p>SciAstra has achieved:</p>
            <ul>
              <li>All India Rank: 1, 7, 10, 12, 13, 15, 16, 17, 18, 20, 23.....in IISc, IISER, NISER, IACS, etc.</li>
              <li>1000+ Selections</li>
              <li>500+ Selections in IISERs</li>
              <li>100+ Selections in NISER and CEBS</li>
              <li>10,000+ students mentored from our courses</li>
              <li>100,000+ active community of dedicated students receiving career guidance & support</li>
            </ul>
            <p>You can be one among the achievers. Explore our courses now.</p>
          </div>
        ),
        asMessage: true,
        trigger: 'about_options',
    },
    {
        id: 'contact',
        component: <ChatWithUsComponent />,
        asMessage: true,
        trigger: 'main',
    },    
    {
      id: 'course',
      message: 'Great! Let\'s explore some courses. Choose a course you\'re interested in:',
      trigger: 'explore_course',
    },
    {
      id: 'explore_course',
      options: [
        { value: 'iisc', label: 'IISc', trigger: 'iisc' },
        { value: 'iisers', label: 'IISERs', trigger: 'iisers' },
        { value: 'niser', label: 'NISER', trigger: 'niser' },
        { value: 'isi', label: 'ISI', trigger: 'isi' },
        { value: 'cmi', label: 'CMI', trigger: 'cmi' },
        { value: 'iacs', label: 'IACS', trigger: 'iacs' },
        { value: 'cebs', label: 'CEBS', trigger: 'cebs' },
        { value: 'book', label: 'Book a session', trigger: 'book' },
        { value: 'main', label: 'Go back to main menu', trigger: 'main' },
      ],
    },
    {
        id: 'book',
        component: (
            <ExploreCourseComponent
                courseName="Book a session"
                description="Personal Interaction with Akhil Tripathi over phone (15 min)"
                bookUrl="https://www.sciastra.com/bookSession/"
            />
        ),
        asMessage: true,
        trigger: 'explore_course',
    },
    {
        id: 'alumni',
        component: (
            <ExploreCourseComponent
                courseName="Alumni"
                description="Login to sciastra alumni portal"
                alumniUrl="https://alumni.sciastra.com/"
            />
        ),
        asMessage: true,
        trigger: 'main',
    },
    {
        id: 'iisc',
        component: (
          <ExploreCourseComponent
            courseName="Indian Institute of Science (IISc)"
            description="The interdisciplinary programs at IISc open doors to cutting-edge research and innovation. Learn more about the unique opportunities at IISc."
            youtubeLink="https://www.youtube.com/watch?v=-Wlh4rudxlU&t=1s"
            blogLink="https://www.sciastra.com/iisc-indian-institute-of-science"
          />
        ),
        asMessage: true,
        trigger: 'explore_course',
      },
      {
        id: 'iisers',
        component: (
          <ExploreCourseComponent
            courseName="Indian Institutes of Science Education and Research (IISERs)"
            description="These institutes foster a holistic learning environment. Discover more about IISERs and their specialties at IISERs."
            youtubeLink="https://www.youtube.com/watch?v=yhj0z1Njwgk"
            blogLink="https://www.sciastra.com/iiser-indian-institutes-of-science-education-and-research/"
          />
        ),
        asMessage: true,
        trigger: 'explore_course',
      },
      {
        id: 'niser',
        component: (
          <ExploreCourseComponent
            courseName="National Institute of Science Education and Research (NISER)"
            description="NISER's emphasis on research-driven education sets it apart. Uncover more details about NISER's programs and specialties here."
            youtubeLink="https://www.youtube.com/watch?v=Jrc26n0WLKk"
            blogLink="https://www.sciastra.com/niser-national-institute-of-science-education-and-research/"
          />
        ),
        asMessage: true,
        trigger: 'explore_course',
      },
      {
        id: 'isi',
        component: (
          <ExploreCourseComponent
            courseName="Indian Statistical Institute (ISI)"
            description="ISI's reputation for statistical research is unparalleled. Find out more about ISI's unique programs and specialties here."
            youtubeLink="https://www.youtube.com/watch?v=tvXwZBrN5HI"
            blogLink="https://www.sciastra.com/isi-indian-statistical-institute/"
          />
        ),
        asMessage: true,
        trigger: 'explore_course',
      },
      {
        id: 'cmi',
        component: (
          <ExploreCourseComponent
            courseName="Chennai Mathematical Institute (CMI)"
            description="CMI's focus on mathematics and computer science is unmatched. Explore more about CMI's specialties and programs here."
            youtubeLink="https://www.youtube.com/watch?v=W_Wl_yqXcdQ"
            blogLink="https://www.sciastra.com/cmi-chennai-mathematical-institute/"
          />
        ),
        asMessage: true,
        trigger: 'explore_course',
      },
      {
        id: 'iacs',
        component: (
          <ExploreCourseComponent
            courseName="Indian Association for the Cultivation of Science (IACS)"
            description="IACS's commitment to fundamental research makes it stand out. Learn more about IACS's specialties and academic offerings here."
            youtubeLink="https://www.youtube.com/watch?v=F0UUH9Epfis"
            blogLink="https://www.sciastra.com/iacs-indian-association-for-the-cultivation-of-science/"
          />
        ),
        asMessage: true,
        trigger: 'explore_course',
      },
      {
        id: 'cebs',
        component: (
          <ExploreCourseComponent
            courseName="Centre for Excellence in Basic Sciences (CEBS)"
            description="CEBS's dedication to excellence in basic sciences is commendable. Find out more about CEBS's programs and specialties here."
            youtubeLink="https://www.youtube.com/watch?v=N3LtO3L8y88"
            blogLink="https://www.sciastra.com/cebs-center-for-excellence-in-basic-sciences/"
          />
        ),
        asMessage: true,
        trigger: 'explore_course',
      },
  ];

export default steps;