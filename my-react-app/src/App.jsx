import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';




function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />  
      <MainContent />
      <Footer />
        <UserProfile 
          name= "james bond " 
          age= "32" 
        location= "london"/>
<UserProfile 
          name= "hiram zein  " 
          age= "10" 
        location= "new york "/>
    </div>
  );
}

export default App;
