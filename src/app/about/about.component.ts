import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // Sample dynamic data
  teamMembers = [
    { name: 'John Doe', role: 'Lead Developer', imageUrl: 'https://themeadapt.com/tf/alvido/assets/img/team/team-2-3.jpg', bio: 'Passionate game developer with 10 years in the industry.' },
    { name: 'Jane Smith', role: 'Art Director', imageUrl: 'https://themeadapt.com/tf/alvido/assets/img/team/team-2-4.jpg', bio: 'Creating visual worlds for players to get lost in.' },
    { name: 'Alex Lee', role: 'Game Designer', imageUrl: 'https://themeadapt.com/tf/alvido/assets/img/team/team-2-1.jpg', bio: 'Designing immersive game mechanics and systems.' }
  ];

  coreValues = [
    { title: 'Innovation', description: 'Pushing the boundaries of gaming experiences.' },
    { title: 'Community', description: 'Our players are at the heart of everything we do.' },
    { title: 'Fun', description: 'Games should be fun and bring people together.' }
  ];

  milestones = [
    { year: '2020', title: 'Game Launch: “Epic Battle”', description: 'Our flagship game received over 5 million downloads on launch day.' },
    { year: '2021', title: 'Award: “Best Game Design”', description: 'Won the GameDev Awards for Best Game Design.' },
    { year: '2023', title: 'Community Event: “Epic Tournament”', description: 'Hosted a global eSports tournament with 100k participants.' }
  ];

  testimonials = [
    { customer: 'Alice Johnson', feedback: 'Epic Battle is the most immersive game I have ever played! Totally love it!' },
    { customer: 'Bob Lee', feedback: 'Fantastic game design and amazing community. Can’t wait for the next release!' },
    { customer: 'Alice Johnson', feedback: 'Epic Battle is the most immersive game I have ever played! Totally love it!' },
    { customer: 'Bob Lee', feedback: 'Fantastic game design and amazing community. Can’t wait for the next release!' }
  ];

  gameImages = [
    { src: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/h1-service-img-03.jpg', alt: 'Epic Battle Gameplay 1' },
    { src: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Home-1-Services-03.jpg', alt: 'Epic Battle Gameplay 2' },
    { src: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Home-1-Services-02.jpg', alt: 'Epic Battle Gameplay 3' }
  ];
}
