import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { mockCampaigns, mockChildren } from '../data/mock-vaccination.data';
import { Campaign, ChildProfile, VaccineRecord } from '../models/vaccination.model';

type FirestoreDateValue = Date | string | { toDate: () => Date };

type FirestoreVaccine = {
  name: string;
  description: string;
  dueDate: FirestoreDateValue;
  appliedDate?: FirestoreDateValue | null;
};

type FirestoreChild = {
  id: number;
  name: string;
  ageLabel: string;
  guardian: string;
  vaccines?: FirestoreVaccine[];
};

@Injectable({ providedIn: 'root' })
export class VaccinationDataService {
  private readonly firestoreEnabled =
    environment.useFirestore && Boolean(environment.firebaseConfig.projectId);

  getFallbackChildren(): ChildProfile[] {
    return mockChildren;
  }

  getFallbackCampaigns(): Campaign[] {
    return mockCampaigns;
  }

  async loadChildren(): Promise<ChildProfile[]> {
    if (!this.firestoreEnabled) {
      return mockChildren;
    }

    try {
      const { collection, getDocs } = await import('firebase/firestore');
      const database = await this.getDatabase();
      const snapshot = await getDocs(collection(database, 'children'));
      const children = snapshot.docs.map((doc) =>
        this.mapChild(doc.data() as FirestoreChild),
      );

      return children.length > 0 ? children : mockChildren;
    } catch (error) {
      console.error('ERRO FIRESTORE:', error);
      return mockChildren;
    }
  }

  async loadCampaigns(): Promise<Campaign[]> {
    if (!this.firestoreEnabled) {
      return mockCampaigns;
    }

    try {
      const { collection, getDocs } = await import('firebase/firestore');
      const database = await this.getDatabase();
      const snapshot = await getDocs(collection(database, 'campaigns'));
      const campaigns = snapshot.docs.map((doc) => doc.data() as Campaign);

      return campaigns.length > 0 ? campaigns : mockCampaigns;
    } catch (error) {
      console.error('ERRO CAMPAIGNS:', error);
      return mockCampaigns;
    }
  }

  private async getDatabase() {
    const { getApp, getApps, initializeApp } = await import('firebase/app');
    const { getFirestore } = await import('firebase/firestore');
    const app = getApps().length > 0 ? getApp() : initializeApp(environment.firebaseConfig);

    return getFirestore(app);
  }

  private mapChild(child: FirestoreChild): ChildProfile {
    const vaccines = (child.vaccines ?? []).map(
      (vaccine) =>
        new VaccineRecord(
          vaccine.name,
          vaccine.description,
          this.toDate(vaccine.dueDate),
          vaccine.appliedDate ? this.toDate(vaccine.appliedDate) : undefined,
        ),
    );

    return new ChildProfile(child.id, child.name, child.ageLabel, child.guardian, vaccines);
  }

  private toDate(value: FirestoreDateValue): Date {
    if (value instanceof Date) {
      return value;
    }

    if (typeof value === 'object' && 'toDate' in value) {
      return value.toDate();
    }

    return new Date(value);
  }
}