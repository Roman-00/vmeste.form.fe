import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/ui/container/container.component';

@Component({
	standalone: true,
	selector: 'app-form-views',
    imports: [
        ContainerComponent,
    ],
	templateUrl: './form-views.component.html',
	styleUrl: './form-views.component.scss',
})
export class FormViewsComponent {}
