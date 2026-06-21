import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import {
  IonApp,
  IonBadge,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonProgressBar,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  alertCircleOutline,
  calendarOutline,
  checkmarkCircleOutline,
  megaphoneOutline,
  peopleOutline,
  timeOutline,
} from 'ionicons/icons';

import { Campaign, ChildProfile, VaccineFilter, VaccineStatus } from './models/vaccination.model';
import { VaccinationDataService } from './services/vaccination-data.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    IonApp,
    IonBadge,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonProgressBar,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly vaccinationDataService = inject(VaccinationDataService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  selectedChildId = 1;
  filter: VaccineFilter = 'all';
  children: ChildProfile[] = [];
  campaigns: Campaign[] = [];

  constructor() {
    addIcons({
      alertCircleOutline,
      calendarOutline,
      checkmarkCircleOutline,
      megaphoneOutline,
      peopleOutline,
      timeOutline,
    });
  }

  async ngOnInit(): Promise<void> {
    this.children = await this.vaccinationDataService.loadChildren();
    this.campaigns = await this.vaccinationDataService.loadCampaigns();
    this.selectedChildId = this.children[0]?.id ?? 0;
    this.changeDetectorRef.detectChanges();
  }

  selectedChild(): ChildProfile {
    return this.children.find((child) => child.id === this.selectedChildId) ?? this.children[0];
  }

  selectChild(childId: number): void {
    this.selectedChildId = childId;
    this.filter = 'all';
  }

  changeFilter(value: string | number | undefined): void {
    this.filter = value === 'pending' ? 'pending' : 'all';
  }

  visibleVaccines() {
    if (this.filter === 'pending') {
      return this.selectedChild().vaccines.filter((vaccine) => vaccine.status !== 'done');
    }

    return this.selectedChild().vaccines;
  }

  statusLabel(status: VaccineStatus): string {
    const labels: Record<VaccineStatus, string> = {
      done: 'Aplicada',
      overdue: 'Atrasada',
      upcoming: 'Prevista',
    };

    return labels[status];
  }

  statusColor(status: VaccineStatus): string {
    const colors: Record<VaccineStatus, string> = {
      done: 'success',
      overdue: 'danger',
      upcoming: 'warning',
    };

    return colors[status];
  }

  statusIcon(status: VaccineStatus): string {
    const icons: Record<VaccineStatus, string> = {
      done: 'checkmark-circle-outline',
      overdue: 'alert-circle-outline',
      upcoming: 'time-outline',
    };

    return icons[status];
  }
}