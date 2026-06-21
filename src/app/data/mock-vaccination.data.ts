import { Campaign, ChildProfile, VaccineRecord } from '../models/vaccination.model';

export const mockChildren: ChildProfile[] = [
  new ChildProfile(1, 'Livia Silva', '2 anos', 'Responsavel: Ana Silva', [
    new VaccineRecord('BCG', 'Protecao contra formas graves de tuberculose.', new Date(2024, 2, 12), new Date(2024, 2, 13)),
    new VaccineRecord('Hepatite B', 'Dose inicial recomendada nos primeiros dias de vida.', new Date(2024, 2, 12), new Date(2024, 2, 12)),
    new VaccineRecord('Pentavalente', 'Protege contra difteria, tetano, coqueluche, hepatite B e Hib.', new Date(2026, 4, 10)),
    new VaccineRecord('Triplice viral', 'Protecao contra sarampo, caxumba e rubeola.', new Date(2026, 8, 5)),
  ]),
  new ChildProfile(2, 'Pedro Silva', '6 meses', 'Responsavel: Ana Silva', [
    new VaccineRecord('BCG', 'Protecao contra formas graves de tuberculose.', new Date(2025, 11, 20), new Date(2025, 11, 21)),
    new VaccineRecord('Rotavirus', 'Prevencao contra infeccoes por rotavirus.', new Date(2026, 1, 20), new Date(2026, 1, 25)),
    new VaccineRecord('Meningococica C', 'Protecao contra meningite meningococica C.', new Date(2026, 6, 20)),
    new VaccineRecord('Pneumococica 10', 'Prevencao contra pneumonia e outras infeccoes.', new Date(2026, 7, 15)),
  ]),
];

export const mockCampaigns: Campaign[] = [
  {
    title: 'Campanha contra Influenza',
    audience: 'Criancas de 6 meses a menores de 6 anos.',
    period: 'Ativa ate 30/06/2026',
  },
  {
    title: 'Atualizacao da Poliomielite',
    audience: 'Criancas menores de 5 anos com doses pendentes.',
    period: 'Postos municipais participantes',
  },
];
