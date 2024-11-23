import { Component } from '@angular/core';
import { ContainerComponent } from '@/app/shared/components/ui/container/container.component';

@Component({
    standalone: true,
    selector: 'app-grant-application',
    imports: [ContainerComponent],
    templateUrl: './grant-application.component.html',
    styleUrl: './grant-application.component.scss',
})
export class GrantApplicationComponent {}
