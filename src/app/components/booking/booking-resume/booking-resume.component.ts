import { Component, Input } from '@angular/core';
import { Booking, BookingStatus } from '../../../models/booking.model';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../services/booking.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-booking-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-resume.component.html',
  styleUrl: './booking-resume.component.css'
})
export class BookingResumeComponent {


@Input() bookingInput: Booking = new Booking( 10, "Elena Ruiz", "+34 600 445 566", "elena.ruiz@example.com", 6, "Mesa con buena iluminación para fotos.", new Date("2024-12-28T20:30:00"), new Date("2024-12-03T12:40:00"),BookingStatus.CONFIRM )



}
