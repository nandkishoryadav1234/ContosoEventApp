import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movie/movie';
import { MveeService } from 'src/app/movie/mvee.service';
import { Scren } from 'src/app/screen/screen';
import { Show } from 'src/app/show/show';
import { Theatre } from '../theatre';
import { ThetreService } from '../thetre.service';

@Component({
  selector: 'app-theatres-booking',
  templateUrl: './theatres-booking.component.html',
  styleUrls: ['./theatres-booking.component.css'],
})
export class TheatresBookingComponent implements OnInit {
  movieId: number;
  mvee: Movie;
  theatres: any[];
  screen: Scren[];
  show: Show[];
  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private tService: ThetreService,
    private mService: MveeService
  ) {}

  ngOnInit(): void {
    //this.movieId = 3;
    this.movieId = this.actRouter.snapshot.params['movieId'];
    console.log("from Api"+this.movieId);
    this.mService.getMovieById(this.movieId).subscribe((data: Movie) => {
      this.mvee = data;
      //console.log("from Api"+data);
    });
    this.tService
      .findTheatresbyMovie(this.movieId)
      .subscribe((data: Theatre[]) => {
        this.theatres = data;
        console.log("from th Api"+this.theatres);
        for (let scr of this.theatres) {
          console.log(scr);
        }
      });
  }
}
