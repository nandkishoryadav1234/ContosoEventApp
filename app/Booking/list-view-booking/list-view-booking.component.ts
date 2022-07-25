import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-list-view-booking',
  templateUrl: './list-view-booking.component.html',
  styleUrls: ['./list-view-booking.component.css'],
})
/**
 * @Description returns list of bookings done by the customer.
 */

export class ListViewBookingComponent implements OnInit {
  bookings: any[];

  constructor(private bService: BookingService) {}

  ngOnInit(): void {
    this.bService.getAllBookings().subscribe((data: any[]) => {
      this.bookings = data;
    });
  }
}
