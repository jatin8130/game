import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  services = [
    {
      title: 'Game Development',
      description: 'We craft immersive and engaging games that captivate players worldwide.',
      icon: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/h1-service-img-02.jpg',
      image: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/h1-service-img-02.jpg'
    },
    {
      title: 'Multiplayer Solutions',
      description: 'Building scalable and robust multiplayer systems for seamless gameplay.',
      icon: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/h1-service-img-03.jpg',
      image: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/h1-service-img-03.jpg'
    },
    {
      title: 'Virtual Reality (VR)',
      description: 'Experience next-level gaming with our cutting-edge VR technology.',
      icon: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/h1-service-img-01.jpg',
      image: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/h1-service-img-01.jpg'
    },
    {
      title: 'Art & Animation',
      description: 'Stunning visuals and animations that bring games to life.',
      icon: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Home-1-Services-03.jpg',
      image: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Home-1-Services-03.jpg'
    },
    {
      title: 'Audio Design',
      description: 'Immersive soundscapes and effects to enhance gameplay experiences.',
      icon: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Home-1-Services-02.jpg',
      image: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Home-1-Services-02.jpg'
    },
    {
      title: 'QA & Testing',
      description: 'Thorough testing to ensure seamless performance across platforms.',
      icon: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-01.jpg',
      image: 'https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-01.jpg'
    }
  ];
}
