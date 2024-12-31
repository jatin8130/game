import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides = [1, 2, 3, 4, 5]; // Placeholder for images
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  games: any[] = []; // To store fetched games
  loading = true; // Loading indicator
  errorMessage = ''; // To handle errors


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Auto-slide every 3 seconds

    this.apiService.fetchGames().subscribe({
      next: (data) => {
        this.games = data;
        this.loading = false;        
      },
      error: (err) => {
        this.errorMessage = 'Failed to load games. Please try again later.';
        this.loading = false;
        console.error('Error fetching games:', err);
      },
    });    
  }

}
