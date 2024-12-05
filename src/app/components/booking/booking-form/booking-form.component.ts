import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Booking } from '../../../models/booking.model';
import { BookingService } from '../../services/booking.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})



export class BookingFormComponent implements OnChanges, OnInit{

  
formBooking: FormGroup;

  constructor(bookingService: BookingService,formBuilder: FormBuilder){
    this.formBooking = formBuilder.group({

      'client': ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
      'phone': ['', [Validators.required, Validators.minLength(1)]],
      'email': ['', [Validators.required, Validators.minLength(1)]],
      'ncomersal': ['', [Validators.required,Validators.maxLength(50),Validators.minLength(1)]],
      'note': ['', [Validators.required,Validators.maxLength(250)]],
      'date': ['', [Validators.required]],
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

}
