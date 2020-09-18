import "./Portfolio.scss";
import Project from "../Project/Project";

export default () => {
  return (
    <div className="container portfolio">
      <h1>Portfolio</h1>
      <p>(Pics Coming Soon...)</p>
      <div className="projects">
        <Project
          name="Tirutsava - check -  (College Fest) Website"
          link="https://github.com/krish7777/Tirutsava2020-Final"
          description="The 2019 edition of the annual College fest of IIT Tirupati's website. The project was made using the MERN stack. I was a core memmber of the Web-Development Committee. I played a
major role in the frontend team and worked together with the backend team to bring out the website in a
timely manner."
          technologies={["MongoDB", "ExpressJs", "ReactJs", "NodeJs"]} />
        <Project
          name="MIPS Simulator"
          link="https://github.com/krish7777/mips-simulator-phase3"
          technologies={["C++"]}
          description="A C++ command line tool which runs and simulates MIPS assembly codes.It support upto 15 MIPS commands and even has LRU based two-level cache implementation. The cache size, associativity, block size, cache access time can be customized to check the performance for various specifications"
        />
        <Project
          name="Online Clothing Store"
          link="https://github.com/krish7777/kart-ecommerce-react"
          technologies={["ReactJs", "Firebase", "Instamojo"]}
          description="A simple online clothing store with options like adding new products, buying products, cart system and even a payment system using Instamojo API. It also has authentification(Firebase Auth) and cloud storage(Cloud FIrestore)"
        />
        <Project
          name="Food Donation App"
          link="https://github.com/krish7777/SWE_Project"
          technologies={["Java", "NodeJs", "MongoDB", "JWT"]}
          description="This android application aims to establish a connection as well to spread awareness among people about the NGO's in the nearby places around them.The donors can put up their donation details on the app. Meanwhile the organisations can go through the nearby donations and choose to accept it and then they can contact among themselves and finalize the deal. The app also includes a leaderboard of the top donors , thus encouraging more users to donate more until we can satisfy our goal of zero hunger"
        />
        <Project
          name="Used Car Price Predictor"
          link="https://github.com/krish7777/used-car-price-predictor"
          technologies={["Flask", "Jupyter Notebook"]}
          description="It is a flask API , which predicts the price of a car based on the different parameter values. Under the hood it uses a Random Forest Machine Learning Algorithm to predict the result"
        />
        <Project
          name="Voice Prescription App"
          link="https://github.com/krish7777/Voice-Prescription-App-React-Native"
          technologies={["React Native", "NodeJS", "DialogFlow"]}
          description="This app records the summary of the conversation between a doctor and patient . It extracts the keywords like patient name, age, diagnosis, prescribed medicines, dosage, advice etc using NLP which is implemented by a DialogFlow API. The app also provides the doctor with an editing option so he can make any changes to the words he said. Finally a documented PDF will be send to the patient regarding the summary through mail and SMS."
        />
        <Project
          name="Covid Tracker"
          link="https://github.com/krish7777/covid-19-tracker"
          technologies={["ReactJs", "Firebase"]}
          description="An interactive map of INdia , which shows the data of the number of Cases, Fatalities and Recovered counts per state on hovering throught he map"
        />
        <Project
          name="Online Electronics Learning Platform"
          link="https://github.com/krish7777/learning-kit"
          technologies={["MongoDB", "ExpressJs", "ReactJs", "NodeJs"]}
          description="◦ Made the entire website for the project using MERN Stack , AWS S3 etc.
The website facilitates students to learn concepts in an easy and intuitive way using slideshows, simulation,excercises etc.
It has a robust admin panel where new courses can be added with ease and the teachers can evaluate the
student’s performance like a virtual classroom."
        />
      </div>



    </div>
  );
};
