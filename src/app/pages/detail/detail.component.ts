import { Component } from '@angular/core';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'] // CORREGIDO
})
export class DetailComponent { 

  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['../']);
  }
}

