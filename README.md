![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Calendly](https://img.shields.io/badge/Calendly-4D4D4D?style=for-the-badge&logo=calendly&logoColor=white)  
# **🚲 Booking‑Pedicab‑Tour Website**

Hi there! I’m a 4th-year Computer Education and Instructional Technology (CEIT) student at Marmara University. This Booking‑Pedicab‑Tour Website is an interactive, fully responsive React web app I built to showcase real-world frontend skills.  
 It simulates a pedicab tour company in New York City, where users can browse tour packages and book tours via a Calendly popup reservation system.  
I built this project to practice working with React components, state management, dynamic UI, and integrating external services while also thinking about real UX.

### **Why This Project?**  
I wanted to move beyond tutorials and create something that feels like a real product:

**Strengthening my react skills:** component architecture, props & state, lifecycle methods
**Practicing integrating third-party services:** like the Calendly booking widget  
**Thinking about real user experience:** interactions, feedback, and dynamic content

### **Tech Stack**  
Backend: PHP (Used PDO for secure and cleaner queries).

Database: MySQL (Relational structure).

Frontend: HTML5 & Custom CSS (Simple, readable, and functional UI). 

### **Features I Implemented**  

- Component-based React architecture for modularity and reusability  
- Responsive design: Desktop / Tablet / Mobile ready  
- Tour package selection leading to a popup booking system  
- Interactive gallery with slider/grid layout, clickable thumbnails, enlarged view  
- Dynamic user reviews with “Read more / Read less” functionality  
- Booking integration via Calendly popup to simulate real reservations  


---  
### **Technical Highlights**  

**Dynamic Calendly integration:** Used useEffect to load the Calendly popup script only once and cleaned it up on component unmount to prevent multiple script injections and memory leaks.

**State management for interactive components:** Managed React useState for the gallery slider, user reviews toggle (“Read more / Read less”), and selected tour packages.

**Prop drilling and component communication:** Passed selected package data from parent to child components, ensuring the booking widget always receives the correct tour information.

**Dynamic UI rendering:** Built reusable card and slider components that update in real-time based on state changes (e.g., gallery thumbnails, review expansion).

**Responsive design without frameworks:** Implemented CSS flex/grid layouts with media queries to adapt the gallery, booking widget, and reviews section across desktop, tablet, and mobile.

**User experience optimization:** Ensured smooth interactions and state transitions, such as toggling reviews independently and preventing the Calendly popup from re-initializing unnecessarily.

---

### **What I Learned**  
- How to structure a React project with modular, reusable components  
- How to integrate external services in a React environment  
- Managing dynamic UI state across multiple components  
- Implementing responsive design for multiple devices  
- Debugging and handling edge cases like unmounted components or script cleanup

I also realized that even for a frontend project, thinking about UX and real user flow is as important as the code itself.

## Application Screenshots

### **School Page – Reviews + Review Form Visible**
![Booking Popup Screenshot](src/assets/readme-images/Booking_popup.png)  
Review form becomes visible when the user is a student or graduate of that university.  
Demonstrates correct enforcement of business rules.


### **School Page – Reviews Visible, Form Hidden**
![Gallery Slider Screenshot](assets/readme-images/Booking_popup.png)  
Reviews are visible to all users.  
Review form is hidden if the logged-in user does not belong to that school.


### **Registration Page**
![Registration Page Screenshot](images/registration-page.png)  
Users select their university during registration.  
Graduation status is collected and stored in the database.  
This information is later used to control review permissions.

### **Challenges & Key Takeaways**
This journey wasn't without its hurdles:  
Session Management: I spent a lot of time practicing how to carry user data across pages and terminate it securely upon logout.  
Table Relations: Initially, setting up the reviews table was tricky, but working on the ERD helped everything click into place.

## 👩‍💻 About Me
I’m a future educator and deve
