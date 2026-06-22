import { Campaign, ChildProfile, VaccineRecord } from '../models/vaccination.model';

export const mockChildren: ChildProfile[] = [
  new ChildProfile(1, 'Lívia Silva', '2 anos', 'Responsável: Ana Silva', [
    new VaccineRecord('BCG', 'Proteção contra formas graves de tuberculose.', new Date(2024, 2, 12), new Date(2024, 2, 13)),
    new VaccineRecord('Hepatite B', 'Dose inicial recomendada nos primeiros dias de vida.', new Date(2024, 2, 12), new Date(2024, 2, 12)),
    new VaccineRecord('Pentavalente', 'Protege contra difteria, tétano, coqueluche, hepatite B e Hib.', new Date(2026, 4, 10)),
    new VaccineRecord('Tríplice viral', 'Proteção contra sarampo, caxumba e rubéola.', new Date(2026, 8, 5)),
  ]),
  new ChildProfile(2, 'Pedro Silva', '6 meses', 'Responsável: Ana Silva', [
    new VaccineRecord('BCG', 'Proteção contra formas graves de tuberculose.', new Date(2025, 11, 20), new Date(2025, 11, 21)),
    new VaccineRecord('Rotavírus', 'Prevenção contra infecções por rotavírus.', new Date(2026, 1, 20), new Date(2026, 1, 25)),
    new VaccineRecord('Meningocócica C', 'Proteção contra meningite meningocócica C.', new Date(2026, 6, 20)),
    new VaccineRecord('Pneumocócica 10', 'Prevenção contra pneumonia e outras infecções.', new Date(2026, 7, 15)),
  ]),
];

export const mockCampaigns: Campaign[] = [
  {
    title: 'Campanha contra Influenza',
    audience: 'Crianças de 6 meses a menores de 6 anos.',
    period: 'Ativa até 30/06/2026',
  },
  {
    title: 'Atualização da Poliomielite',
    audience: 'Crianças menores de 5 anos com doses pendentes.',
    period: 'Postos municipais participantes',
  },
];
