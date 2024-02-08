import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

export interface IMedicDate {
  id: number;
  doctor: string;
  patient: string;
  hour: Time;
  date: Date;
}
