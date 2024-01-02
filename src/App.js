import ChatBot from 'react-simple-chatbot';
import steps from './chatbotflow.js';
import { ThemeProvider } from 'styled-components';
import SciAstraIcon from './sciastra.svg';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Poppins',
  headerBgColor: 'linear-gradient(to right, #234eb0, #b656e2)', // colour taken from sciastra website
  headerFontColor: '#fff', 
  headerFontSize: '15px',
  botBubbleColor: 'linear-gradient(to right, #234eb0, #b656e2)',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// const steps = [
//   {
//     id: '1',
//     message: 'What number I am thinking?',
//     trigger: '2',
//   },
//   {
//     id: '2',
//     options: [
//       { value: 1, label: 'Number 1', trigger: '4' },
//       { value: 2, label: 'Number 2', trigger: '3' },
//       { value: 3, label: 'Number 3', trigger: '3' },
//     ],
//   },
//   {
//     id: '3',
//     message: 'Wrong answer, try again.',
//     trigger: '2',
//   },
//   {
//     id: '4',
//     message: 'Awesome! You are a telepath!',
//   },
// ];

console.log('reached');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        botAvatar= {SciAstraIcon}
        // userAvatar= "svg2_uri" using this we can load the user image if we have them.
        floating={true}
      />
    </ThemeProvider>
  );
}

export default App;
